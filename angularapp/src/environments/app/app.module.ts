import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';

import { DemodatabindingComponent } from './demodatabinding/demodatabinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { NgifComponent } from './ngif/ngif.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

// import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
// import { UserComponent } from './services/users/users.component';
// import { Service1Service} from './services/service1.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SimpleformComponent } from './simpleform/simpleform.component';
// import { Component, OnInit } from '@angular/core';
// import {NgForm} from '@angular/forms';

//import { Component, OnInit } from '@angular/core';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { FilterPipe } from './filter.pipe';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { Comp3Component } from './product/comp3/comp3.component';
import { Comp4Component } from './product/comp4/comp4.component';

// import {UserComponent} from './user/user.component';

import { Comp1Component } from './comp1/comp1.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AppRoutingModule } from './app-routing.module';
import { PostComponent } from './post/post.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { Service1Service } from './services/service1.service';
import { CustdirDirective } from './custdir.directive';
import { UtilityModule } from './utility.module';
import { HookComponent } from './hook/hook.component';
import { TodoComponent } from './todo/todo.component';
// import { RapidapiComponent } from './rapidapi/rapidapi.component';
 import { FirebaseComponent } from './firebase/firebase.component';
import { HeadersInterceptorService } from './headers-interceptor.service';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
// import { DatatbindingComponent } from './Databinding/databinding.component';

// import { map } from 'rxjs/operators';
// import { Observable, Subscription, from, interval, of} from 'rxjs';
//import { Comp2Component } from './comp1/comp1.component';
//import { PostService } from '../services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    DemodatabindingComponent,
    // DatatbindingComponent,
    ChildComponent,
    NgifComponent,
    ReactiveformComponent,
    NgforComponent,
    NgSwitchComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    SimpleformComponent,
    // CustdirDirective,
    PipedemoComponent,
    
    CountPipe,
    
    FilterPipe,
    
    FilterpipeComponent,
    
     PagenotfoundComponent,
    
    LoginComponent,
    
    HomeComponent,
    
    AboutusComponent,
    
    ContactusComponent,
    
    PostComponent,
    
    PostdetailsComponent,
    
    CustdirDirective,
    
    HookComponent,
    
    TodoComponent,
RapidapiComponent,
    
  FirebaseComponent,
    
    RxjsComponent,
    
    
    
    // UserComponent
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     //UserServiceModule,
    // ProductsModule
    UtilityModule
    

  ],
  providers: [Service1Service,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
