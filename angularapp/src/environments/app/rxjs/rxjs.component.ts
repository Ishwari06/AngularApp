import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, forkJoin, from, interval, of } from 'rxjs';
import { filter, map, mergeMap, takeLast } from 'rxjs/operators';
import { UserService } from '../services/users.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Post } from '../models/post';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  sub: Subscription;

  users = [
    { name: 'Dnyanesh', id: '101', gender: 'Male' },
    { name: 'Test', id: '102', gender: 'Female' },
    { name: 'Jack', id: '103', gender: 'Male' }

  ]
  randomNames = ["Dyanesh", "codemind", "angular", "HTML", "Javascript"];

  userName;
  posts;
  albums;

  USERS = 'https://jsonplaceholder.typicode.com/users';
  POSTS = 'https://jsonplaceholder.typicode.com/posts';

  data: [User[], Post[]];
  constructor(private userService: UserService, private http: HttpClient) {
    this.posts = [];
    this.albums = [];
    this.userName = 'Codemind';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit() {

    // this.getDataByUsingSubscribe();
    this.getDataByUsingForkJoin();


    // this.userService.getUsers().pipe(
    //   filter(u=> u.name == 'Clementina DuBuque')
    // ).subscribe(res => {
    //   console.log('after filter operatr ', res)
    // })

    // custom observable
    // const source=from(this.users);
    //filter out the people with age under 30
    //  const result=source.pipe(filter(p=>p.age)30));
    // const result= source.pipe(filter(p=>p.gender =='Male'));
    //  result.subscribe(res=>{
    //   console.log('after filter value',res);

    //    const obs=from(this.randomNames);
    //    obs.pipe(
    //      takeLast(2)
    //  )  .subscribe(res=>{
    //      console.log('take top 2',res);
    //  })      

    const obs = from(this.randomNames);
    obs.pipe(
      takeLast(2)
    ).subscribe(res => {
      console.log('take top 2', res);
    })
  }

  getDataByUsingSubscribe() {
    this.http.get('https://jsonplaceholder.typicode.com/users?username=Bret')
      .pipe(map(users => users[0]))
      .subscribe(users => {

        console.log('rxjs username', this.userName);
        console.log('first api call', users);
        this.http.get(`https://jsonplaceholder.typicode.com/posts?id=${users.id}`)
          .subscribe(posts => {
            this.posts = posts;

            console.log('rxjs nested post data', this.posts);
          });

        this.http.get(`https://jsonplaceholder.typicode.com/albums?id=${users.id}`)
          .subscribe(albums => {
            this.albums = albums;
            console.log('rxjs nested albums ', this.albums);
          })
      })
  }



  getDataByUsingMergeMap() {
    this.http.get('https://jsonplaceholder.typicode.com/users?username=Bret').pipe(
      map(users => {
        const user = users[0];
        this.userName = user.username;
        return user;

      }),
      mergeMap(user => this.http.get('https://jsonplaceholder.typicode.com/albums?id=${users.id}'))
    ).subscribe(posts => {
      this.posts = posts;
      console.log('after merge map', this.posts);

    });


  }
  getDataByUsingForkJoin() {

    const users = this.http.get<User[]>(this.USERS);
    const posts = this.http.get<Post[]>(this.POSTS);

    //  users.subscribe(res => {
    //    console.log('users data in rxjs comp', res);
    //  });

    //  posts.subscribe(res=> {
    //    console.log('posts data in rxjs comp', res);
    //  });

    forkJoin([users, posts]).subscribe(res => {
      this.data = res;
      console.log('after fork join applied', res);
    })


  }


}

