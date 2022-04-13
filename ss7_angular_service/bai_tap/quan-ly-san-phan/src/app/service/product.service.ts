import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {CategoryList} from "../model/categoryList";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly PRODUCT_API='http://localhost:3000/Product';
  private readonly CATEGORY_API='http://localhost:3000/CategoryList';
  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<Product[]>(this.PRODUCT_API);
  }

  getCategory() {
    return this.http.get<CategoryList[]>(this.CATEGORY_API);
  }

  saveProduct(product) {
    return this.http.post<Product>(this.PRODUCT_API, product);
  }
  findById(id: number) {
    return this.http.get(this.PRODUCT_API + '/' + id);
  }

  updateProduct(id: number, product) {
    return this.http.put<Product>( this.PRODUCT_API + '/' + id, product)
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(this.PRODUCT_API + '/' + id)
  }
}
