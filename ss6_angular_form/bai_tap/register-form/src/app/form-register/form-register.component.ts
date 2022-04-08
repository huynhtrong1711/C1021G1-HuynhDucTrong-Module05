import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  password : string;

  registerForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.registerForm  = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("",[Validators.required, Validators.pattern(this.password)]),
      name: new FormControl(""),
      country: new FormControl(""),
      age: new FormControl(""),
      gender: new FormControl(""),
      phone: new FormControl(""),
    })
  }

  createForm(){
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
