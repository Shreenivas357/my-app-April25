import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PinterestGalleryService {

  constructor(private _httpClient:HttpClient) {}
    
      getpinterestgallery():Observable<any>{
        return this._httpClient.get('https://picsum.photos/v2/list?page=1&limit=100')
      }
}
