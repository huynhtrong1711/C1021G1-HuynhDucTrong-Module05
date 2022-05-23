import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BenhAn} from "../model/benh-an";
import {BenhNhan} from "../model/benh-nhan";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  BENHAN_API = 'http://localhost:3000/benhAn';
  BENHNHAN_API = 'http://localhost:3000/benhNhan';

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<BenhAn[]>(this.BENHAN_API);
  }

  getBenhNhan() {
    return this.http.get<BenhNhan[]>(this.BENHNHAN_API);
  }

  createBenhAn(data) {
    return this.http.post<BenhAn>(this.BENHAN_API, data);
  }

  deleteBenhAn(id : number) {
    return this.http.delete<BenhAn>(this.BENHAN_API + '/' + id)
  }

  getInfo(id : number) {
    return this.http.get<BenhAn>(this.BENHAN_API + '/' + id)
  }

  updateBenhAn(id : number, data){
    return this.http.put<BenhAn>(this.BENHAN_API + '/' + id, data)
  }
}
