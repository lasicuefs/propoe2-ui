import { Component, input } from "@angular/core";


@Component({
    selector: "title",
    standalone: true,
    template: `<h1 class="text-7xl font-bold">{{content()}}</h1>`
})
export class Title {
    content = input.required<string>()
}