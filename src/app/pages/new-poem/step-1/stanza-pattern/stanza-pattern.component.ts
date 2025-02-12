import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Unit {
    letter: string
    number: string
}

@Component({
    selector: "stanzas-pattern",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./stanza-pattern.component.html",
    styleUrl: "./stanza-pattern.component.css",
})
export class StanzaPattern {
    units: Unit[] = [{ letter: "A", number: "10" }]

    addPatternUnit(): void {
        this.units.push({
            letter: "A",
            number: "10",
        })
    }
}
