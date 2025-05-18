import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private _router: any;

  constructor(private _loginService:LoginService){}
    public loginForm:FormGroup=new FormGroup({
      email:new FormControl(),
      password:new FormControl(),
    })

    login(){
      console.log(this.loginForm.value);
      this._loginService.userlogin(this.loginForm.value).subscribe(
        (data:any)=>{

          alert("Login Successful")
          sessionStorage.setItem('token',data.token)
          this._router.navigateByUrl('/dashboard')
        },(err:any)=>{
          alert('Internal Server Error')
        }
      )
    }
  }


