import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  productForm: FormGroup = new FormGroup({
    // id: new FormControl(),
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  })

  submit(){
    const tour= this.productForm.value;
    this.productService.save(tour).subscribe(() =>{
      this.productForm.reset();
      alert('Tạo mới thành công');
    }, error => {
      console.log(error)
    });
  }
}
