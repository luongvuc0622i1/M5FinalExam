import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  // @ts-ignore
  productForm: FormGroup;
  // @ts-ignore
  id: number;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      const product : any = this.getProduct(this.id);
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        title: new FormControl(product.title),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      });
    });
  }

  ngOnInit(): void {
  }


  getProduct(id: number){
    this.productService.findById(id).subscribe(product =>{
      this.productForm = new FormGroup({
        title: new FormControl(product.title),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      });
    });
  }

  submit(id: number){
    const product = this.productForm.value;
    this.productService.edit(id, product).subscribe(() =>{
      alert('Update thành công');
    }, error => {
      console.log(error)
    });
  }
}
