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

  addStanza(): void {
    this.stanzas++
  }

  stanzaArray(): number[] {
    return Array(this.stanzas)
      .fill(0)
      .map((_, i) => i)
  }
}
