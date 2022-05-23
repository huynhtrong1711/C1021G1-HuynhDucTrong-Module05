import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../model/category';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  formGroup : FormGroup;
  categoryList : Category[];

  constructor(private service : ProductServiceService,
              private route : Router,
              private snackBar :MatSnackBar) {
    this.formGroup = new FormGroup( {
      name : new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(10000000)]),
      quantity : new FormControl('', [Validators.required, Validators.min(0)]),
      color : new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.getCategory()
  }

  getCategory() {
    this.service.getCategory().subscribe( data => {
      this.categoryList = data
    })
  }

  save(){
    if(!this.formGroup.invalid) {
      this.service.createProduct(this.formGroup.value).subscribe(()=> {
          this.route.navigateByUrl("")
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}
