import { Component, Input } from '@angular/core';

@Component({
  selector: 'pattern-unit',
  standalone: true,
  templateUrl: "./pattern-unit.component.html",
  styleUrls: ["./pattern-unit.component.css"]
})
export class PatternUnit {
  @Input() number: string = '10';
  @Input() letter: string = 'A';

  onNumberChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue) || parsedValue > 0) {
      // Handle invalid input if needed
    }
  }

  onLetterChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    // Add validation/emit if needed
  }
}