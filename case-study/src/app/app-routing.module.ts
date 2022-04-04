import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {BodyComponent} from "./home-furama/body/body.component";
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";


const routes: Routes = [
  {
    path: "home",component:BodyComponent
  },
  {
    path: "employee", component:ListEmployeeComponent
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
