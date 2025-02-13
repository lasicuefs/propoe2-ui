import { Component, computed, Input, OnInit, ɵLocaleDataIndex } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Unit {
    letter: string
    length: number
}

@Component({
    selector: "stanza",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./stanza.html",
    styleUrl: "./stanza.css",
})
export class StanzaComponent {
    @Input() pattern: string[] = []
    @Input() lengths: number[] = []

    get units() {
        return this.pattern.map((letter, index) => (
            {
                id: index,
                letter,
                length: this.lengths[index]
            }
        ))
    }

    add(): void {
        this.pattern.push("A")
        this.lengths.push(10)
    }
}
