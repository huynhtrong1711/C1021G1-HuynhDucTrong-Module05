import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {CategoryList} from "../../model/categoryList";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  listType : CategoryList[];

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    categoryList : new FormControl()
  });
  constructor(private productService: ProductService, private router : Router) { }

  ngOnInit(): void {
    this.getCategory()
  }

  getCategory() {
      this.productService.getCategory().subscribe(data => {
        this.listType = data;
    })
  }

  submit() {
    this.productService.saveProduct(this.productForm.value).subscribe( () => {
        this.router.navigateByUrl("/list")
    })
  }

}
