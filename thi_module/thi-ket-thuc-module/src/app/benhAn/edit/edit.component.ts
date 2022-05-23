import { Component, OnInit } from '@angular/core';
import {BenhNhan} from "../../model/benh-nhan";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {BenhAn} from "../../model/benh-an";
import {ServiceService} from "../../service/service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  benhNhan : BenhNhan[];
  editForm : FormGroup;
  id: number;
  benhAn : BenhAn;

  constructor( private service : ServiceService,
               private activatedRoute : ActivatedRoute,
               private router : Router) { }

  ngOnInit(): void {

    this.editForm = new FormGroup( {
      id: new FormControl(''),
      maBenhAn: new FormControl(''),
      maBenhNhan: new FormControl(''),
      tenBenhNhan: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]$/)]),
      ngayNhapVien: new FormControl('', Validators.required),
      ngayRaVien: new FormControl('', Validators.required),
      lyDoNhapVien: new FormControl('', Validators.required),
      phuongPhapDieuTri: new FormControl('', Validators.required),
      bacSi: new FormControl('', Validators.required)
    });

    this.getBenhNhan();
    this.id = this.activatedRoute.snapshot.params.id;
    this.service.getInfo(this.id).subscribe(value => {
      console.log(value);
      this.benhAn = value;
      this.editForm.setValue(this.benhAn)
      console.log(this.editForm.value);
      this.editForm.get('maBenhNhan').setValue(this.benhAn.maBenhNhan.maBenhNhan)
      this.editForm.get('tenBenhNhan').setValue(this.benhAn.tenBenhNhan.name)
    })

    // function checkNgay(c : AbstractControl) {
    //   const v = c.value;
    //   return (v.ngayNhapVien === v.ngayRaVien || v.ngayNhapVien < v.ngayRaVien) ? null :{
    //     'kiemTra' : true
    //   };
    // }

  }


  getBenhNhan() {
    this.service.getBenhNhan().subscribe( list => {
      this.benhNhan = list;
    })
  }

  updateBenhAn() {
      if (this.editForm.valid) {
      this.service.updateBenhAn(this.activatedRoute.snapshot.params.id, this.editForm.value).subscribe(()=> {
        console.log(this.editForm.value)
        this.router.navigateByUrl('');
      })
    }
  }



}
