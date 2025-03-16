import { Component, effect, inject, OnInit, signal } from "@angular/core"
import { Router } from "@angular/router"

//  Components
import { Stanza } from "./Stanza"
import { Steps } from "../steps/steps"
import { ReturnButton } from "../return-back/button"

// Services
import { Forms } from "../../../services/forms.service"

interface IsStanza {
    pattern: string[]
    lengths: number[]
}

@Component({
    selector: "app-step-1",
    imports: [Stanza, Steps, ReturnButton],
    templateUrl: "./prosody.html",
    styleUrl: "./prosody.css",
})
export class ProsodyPage implements OnInit {
    private forms = inject(Forms)
    private router = inject(Router)

    stanzas = signal<IsStanza[]>([])

    ngOnInit() {
        this.stanzas.set(this.forms.data.stanzas)
    }

    add(): void {
        this.stanzas.set(this.stanzas().concat({ 
            pattern: ["A"], 
            lengths: [10] }
        ))
        console.log(this.stanzas())
    }

    clear() {
        this.stanzas.set([])
        this.add()
    }

    onNext(event: Event) {
        event.preventDefault()
        this.saveState()
        this.nextStep()
    }

    private saveState() {
        this.forms.data.stanzas = this.stanzas()
    }

    private nextStep() {
        this.router.navigate(["/new/mives"])
    }
}
