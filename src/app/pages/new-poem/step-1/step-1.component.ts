import { Component, inject, OnInit } from "@angular/core"
import { Router } from "@angular/router"

//  Components
import { StanzaComponent } from "./stanza/stanza"
import { Steps } from "../steps/steps.component"
import { BackBtnComponent } from "../back-btn/back-btn.component"

// Services
import { Forms } from "../../../services/forms.service"
import { Prosody, Stanza } from "./prosody.service"


@Component({
    selector: "app-step-1",
    imports: [StanzaComponent, Steps, BackBtnComponent],
    templateUrl: "./step-1.component.html",
    styleUrl: "./step-1.component.css",
})
export class RhythmPatternForms implements OnInit {
    private forms   = inject(Forms)
    private router  = inject(Router)
    private prosody = inject(Prosody)

    ngOnInit() {
        this.prosody.from(this.forms)
        console.log("Prosody: ", this.prosody.data)
    }

    get stanzas(): Stanza[] {
        return this.prosody.data
    }

    add(): void {
        this.prosody.data.push({ pattern: ["A"], lengths: [10] })
        console.log("Prosody:", this.prosody)
        console.log("Forms:", this.forms)
    }

    prosodyStatus(): string {
        return "ok"
    }

    clear(event: Event) {
        this.prosody.data = [{ pattern: ["A"], lengths: [10] }]
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
        this.forms.data.stanzas = this.prosody.data
        console.log("Forms: ", this.forms.data)
    }

    private nextStep() {
        this.router.navigate(["/mives"])
    }
}
