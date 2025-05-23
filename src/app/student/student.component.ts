import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { StudentCardService } from '../student-card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {


  

  id:any='';
  student:any='';
  constructor(private _activatedRoute:ActivatedRoute, private _studentService:StudentCardService,){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        console.log(this.id);
      },(err:any)=>{
         alert('Internal Server Error!')
      }
    )

    _studentService.getStudentcard(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.studentForm.patchValue(data)
      },(err:any)=>{
        alert('Internal Server Error!');
      }
    )
  }

   public studentForm:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]),
    phone:new FormControl(), 
    dob:new FormControl(),
    city:new FormControl(),
    email:new FormControl(),
   });


_router: any;
  //  submit(){
  //   console.log(this.studentForm.value);
  //   this._studentService.createstudent(this.studentForm.value).subscribe(
  //     (data:any)=>{
  //       console.log(data);
  //       alert('Student Created Successfully')
  //       this._router.navigateByUrl('/dashboard/studentcard')
  //     },(err:any)=>{
  //       alert('Internal Server Error')
  //     }
  //   )

  //  }

   
   
}
