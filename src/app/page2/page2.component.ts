import { Component, OnInit } from '@angular/core';
import { GetProductsNameService } from '../get-products-name.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  prod1:any;
  

  constructor(private svc: GetProductsNameService) { }

  ngOnInit(){
    this.prod1=this.svc.getFirstProduct();
   
  }


}
