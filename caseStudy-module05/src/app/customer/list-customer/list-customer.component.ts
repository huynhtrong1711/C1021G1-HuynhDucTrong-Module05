import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {ServiceService} from '../service.service';
import {CustomerType} from '../customerType';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers : Customer[];
  customer: Customer;
  customerType : CustomerType[];
  customerDelete: Customer;
  p : number = 1;
  constructor(private custom : ServiceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.custom.getCustomerList().subscribe(data => {
      this.customers = data;
      console.log("đã lấy được data");
    }, error => {
      console.log("có lỗi khi lấy data");
    });
    this.custom.getCustomerTypeList().subscribe(data => {
      this.customerType = data;
      console.log("đã lấy được data");
    }, error => {
      console.log("có lỗi khi lấy data");
    });
  }

  deleteCustomer(id: any) {
    this.custom.deleteCustomer(id).subscribe(()=> {
      console.log("Đã xóa thành công");
      this.loadData()
    })
  }

  getValue(customer: Customer) {
    this.customerDelete = customer;
  }
}
