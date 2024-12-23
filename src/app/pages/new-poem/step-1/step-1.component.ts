import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PatternUnit } from './pattern-unit/pattern-unit.component';

@Component({
  selector: 'app-step-1',
  imports: [RouterLink, PatternUnit],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.css'
})
export class RhythmPatternForms {

}
