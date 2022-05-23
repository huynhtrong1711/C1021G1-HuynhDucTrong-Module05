import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponentComponent} from "./benhAn/list-component/list-component.component";
import {EditComponent} from "./benhAn/edit/edit.component";


const routes: Routes = [
  {
    path: "", component: ListComponentComponent
  },
  {
    path: "edit/:id", component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
