import { Component, input } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Unit {
    letter: string
    length: number
}

@Component({
    selector: "stanza",
    standalone: true,
    imports: [],
    templateUrl: "./stanza.html",
    styleUrl: "./stanza.css",
})
export class StanzaComponent {
    pattern = input.required<string[]>()
    lengths = input.required<number[]>()

    get units(): Unit[] {
        const unit = function(l: string, n: number): Unit { 
            return {"letter": l, "length": n} 
        }
        
        return this.pattern().map((val: string, idx: number) =>
            unit(val, this.lengths()[idx])
        )
    }

    add(): void {
        this.pattern().push("A")
        this.lengths().push(10)
    }
}
