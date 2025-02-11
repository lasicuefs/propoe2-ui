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

    constructor(private forms: Forms, private router: Router)

    addStanza(): void {
        this.stanzas++
    }

    stanzaArray(): number[] {
        return Array(this.stanzas)
            .fill(0)
            .map((_, i) => i)
    }

    updateForms() {
        const pattern: any = []
        const rhythm: any = []
        const stanzas = document.querySelectorAll("stanzas-pattern")

        stanzas.forEach((stanza, index) => {
            const units = stanza.querySelectorAll("pattern-unit")

            units.forEach((unit) => {
                const letter = (
                    unit.querySelector(
                        'input[type="text"]:nth-child(2)',
                    ) as HTMLInputElement
                ).value
                const number = parseInt(
                    (unit.querySelector(
                        'input[type="text"]:nth-child(1)',
                    ) as HTMLInputElement).value,
                    10,
                )

                pattern.push(letter)
                rhythm.push(number)
            })

            if (index < stanzas.length - 1) {
                pattern.push(" ")
            }
        })

        this.forms.prosodyFrom(pattern.join(""), rhythm)
    }

    onNext(event: Event) {
        event.preventDefault()
        this.updateForms()
        this.router.navigate(["/new/mives"])
    }
}
