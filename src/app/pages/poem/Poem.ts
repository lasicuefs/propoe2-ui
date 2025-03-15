import { Component, input } from "@angular/core";

@Component({
    selector: "poem",
    standalone: true,
    template: `
    <article class="flex flex-col justify-start items-center py-16"> 
        @for (stanza of poem().split("\n\n"); track $index) {
            <p class="prose-xl text-center break-words"> 
                @for (verse of stanza.split("\n"); track $index) {
                    <span class="block leading-relaxed">
                        {{ verse }}
                    </span>
                } 
            </p>
            <br/>
        }
    </article>
    `,
})
export class Poem {
    poem = input.required<string>()
}