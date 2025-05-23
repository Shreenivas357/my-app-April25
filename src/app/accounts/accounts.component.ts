import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  accounts:any=[];
          constructor(private _accountsService:AccountsService){
            _accountsService.getAccounts().subscribe((data:any)=>{
              console.log(data);
              this.accounts=data;
              console.log(this.accounts);
            },(err:any)=>{
              alert('internal Server Error')
            }
            )
          }

    delete(id:number){
    if(confirm('Are you sure to delete?')==true) {
    this._accountsService.deleteAccount(id).subscribe(
      (data:any)=>{
        alert('Record deleted successfully!');
      },(err:any)=>{
        alert('Internal Server Error!');
      }
    )
  }else{
    alert('you have cancelled delete')
  }

} 


}
