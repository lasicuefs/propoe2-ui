import { Component, inject, OnInit, signal } from "@angular/core"
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
export class ProsodyForms implements OnInit {
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
    }

    clear(event: Event) {
        this.stanzas.set([])
        this.add()
    }

    onNext(event: Event) {
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
