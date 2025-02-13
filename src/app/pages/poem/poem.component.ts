import { CommonModule } from "@angular/common"
import {
    Component,
    computed,
    ElementRef,
    inject,
    signal,
    ViewChild,
} from "@angular/core"
import { Router, RouterLink } from "@angular/router"
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { Observable, of } from "rxjs"
import { catchError, map } from "rxjs/operators"
import { Forms } from "../../services/forms.service"

const PROPOE_API = "http://localhost:8000/poem/"

@Component({
    selector: "app-poem",
    standalone: true,
    imports: [CommonModule, RouterLink, HttpClientModule],
    templateUrl: "./poem.component.html",
    styleUrl: "./poem.component.css",
})
export class PoemPage {
    private http = inject(HttpClient)
    private router = inject(Router)
    private forms = inject(Forms)

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
        this.poem$ = this.http.post<{ content: string[] }>(PROPOE_API, this.forms.postData())
            .pipe(
                map((data) => data.content.join("\n")),
                catchError(() =>
                    of(
                        "Desculpa, mas seu poema não pode ser gerado.\nTente gerar um novo.",
                    )
                ),
            )
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
