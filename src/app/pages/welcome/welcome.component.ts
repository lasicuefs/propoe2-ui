import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '../../shared/title/title.component';
import { SubtitleComponent } from "../../shared/subtitle/subtitle.component";

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, Title, SubtitleComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomePage {

}
