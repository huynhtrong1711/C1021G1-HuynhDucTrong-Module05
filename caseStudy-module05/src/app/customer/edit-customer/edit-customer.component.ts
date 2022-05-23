import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer/customer';
import {ServiceService} from '../../service/service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerType} from '../../model/customer/customerType';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  public editFormCustomer: FormGroup;
  id: number;
  customer: Customer;
  listType: CustomerType[];

  constructor(private customerService: ServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private matSnackBar: MatSnackBar) {
    this.editFormCustomer = new FormGroup({
      id: new FormControl(''),
      code: new FormControl('', [Validators.required, Validators.pattern(/^(KH)(-)[0-9]{4}$/)]),
      name: new FormControl('', Validators.required),
      birthday: new FormControl('', [Validators.required, this.checkAge]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/(84|0[3|7|8|5|9])+([0-9]{8,9})$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required, Validators.minLength(6)]),
      customerType: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.getListType();
    this.id = this.activatedRoute.snapshot.params.id;
    this.customerService.getInfo(this.id).subscribe(value => {
      this.customer = value;
      this.editFormCustomer.setValue(this.customer);
      this.editFormCustomer.get('gender').setValue(this.customer.gender?'Nam' : (this.customer.gender==null?'LGBT' : 'Nữ'));
    });

  }


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
    this.customerService.getCustomerTypeList().subscribe(data => {
      this.listType = data;
    });
  }

  updateCustomer() {
    if (!this.editFormCustomer.invalid) {
      this.customerService.updateCustomer(this.activatedRoute.snapshot.params.id, this.editFormCustomer.value).subscribe(data => {
        this.router.navigateByUrl('/customer');
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action);
  }

}
