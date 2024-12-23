import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StanzaPattern } from './stanza-pattern/stanza-pattern.component';

@Component({
  selector: 'app-step-1',
  imports: [RouterLink, StanzaPattern],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.css'
})
export class RhythmPatternForms {

}
