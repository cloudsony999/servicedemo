import { Component, OnInit } from '@angular/core';
import { GetProductsNameService } from '../get-products-name.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  prod1:any;


  constructor(private svc: GetProductsNameService) { }

  ngOnInit(){
    this.prod1=this.svc.getFirstProduct();
  }

}
