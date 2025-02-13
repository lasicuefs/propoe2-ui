import { Component, Input } from "@angular/core"

interface Unit {
    letter: string
    length: number
}

// Number Manipulation
function valid(x: number): number {
    return x ? x : 0
}
function toInt(x: string): number {
    const num = Number.parseInt((x == "") ? "0" : x)
    return valid(num)
}
function max(a: number, b: number): number {
    return (a > b) ? a : b
}
function min(a: number, b: number): number {
    return (a < b) ? a : b
}
function within(x: number, low: number, high: number) {
    return min(max(x, low), high)
}

// String Manipulation
const defaultLetter = "A"
function first(x: string): string {
    return x.at(0) ?? defaultLetter
}
function upper(x: string): string {
    return x.toUpperCase()
}
function alpha(x: string): string {
    return /^[A-Za-z]*$/.test(x) ? x : defaultLetter
}

@Component({
    selector: "stanza",
    standalone: true,
    imports: [],
    templateUrl: "./stanza.html",
    styleUrl: "./stanza.css",
})
export class StanzaComponent {
    @Input()
    pattern: string[] = []
    @Input()
    lengths: number[] = []

    get units() {
        return this.pattern.map((letter, index) => (
            {
                id: index,
                letter,
                length: this.lengths[index],
            }
        ))
    }

    add(): void {
        this.pattern.push("A")
        this.lengths.push(10)
    }

    // Enforced rules
    // --------------
    //
    // - Empty input becomes "A"
    // - Non-Alpha inputs becomes "A"
    // - Lower-cased inputs becomes Upper-cased
    // - Only the first letter will be used
    //
    updateLetter(event: Event, index: number) {
        let input = event.target as HTMLInputElement
        const result = alpha(upper(first(input.value)))

        this.pattern[index] = result
        this.forcedUpdateInput(input, result.toString())
    }

    // Enforced rules
    // --------------
    //
    // - Empty input becomes 0
    // - Invalid input becomes 0
    // - Minimum value is 0
    // - Maximum value is 10
    //
    updateLenght(event: Event, index: number) {
        let input = event.target as HTMLInputElement
        const value = input.value
        const result = within(toInt(value), 0, 15)

        this.lengths[index] = result
        this.forcedUpdateInput(input, result.toString())
    }

    // The reason is that if the Model's value doesn't change,
    // Angular won't update the UI.
    //
    // For instance, if you write -8 (invalid), this will set 0 on model,
    // then this will update the UI to also show 0.
    // But, if you write -8 again, this won't update the UI. The reason is quite simple:
    // the Model's value remains 0, so since this didn't changed, the UI won't be re-rendered.
    private forcedUpdateInput(input: HTMLInputElement, value: string) {
        input.value = value
    }
}
