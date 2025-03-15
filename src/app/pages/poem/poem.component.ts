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
    templateUrl: "./poem.component.html",
    styles: `
    @media screen {
        .background {
            @apply w-screen h-screen 
                flex flex-col items-center justify-start 
                overflow-y-scroll
        }
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
