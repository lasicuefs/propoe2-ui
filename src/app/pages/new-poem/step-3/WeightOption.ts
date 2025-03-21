import { Component, EventEmitter, Input, Output } from "@angular/core"

function toJSNotation(x: string): string {
    return x.replace(",", ".")
}
function valid(x: number): number {
    return x ? x : 0
}
function toFloat(x: string): number {
    const num = Number.parseFloat((x == "") ? "0" : x)
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

@Component({
    selector: "weight",
    imports: [],
    template: `
        <li class="grid grid-cols-2 gap-4">
            <span>{{ displayName }}</span>
            <input type="text" [value]="value" (change)="onChange($event)"
                class="appearance-none focus:outline-none bg-transparent w-20 text-center">
        </li>

    `
})
export class WeightOption {
    @Input()
    displayName: string = "Parâmetro não definido"

    @Input()
    value: number = 1.0

    @Output()
    valueChange = new EventEmitter<number>()

    onChange(event: Event) {
        let input = event.target as HTMLInputElement
        const value = input.value
        const result = within(toFloat(toJSNotation(value)), 0, 1)

        this.value = result
        this.valueChange.emit(this.value)
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
