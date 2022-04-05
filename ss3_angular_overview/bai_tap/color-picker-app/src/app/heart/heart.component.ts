import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit {

  color: string;

  constructor() { }

  ngOnInit(): void {
  }

  changedColor(color:string){
    this.color = color;
  }

}
