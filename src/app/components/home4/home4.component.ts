import { Component, ElementRef, Renderer2, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrl: './home4.component.css'
})
export class Home4Component implements AfterViewInit {
  @ViewChild('overlayText') overlayText!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Handle scroll event
    window.addEventListener('scroll', () => this.onScroll());
  }

  onScroll() {
    const element = this.overlayText.nativeElement;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the element is in the viewport
    if (rect.top < windowHeight && rect.bottom >= 0) {
      this.renderer.setStyle(element, 'opacity', '1');
      this.renderer.setStyle(element, 'transition', 'opacity 3s ease-out, transform 1s ease-out');
    }
  }
}