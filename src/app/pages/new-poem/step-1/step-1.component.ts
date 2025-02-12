import { Component, Optional } from "@angular/core"
import { Router } from "@angular/router"
import { CommonModule } from "@angular/common"

// Import Local Components
import { Stanzas } from "./stanzas/stanzas"
import { Steps } from "../steps/steps.component"

// Import Local Services
import { Forms } from "../../../services/forms.service"
import { BackBtnComponent } from "../back-btn/back-btn.component"

interface Stanza {
    pattern: string[]
    lengths: number[]
}

@Component({
    selector: "app-step-1",
    imports: [Stanzas, CommonModule, Steps, BackBtnComponent],
    templateUrl: "./step-1.component.html",
    styleUrl: "./step-1.component.css",
})
export class RhythmPatternForms {
    // stanzas: Stanza[] = []
    stanzas: number = 1
    constructor(private forms: Forms, private router: Router) {}

    ngOnInit() {
        // this.stanzas = this.forms.data.stanzas
    }

    // Adds a new default Stanza
    add(): void {
        
    }

    // Placeholder: delete this
    stanzaArray(): number[] {
        return new Array(this.stanzas).fill(0)
    }
    
    // Placeholder: delete this
    addStanza() {}

    // Should check for: 
    // - valid datatype
    // - valid lenghts
    prosodyStatus(): string {
        return "ok"
    }

    // TODO: Clears data from Forms and reloads UI
    clear() {
        
    }

    // Goes to the next page if everything is right
    // Otherwise, this will alert a message and reset this forms' step.
    onNext(event: Event) {
        event.preventDefault()
        const message = this.prosodyStatus()

        if (message != "ok") {
            alert(message)
            this.clear()
        } else {
            // this.forms.prosodyFrom(this.stanzas)
            this.router.navigate(["/new/mives"])
        }
    }
}
