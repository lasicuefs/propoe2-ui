import { Component, input } from "@angular/core";


@Component({
    selector: "page-subtitle",
    standalone: true,
    template: `<h1 class="text-2xl">{{content()}}</h1>`
})
export class Subitle {
    content = input.required<string>()
}