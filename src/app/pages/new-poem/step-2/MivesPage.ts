import { Component, inject } from "@angular/core"
import { Router } from "@angular/router"

// Import Local Components
import { FormsSteps } from "../shared/FormsSteps"
import { ReturnButton } from "../shared/ReturnButton"
import { Hint } from "../shared/Hint";

@Component({
    selector: "app-step-2",
    imports: [FormsSteps, ReturnButton, Hint],
    template: `
        <main class="content-container">
            <h1 class="title">Arquivo MIVES</h1>
            <div class="flex gap-4 mt-4">
                <button class="action-btn" (click)="next()">Amostra Padrão</button>
            </div>

            <hint message="Escolha um de nossos arquivos MIVES."></hint>

            <!-- Floating Navigation -->
            <return-back route="/new/rhythm" pageTitle="Rima & Rítimo"></return-back>
            <forms-steps [currentStep]="2" [totalSteps]="3"></forms-steps>
        </main>
    `
})
export class MivesPage {
    private router = inject(Router)

    next(): void {
        this.router.navigate(["/new/weights"])
    }
}
