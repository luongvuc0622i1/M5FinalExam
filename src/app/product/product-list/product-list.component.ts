import {Component, OnChanges, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  ngOnChanges(): void{
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(productList => {
      this.products = productList;
    });
  }

  findProduct(product: any) {
    let id = product.id;
    return this.productService.findById(id);
  }
}
