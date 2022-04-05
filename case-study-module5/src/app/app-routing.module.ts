import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {HomeFuramaComponent} from "./home-furama/home-furama.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";


const routes: Routes = [
  {
    path: "home",component:HomeFuramaComponent
  },
  {
    path: "employee", component:ListEmployeeComponent
  },
  {
    path: "customer", component:ListCustomerComponent
  },
  {
    path: "edit-customer", component:EditCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
