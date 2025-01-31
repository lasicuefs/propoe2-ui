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
}
