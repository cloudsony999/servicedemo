import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProductsNameService {
  products:any;
  prod1:any;

  getFirstProduct()
  {
    this.products=['tv','mobile','AC'];
    this.prod1=this.products[2];
    return this.prod1;
  }

  constructor() { }
}
