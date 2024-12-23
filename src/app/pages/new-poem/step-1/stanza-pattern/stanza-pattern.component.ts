import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatternUnit } from '../pattern-unit/pattern-unit.component';

interface Unit {
  letter: string;
  number: string;
}

@Component({
  selector: 'stanzas-pattern',
  standalone: true,
  imports: [CommonModule, PatternUnit],
  templateUrl: './stanza-pattern.component.html',
})
export class StanzaPattern {
  patternUnits: PatternUnit[] = [
    { letter: 'A', number: '10', onNumberChange: () => {}, onLetterChange: () => {} },
  ];

  addPatternUnit(): void {
    this.patternUnits.push({ 
      letter: 'A', 
      number: '10',
      onNumberChange: () => {},
      onLetterChange: () => {}
    });
  }
}