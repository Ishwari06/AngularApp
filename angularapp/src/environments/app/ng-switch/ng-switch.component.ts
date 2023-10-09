import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
selectedProduct : string;
  constructor() { }

  ngOnInit() {
  }
getProductValue(product){

  this.selectedProduct=product.target.value
console.log('ngswitch',product.target.value);
}
}
