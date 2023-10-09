import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  template: `<div> this is inline template </div>
  <div>  Ang B7</div>`,
  //templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

} 