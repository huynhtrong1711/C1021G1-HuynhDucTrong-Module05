import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee/employee';
import {EmployeeServiceService} from '../../service/employee-service.service';
import {Education} from '../../model/employee/education';
import {Division} from '../../model/employee/division';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees : Employee [];
  employeesDelete: Employee;
  educations : Education[];
  positionList : Position[];
  division : Division[];


  constructor( private custom : EmployeeServiceService) { }

  ngOnInit(): void {
   this.loadData();
  }

  loadData() {
    this.custom.getAll().subscribe(data => {
      this.employees = data;
      console.log("đã lấy được data");
    }, error => {
      console.log("có lỗi khi lấy data");
    });
    this.custom.getEducation().subscribe(data => {
      this.educations = data;
      console.log("đã lấy được data");
    }, error => {
      console.log("có lỗi khi lấy data");
    });
    this.custom.getDivision().subscribe(data => {
      this.division = data;
      console.log("đã lấy được data");
    }, error => {
      console.log("có lỗi khi lấy data");
    });
    this.custom.getPosition().subscribe(data => {
      this.positionList = data;
      console.log("đã lấy được data");
    }, error => {
      console.log("có lỗi khi lấy data");
    })
  }

  deleteEmployees(id: any) {
    this.employees.splice(id-1, 1);
  }

  getValue(employee: Employee) {
    this.employeesDelete = employee;
  }

  searchByName(value: string) {

  }
}
