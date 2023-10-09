import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';

import { LaptopComponent } from '../product/laptop/laptop.component';
import { TabletComponent } from '../product/tablet/tablet.component';
import { TVComponent } from '../product/tv/tv.component';
import { WashinMachineComponent } from '../product/washing-machine/washin-machine.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilityModule } from '../utility.module';





    const productsRoutes : Routes = [
      {path: '', component: ProductComponent, children: [
        {path: 'laptop', component: LaptopComponent},
        { path: 'tv', component: TVComponent},
        {path: 'tablet', component: TabletComponent},
        {path: 'washingmachine', component: WashinMachineComponent}
      ] },
    ]
  
    @NgModule({
      declarations: [
  
    ProductComponent,
    
    LaptopComponent,
    
    TVComponent,
    
    TabletComponent,
    
    WashinMachineComponent,
  ],
  imports: [
    CommonModule,
  
    RouterModule.forChild(productsRoutes),
UtilityModule
  ]
})
export class ProductsModule { 
/**
   *
   */
constructor() {
  console.log('ProductsModule called');
} 
}