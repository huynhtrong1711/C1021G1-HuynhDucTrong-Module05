import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeFuramaComponent} from './home-furama/home-furama.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {ViewCustomerComponent} from './customer/view-customer/view-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {ViewEmployeeComponent} from './employee/view-employee/view-employee.component';


const routes: Routes = [
  {
    path: "home",component: HomeFuramaComponent
  },
  {
    path: "customer", component:ListCustomerComponent
  },
  {
    path: "employee", component:ListEmployeeComponent
  },
  {
    path: "viewCustomer/:id", component:ViewCustomerComponent
  },
  {
    path: "create-customer", component: CreateCustomerComponent
  },
  {
    path: 'edit-customer/:id', component : EditCustomerComponent
  },
  {
    path: "viewEmployee/:id", component: ViewEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
