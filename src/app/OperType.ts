export enum EOperate {
  Cong = 1,
  CongNho = 2,
  Tru = 3,
  TruNho = 4,

  CongDoc = 5,
  TruDoc = 6,
  Nhan = 7,
  Chia = 8,
  NhanDoc = 9,
  ChiaDoc = 10
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
export type EResultChoose = {
  val: number;
  items: ElType[];
  disp: string;
  desc: string;
  promise: Promise<boolean>;
  response: Promise<boolean>;
  check: (item: ElType) => boolean;
}