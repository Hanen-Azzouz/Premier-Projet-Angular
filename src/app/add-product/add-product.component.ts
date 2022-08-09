import { Component, OnInit } from '@angular/core';
import { Product } from '../model/products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private s:ProductService) { }

  ngOnInit(): void {
  }
save(f:Product){
this.s.addProduct(f).subscribe(
  ()=>{console.log(f);}
);
}
}
