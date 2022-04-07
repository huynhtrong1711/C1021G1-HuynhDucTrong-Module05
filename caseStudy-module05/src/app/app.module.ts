import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeFuramaComponent } from './home-furama/home-furama.component';
import { BodyComponent } from './home-furama/body/body.component';
import { HeaderComponent } from './home-furama/header/header.component';
import { FooterComponent } from './home-furama/footer/footer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeFuramaComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    ListCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
