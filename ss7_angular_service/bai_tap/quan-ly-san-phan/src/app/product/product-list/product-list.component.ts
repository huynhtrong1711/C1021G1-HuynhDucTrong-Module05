import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {CategoryList} from "../../model/categoryList";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  categoryList : CategoryList [];
  delete : Product;


  constructor(private productService: ProductService ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.productService.getAll().subscribe( data => {
      this.products= data
      console.log("đã lấy được data");
    }, error => {
      console.log("có lỗi khi lấy data");
    });
    this.productService.getCategory().subscribe( data => {
      this.categoryList= data
      console.log("đã lấy được data");
    }, error => {
      console.log("có lỗi khi lấy data");
    });
  }

}
