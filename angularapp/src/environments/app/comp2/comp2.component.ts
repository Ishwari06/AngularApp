import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userName = 'Codemind';
  products = {};
  // I have injected my service into constructor
  constructor(private utilityService: UtilityService) { }

  ngOnInit() {

    this.utilityService.userName.subscribe(res =>{
      this.userName = res;
      console.log(res);
    })
   // const objService = new Service1Service();

    // this.products= this.objService.products;
  }

  // hello() {
  //   // created object of service
  //  // const objService = new Service1Service();
  //   this.objService.hello('dnyanesh');
  // }

  // sayHello () {
  // //  const objService = new Service1Service();
  //   console.log(this.objService);
  // }

  updateUserName(uname){
    this.userName =  uname.value;
    console.log('Method called', uname.value);
    this.utilityService.userName.next(uname.value);
  }
}
