import { CommonModule, DOCUMENT } from "@angular/common"
import {
    Component,
    ElementRef,
    inject,
    OnInit,
    signal,
    ViewChild,
} from "@angular/core"
import { Router } from "@angular/router"
import { Forms } from "../../services/forms.service"
import { Poetry } from "../../services/poetry"
import { Feedback, FeedbackService } from "./Feedback"
import { post, trace } from "./common"

@Component({
    selector: "app-poem",
    standalone: true,
    imports: [CommonModule, Feedback],
    templateUrl: "./poem.component.html",
    styleUrl: "./poem.component.css",
})
export class PoemPage implements OnInit {
    private forms = inject(Forms)
    private poetry = inject(Poetry)
    private router = inject(Router)
    private window = inject(DOCUMENT).defaultView?.window
    feedback = inject(FeedbackService)

    poem = signal<string | null>(this.poetry.poem)

    @ViewChild("mainContainer")
    mainContainer!: ElementRef<HTMLElement>

    async ngOnInit() {
        const poem = this.poetry.poem ?? await this.fetchPoem()
        this.poem.set(poem)
    }

    private async fetchPoem() {
        const asLines = (x: any) => x.join("\n")

        const poem: string = await post("poem", trace(this.forms.postData()))
            .then(response => response.json())
            .then(data => trace(asLines(data.content)))
            .catch(() => "Desculpe, não foi possível gerar o poema.")

        return poem
    }

    print() {
        if (!this.window) {
            alert("Window not found.")
            return
        }

        this.window.print()
        this.openFeedback()
    }

    openFeedback() {
        this.feedback.isOpen.set(true)
    }

    onGoHome() {
        this.openFeedback()
        this.goHome()
    }

    scrollDown() {
        const mainElement = this.mainContainer.nativeElement
        const scrollDistance = mainElement.clientHeight * 0.8

        mainElement.scrollBy({
            top: scrollDistance,
            behavior: "smooth",
        })
    }

    goHome() {
        this.forms.clear()
        this.feedback.isOpen.set(false)
        this.router.navigate(["/"])
    }
}
