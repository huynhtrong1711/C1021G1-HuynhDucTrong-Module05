import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer/customer';
import {CustomerType} from '../model/customer/customerType';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly CUSTOMER_API_LIST='http://localhost:8080/customer';
  private readonly CUSTOMER_API_GET_INFO='http://localhost:8080/customer';
  private readonly CUSTOMER_API_DELETE='http://localhost:8080/delete-customer';
  private readonly CUSTOMER_API_CREATE='http://localhost:8080/create-customer';
  private readonly CUSTOMER_API_UPDATE='http://localhost:8080/edit-customer';
  private readonly CUSTOMERTYPE_API='http://localhost:8080/customerType';

  constructor(private http: HttpClient) { }

  getCustomerList( ) {
    return this.http.get<Customer[]>(this.CUSTOMER_API_LIST);
  }

  getCustomerTypeList() {
    return this.http.get<CustomerType[]>(this.CUSTOMERTYPE_API);
  }

  deleteCustomer(id : number) {
    return this.http.delete(this.CUSTOMER_API_DELETE + '/' + id);
  }

  getInfo(id: number) {
    return this.http.get<Customer>(this.CUSTOMER_API_GET_INFO+ '/' + id);
  }

  createCustomer(customer){
    const header = {'content-type': 'application/json'};
    console.log(customer);
    const body = JSON.stringify(customer);
    console.log(body);
    return this.http.post<Customer>(this.CUSTOMER_API_CREATE, body, {headers: header});
  }

  updateCustomer(id: number, data) {
    return this.http.put<Customer>(this.CUSTOMER_API_UPDATE + '/' + id, data);
  }

  searchByName(name:string) {
    return this.http.get(this.CUSTOMER_API_LIST + '?name_like=' + name)
  }
}
