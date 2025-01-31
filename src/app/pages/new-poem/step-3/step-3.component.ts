import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'

// Import Local Components
import { AttributeField } from './attribute-field/attribute-field.component'
import { Steps } from "../steps/steps.component"

// Import Local Services
import { Forms } from '../forms.service'

@Component({
  selector: 'app-step-3',
  imports: [AttributeField, CommonModule, Steps],
  templateUrl: './step-3.component.html',
  styleUrl: './step-3.component.css'
})
export class WeightsForms {

  weights: { text: string, id: string, value: number }[] = [
    { text: 'Rima toante e consoante', id: 'vocal-harmony',      value: 1.0 },
    { text: 'Acentuação',              id: 'accentuation',       value: 1.0 },
    { text: 'Posição tônica',          id: 'tonic-position',     value: 1.0 },
    { text: 'Rima interna',            id: 'internal-rhyme',     value: 1.0 },
    { text: 'Estrutura rítimica',      id: 'rhythmic-structure', value: 1.0 },
  ]

  constructor(private forms: Forms, private router: Router) {}

  updateForms(): void {
    const weights: any = {}

    this.weights.forEach( weight => {
      const $ = document.querySelector
      
      const input = $(`input[name="${weight.id}"]`) as HTMLInputElement;
      weights[weight.id] = parseFloat(input.value)
    })

    this.forms.updateWeights(weights)
  }

  onGenerate(event: Event) {
    event.preventDefault()
    this.updateForms()
    this.updateFormsService()
    this.updateForms()
    this.router.navigate(['/poem'])
  }
}
