import { Injectable } from "@angular/core"

type Weights = {
    "vocal-harmony": number
    "accentuation": number
    "tonic-position": number
    "internal-rhyme": number
    "rhythmic-structure": number
}

type PostJson = {
    "prosody": {
        "pattern": string
        "rhythm": number[]
    }
    "weights": Weights
}

type Stanza = {
    pattern: string[]
    lengths: number[]
}

type FormsData = {
    stanzas: Stanza[]
    weights: Weights
}

const defaultData: FormsData = {
    stanzas: [
        { pattern: ["A"], lengths: [10] },
    ],
    weights: {
        "vocal-harmony": 1,
        "accentuation": 1,
        "tonic-position": 1,
        "internal-rhyme": 1,
        "rhythmic-structure": 1,
    },
}

@Injectable({ providedIn: "root" })
export class Forms {
    data: FormsData = JSON.parse(JSON.stringify(defaultData))

    clear() {
        this.data = JSON.parse(JSON.stringify(defaultData))
    }

    postData(): PostJson {
        const stanzas = this.data.stanzas
        const pattern = stanzas.map((s: Stanza) => s.pattern.join("")).join(" ")
        const rhythm = stanzas.map((s: Stanza) => s.lengths).flat()

        return {
            "prosody": {
                "pattern": pattern,
                "rhythm": rhythm,
            },
            "weights": this.data.weights,
        }
    }

    prosodyFrom(stanzas: Stanza[]) {
        this.data.stanzas = stanzas
    }

    weightsFrom(weights: Weights) {
        this.data.weights = weights
    }
}
