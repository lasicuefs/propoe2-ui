import { Component, inject, signal } from "@angular/core"
import { Router } from "@angular/router"

// Import Local Components
import { WeightOption } from "./weight/weight"
import { Steps } from "../steps/steps"
import { ReturnButton } from "../return-back/button"

// Import Local Services
import { Forms } from "../../../services/forms.service"
import { Poetry } from "../../../services/poetry"

type WeightsOption = {
    key: string
    display: string
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
    imports: [WeightOption, Steps, ReturnButton],
    templateUrl: "./weights.html",
    styleUrl: "./weights.css",
})
export class WeightsForms {
    private forms = inject(Forms)
    private router = inject(Router)
    private poetry = inject(Poetry)

    DEBUG = false

    weights = signal<WeightsOption[]>(defaultOptions)

    valueOf(key: string): number {
        return this.weights().find((x) => x.key === key)?.value ?? 1
    }

    inspect(obj: any): string {
        return inspect(obj)
    }

    onGenerate(event: Event) {
        event.preventDefault()
        this.poetry.erase()
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
        this.weights.update((weights) => {
            const option = weights.find((x) => x.key === key)
            if (option) option.value = newValue
            return weights
        })
    }
}
