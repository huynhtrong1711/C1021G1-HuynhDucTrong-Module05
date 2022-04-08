import { Injectable } from '@angular/core';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  employees : Employee[] = [
    {
      id:1,
      name:"Nguyễn Ngọc Long Tiên",
      code:"KH-0001",
      birthday:"01-01-2002",
      gender:"Nam",
      idCard:"2039875640",
      phone:"0398765412",
      email:"tien@gmail.com",
      address:"Đà Nẵng",
      position: "Quản lý",
      education: "Đại học",
      division: "Quản lý"
    },
    {
      id:2,
      name:"Nguyễn Văn Ngọc Đạt",
      code:"KH-0003",
      birthday:"04-04-2005",
      gender:"Nam",
      idCard:"209885640",
      phone:"0954668451",
      email:"dat09@gmail.com",
      address:"Đà Nẵng",
      position: "Quản lý",
      education: "Đại học",
      division: "Quản lý"
    },
    {
      id:3,
      name:"Hồ Nhật Hiếu",
      code:"KH-0003",
      birthday:"06-12-2019",
      gender:"Nam",
      idCard:"298365478",
      phone:"0966874521",
      email:"hieu3tuoi@gmail.com",
      address:"Quảng Nam",
      position: "Quản lý",
      education: "Đại học",
      division: "Quản lý"
    },
    {
      id: 4,
      name: "Trần Anh Trọng",
      code: "KH-0004",
      birthday: "02-11-2015",
      gender: "Nam",
      idCard: "239874562",
      phone: "0976488123",
      email: "trong7tuoi@gmail.com",
      address: "Đà Nẵng",
      position: "Quản lý",
      education: "Đại học",
      division: "Quản lý"
    }
  ];

  constructor() { }
}
