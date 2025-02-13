import { Component, computed, inject, OnInit, Signal, signal } from "@angular/core"
import { Router } from "@angular/router"

//  Components
import { StanzaComponent } from "./stanza/stanza"
import { Steps } from "../steps/steps.component"
import { BackBtnComponent } from "../back-btn/back-btn.component"

// Services
import { Forms } from "../../../services/forms.service"
import { Prosody, Stanza } from "./prosody.service"
import { CommonModule } from "@angular/common"

function inspect(obj: any): string {
    return JSON.stringify(obj)
}

@Component({
    selector: "app-step-1",
    imports: [StanzaComponent, Steps, BackBtnComponent, CommonModule],
    templateUrl: "./step-1.component.html",
    styleUrl: "./step-1.component.css",
})
export class RhythmPatternForms implements OnInit {
    private forms   = inject(Forms)
    private router  = inject(Router)

    stanzas = signal<Stanza[]>([])

    ngOnInit() {
        this.stanzas.set(this.forms.data.stanzas)
    }

    inspect(obj: any): string {
        return inspect(obj)
    }

    add(): void {
        this.stanzas.set(this.stanzas().concat({ pattern: ["A"], lengths: [10] }))
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
