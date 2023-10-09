import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  userName = 'Codemind';
  test;
  // products = {};
  // ;
  // Inject the Service1
  constructor(private utilityService: UtilityService) {
     
    // this.utilityService.userName.subscribe(res => {
    //   console.log('getting value from subject', res);
    // })
   }

  ngOnInit() {

    this.utilityService.userName.subscribe(res => {
      this.userName = res;
      console.log('res from subject', res);
    })
    
   // const objService = new Service1Service();
  //   this.products = this.objService.products;

  //  var obj = this.objUser.getUsers();
   
  //  obj.subscribe(res=> {
  //   console.log(res)
  //  })

  }

  // hello() {
  //   // created object of service
  //   //const objService = new Service1Service();
  //   this.objService.hello('Dnyanesh');
  // }
  
  updateUserName(uname){
    this.userName = uname.value;
    //console.log('Method called', uname.value);

    // we are inserting value inside observable
    this.utilityService.userName.next(uname.value);
  }
}
