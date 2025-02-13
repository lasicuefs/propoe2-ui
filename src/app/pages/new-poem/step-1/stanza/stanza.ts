import { Component, Input, OnInit } from "@angular/core"
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
export class StanzaComponent implements OnInit {
    @Input() pattern: string[] = []
    @Input() lengths: number[] = []

    units: Unit[] = []

    ngOnInit() {
        this.units = this.pattern.map((letter, index) => ({
            letter,
            length: this.lengths[index]
        }))
    }

    add(): void {
        this.units.push({ letter: "A", length: 10 })
    }
}
