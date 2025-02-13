import { Component, inject, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Router } from "@angular/router"

// Import Local Components
import { AttributeField } from "./attribute-field/attribute-field.component"
import { Steps } from "../steps/steps.component"

// Import Local Services
import { Forms } from "../../../services/forms.service"
import { BackBtnComponent } from "../back-btn/back-btn.component"

type WeightsOption = {
    key: string,
    display: string,
    value: number
}

const defaultOptions: WeightsOption[] = [
    { key: "vocal-harmony", display: "Rima toante e consoante", value: 1.0 },
    { key: "accentuation", display: "Acentuação", value: 1.0 },
    { key: "tonic-position", display: "Posição tônica", value: 1.0 },
    { key: "internal-rhyme", display: "Rima interna", value: 1.0 },
    { key: "rhythmic-structure", display: "Estrutura rítimica", value: 1.0 },
]

function inspect(obj: any): string {
    return JSON.stringify(obj)
}

@Component({
    selector: "app-step-3",
    imports: [AttributeField, CommonModule, Steps, BackBtnComponent],
    templateUrl: "./step-3.component.html",
    styleUrl: "./step-3.component.css",
})
export class WeightsForms {
    private forms = inject(Forms)
    private router = inject(Router)

    weights = signal<WeightsOption[]>(defaultOptions)

    inspect(obj: any): string {
        return inspect(obj)
    }

    updateForms(): void {
        const weights: any = {}

        this.weights().forEach((weight) => {
            const input = document.querySelector(
                `input[name="${weight.key}"]`,
            ) as HTMLInputElement
            weights[weight.key] = parseFloat(input.value)
        })

        this.forms.weightsFrom(weights)
    }

    onGenerate(event: Event) {
        event.preventDefault()
        this.updateForms()
        this.router.navigate(["/poem"])
    }
}
