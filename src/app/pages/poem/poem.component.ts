import { CommonModule } from "@angular/common"
import {
    Component,
    computed,
    inject,
    OnInit,
    signal,
    viewChild,
} from "@angular/core"
import { Router } from "@angular/router"
import { Forms } from "../../services/forms.service"
import { Feedback } from "./Feedback"
import { post, trace, wait } from "./common"
import { SaveButton } from "./SaveButton"
import { Poem } from "./Poem"

@Component({
    selector: "app-poem",
    standalone: true,
    imports: [CommonModule, Feedback, SaveButton, Poem],
    template: `
        <div id="background" class="flex items-start relative w-screen
            bg-slate-100 bg-opacity-40
            screen:[overflow-y-scroll] 
            print:!bg-white"
        >
            <aside class="print:!hidden w-1/6">
            </aside>
            <main class="font-serif w-2/3">
                <poem></poem>
            </main>
            <aside class="print:!hidden w-1/6">
                @if (poemLoaded()) {
                    <save-button></save-button>
                }
            </aside>
        </div>

        <a class="print:!hidden" (click)="onGoHome($event)">
            <button class="print:hidden action-btn fixed z-40 left-4 bottom-4">
                Novo Poema
            </button>
        </a>

        @if (feedbackRequested()) {
            <feedback [(isOpen)]="feedbackRequested"></feedback>
        }
    `,
})
export class PoemPage {
    private forms = inject(Forms)
    private router = inject(Router)

    poem = viewChild(Poem)
    poemLoaded = computed(() => this.poem()?.content() != "")
    feedbackRequested = signal<boolean>(false)

    onGoHome(event: Event) {
        event.preventDefault()
        let feedbackSent = computed(() => !this.feedbackRequested())
        
        this.feedbackRequested.set(true)
        wait(feedbackSent).then(() => this.goHome())
    }
    
    goHome() {
        this.forms.clear()
        this.router.navigate(["/"])
    }
}
