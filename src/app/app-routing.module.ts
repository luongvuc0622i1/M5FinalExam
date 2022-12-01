import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";

const routes: Routes = [
  {
    path: 'products/list',
    component: ProductListComponent
  }
  // {
  //   path: 'tours/create',
  //   component: TourCreateComponent
  // },
  // {
  //   path: 'tours/edit/:id',
  //   component: TourEditComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
