import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { PeopleComponent } from './people/people.component';
import { ProductsComponent } from './products/products.component';
import { ServiceCallComponent } from './service-call/service-call.component';


@NgModule({
  declarations: [PeopleComponent, ProductsComponent, ServiceCallComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
