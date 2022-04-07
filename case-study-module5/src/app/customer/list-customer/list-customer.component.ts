import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from "../dto/customer-service.service";



@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customerList: any[] = [];

  constructor(private customla : CustomerServiceService) { }

  ngOnInit(): void {
   this.customerList =  this.customla.customers;
  }

}
