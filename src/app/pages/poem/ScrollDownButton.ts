import { Component, input } from "@angular/core"

@Component({
    selector: "scroll-down-button",
    standalone: true,
    imports: [],
    template: `
        <div id="scroll-button-area" (click)="scrollDown()" class="print:!hidden fixed bottom-0 left-0 right-0 flex flex-col items-center pb-4 z-30">
        <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent -z-10"></div>
        <button class="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
        </button>
    </div>
    `,
})
export class ScrollDownButton {
    container = input.required<HTMLElement>()

    scrollDown() {
        const scrollDistance = this.container().clientHeight * 0.8

        this.container().scrollBy({
            top: scrollDistance,
            behavior: "smooth",
        })
    }

}