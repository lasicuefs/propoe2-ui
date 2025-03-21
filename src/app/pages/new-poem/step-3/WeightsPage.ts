import { Component, inject, signal } from "@angular/core"
import { Router } from "@angular/router"

// Import Local Components
import { WeightOption } from "./WeightOption"
import { FormsSteps } from "../shared/FormsSteps"
import { ReturnButton } from "../shared/ReturnButton"

// Import Local Services
import { Forms } from "../../../services/forms.service"
import { Session } from "../../../services/Session"
import { Hint } from "../../shared/Hint";
import { Title } from "../../shared/Title"
import { ActionButton } from "../../shared/ActionButton"

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
    imports: [WeightOption, FormsSteps, ReturnButton, Hint, Title, ActionButton],
    template: `
        <main class="content-container">
            <page-title content="Pesos de avaliação"></page-title>
            <hint message="Preencha os campos abaixo para definir os pesos de avaliação do poema."></hint>
            
            <ul id="options">
                @for (option of weights(); track $index) {
                    <weight [displayName]="option.display" [value]="option.value"
                        (valueChange)="onValueChange(option.key, $event)"></weight>
                }
            </ul>
            <a (click)="onGenerate($event)">
                <action-button text="Gerar"></action-button>
            </a>
        </main>

        <return-back route="/new/mives" pageTitle="Arquivo Mives"></return-back>
        <forms-steps [currentStep]="3" [totalSteps]="3"></forms-steps>
    `,
    styles: `
        #options {
            @apply flex flex-col gap-2 mt-4 p-4 px-10 min-w-96 
                overflow-hidden rounded-3xl 
                text-lg bg-white bg-opacity-45
        }
    `,
})
export class WeightsPage {
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
