import { Component, inject, OnInit, Optional } from "@angular/core"
import { Router } from "@angular/router"
import { CommonModule } from "@angular/common"

// Import Local Components
import { StanzaComponent } from "./stanza/stanza"
import { Steps } from "../steps/steps.component"

// Import Local Services
import { Forms } from "../../../services/forms.service"
import { BackBtnComponent } from "../back-btn/back-btn.component"


@Component({
    selector: "app-step-1",
    imports: [StanzaComponent, Steps, BackBtnComponent],
    templateUrl: "./step-1.component.html",
    styleUrl: "./step-1.component.css",
})
export class RhythmPatternForms implements OnInit {
    private service = inject(Forms)
    private router  = inject(Router)

    ngOnInit() {}
    add(): void {}

    prosodyStatus(): string {
        return "ok"
    }

    clear() {

    }

    onNext(event: Event) {
        event.preventDefault()
        const message = this.prosodyStatus()     

        if ("ok" == message) {
            this.saveState()
            this.nextStep()
        } else {
            alert(message)
        }
    }

    private saveState() {}
    private nextStep() {}
}
