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
  constructor(private custom : ServiceService) { }

  ngOnInit(): void {
    this.customers = this.custom.customers;
  }

}
