import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements AfterViewInit {
  items = [
    { 
      "title": "Fresh Organic Vegetables", 
      "description": "Our carrots are harvested fresh from our organic farm. Crisp and full of flavor, they’re perfect for salads, soups, and snacks.",
      "image": "veg3.jpg"
    },
    { 
      "title": "Garden-Fresh Vegetables", 
      "description": "Juicy and ripe, our tomatoes are grown with care and harvested at their peak. Ideal for cooking, salads, or just enjoying on their own.",
      "image": "veg2.jpg"
    },
    { 
      "title": "Heirloom Vegetables", 
      "description": "Our heirloom cucumbers are known for their rich flavor and crunchy texture. Perfect for refreshing salads or pickling.",
      "image": "veg1.jpg"
    },
    { 
      "title": "Farm-Fresh Chicken Eggs", 
      "description": "Our eggs come from happy, free-range chickens. Each egg is fresh, with a rich, golden yolk that adds taste and nutrition to your meals.",
      "image": "egg2.jpg"
    },
    { 
      "title": "Brown Organic Eggs", 
      "description": "Hand-collected from our organic farm, these brown eggs have a wholesome flavor and are packed with essential nutrients.",
      "image": "egg3.jpg"
    },
    { 
      "title": "Pure Cow's Milk", 
      "description": "Enjoy the creamy richness of our farm-fresh cow's milk. It's free from additives and preservatives, perfect for your daily nutrition.",
      "image": "milk2.jpg"
    },
    { 
      "title": "Organic Whole Milk", 
      "description": "Our whole milk is produced from cows fed on organic feed. Rich and creamy, it’s ideal for drinking, cooking, and baking.",
      "image": "milk.jpg"
    },
    { 
      "title": "Tender Goat Meat", 
      "description": "Our goat meat is tender and flavorful, sourced from well-cared-for goats. It’s a healthy alternative with a unique taste for your dishes.",
      "image": "gt1.jpg"
    }
  ];
  

  currentImage = this.items[0].image;

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  ngAfterViewInit() {
    this.scrollContainer.nativeElement.addEventListener('scroll', () => {
      this.onContainerScroll();
    });
  }

  onContainerScroll() {
    const scrollPosition = this.scrollContainer.nativeElement.scrollTop;
    const itemElements = this.scrollContainer.nativeElement.querySelectorAll('.scroll-item');

    itemElements.forEach((element: HTMLElement, index: number) => {
      if (element.offsetTop <= scrollPosition + window.innerHeight / 2 && element.offsetTop + element.clientHeight > scrollPosition + window.innerHeight / 2) {
        this.changeImage(index);
      }
    });
  }

  changeImage(index: number) {
    this.currentImage = this.items[index].image;
  }
}