import { Component, effect, inject, OnInit, signal } from "@angular/core"
import { Router } from "@angular/router"

//  Components
import { Stanza } from "./Stanza"
import { FormsSteps } from "../shared/FormsSteps"
import { ReturnButton } from "../shared/ReturnButton"

// Services
import { Forms } from "../../../services/forms.service"
import { Hint } from "../../shared/Hint";
import { Title } from "../../shared/Title"

interface IsStanza {
    pattern: string[]
    lengths: number[]
}

@Component({
    selector: "app-step-1",
    imports: [Stanza, FormsSteps, ReturnButton, Hint, Title],
    template: `
    <main class="content-container">
        <page-title content="Padrão de rima"></page-title>
        <section id="forms">
            <section id="stanzas">
                @for (stanza of stanzas(); track $index) {
                <stanza
                    [lengths]="stanza.lengths"
                    [pattern]="stanza.pattern"
                ></stanza>
                }
            </section>
            @if (stanzas().length < 6) {
            <button id="add-stanza" title="Nova Estrofe" (click)="add()">+</button>
            }
        </section>

        <section class="flex gap-4">
            <a (click)="clear()">
                <button class="action-btn">Limpar</button>
            </a>
            <a (click)="onNext($event)">
                <button class="action-btn">Próximo</button>
            </a>
        </section>
        <hint message="Exemplo: ABAB ABAB CDC CDC"></hint>
    </main>

    <return-back route="/" pageTitle="Página Principal"></return-back>
    <forms-steps [currentStep]="1" [totalSteps]="3"></forms-steps>
    `,
    styles: `
        #forms {
            @apply 
                flex flex-col place-items-center gap-4
                min-w-96 
                overflow-hidden 
                rounded-3xl;
        }

        #stanzas {
            @apply 
                flex flex-col place-items-start flex-grow gap-4
                px-4 max-h-80 
                overflow-y-scroll
                [&::-webkit-scrollbar]:w-2 
                    [&::-webkit-scrollbar-track]:bg-transparent 
                    [&::-webkit-scrollbar-thumb]:bg-slate-100
        }

        #add-stanza {
            @apply bg-slate-50 bg-opacity-60 w-full
        }
    `,
})
export class ProsodyPage implements OnInit {
    private forms = inject(Forms)
    private router = inject(Router)

    stanzas = signal<IsStanza[]>([])

    ngOnInit() {
        this.stanzas.set(this.forms.data.stanzas)
    }

    add(): void {
        this.stanzas.set(this.stanzas().concat({ 
            pattern: ["A"], 
            lengths: [10] }
        ))
        console.log(this.stanzas())
    }

    clear() {
        this.stanzas.set([])
        this.add()
    }

    onNext(event: Event) {
        event.preventDefault()
        this.saveState()
        this.nextStep()
    }

    private saveState() {
        this.forms.data.stanzas = this.stanzas()
    }

    private nextStep() {
        this.router.navigate(["/new/mives"])
    }
}
