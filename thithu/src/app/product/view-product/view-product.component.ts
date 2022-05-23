import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  id: number;
  product: Product;

  viewForm : FormGroup = new FormGroup( {
    id: new FormControl(''),
    name : new FormControl(''),
    price: new FormControl(''),
    quantity : new FormControl(''),
    color : new FormControl(''),
    category: new FormControl('')
  })

  constructor(private service: ProductServiceService,
              private activatedRoute: ActivatedRoute,
              public dialogRef: MatDialogRef<ViewProductComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.service.getInfo(this.data).subscribe(data => {
      this.product = data;
      this.viewForm.setValue(this.product);
      this.viewForm.get("category").setValue(this.product.category.name)
    })
  }

}
