import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Forms {
  private data: any = {
    "prosody": {
      "pattern": "",
      "rhythm": []
    },
    "weights": {
      "vocal-harmony": 1,
      "accentuation": 1,
      "tonic-position": 1,
      "internal-rhyme": 1,
      "rhythmic-structure": 1
    }
  }

  updatePatternAndRhythm(pattern: string, rhythm: number[]): void {
    this.data.prosody.pattern = pattern;
    this.data.prosody.rhythm = rhythm;
    console.log(this)
  }

  weightsFrom(weights: any): void {
    this.data.weights = weights;
    console.log(this);
  }

}