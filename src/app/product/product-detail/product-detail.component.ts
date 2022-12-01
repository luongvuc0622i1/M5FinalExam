import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // @ts-ignore
  tourForm: FormGroup;
  // @ts-ignore
  id: number;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      const product : any = this.getProduct(this.id);
      this.tourForm = new FormGroup({
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
      this.tourForm = new FormGroup({
        title: new FormControl(product.title),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      });
    });
  }
}
