import { Component, OnInit } from '@angular/core';
import {StudentDao} from '../dao/studentDao';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // @ts-ignore
  students : Student[] = StudentDao.students;
  colorRow = "";


  constructor() { }

  ngOnInit(): void {
  }


  changColor(color:string){
    this.colorRow = color;
  }
}
