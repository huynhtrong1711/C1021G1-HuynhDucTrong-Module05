import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  category : Category[];
  editForm : FormGroup =new FormGroup( {
    id: new FormControl(''),
    name : new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(10000000)]),
    quantity : new FormControl('', [Validators.required, Validators.min(0)]),
    color : new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  });
  id: number;
  product: Product;

  constructor( private service : ProductServiceService,
               private activatedRoute : ActivatedRoute,
               private router : Router) {

  }

  ngOnInit(): void {
    this.getCategory();
    this.id = this.activatedRoute.snapshot.params.id;
    this.service.getInfo(this.id).subscribe(value => {
      console.log(value);
      this.product = value;
      this.editForm.patchValue(this.product)
      console.log(this.editForm.value);
    })


  }

  getCategory() {
    this.service.getCategory().subscribe(data=>{
      this.category = data;
      console.log(this.category);

    })
  }

    updateProduct() {
     if (!this.editForm.invalid) {
       this.service.updateProduct(this.activatedRoute.snapshot.params.id, this.editForm.value).subscribe(()=> {
         this.router.navigateByUrl('')
       })
     }
    }

}
