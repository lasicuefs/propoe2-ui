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

const post = async (route: string, body: any) => {
    const PROPOE_API = "localhost:8000"
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // For development purposes
            'Ignore-Certificate-Errors': 'true'
        },
        body: JSON.stringify(body)
    }

    return fetch(`http://${PROPOE_API}/${route}`, options)
}

const trace = (obj: any, msg: string = "") => {
    console.log(msg, JSON.stringify(obj))
    return obj
}

type Feedback = {
    stars: number,
    comment: string
}


@Component({
    selector: "app-poem",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./poem.component.html",
    styleUrl: "./poem.component.css",
})
export class PoemPage implements OnInit {
    private router = inject(Router)
    private forms = inject(Forms)
    private poetry = inject(Poetry)
    private document = inject(DOCUMENT)
    private window = this.document.defaultView?.window

    poem = signal<string>(this.poetry.poem)
    feedbackBeingRequired = signal<boolean>(false)

    @ViewChild("mainContainer")
    mainContainer!: ElementRef<HTMLElement>

    ngOnInit() {
        if (!this.poetry.hasWrote) {
            this.fetchPoem()
        }
    }

    private async fetchPoem() {
        const asLines = (x: any) => x.join("\n")

        const poem: string = await post("poem", trace(this.forms.postData()))
            .then(response => response.json())
            .then(data => trace(asLines(data.content)))

        this.poetry.write(poem)
        this.poem.set(poem)
    }

    print() {
        if (this.window) {
            this.window.print()
            this.requestFeedback()
        } else {
            alert("Window not found.")
        }
    }

    requestFeedback() {
        this.feedbackBeingRequired.set(true)
    }

    onSubmitFeedback(event: Event) {
        event.preventDefault();
                
        const stars = trace((document.querySelector('input[name="rating"]:checked') as HTMLInputElement)?.value)
        const comment = trace((document.querySelector('#comment') as HTMLTextAreaElement).value)
        
        trace(post("feedback", { stars: parseInt(stars as string), comment }))
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
        console.log(this.forms)
        this.router.navigate(["/"])
    }
}
