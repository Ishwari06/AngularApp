import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com/users'; //api end point
  //inject this httpclient

  constructor(private httpCLient: HttpClient) { }
  getUsers(): Observable<any> {
    return this.httpCLient.get(this.url)
  }

}
