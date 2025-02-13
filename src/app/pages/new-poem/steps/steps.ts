import { Component, Input } from "@angular/core"

@Component({
    selector: "forms-steps",
    imports: [],
    templateUrl: "./steps.html",
    styleUrl: "./steps.css",
})
export class Steps {
    @Input()
    currentStep: number = 1
    @Input()
    totalSteps: number = 3

    get steps(): number[] {
        return Array(this.totalSteps).fill(0)
    }
}
