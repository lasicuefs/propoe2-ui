import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '../../shared/title/title.component';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, Title],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomePage {

}
