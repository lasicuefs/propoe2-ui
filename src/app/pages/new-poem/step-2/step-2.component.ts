import { Component } from '@angular/core'
import { Router } from '@angular/router'

// Import Local Components
import { Steps } from "../steps/steps.component"

// Import Local Services
import { Forms } from '../forms.service'


@Component({
  selector: 'app-step-2',
  imports: [Steps],
  templateUrl: './step-2.component.html',
  styleUrl: './step-2.component.css'
})
export class MivesForms {
  constructor(private router: Router) {}

  receiveFile(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // TODO: handle file to submit
      this.router.navigate(['/new/weights']);
    }
  }

}
