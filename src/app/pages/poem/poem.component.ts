import { CommonModule, DOCUMENT } from "@angular/common"
import {
    Component,
    ElementRef,
    HostListener,
    inject,
    OnInit,
    signal,
    ViewChild,
} from "@angular/core"
import { Router } from "@angular/router"
import { HttpClientModule, HttpHeaders } from "@angular/common/http"
import { Observable, of } from "rxjs"
import { catchError, map } from "rxjs/operators"
import { Forms } from "../../services/forms.service"

const post = async (route: string, body: any) => {
    const PROPOE_API = "localhost:8000/"
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

@Component({
    selector: "app-poem",
    standalone: true,
    imports: [CommonModule, HttpClientModule],
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

    private scrollPosition = signal(0)
    private viewportHeight = signal(0)
    private contentHeight = signal(0)

    ngOnInit() {
        this.fetchPoem()
    }

    private fetchPoem() {
        const body = this.forms.postData()
        console.log(body)
        
        post("poem", body)
            .then(response => response.json())
            .then(data => {
                const res = data.content.join("\n")
                console.log(res)
                this.poem$ = of(res)
            })
            .catch(() => {
                this.poem$ = of("Desculpa, mas seu poema não pode ser gerado.\nTente gerar um novo.")
            })
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
