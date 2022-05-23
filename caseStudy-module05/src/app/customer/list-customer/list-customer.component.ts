import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer/customer';
import {ServiceService} from '../../service/service.service';
import {CustomerType} from '../../model/customer/customerType';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers : any;
  customerType : CustomerType[];
  customerDelete: Customer;
  p : number = 1;
  constructor(private custom : ServiceService,
              private matSnackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.custom.getCustomerList().subscribe(data => {
      this.customers = data;
    });
    this.custom.getCustomerTypeList().subscribe(data => {
      this.customerType = data;
    });
  }

  deleteCustomer(id: any) {
    this.custom.deleteCustomer(id).subscribe(()=> {
      this.loadData()
    })
  }

  getValue(customer: Customer) {
    this.customerDelete = customer;
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action);
  }

  searchByName(name: string) {
    this.custom.searchByName(name).subscribe( data => {
      this.customers = data;
      this.p = 1;
    })
  }
}
