import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { PatternUnit } from "../pattern-unit/pattern-unit.component"

interface Unit {
    letter: string
    number: string
}

@Component({
    selector: "stanzas-pattern",
    standalone: true,
    imports: [CommonModule, PatternUnit],
    templateUrl: "./stanza-pattern.component.html",
    styleUrl: "./stanza-pattern.component.css",
})
export class StanzaPattern {
    patternUnits: PatternUnit[] = [
        {
            letter: "A",
            number: "10"        
        },
    ]

    addPatternUnit(): void {
        this.patternUnits.push({
            letter: "A",
            number: "10",
        })
    }
}
