import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Import Local Components
import { AttributeField } from './attribute-field/attribute-field.component';
import { Steps } from "../steps/steps.component";

// Import Local Services
import { Forms } from '../forms.service';

@Component({
  selector: 'app-step-3',
  imports: [AttributeField, CommonModule, Steps],
  templateUrl: './step-3.component.html',
  styleUrl: './step-3.component.css'
})
export class WeightsForms {

  weights: { text: string, id: string, value: number }[] = [
    { text: 'Rima toante e consoante', id: 'vocal-harmony', value: 1.0 },
    { text: 'Acentuação', id: 'accentuation', value: 1.0 },
    { text: 'Posição tônica', id: 'tonic-position', value: 1.0 },
    { text: 'Rima interna', id: 'internal-rhyme', value: 1.0 },
    { text: 'Estrutura rítimica', id: 'rhythmic-structure', value: 1.0 },
  ];

  constructor(private formsService: Forms, private router: Router) {}

  updateFormsService(): void {
    const weights: any = {};
    this.weights.forEach(weight => {
      const input = document.querySelector(`input[name="${weight.id}"]`) as HTMLInputElement;
      weights[weight.id] = parseFloat(input.value);
    });
    this.formsService.updateWeights(weights);
  }

  onGenerate(event: Event): void {
    event.preventDefault();
    this.updateFormsService();
    this.router.navigate(['/poem']);
  }
}
