import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentCardService {
  
  filteredStudentcard: any;
  sortedStudentcard: any;
  paginatedStudentcard: any;

   constructor(private _httpClient:HttpClient) {}
      
        getstudentcard():Observable<any>{
          return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student')
        }


        filteredstudentcard(term:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter='+term);
  }

  sortedstudentcard(column:any,order:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy='+column+"&order"+order);
  }

  paginatedstudentcard(limit:any,page:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit='+limit+'&page='+page);
  }







  }

