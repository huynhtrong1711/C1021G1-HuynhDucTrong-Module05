import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {

  @Input() cardName: string = "Nguyễn Văn Ngọc Đạt";
  @Input() email: string = "dat09@gmail.com";
  @Input() phone: string = "0398764205";

  constructor() { }

  ngOnInit(): void {
  }

}
