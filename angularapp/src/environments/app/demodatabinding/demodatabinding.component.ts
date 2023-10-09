//import { Input } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
//import { type } from 'os';

@Component({
  selector: 'app-demodatabinding',
  templateUrl: './demodatabinding.component.html',
  styleUrls: ['./demodatabinding.component.css']
  
})
export class DemodatabindingComponent implements OnInit {
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
name:string='jack sparrow';
username: "username"
  


//imageURL : string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXkYsg5i7ZvLhbSOYYeaCwHt8V7P5KNCSqpRBeBQ6lg&s'

isDisabled=false;

data={
  id : '101',
  name: 'harry'
}

department: string='support';
  constructor() { }

  //ngOnInit() {
  }
//SaveData(){
alert('button clicked');
//}
//}