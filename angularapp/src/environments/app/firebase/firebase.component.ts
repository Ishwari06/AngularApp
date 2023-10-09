import { Component, OnInit } from '@angular/core';
import { FirebaseapiService } from '../services/firebase.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
//inject the firebase service
  constructor(private _firebaseService: FirebaseapiService) { }

  ngOnInit() {
    this._firebaseService.CreatePost().subscribe(res=> {
      console.log('firebase',res);
      
  }) 
   return this._firebaseService.getPostDataFirebase().subscribe(res => {
    console.log('get data from firebase', res);
  })

}}
