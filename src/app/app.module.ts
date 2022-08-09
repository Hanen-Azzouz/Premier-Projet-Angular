import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListeProductsComponent } from './liste-products/liste-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ParentComponent,
    ChildComponent,
    TodolistComponent,
    AddProductComponent,
    ListeProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
