import { Component, input } from "@angular/core"

@Component({
    selector: "action-button",
    template: `
        <button class="bg-blue-500 text-white shadow-lg shadow-blue-200 rounded-full min-w-40 p-4 px-8 my-4 
            transition duration-150 hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-200 hover:ease-out">
            {{text()}}
        </button>
    `
})
export class Hint {
    text = input.required<string>()
}
