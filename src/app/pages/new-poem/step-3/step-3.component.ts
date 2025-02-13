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

interface Weights {
    "vocal-harmony": number
    "accentuation": number
    "tonic-position": number
    "internal-rhyme": number
    "rhythmic-structure": number
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

    valueOf(key: string): number {
        return this.weights().find(x => x.key === key)?.value ?? 1
    }

    inspect(obj: any): string {
        return inspect(obj)
    }

    onGenerate(event: Event) {
        event.preventDefault()
        this.storeState()
        this.router.navigate(["/poem"])
    }

    storeState(): void {
        this.forms.weightsFrom(
            {
                "vocal-harmony": this.valueOf("vocal-harmony"),
                "accentuation": this.valueOf("accentuation"),
                "tonic-position": this.valueOf("tonic-position"),
                "internal-rhyme": this.valueOf("internal-rhyme"),
                "rhythmic-structure": this.valueOf("rhythmic-structure"),
            },
        )
    }

    onValueChange(key: string, newValue: number) {
        this.weights.update(weights => {
            const option = weights.find(x => x.key === key)
            if (option) { option.value = newValue }
            return weights
        });
    }
}
