import { Injectable } from "@angular/core"

import { Forms } from "../../../services/forms.service"

export interface Stanza {
    pattern: string[]
    lengths: number[]
}

@Injectable({ providedIn: "root" })
export class Prosody {
    data: Stanza[] = [
        { pattern: ["A"], lengths: [10] },
    ]

    from(forms: Forms) {
        this.data = forms.data.stanzas
    }

}
