import { CommonModule, DOCUMENT } from "@angular/common"
import {
    Component,
    ElementRef,
    inject,
    OnInit,
    ViewChild,
} from "@angular/core"
import { Router } from "@angular/router"
import { Observable, of } from "rxjs"
import { Forms } from "../../services/forms.service"

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

    return await fetch(`http://${PROPOE_API}/${route}`, options)
}

const trace = (obj: any) => {
    console.log(JSON.stringify(obj))
    return obj
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
    document = inject(DOCUMENT)
    window = this.document.defaultView?.window

    @ViewChild("mainContainer")
    mainContainer!: ElementRef<HTMLElement>
    poem$: Observable<string> = of("")

    ngOnInit() {
        this.fetchPoem()
    }

    private fetchPoem() {        
        const asLines = (x: any) => x.join("\n")
        const FAIL_MESSAGE = `
            Desculpa, mas seu poema não pode ser gerado.
            Tente gerar um novo.
        `

        post("poem", trace(this.forms.postData()))
            .then(response => response.json())
            .then(data => this.poem$ = of(trace(asLines(data.content))))
            .catch(() => this.poem$ = of(FAIL_MESSAGE))
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
        let stars = prompt("From 1-5 what is your opinion about Propoe?")
        let comment = prompt("Write more about your experience. (Optional)", "")

        post("feedback", {stars: parseInt(stars ?? "1"), comment})
            .then(req => console.log(req))
            .catch(req => console.log(req))
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
        this.requestFeedback()
        this.forms.clear()
        console.log(this.forms)
        this.router.navigate(["/"])
    }
}
