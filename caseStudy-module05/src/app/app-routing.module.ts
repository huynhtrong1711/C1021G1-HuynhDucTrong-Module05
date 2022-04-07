import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeFuramaComponent} from './home-furama/home-furama.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';


const routes: Routes = [
  {
    path: "home",component: HomeFuramaComponent
  },

  {
    path: "customer", component:ListCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
