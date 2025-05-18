import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  ages:number[]=[10,20,43,65,75,64,72,42];
  states:string[]=['telangana','andhra pradesh','karnataka','tamilnadu','kerala'];
  products:any[]=[
    {name:'pen',price:20,rating:2.6},
    {name:'book',price:200,rating:4.8},
    {name:'shirt',price:700,rating:5.0},
    {name:'shoes',price:2000,rating:2.7},
    {name:'laptop',price:50000,rating:3.5},
    {name:'bike',price:200000,rating:1},
  ]

  today:any = new Date();


  
}
