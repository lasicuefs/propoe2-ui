import { Component, inject } from "@angular/core"
import { Router } from "@angular/router"

// Import Local Components
import { Steps } from "../steps/steps"
import { ReturnButton } from "../return-back/button"

@Component({
    selector: "app-step-2",
    imports: [Steps, ReturnButton],
    template: `
        <main class="content-container">
            <h1 class="title">Arquivo MIVES</h1>
            <div class="flex gap-4 mt-4">
                <button class="action-btn" (click)="next()">Amostra Padrão</button>
            </div>

            <!-- Bottom -->
            <span class="hint-msg">
                Ecolha um de nossos arquivos MIVES.
            </span>

            <!-- Floating Navigation -->
            <return-back route="/new/rhythm" pageTitle="Rima & Rítimo"></return-back>
            <forms-steps [currentStep]="2" [totalSteps]="3"></forms-steps>
        </main>
    `
})
export class MivesForms {
    private router = inject(Router)

    next(): void {
        this.router.navigate(["/new/weights"])
    }
}
