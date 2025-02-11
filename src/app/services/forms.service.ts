import { Injectable } from "@angular/core"

@Injectable({ providedIn: "root" })
export class Forms {
    private data: {
        "prosody": {
            "pattern": string,
            "rhythm": number[]
        },
        "weights": {
            "vocal-harmony": number,
            "accentuation": number,
            "tonic-position": number,
            "internal-rhyme": number,
            "rhythmic-structure": number,
        }
    } = {
        "prosody": {
            "pattern": "",
            "rhythm": [],
        },
        "weights": {
            "vocal-harmony": 1,
            "accentuation": 1,
            "tonic-position": 1,
            "internal-rhyme": 1,
            "rhythmic-structure": 1,
        },
    }

    dataJson(): any {
        return this.data
    }

    prosodyFrom(pattern: string, rhythm: number[]) {
        this.data.prosody.pattern = pattern
        this.data.prosody.rhythm = rhythm
        console.log(this)
    }

    weightsFrom(weights: any) {
        this.data.weights = weights
        console.log(this)
    }
}
