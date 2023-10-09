import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

todaysDate= new Date();
price: number=5000;
emp=[]=[
  {id:'1', name:'jack'},
  {id:'2', name:'Ron'},]

myObservable;

  // //  namesearch: string = '';
  // // prodcutArr: any[] = [
  // //   {
  // //     prodNo: 1,
  // //     productName: 'Mobile',
  // //     productPrice: '50000 RS',
  // //     availability: 'Available'

  // //   },
  // //   {
  // //     prodNo: 2,
  // //     productName: 'TV',
  // //     productPrice: '150000 RS',
  // //     availability: 'Available'

  // //   },
  // //   {
  // //     prodNo: 3,
  // //     productName: 'Washing Machine',
  // //     productPrice: '150000 RS',
  // //     availability: 'Not Available'

  // //   },
  // //   {
  // //     prodNo: 4,
  // //     productName: 'Tab',
  // //     productPrice: '35000 RS',
  // //     availability: 'Available'

  //   }
  // ]
  constructor() { }

  ngOnInit() {
 
    this.myObservable=new Observable((observer)=>{

  console.log('myObservable start')
  setTimeout(()=>{
    observer.next('Ang B7')
  },1000)
  }).subscribe(res=>{
    console.log('after subscribe my custom observable',res);
    
  })
  }
}
