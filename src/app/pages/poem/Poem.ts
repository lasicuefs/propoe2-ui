import { Component, inject, OnInit, output, signal } from "@angular/core";
import { post, trace } from "./common";
import { Forms } from "../../services/forms.service";

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
                <br/>
            }
            </article>
        }
    }
    `,
    styles: `
        .content {
            @apply flex flex-col justify-start items-center
                py-16 prose-xl text-center;
        }
    `
})
export class Poem implements OnInit {
    private forms = inject(Forms)
    
    status = signal<PoemStatus>("Cached")
    content = signal<string | null>(null)

    async ngOnInit() {
        this.loadInitialState()
        if (this.status() == "Empty") {
            this.requestNewPoem()
        }
    }

    private loadInitialState() {
        const content: string | null = sessionStorage.getItem("poem")

        this.status.set((content)? "Cached" : "Empty")
        this.content.set(content)
    }

    private async requestNewPoem() {
        const asLines = (x: any) => x.join("\n")

        const content: string = await post("poem", trace(this.forms.postData()))
            .then(response => response.json())
            .then(data => trace(asLines(data.content)))
            .catch(() => null)

        sessionStorage.setItem("poem", content)
        this.status.set((content)? "Fetched" : "Error")    
        this.content.set(content)
    }
}