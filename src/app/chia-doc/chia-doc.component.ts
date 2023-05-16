import { Component, Input, OnInit } from '@angular/core';
import { AddLessionComponent } from '../add-lession/add-lession.component';
import { EOperate, EResultChoose, ElType } from '../OperType';

@Component({
  selector: 'app-chia-doc',
  templateUrl: './chia-doc.component.html',
  styleUrls: ['./chia-doc.component.scss']
})
export class ChiaDocComponent extends AddLessionComponent {
  divArr: number[] = [];
  divBy: number = 0;
  resultRows: any = [];
  finalRows: any[] = [];
  @Input() num1: string = "";
  @Input() num2: string = "";

  override init(): void {
    this.lrange = "2";
    this.urange = "1";
    this.operate = "/";
    this.opertateEnum = EOperate.ChiaDoc
    this.refresh();
  }
  override refresh(): void {
    var ur = parseInt(this.urange);
    var lr = parseInt(this.lrange);
    // generate first number len
    var umax = parseInt("".padStart(ur, "9"));
    var umin = parseInt("1".padEnd(ur, "0"));
    var lmin = parseInt("1".padEnd(lr, "0"));
    var lim = parseInt(''.padStart(lr, "9"));


    this.divBy = this.rand(umin + 1, umax);
    // generate divider with length min lr
    var minScale = Math.ceil(lmin / this.divBy);

    // max scale
    var maxScale = parseInt((lim / this.divBy) + "");
    var scale = this.rand(minScale, maxScale);// parseInt(Math.random() * 12345678 + "") % (maxScale);

    var fnum = scale * this.divBy;

    this.calculateResult(fnum, this.divBy);




  }
  updateInput(i: number) {
    var n1 = parseInt(this.num1);
    var n2 = parseInt(this.num2);
    if (isNaN(n1) || isNaN(n2)) {
      return;
    }
    this.calculateResult(n1, n2);
  }
  calculateResult(fnum: number, soChia: number) {


    this.answers = [];

    this.divBy = soChia;
    // fnum = 1236;
    this.divArr = (fnum + "").split("").map(o => parseInt(o));
    var rows: any = [];
    var doneFirst = false;
    // process div result
    this.divArr.reduce((prev, cu, i) => {
      if (i == 0) {
        prev = cu;
      } else {
        prev = prev * 10 + cu;
      }
      if (rows.length) {
        rows[rows.length - 1].subRs.push(cu);
      }
      if (!doneFirst) {
        if (prev >= this.divBy) {
          doneFirst = true;
        } else {
          return prev;
        }
      }

      var n = prev % this.divBy;
      var res = (prev - n) / this.divBy;
      var mres = (res * this.divBy + "").padStart(i + 1, ' ').split("");
      rows.push({
        multipleRs: mres,
        subRs: (n + "").padStart(i + 1, " ").split(""),
        rem: n,
        i: i,
        rs: res
      });// multiple result
      prev = n;

      return prev;
    }, 0);
    this.resultRows = rows;
    // khong xu ly cac so sau dau cham thap phan,
    // voi toan lop 5, se bo sung phan lap de tinh cac so sau dau ,
    var fnRows = (fnum / this.divBy + "").split(".")[0].split("");

    this.resultRows = rows.map((o: any) => {
      o.multipleRs = o.multipleRs.map((p: any) => {
        return this.makeRecord(p)

      });
      o.subRs = o.subRs.map((p: any) => {
        return this.makeRecord(p);

      })
      return o;
    });
    // process generate correct answers
    this.finalRows = fnRows.map(o => {
      return this.makeRecord(o);
    });
    var data = [...this.resultRows.reduce((p: any, c: any) => [...p, ...c.multipleRs, ...c.subRs], []), this.finalRows];
    this.ans.setData(data, this.opertateEnum, false);

  }
  showChoose(item: EResultChoose) {
    this.ans.showChoose(item)
  }

}
