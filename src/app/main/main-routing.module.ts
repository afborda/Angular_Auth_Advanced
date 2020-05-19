import { ServiceCallComponent } from './service-call/service-call.component';
import { ProductsComponent } from './products/products.component';
import { PeopleComponent } from './people/people.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'people' },
  { path: 'people', component: PeopleComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'service', component: ServiceCallComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
