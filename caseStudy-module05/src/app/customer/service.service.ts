import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from './customer';
import {CustomerType} from './customerType';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly CUSTOMER_API='http://localhost:3000/Customer';
  private readonly CUSTOMERTYPE_API='http://localhost:3000/CustomerType';

  constructor(private http: HttpClient) { }

  getCustomerList( ) {
    return this.http.get<Customer[]>(this.CUSTOMER_API);
  }

  getCustomerTypeList() {
    return this.http.get<CustomerType[]>(this.CUSTOMERTYPE_API);
  }

  deleteCustomer(id : number) {
    return this.http.delete(`${this.CUSTOMER_API}/` + id);
  }
  getInfo(id: number) {
    return this.http.get<Customer>(this.CUSTOMER_API+ '/' + id);
  }
  getListTypeCustomer(){
    return this.http.get<CustomerType[]>(this.CUSTOMERTYPE_API);
  }
  createCustomer(data){
    return this.http.post<Customer>(this.CUSTOMER_API,data);
  }

  updateCustomer(id: number, data) {
    return this.http.put<Customer>(this.CUSTOMER_API + '/' + id, data);
  }
}
