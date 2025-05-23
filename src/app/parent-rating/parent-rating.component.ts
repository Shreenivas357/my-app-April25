import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-rating',
  templateUrl: './parent-rating.component.html',
  styleUrls: ['./parent-rating.component.css']
})
export class ParentRatingComponent {

  @Input() rating:number=0;
                                              
  star:number=0;
  display(data:number){
    this.rating=data;
    this.rating = Math.floor(this.rating * 2) / 2;
  }
  

}
