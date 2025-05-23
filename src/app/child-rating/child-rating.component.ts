import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-rating',
  templateUrl: './child-rating.component.html',
  styleUrls: ['./child-rating.component.css']
})
export class ChildRatingComponent {

  // @Input() rating=number=0;

  
@Input() rating: number = 0;

  get fullStars(): number[] {
    return Array(Math.floor(this.rating));
  }

  get hasHalfStar(): boolean {
    return this.rating % 1 >= 0.5;
  }

  get emptyStars(): number[] {
    return Array(5 - Math.ceil(this.rating));
  }
}



