import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any = [
    { productname: 'pen',   price: 10, rating: 3, freedelivery: 'true' },
    { productname: 'phone', price: 20000, rating: 2, freedelivery: 'false' },
    { productname: 'shirt', price: 800, rating: 4, freedelivery: 'true' },
    { productname: 'cap',   price: 200, rating: 5, freedelivery: 'false' },
    { productname: 'mobile case', price: 300, rating: 3, freedelivery: 'true' },
    { productname: 'A C',     price: 35000, rating: 3, freedelivery: 'false' },
    { productname: 'fridge',     price: 22000, rating: 3, freedelivery: 'false' },
    { productname: 'TV',     price: 28000, rating: 3, freedelivery: 'false' },
    { productname: 'remote ',     price: 250, rating: 3, freedelivery: 'false' },
];

delete(i:number){
  alert(i);
  this.products.splice(i,1);
}

priceHightoLow(){
  this.products.sort((a:any,b:any)=>b.price-a.price);
}

priceLowtoHigh(){
  this.products.sort((a:any,b:any)=>a.price-b.price);
}

ratingLowtoHigh(){
  this.products.sort((a:any,b:any)=>a.rating-b.rating);
}

ratingHightoLow(){
  this.products.sort((a:any,b:any)=>b.rating-a.rating);
}

term:any='';
search(){
  this.products=this.products.filter((product:any)=>product.productname.includes(this.term));
}

totalprice(){
  let totalprice;
  totalprice=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
  alert(totalprice);
}


totalCartItems(){
  // let totalCartItems;
  // totalCartItems=this.products.reduce((sum:any,product:any)=>sum+product.totalCartItems);
  alert(this.products.length)
}

productname:string='';
price:number=0;
rating:number=0;
freedelivery:string='';

add(){
  let product={
    productname: this.productname,
    price: this.price,
    rating: this.rating,
    freedelivery: this.freedelivery
  }
   console.log(product);
  console.log(this.products[0]);
  this.products.unshift(product)
}
onlyfree(){
  this.products=this.products.filter((pro:any)=>pro.freedelivery=='true')
}

Applydiscount(){
  this.products=this.products.map((pro:any)=>{

    pro.price=pro.price-pro.price/2
    return pro
  })
}

Deliverycharges(){
  this.products=this.products.map((pro:any)=>{
    if(pro.freedelivery=="false"){
    pro.price=pro.price+10

    }
    return pro
  })
}



// Discount(){
//   this.products=this.products.discount = ((Discount) * (100/2));
// }



}

