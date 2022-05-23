import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private readonly PRODUCT_API = 'http://localhost:3000/product';
  private readonly CATEGORY_API = 'http://localhost:3000/category';

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<Product[]>(this.PRODUCT_API);
  }

  getCategory() {
    return this.http.get<Category[]>(this.CATEGORY_API);
  }

  createProduct(data) {
    return this.http.post<Product>(this.PRODUCT_API, data)
  }

  deleteProduct(id : number) {
    return this.http.delete<Product>(this.PRODUCT_API + '/' + id);
  }

  getInfo(id : number) {
    return this.http.get<Product>(this.PRODUCT_API + '/' + id)
  }

  updateProduct(id : number, data:Product) {
    return this.http.put<Product>(this.PRODUCT_API + '/' + id, data)
  }

  search(name:string, nameCategory:string, price:string) {
    return this.http.get(this.PRODUCT_API + '?name_like=' + name + '&category.name_like=' + nameCategory + '&price_like=' + price)
  }
}
