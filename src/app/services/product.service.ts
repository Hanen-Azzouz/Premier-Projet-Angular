import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  afficherProoducts()
  {
  

  }

  addProduct(data:Product)
  {
    return this.http.post('http://localhost:3000/products',data);


  }

}

