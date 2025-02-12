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

@Injectable({ providedIn: "root" })
export class Forms {
    private data: FormsData = {
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

    postData(): PostJson {
        return {
            "prosody": {
                "pattern": this.data.stanzas.flatMap((stanza: Stanza) =>
                    stanza.pattern
                ).join(" "),
                "rhythm": this.data.stanzas.flatMap((stanza: Stanza) =>
                    stanza.lengths
                ),
            },
            "weights": this.data.weights,
        }
    }

    prosodyFrom(stanzas: Stanza[]) {
        this.data.stanzas = stanzas
        console.log(this)
    }

    weightsFrom(weights: any) {
        this.data.weights = weights
        console.log(this)
    }
}
