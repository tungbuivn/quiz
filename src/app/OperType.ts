export enum EOperate {
  Cong = 1,
  CongNho = 2,
  Tru = 3
}
export interface ESqlSummary {
  id: number;
  mdate: number;
  mtype: number;
  mvalid: number;
  minvalid: number;
  mtypename: string;
}