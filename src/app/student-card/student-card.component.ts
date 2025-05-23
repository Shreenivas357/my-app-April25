import { Component } from '@angular/core';
import { StudentCardService } from '../student-card.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {

  studentcard:any=[];
        constructor(private _studentcardService:StudentCardService){
          _studentcardService.getstudentcard(1).subscribe((data:any)=>{
            console.log(data);
            this.studentcard=data;
            console.log(this.studentcard);
          },(err:any)=>{
            alert('internal Server Error')
          }
          )
        }

  keywords:any='';
  search(){
    this._studentcardService.filteredstudentcard(this.keywords).subscribe(
      (data:any)=>{
        console.log(data);
        this.studentcard=data
      }
    )
  }

  column:any='';
  order:any='';
  sort(){
    this._studentcardService.sortedstudentcard(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.studentcard=data
      },(err:any)=>{
        alert('internal server error!')
      }
    )
  }


  limit:number=0;
  page:number=0;
  pagination(){
    this._studentcardService.paginatedstudentcard(this.limit,this.page)
    .subscribe(
      (data:any)=>{
        console.log(data);
        this.studentcard=data;
      },(err:any)=>{
        alert('Internal Server Error!')
      }
    )
  }



}
