import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router, private _authService: AuthService) { }

  ngOnInit() {
  }

  login(email, pass) {
    // console.log(email.value, pass.value);
    // this._route.navigate(['home']);

   var output = this._authService.checkUserNameAndPass(email.value, pass.value);
   alert(output);

  if (output) {
    this._route.navigate(['/home']);
  } else {
    this._route.navigate(['/login']);
  }
  }
}