import { CommonModule } from '@angular/common'
import { Component, ViewChild, ElementRef, inject, signal, computed } from '@angular/core'
import { RouterLink } from '@angular/router'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { Forms } from '../../services/forms.service'

@Component({
  selector: 'app-poem',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './poem.component.html',
  styleUrl: './poem.component.css'
})
export class PoemPage {
  @ViewChild('mainContainer') mainContainer!: ElementRef<HTMLElement>
  poem$: Observable<string> = of('')
  http = inject(HttpClient)

  private scrollPosition = signal(0)
  private viewportHeight = signal(0)
  private contentHeight = signal(0)

  showScrollButton = computed(() => {
    const isContentLargerThanViewport = this.contentHeight() > this.viewportHeight();
    const isNotAtBottom = Math.ceil(
      this.contentHeight() - this.scrollPosition() - this.viewportHeight()
    ) > 20;
    const isAtTop = this.scrollPosition() < 20;
    
    return isContentLargerThanViewport && (isNotAtBottom || isAtTop);
  });

  constructor(private forms: Forms) {}

  ngOnInit() {
    this.fetchPoem();
  }

  private fetchPoem() {
    this.poem$ = this.http.post<{ content: string[] }>('http://localhost:8000/poem/', this.forms.dataJson())
      .pipe(
        map( data => data.content.join('\n')),
             catchError(() => of('Desculpa, mas seu poema não pode ser gerado.\nTente gerar um novo.'))
      )
  }

  scrollDown() {
    const mainElement = this.mainContainer.nativeElement
    const scrollDistance = mainElement.clientHeight * 0.8
    mainElement.scrollBy({
      top: scrollDistance,
      behavior: 'smooth'
    });
  }
}