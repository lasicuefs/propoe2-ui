import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Unit {
    letter: string
    number: string
}

@Component({
    selector: "stanzas",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./stanzas.html",
    styleUrl: "./stanzas.css",
})
export class Stanzas {
    units: Unit[] = [{ letter: "A", number: "10" }]

    addPatternUnit(): void {
        this.units.push({
            letter: "A",
            number: "10",
        })
    }
}
