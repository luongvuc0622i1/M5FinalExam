import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductDetailComponent} from "./product/product-detail/product-detail.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";

const routes: Routes = [
  {
    path: 'products/list',
    component: ProductListComponent
  },
  {
    path: 'products/detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'products/create',
    component: ProductCreateComponent
  },
  // {
  //   path: 'products/edit/:id',
  //   component: ProductEditComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
