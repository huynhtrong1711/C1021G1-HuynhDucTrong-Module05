import {BenhNhan} from "./benh-nhan";

export interface BenhAn {
  id?:number,
  maBenhAn?: string,
  maBenhNhan?: BenhNhan,
  tenBenhNhan?: BenhNhan,
  ngayNhapVien?: string,
  ngayRaVien?: string,
  lyDoNhapVien?: string,
  phuongPhapDieuTri?:string,
  bacSi?:string
}
