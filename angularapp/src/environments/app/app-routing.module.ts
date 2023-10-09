import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
// import { ProductComponent } from './product/product.component';
// import { LaptopComponent } from './product/laptop/laptop.component';
// import { TVComponent } from './product/tv/tv.component';
// import { TabletComponent } from './product/tablet/tablet.component';
// import { WashinMachineComponent } from './product/washing-machine/washin-machine.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostComponent } from './post/post.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { AuthgaurdGuard } from './AuthGaurd/authgaurd.guard';
import { TodoComponent } from './todo/todo.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ContentChild, DoCheck,
  ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
//import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent },

  { path: 'contactus', component: ContactusComponent },

  { path: 'aboutus', component: AboutusComponent },
  { path: 'product', canActivate: [AuthgaurdGuard], loadChildren: './products/products.module#ProductsModule' },


  { path: 'post', component: PostComponent },
  { path: 'postdetails/:id', component: PostdetailsComponent },
  { path: 'todo', component: TodoComponent },
{path: 'firebaseapi', component: FirebaseComponent},
{path: 'rapidapi', component: RapidapiComponent},
 {path: 'rxjs', component: RxjsComponent},
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  /**
   * 
   */
  constructor() {
    console.log('AppRoutingModule called');

  }
}
