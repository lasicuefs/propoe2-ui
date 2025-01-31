import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'

// Import Local Components
import { StanzaPattern } from './stanza-pattern/stanza-pattern.component'
import { Steps } from "../steps/steps.component";

// Import Local Services
import { Forms } from '../forms.service';

@Component({
  selector: 'app-step-1',
  imports: [RouterLink, StanzaPattern, CommonModule, Steps],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.css'
})
export class RhythmPatternForms {
  stanzas: number = 1

  constructor(private formsService: Forms) {}

  addStanza(): void {
    this.stanzas++
  }

  stanzaArray(): number[] {
    return Array(this.stanzas)
      .fill(0)
      .map((_, i) => i)
  }

  updateFormsService(): void {
    const pattern: any = [];
    const rhythm: any = [];
    const stanzas = document.querySelectorAll('stanzas-pattern');
    stanzas.forEach((stanza, index) => {
      const units = stanza.querySelectorAll('pattern-unit');
      units.forEach(unit => {
        const letter = (unit.querySelector('input[type="text"]:nth-child(2)') as HTMLInputElement).value;
        const number = parseInt((unit.querySelector('input[type="text"]:nth-child(1)') as HTMLInputElement).value, 10);
        pattern.push(letter);
        rhythm.push(number);
      });
      if (index < stanzas.length - 1) {
        pattern.push(' ');
      }
    });
    this.formsService.updatePatternAndRhythm(pattern.join(''), rhythm);
  }
}
