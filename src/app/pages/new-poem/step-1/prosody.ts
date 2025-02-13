import { Component, inject, OnInit, signal } from "@angular/core"
import { Router } from "@angular/router"

//  Components
import { StanzaComponent } from "./stanza/stanza"
import { Steps } from "../steps/steps.component"
import { BackBtnComponent } from "../back-btn/back-btn.component"

// Services
import { Forms } from "../../../services/forms.service"

interface Stanza {
    pattern: string[]
    lengths: number[]
}

function inspect(obj: any): string {
    return JSON.stringify(obj)
}

@Component({
    selector: "app-step-1",
    imports: [StanzaComponent, Steps, BackBtnComponent],
    templateUrl: "./prosody.html",
    styleUrl: "./prosody.css",
})
export class ProsodyForms implements OnInit {
    private forms   = inject(Forms)
    private router  = inject(Router)

    DEBUG = false
    
    stanzas = signal<Stanza[]>([])

    ngOnInit() {
        this.stanzas.set(this.forms.data.stanzas)
    }

    inspect(obj: any): string {
        return inspect(obj)
    }

    add(): void {
        this.stanzas.set(this.stanzas().concat({ pattern: ["A"], lengths: [10] }))
    }

    clear(event: Event) {
        this.stanzas.set([])
        this.add()
    }

    onNext(event: Event) {  
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
