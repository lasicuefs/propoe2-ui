import { Component, inject } from "@angular/core"
import { Router } from "@angular/router"

// Import Local Components
import { Steps } from "../steps/steps.component"
import { ReturnButton } from "../return-back/button"

@Component({
    selector: "app-step-2",
    imports: [Steps, ReturnButton],
    templateUrl: "./mives.html",
    styleUrl: "./mives.css",
})
export class MivesForms {
    private router = inject(Router)

    next(): void {
        this.router.navigate(["/new/weights"])
    }
}
