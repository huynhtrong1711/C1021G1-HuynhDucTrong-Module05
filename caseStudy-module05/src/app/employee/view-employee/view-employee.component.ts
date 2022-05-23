import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Employee} from '../../model/employee/employee';
import {EmployeeServiceService} from '../../service/employee-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  public formGroup: FormGroup;
  id: number;
  employees : Employee;

  constructor(private service : EmployeeServiceService,
              private activatedRoute : ActivatedRoute) {
    this.formGroup = new FormGroup( {
      id : new FormControl(''),
      name : new FormControl(''),
      code : new FormControl(''),
      birthday : new FormControl(''),
      gender : new FormControl(''),
      idCard : new FormControl(''),
      phone : new FormControl(''),
      salary : new FormControl(''),
      email : new FormControl(''),
      address : new FormControl(''),
      positions : new FormControl(''),
      educations : new FormControl(''),
      divisions : new FormControl('')
    })
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.service.getEmployeeInfo(this.id).subscribe( value => {
      console.log(value);
      this.employees = value;
      this.formGroup.setValue(this.employees)
      console.log(this.formGroup);
      this.formGroup.get('positions').patchValue(this.employees.positions.namePosition)
      console.log(this.employees.positions.namePosition);
      this.formGroup.get('educations').patchValue(this.employees.educations.nameEducation)
      this.formGroup.get('divisions').patchValue(this.employees.divisions.nameDivision)
    })
  }

}
