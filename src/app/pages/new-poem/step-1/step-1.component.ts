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

function debug(obj: any): string {
    return JSON.stringify(obj)
}

@Component({
    selector: "app-step-1",
    imports: [StanzaComponent, Steps, BackBtnComponent, CommonModule],
    templateUrl: "./step-1.component.html",
    styleUrl: "./step-1.component.css",
})
export class RhythmPatternForms implements OnInit {
    private forms   = inject(Forms)     // Post Request Data
    private router  = inject(Router)    // Router
    // private prosody = inject(Prosody)   // Temporary Data

    stanzas = signal<Stanza[]>([])

    ngOnInit() {
        this.stanzas.set(this.forms.data.stanzas)
        console.log("Prosody: ", this.stanzas())
    }

    debug(obj: any): string {
        return debug(obj)
    }

    add(): void {
        this.stanzas.set(this.stanzas().concat({ pattern: ["A"], lengths: [10] }))
        console.log("Signal: ", this.stanzas())
        console.log("Forms:", this.forms)
    }

    prosodyStatus(): string {
        return "ok"
    }

    clear(event: Event) {
        this.stanzas.set([])
    }

    onNext(event: Event) {
        const message = this.prosodyStatus()     

        if ("ok" == message) {
            this.saveState()
            this.nextStep()
        } else {
            alert(message)
        }
    }

    private saveState() {
        console.log("Forms: ", this.forms.data)
        this.forms.data.stanzas = this.stanzas()
        console.log("Forms: ", this.forms.data)
    }

    private nextStep() {
        this.router.navigate(["/new/mives"])
    }

}
