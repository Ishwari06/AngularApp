import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input('msg')  dataInput: string;
data;
@Output() foodEvent: EventEmitter<string>=new  EventEmitter<string>();
  constructor() {
    
   }

  ngOnInit() {

    console.log('input data from parent',this.dataInput);
  }
  addToFood(){
     
     this.foodEvent.emit('mango');

       
    }
  }



