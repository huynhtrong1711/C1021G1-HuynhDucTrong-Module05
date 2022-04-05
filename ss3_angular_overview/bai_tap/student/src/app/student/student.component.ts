import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // @ts-ignore
  students: Student = {
    id:1,
    name:"Trọng",
    address:"Quảng Nam",
    age:24,
    mark:10
  }

  color:string;


  constructor() { }

  ngOnInit(): void {
  }

  changMark(mark:string) {
    this.students.mark = mark;
  }

  changColor(color:string){
    this.color = color;
  }

}
