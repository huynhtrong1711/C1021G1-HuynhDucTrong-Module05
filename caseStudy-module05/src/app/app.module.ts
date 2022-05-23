import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeFuramaComponent } from './home-furama/home-furama.component';
import { BodyComponent } from './home-furama/body/body.component';
import { HeaderComponent } from './home-furama/header/header.component';
import { FooterComponent } from './home-furama/footer/footer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeFuramaComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    ListCustomerComponent,
    ListEmployeeComponent,
    ViewCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
