import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"

@Component({
    selector: "forms-steps",
    imports: [CommonModule],
    template: `
        <div id="shadow"></div>
        <div id="blured-container">
            <div class="p-4">
                <div id="vertical-layout">
                    <div id="textual-indicator">Etapa {{ currentStep }}</div>
                    <div id="step-bars">
                        @for (step of steps; track $index) {
                        <div class="step-bar" [ngClass]='{
                                "opacity-80": ($index + 1) < currentStep,
                                "opacity-70": ($index + 1) === currentStep,
                                "opacity-40": ($index + 1) > currentStep,
                            }'>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: `
        #shadow {
            @apply fixed bottom-0 left-0 right-0 translate-y-4 z-0 
                h-20 w-full max-w-2xl mx-auto 
                bg-black opacity-25;
            clip-path: ellipse(closest-side farthest-side);
        }

        #blured-container {
            @apply fixed bottom-0 left-0 right-0 z-10 h-24 
                backdrop-blur-lg
        }

        #vertical-layout {
            @apply flex flex-col items-center justify-end gap-3 
                w-full max-w-2xl mx-auto
        }

        #textual-indicator {
            @apply text-lg font-semibold text-white
        }

        #step-bars {
            @apply flex gap-2 w-full
        }

        .step-bar {
            @apply h-2 w-96 flex-1 rounded-full shadow-xl 
                bg-white transition-opacity duration-300
        }
    `,
})
export class FormsSteps {
    @Input()
    currentStep: number = 1
    @Input()
    totalSteps: number = 3

    get steps(): number[] {
        return Array(this.totalSteps).fill(0)
    }
}
