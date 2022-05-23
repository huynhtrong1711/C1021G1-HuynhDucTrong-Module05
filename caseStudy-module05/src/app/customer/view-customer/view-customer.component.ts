import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ServiceService} from '../../service/service.service';
import {ActivatedRoute} from '@angular/router';
import {Customer} from '../../model/customer/customer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  public formGroup: FormGroup;
  id: number;
  customer: Customer;

  constructor(private customerService: ServiceService,
              private activatedRoute: ActivatedRoute) {
    this.formGroup = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      code: new FormControl(''),
      birthday: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      idCard: new FormControl(''),
      address: new FormControl(''),
      customerType: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.customerService.getInfo(this.id).subscribe(value => {
      this.customer = value;
      this.formGroup.setValue(this.customer);
      this.formGroup.get('customerType').patchValue(this.customer.customerType.nameType);
      this.formGroup.get('gender').patchValue(this.customer.gender? 'Nam🙎🏻‍♂' : (this.customer.gender==null? 'LGBT' : 'Nữ 🙎🏻‍♀'))
    });
  }
}

