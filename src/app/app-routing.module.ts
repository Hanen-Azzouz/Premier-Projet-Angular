import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ListeProductsComponent } from './liste-products/liste-products.component';

const routes: Routes = [

  {path:'ajouter',component:AddProductComponent},
  {path:'list',component:ListeProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
