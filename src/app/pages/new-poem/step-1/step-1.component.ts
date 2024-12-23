import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PatternUnit } from './pattern-unit/pattern-unit.component';
import { StanzaPattern } from './stanza-pattern/stanza-pattern.component';

@Component({
  selector: 'app-step-1',
  imports: [RouterLink, PatternUnit, StanzaPattern],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.css'
})
export class RhythmPatternForms {

}
