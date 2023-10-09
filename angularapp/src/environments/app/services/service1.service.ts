import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }


hello(){
  alert('hello all');
}
products =[
  {name: 'laptop', id : '101'},
  {name: 'mobile', id : '102'},
  {name: 'tv', id : '103'},
  {name: 'tab', id : '104'}]
}