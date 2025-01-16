import { CommonModule } from '@angular/common';
import { Component, Input, signal, computed, ViewChild, ElementRef, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-poem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poem.component.html',
  styleUrl: './poem.component.css'
})
export class PoemPage {
  @Input() poem: string = this.loremIpsum()
  @ViewChild('container') container!: ElementRef

  // Signals for reactive state management
  private scrollPosition = signal(0)
  private viewportHeight = signal(0)
  private contentHeight = signal(0)

  // Computed signal for scroll button visibility
  showScrollButton = computed(() => {
    const isContentLargerThanViewport = this.contentHeight() > this.viewportHeight();
    const isNotAtBottom = Math.ceil(
      this.contentHeight() - this.scrollPosition() - this.viewportHeight()
    ) > 20
    
    return isContentLargerThanViewport && isNotAtBottom
  });

  constructor() {
    // Initialize after DOM is ready
    afterNextRender(() => {
      this.updateDimensions()
      this.setupScrollListener()
      this.setupResizeListener()
    });
  }

  private setupScrollListener() {
    document.addEventListener('scroll', () => {
      this.scrollPosition.set(window.scrollY)
    }, { passive: true })
  }

  private setupResizeListener() {
    window.addEventListener('resize', () => {
      this.updateDimensions()
    }, { passive: true })
  }

  private updateDimensions() {
    this.viewportHeight.set(window.innerHeight)
    this.contentHeight.set(document.documentElement.scrollHeight)
  }

  scrollDown() {
    const scrollDistance = window.innerHeight * 0.8;
    window.scrollBy({
      top: scrollDistance,
      behavior: 'smooth'
    })
  }

  // Your existing loremIpsum method
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