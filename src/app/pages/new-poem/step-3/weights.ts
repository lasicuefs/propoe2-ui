import { Component, inject, signal } from "@angular/core"
import { Router } from "@angular/router"

// Import Local Components
import { WeightOption } from "./weight/weight"
import { Steps } from "../steps/steps"
import { ReturnButton } from "../return-back/button"

// Import Local Services
import { Forms } from "../../../services/forms.service"
import { Session } from "../../../services/Session"

type WeightsOption = {
    key: string
    display: string
    value: number
}

const defaultOptions: WeightsOption[] = [
    { key: "vocal-harmony", display: "Rima toante e consoante", value: 1.0 },
    { key: "accentuation", display: "Acentuação", value: 1.0 },
    { key: "tonic-position", display: "Posição tônica", value: 1.0 },
    { key: "internal-rhyme", display: "Rima interna", value: 1.0 },
    { key: "rhythmic-structure", display: "Estrutura rítimica", value: 1.0 },
]

@Component({
    selector: "app-step-3",
    imports: [WeightOption, Steps, ReturnButton],
    templateUrl: "./weights.html",
    styleUrl: "./weights.css",
})
export class WeightsForms {
    private forms = inject(Forms)
    private router = inject(Router)

    weights = signal<WeightsOption[]>(defaultOptions)

    valueOf(key: string): number {
        return this.weights().find((x) => x.key === key)?.value ?? 1
    }

    onGenerate(event: Event) {
        event.preventDefault()

        Session.delete("poem")
        Session.delete("poem-id")
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
