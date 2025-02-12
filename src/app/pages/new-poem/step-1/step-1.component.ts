import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { CommonModule } from "@angular/common"

// Import Local Components
import { StanzaPattern } from "./stanza-pattern/stanza-pattern.component"
import { Steps } from "../steps/steps.component"

// Import Local Services
import { Forms } from "../../../services/forms.service"
import { BackBtnComponent } from "../back-btn/back-btn.component"

@Component({
    selector: "app-step-1",
    imports: [StanzaPattern, CommonModule, Steps, BackBtnComponent],
    templateUrl: "./step-1.component.html",
    styleUrl: "./step-1.component.css",
})
export class RhythmPatternForms {
    stanzas: number = 1

    constructor(private forms: Forms, private router: Router) {
        
    }

    addStanza(): void {
        this.stanzas++
    }

    stanzaArray(): number[] {
        return Array(this.stanzas)
            .fill(0)
            .map((_, i) => i)
    }

    updateForms() {
 
    }

    onNext(event: Event) {
        event.preventDefault()
        this.updateForms()
        this.router.navigate(["/new/mives"])
    }
}
