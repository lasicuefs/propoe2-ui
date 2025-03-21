import { Component, input } from "@angular/core"
import { RouterLink } from "@angular/router"

@Component({
    selector: "return-back",
    imports: [RouterLink],
    template: `
        <a [routerLink]="route()" title="{{pageTitle()}}" class="fixed top-1/2 left-0 transform -translate-y-1/2 ml-8">
            <button class="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg">
                <svg class="bi bi-chevron-double-left" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                    <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
            </button>
        </a>
    `
})
export class ReturnButton {
    // Attributes
    // ----------
    // route sets the href based on our application's route
    // pageTitle sets our title, that enables tooltip when hovering it

    route = input<string>("")
    pageTitle = input<string>("")
}
