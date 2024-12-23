import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { StanzaPattern } from './stanza-pattern/stanza-pattern.component'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-step-1',
  imports: [RouterLink, StanzaPattern, CommonModule],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.css'
})
export class RhythmPatternForms {
  stanzas: number = 2

  addStanza(): void {
    this.stanzas++
  }

  stanzaArray(): number[] {
    return Array(this.stanzas)
      .fill(0)
      .map((_, i) => i)
  }
}
