import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeFuramaComponent } from './home-furama/home-furama.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { BodyComponent } from './home-furama/body/body.component';
import { HeaderComponent } from './home-furama/header/header.component';
import { FooterComponent } from './home-furama/footer/footer.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { AppRoutingModule} from "./app-routing.module";
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeFuramaComponent,
    ListCustomerComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    ListEmployeeComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
