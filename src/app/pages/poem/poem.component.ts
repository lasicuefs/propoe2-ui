import { CommonModule } from '@angular/common';
import { Component, Input, signal, computed, ViewChild, ElementRef, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-poem',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './poem.component.html',
  styleUrl: './poem.component.css'
})
export class PoemPage {
  @Input() poem: string = this.loremIpsum()
  @ViewChild('mainContainer') mainContainer!: ElementRef<HTMLElement>

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
    // Listen to scroll events on the main container instead of document
    this.mainContainer.nativeElement.addEventListener('scroll', () => {
      this.scrollPosition.set(this.mainContainer.nativeElement.scrollTop)
    }, { passive: true })
  }

  private setupResizeListener() {
    // Update dimensions when window resizes
    window.addEventListener('resize', () => {
      this.updateDimensions()
    }, { passive: true })
  }

  private updateDimensions() {
    const mainElement = this.mainContainer.nativeElement;
    // Use clientHeight for viewport height (visible area)
    this.viewportHeight.set(mainElement.clientHeight)
    // Use scrollHeight for total content height
    this.contentHeight.set(mainElement.scrollHeight)
  }

  scrollDown() {
    const mainElement = this.mainContainer.nativeElement;
    const scrollDistance = mainElement.clientHeight * 0.8;
    mainElement.scrollBy({
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