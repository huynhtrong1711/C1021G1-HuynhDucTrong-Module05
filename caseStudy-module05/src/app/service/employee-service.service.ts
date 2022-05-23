import { Injectable } from '@angular/core';
import {Employee} from '../model/employee/employee';
import {HttpClient} from '@angular/common/http';
import {Education} from '../model/employee/education';
import {Division} from '../model/employee/division';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
   private readonly EMPLOYEE_URL = 'http://localhost:3000/Employee/';
   private readonly EDUCATION_URL = 'http://localhost:3000/Education';
   private readonly POSITION_URL = 'http://localhost:3000/Position';
   private readonly DIVISION_URL = 'http://localhost:3000/Division';

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<Employee[]>(this.EMPLOYEE_URL);
  }

  getEducation() {
    return this.http.get<Education[]>(this.EDUCATION_URL);
  }

  getPosition() {
    return this.http.get<Position[]>(this.POSITION_URL);
  }

  getDivision() {
    return this.http.get<Division[]>(this.DIVISION_URL);
  }

  saveEmployee(data) {
    return this.http.post<Employee>(this.EMPLOYEE_URL, data)
  }

  deleteEmployee(id : number) {
    return this.http.delete<Employee>(this.EMPLOYEE_URL + '/' + id)
  }

  updateEmployee(id : number, data) {
    return this.http.put<Employee>(this.EMPLOYEE_URL + '/' + id, data)
  }

  getEmployeeInfo(id : number):Observable<Employee> {
    return this.http.get<Employee>(this.EMPLOYEE_URL + id)
  }
}
