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

        this.status.set((content)? "Cached" : "Empty")
        this.content.set(content)
    }

    private async requestNewPoem() {
        const asLines = (x: any) => x.join("\n")

        const data = await post("poem", trace(this.forms.postData()))
            .then(response => response.json())
            .catch(() => null)

        const content = trace(asLines(data.content))
        const id = trace(data.id, "POEM ID:")

        Session.save("poem", content)
        this.status.set((content)? "Fetched" : "Error")    
        this.content.set(content)
        this.id.set(id)
    }
}