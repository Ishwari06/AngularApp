import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  userName = 'Codemind';
  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.utilityService.userName.subscribe(res => {
      this.userName = res;
      console.log(res);
    })
  }

  updateUserName(uname){
    this.userName =  uname.value;
    console.log('Method called', uname.value);
    this.utilityService.userName.next(uname.value);
  }
}
