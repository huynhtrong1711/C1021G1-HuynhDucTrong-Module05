import { Component, OnInit } from '@angular/core';
import {Education} from '../../model/employee/education';
import {Division} from '../../model/employee/division';
import {EmployeeServiceService} from '../../service/employee-service.service';
import {Router} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  positions : Position[];
  educations : Education[];
  divisions : Division[];

  constructor(private employeeService : EmployeeServiceService,
              private route : Router) { }

  ngOnInit(): void {
  }

  createEmployeeForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.pattern(/^(NV)(-)[0-9]{4}$/)]),
    name: new FormControl('', [Validators.required,]),
    birthday: new FormControl('', [Validators.required, this.checkAge]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/(84|0[3|7|8|5|9])+([0-9]{8,9})$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    salary: new FormControl('', [Validators.required, Validators.min(0)]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)]),
    positions: new FormControl('', [Validators.required]),
    educations: new FormControl('', [Validators.required]),
    divisions: new FormControl('', [Validators.required]),
  });


  checkAge(birthday: AbstractControl) {
    console.log(birthday.value);
    const birth = new Date(birthday.value);
    const date = Date.now() - birth.getTime() - 86400000;
    const time = new Date(date);
    console.log(time.getUTCFullYear());
    const age = time.getUTCFullYear() - 1970;
    console.log(age);
    if (age < 18) {
      return {'ageUnder': true};
    }
    return null;
  }

}
