export enum EOperate {
  Cong = 1,
  CongNho = 2,
  Tru = 3,
  TruNho = 4,

  CongDoc = 5,
  TruDoc = 6,
  Nhan = 7,
  Chia = 8,
  NhanDoc = 9
}
export interface ESqlSummary {
  id: number;
  mdate: number;
  mtype: number;
  mvalid: number;
  minvalid: number;
  mtypename: string;
}
export type ElType = { code: string; value: any; color: string; class: string }