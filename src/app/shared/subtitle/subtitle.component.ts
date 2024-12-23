import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-subtitle',
  imports: [],
  templateUrl: './subtitle.component.html',
  styleUrl: './subtitle.component.css'
})
export class SubtitleComponent {
  @Input() subtitle: string = '';
}
