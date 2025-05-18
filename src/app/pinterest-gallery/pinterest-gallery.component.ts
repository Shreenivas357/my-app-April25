import { Component } from '@angular/core';
import { PinterestGalleryService } from '../pinterest-gallery.service';

@Component({
  selector: 'app-pinterest-gallery',
  templateUrl: './pinterest-gallery.component.html',
  styleUrls: ['./pinterest-gallery.component.css']
})
export class PinterestGalleryComponent {


    pinterestgallery:any=[];
      constructor(private _pinterestgalleryService:PinterestGalleryService){
        _pinterestgalleryService.getpinterestgallery().subscribe((data:any)=>{
          console.log(data);
          this.pinterestgallery=data;
          console.log(this.pinterestgallery);
        },(err:any)=>{
          alert('internal Server Error')
        }
        )
      }

}
