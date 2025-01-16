import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'forms-steps',
  imports: [CommonModule],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class Steps {
  @Input() currentStep: number = 1;
  @Input() totalSteps: number = 3;

  get steps(): number[] {
    return Array(this.totalSteps).fill(0);
  }
}