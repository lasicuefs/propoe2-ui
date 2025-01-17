import { Component } from '@angular/core';
import { Steps } from "../steps/steps.component";
import { Router } from '@angular/router';

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
