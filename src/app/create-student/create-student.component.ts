import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentCardService } from '../student-card.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
    constructor(private _studentService:StudentCardService, private _router:Router,private _activatedRoute:ActivatedRoute){
      _activatedRoute.params.subscribe(
        (data:any)=>{
          console.log(data.id);
          this.id=data.id;
          if(this.id)(
  
          _studentService.getStudentcard(data.id).subscribe(
            (data:any)=>{
              console.log(data);
              this.studentForm.patchValue(data);
            },(err:any)=>{
              alert('Unable to fetch student data')
            }
          )
        )
        },(err:any)=>{
          alert('Internal Server Error')
        }
      )
    }
  
  
     id:any='';
    submit(){
      if(this.id){
        this._studentService.updateStudentcard(this.id,this.studentForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert('studentcard Created Successfully')
        this._router.navigateByUrl('/dashboard/studentcard')
      },(err:any)=>{
        alert('Internal server error')
      }
    ) 
    }else{
  
       console.log(this.studentForm.value);
      this._studentService.createStudentcard(this.studentForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert('Studentcard Created Scuccessfully')
        this._router.navigateByUrl('/dashboard/studentcard')
      },(err:any)=>{
        alert('Internal server error')
      })
    }
      }

  public studentForm:FormGroup= new FormGroup({
    name:new FormControl(),
    phone:new FormControl(),
    dob:new FormControl(),
    city:new FormControl(),
    email:new FormControl(),
    schoolcity:new FormControl(),
    schoolpin:new FormControl(),
  })

}
