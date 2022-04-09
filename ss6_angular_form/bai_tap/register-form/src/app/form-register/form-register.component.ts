import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {


  country: string[] = [ "Việt Nam","Mỹ", "Lào", "Campuchia"]



  registerForm: FormGroup;


  constructor() { }

  ngOnInit(): void {

    this.registerForm  = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      passWordGroup: new FormGroup({
        passwords: new FormControl("", [Validators.required, Validators.minLength(6)]),
        confirmPasswords: new FormControl("",[Validators.required])}
        ,comprarePassword),
      country: new FormControl("", [Validators.required]),
      age: new FormControl("",[Validators.required, this.checkAge]),
      gender: new FormControl("", Validators.required),
      phone: new FormControl("", [Validators.required, Validators.pattern( /^\+84\d{9,10}$/)]),
    })

    function comprarePassword(c: AbstractControl) {
      const v = c.value;
      return (v.passwords === v.confirmPasswords) ? null :  {
        'passwordnotmatch':true
      };
    }
  }



  checkAge( age : AbstractControl) {
    const birthday= new Date(age.value);
    const birth = Date.now() - birthday.getTime() - 86400000;
    const time = new Date(birth);
    const date = time.getUTCFullYear() - 1970;
    console.log(date);
    if (date < 18){
      return { 'ageUnder' : true}
    }
    return null;
  }
  createForm(){
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }

  get passWordGroup(){
    return this.registerForm.get('passWordGroup')
  }

  get passwords() {
    return this.passWordGroup.get('passwords');
  }

  get confirmPasswords() {
    return this.passWordGroup.get('confirmPasswords');
  }

}
