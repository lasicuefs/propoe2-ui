import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class Title {
  @Input() title: string = '';
}
