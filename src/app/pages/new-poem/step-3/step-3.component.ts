import { Component } from '@angular/core';
import { AttributeField } from './attribute-field/attribute-field.component';
import { CommonModule } from '@angular/common';
import { Steps } from "../steps/steps.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step-3',
  imports: [AttributeField, CommonModule, Steps, RouterLink],
  templateUrl: './step-3.component.html',
  styleUrl: './step-3.component.css'
})
export class WeightsForms {

  weights: { text: string, id: string, value: number }[] = [
    { text: 'Rima toante e consoante', id: 'rima-toante-consoante', value: 1.0 },
    { text: 'Acentuação', id: 'acentuacao', value: 1.0 },
    { text: 'Posição tônica', id: 'posicao-tonica', value: 1.0 },
    { text: 'Rima interna', id: 'rima-interna', value: 1.0 },
    { text: 'Estrutura rítimica', id: 'estrutura-ritimica', value: 1.0 },
  ];
}
