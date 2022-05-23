import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {Product} from '../../model/product';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {ViewProductComponent} from '../view-product/view-product.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products : any;
  category : Category[];
  deleteProduct : Product;
  p : number = 1;


  constructor( private service : ProductServiceService,
               private matSnackBar : MatSnackBar,
               private matDialog : MatDialog) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
     this.service.getAll().subscribe( data=> {
       this.products = data;
     })
    this.service.getCategory().subscribe(list => {
      this.category = list;
    })
  }

  getValue(product: Product) {
      this.deleteProduct = product;
  }


  productDelete(id: number) {
    this.service.deleteProduct(id).subscribe( () => {
      this.loadData();
    })
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action);
  }

  search(name: string, nameCategory: string, price: string){
      this.service.search(name, nameCategory,price).subscribe( data => {
        this.products = data;
        this.p = 1;
      })
  }

  openDialog(id: any) {
    const dialogRef = this.matDialog.open(ViewProductComponent, {
      width: "500px",
      data : id
    });
  }
}
