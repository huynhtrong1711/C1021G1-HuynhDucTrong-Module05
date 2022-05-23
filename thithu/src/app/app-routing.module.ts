import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';
import {ListProductComponent} from './product/list-product/list-product.component';
import {ViewProductComponent} from './product/view-product/view-product.component';


const routes: Routes = [
  {
    path: "createProduct", component: CreateProductComponent
  },
  {
    path: "editProduct/:id" , component: EditProductComponent
  },
  {
    path : "", component: ListProductComponent
  },
  {
    path: 'viewProduct/:id', component : ViewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
