import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Unit {
    letter: string
    number: string
}

@Component({
    selector: "stanza",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./stanza.html",
    styleUrl: "./stanza.css",
})
export class StanzaComponent {
    units: Unit[] = [{ letter: "A", number: "10" }]

    addPatternUnit(): void {
        this.units.push({
            letter: "A",
            number: "10",
        })
    }
}
