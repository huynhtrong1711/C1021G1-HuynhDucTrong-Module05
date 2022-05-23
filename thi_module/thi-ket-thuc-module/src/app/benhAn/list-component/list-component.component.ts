import { Component, OnInit } from '@angular/core';
import {BenhNhan} from "../../model/benh-nhan";
import {BenhAn} from "../../model/benh-an";
import {ServiceService} from "../../service/service.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  benhAnList : any;
  benhNhanList : BenhNhan[];
  deleteBenhAn : BenhAn;
  p : number = 1;
  constructor(private service : ServiceService,
              private matSnackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe( data => {
      this.benhAnList = data;
    })

    this.service.getBenhNhan().subscribe( list => {
      this.benhNhanList = list;
    })
  }

  getValue(benhAnValue: BenhAn) {
    this.deleteBenhAn = benhAnValue;
  }


  benhAnDelete(id: number) {
    this.service.deleteBenhAn(id).subscribe( () => {
      this.loadData();
    })
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action);
  }

  // search(name: string, nameCategory: string, price: string){
  //   this.service.search(name, nameCategory,price).subscribe( data => {
  //     this.products = data;
  //     this.p = 1;
  //   })
  // }


}
