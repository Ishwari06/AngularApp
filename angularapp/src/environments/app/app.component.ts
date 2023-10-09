import { Component } from '@angular/core';
import { Subscription, from, interval, of } from "rxjs";
import { map } from 'rxjs/internal/operators/map';
// import {map} from 'rxjs/operator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  sub: Subscription;
  ngOnInit() {
    const source = of([1, 2, 3]);  //this is our observable 
    source.subscribe(res => {
      console.log('rxjs of', res);

    })

    const source1 = from([1, 2, 3]);
    source1.subscribe(res => {
      console.log('from rxjs', res);

    })

    

    const streamVideo = interval(10);
    streamVideo.pipe
    (
      map(data=>2)
    ).subscribe(res=>{
      console.log('after manipulate observable',res);
      
    })
  }
    ngOnDestroy()
    {
      this.sub.unsubscribe();
    }


    // const streamVideo = interval(1000);
    // stramVideo.subscribe(res => {
    //   console.log('interval rxjs of', res)


  }
  //   title = 'angularapp  batch7';
  //   count: number =100000000000;
  // data:string='red';

  // isDestroy: boolean = true;

  // getDataFromChild(value){
  // console.log(value);
  // }
  //   OnTextValuCHanges(val){
  //     this.data = val.value;
  //     alert(val.value);

  // }
  // OnDestroy(){
  //   this.isDestroy = false;



