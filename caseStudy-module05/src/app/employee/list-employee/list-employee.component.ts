import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees : Employee [] = [];
  employeesDelete: Employee;

  constructor( private custom : EmployeeServiceService) { }

  ngOnInit(): void {
    this.employees = this.custom.employees;
  }

  deleteEmployees(id: any) {
    this.employees.splice(id-1, 1);
  }

  getValue(employee: Employee) {
    this.employeesDelete = employee;
  }
}
