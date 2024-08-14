import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component implements AfterViewInit {
  @ViewChildren('galleryItem') galleryItems!: QueryList<ElementRef>;

  images = [
    { src: 'farm1.jpg', alt: 'Chickens' },
    { src: 'farm2.jpg', alt: 'Meats' },
    { src: 'farm3.webp', alt: 'Cow Milk' },
    { src: 'farm4.jpg', alt: 'Eggs' },
    { src: 'farm5.jpg', alt: 'Meats' },
    { src: 'farm6.jpg', alt: 'Vegetables' }
  ];

  constructor() {}

  ngAfterViewInit() {
    fromEvent(window, 'scroll')
      .pipe(debounceTime(100))
      .subscribe(() => this.checkVisibility());

    // Check visibility on component load
    this.checkVisibility();
  }

  checkVisibility() {
    this.galleryItems.forEach(item => {
      const rect = item.nativeElement.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (inView) {
        item.nativeElement.classList.add('in-view');
      }
    });
  }
}
