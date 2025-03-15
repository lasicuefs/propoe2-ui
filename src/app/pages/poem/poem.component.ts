import { CommonModule } from "@angular/common"
import {
    Component,
    computed,
    inject,
    OnInit,
    signal,
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
    styleUrl: "./poem.component.css",
})
export class PoemPage implements OnInit {
    private forms = inject(Forms)
    private router = inject(Router)
    
    feedbackRequested = signal<boolean>(false)
    poem = signal<string>("")

    async ngOnInit() {
        const poem = await this.fetchPoem()
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
