import { Component, inject, OnInit, signal } from "@angular/core";
import { post, trace } from "./common";
import { Forms } from "../../services/forms.service";
import { Session } from "../../services/Session";

type PoemStatus = "Empty"
    | "Cached"
    | "Fetched"
    | "Error"

@Component({
    selector: "poem",
    standalone: true,
    template: `
    @switch (status.toString()) {
        @case ("Empty") {
            <p>Gerando poema...</p>
        } 
        @case ("Error") {
            <p>Desculpe, algum erro ocorreu.<br>Tente novamente!</p>
        }
        @default {
            <!-- Cached || Fetched -->
            <article class="content"> 
            @for (stanza of content()?.split("\n\n"); track $index) {
                <p class="break-words"> 
                    @for (verse of stanza.split("\n"); track $index) {
                        <span class="block leading-relaxed">
                            {{ verse }}
                        </span>
                    } 
                </p>
            }
            </article>
        }
    }
    `,
    styles: `
        .content {
            @apply flex flex-col justify-center justify-items-center gap-0 
                prose-xl text-center;
        }
    `
})
export class Poem implements OnInit {
    private forms = inject(Forms)
    
    id = signal<string>("")
    status = signal<PoemStatus>("Cached")
    content = signal<string | null>(null)

    async ngOnInit() {
        this.loadInitialState()
        if (this.status() == "Empty") {
            this.requestNewPoem()
        }
    }

    private loadInitialState() {
        const content: string | null = Session.fetch("poem")

        this.updateStatus(content, "Cached", "Empty")
        this.updatePoem(content, Session.fetch("poem-id"))
    }

    private async requestNewPoem() {
        const asLines = (x: any) => x.join("\n")

        const data = await post("poem", trace(this.forms.postData()))
            .then(response => response.json())
            .catch(() => null)

        const content = trace(asLines(data.content))
        const id = trace(data.id, "POEM ID:")

        this.updateStatus(content, "Fetched", "Error")
        this.storePoem(content, id)
        this.updatePoem(content, id)
    }

    private updatePoem(content: string | null, id: string | null) {
        this.content.set(content)
        this.id.set(id ?? "")
    }

    private storePoem(content: string | null, id: string | null) {
        Session.save("poem", content ?? "")
        Session.save("poem-id", id ?? "")
    }

    private updateStatus(content: string | null, sucess: PoemStatus, fail: PoemStatus) {
        this.status.set((content)? sucess : fail)
    }
}