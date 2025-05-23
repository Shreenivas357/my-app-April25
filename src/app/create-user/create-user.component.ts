import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { tcsMail } from '../validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
// addCard() {
// throw new Error('Method not implemented.');
// }

  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayScholar'){
          this.userForm.addControl('busFee',new FormControl());
          this.userForm.removeControl('hostelFee');
        }else{
          this.userForm.addControl('hostelFee',new FormControl());
          this.userForm.removeControl('busFee');
        }
      }
    )
  }

  public userForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]), 
    mobile:new FormControl(),
    email:new FormControl('',[Validators.required,Validators.minLength(12),Validators.maxLength(20),tcsMail]),
    password:new FormControl(),
    address:new FormGroup({
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl()
      }),

      type:new FormControl(),
    // busfee:new FormControl(),
    // hostelfee:new FormControl()

    cards:new FormArray([])
    })

    get CardsFormArray(){
      return this.userForm.get('cards') as FormArray;
    }

    addcard(){
      this.CardsFormArray.push(
        new FormGroup({
          number:new FormControl(),
          name:new FormControl(),
          expiry:new FormControl(),
          cvv:new FormControl()
        })
      )
    }

    deleteCard(i:number){
      this.CardsFormArray.removeAt(i);
    }

    submit(){
      console.log(this.userForm);
    }
    
  }


