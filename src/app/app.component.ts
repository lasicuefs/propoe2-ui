import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomePage } from "./welcome/welcome.component";
import { Background } from "./background/background.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    WelcomePage, 
    Background, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'propoe2-ui';
  WelcomePage = WelcomePage
}
