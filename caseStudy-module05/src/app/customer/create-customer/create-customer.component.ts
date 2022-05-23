import { Component, OnInit } from '@angular/core';
import {CustomerType} from '../../model/customer/customerType';
import {Router} from '@angular/router';
import {ServiceService} from '../../service/service.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  listType: CustomerType[];

  constructor(private serviceCustomer: ServiceService, private router: Router,
              private matSnackBar : MatSnackBar) {
  }


  ngOnInit(): void {
    this.getListType();
  }

  createCustomerForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.pattern(/^(KH)(-)[0-9]{4}$/)]),
    name: new FormControl('', [Validators.required,]),
    birthday: new FormControl('', [Validators.required, this.checkAge]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/(84|0[3|7|8|5|9])+([0-9]{8,9})$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)]),
    customerType: new FormControl('', [Validators.required]),
  });

  // onSubmit(createCustomerForm: FormGroup) {
  //   this.createCustomerForm = createCustomerForm.value;
  // this.serviceCustomer.createCustomer(this.createCustomerForm.value).subscribe(() => {
  //   console.log("đã lấy được data");
  // })
  //   console.log(createCustomerForm.value);
  // }

  checkAge(birthday: AbstractControl) {
    const birth = new Date(birthday.value);
    const date = Date.now() - birth.getTime() - 86400000;
    const time = new Date(date);
    const age = time.getUTCFullYear() - 1970;
    if (age < 18) {
      return {'ageUnder': true};
    }
    return null;
  }

  getListType() {
    this.serviceCustomer.getCustomerTypeList().subscribe(data => {
      this.listType = data;
    });
  }

  saveCustomer() {
    if (!this.createCustomerForm.invalid) {
      this.serviceCustomer.createCustomer(this.createCustomerForm.value).subscribe(() => {
        this.router.navigateByUrl("/customer");
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action);
  }

}
