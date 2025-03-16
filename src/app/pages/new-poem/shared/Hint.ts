import { Component, input } from "@angular/core"

@Component({
    selector: "hint",
    template: `
        <span class="text-lg mt-2 text-center">{{message()}}</span>
    `
})
export class Hint {
    message = input.required<string>()
}
