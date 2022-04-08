import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers : any [] = [];
  customerDelete: Customer;
  constructor(private custom : ServiceService) { }

  ngOnInit(): void {
    this.customers = this.custom.customers;
  }

  deleteCustomer(id: any) {
    this.customers.splice(id-1, 1)
  }

  getValue(customer: Customer) {
    this.customerDelete = customer;
  }
}
