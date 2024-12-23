import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poem',
  imports: [],
  templateUrl: './poem.component.html',
  styleUrl: './poem.component.css'
})
export class PoemPage {
  @Input() poem: string = this.loremIpsum();

  loremIpsum() {
    return `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit.

      Nullam ornare, nunc in tincidunt tincidunt, 
      nunc nisl pharetra elit,
      nec fermentum purus ligula nec ligula. 
      
      Nullam vel odio at eros gravida fermentum. 
      Nullam nec purus id urna suscipit ultricies. 
      Nullam id diam.

      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit.

      Nullam ornare, nunc in tincidunt tincidunt, 
      nunc nisl pharetra elit,
      nec fermentum purus ligula nec ligula. 
      
      Nullam vel odio at eros gravida fermentum. 
      Nullam nec purus id urna suscipit ultricies. 
      Nullam id diam.

      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit.

      Nullam ornare, nunc in tincidunt tincidunt, 
      nunc nisl pharetra elit,
      nec fermentum purus ligula nec ligula. 
      
      Nullam vel odio at eros gravida fermentum. 
      Nullam nec purus id urna suscipit ultricies. 
      Nullam id diam.`
    }
}
