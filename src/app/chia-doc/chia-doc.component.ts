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
  currentItem: any;
  invalidCount: any;
  completed: any;
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
    for (var i = 0; i < ur; i++) {
      if (i == 0) {
        this.divBy = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])[0];
      } else {
        this.divBy = this.divBy * 10 + this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])[0];
      }
    }
    // this.divBy = 6;
    // generate divider with length min lr
    var rs = [];
    var n = this.divBy;
    var lim = parseInt(''.padStart(lr, "9"));
    // max scale
    var maxScale = parseInt((lim / this.divBy) + "");
    var scale = parseInt(Math.random() * 1234 + "") % (maxScale);

    // while (n < lim) {
    //   n = n + this.divBy;
    //   if ((n + "").length <= lr) {
    //     rs.push(n);
    //     if (rs.length > 200) {
    //       break;
    //     }
    //   }
    // }
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

    this.invalidCount = 0;
    this.answers = [];
    this.currentItem = {};
    this.completed = false;
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
      // if (prev >= this.divBy) {
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
      // }
      return prev;
    }, 0);
    this.resultRows = rows;
    // khong xu ly cac so sau dau cham thap phan,
    // voi toan lop 5, se bo sung phan lap de tinh cac so sau dau ,
    var fnRows = (fnum / this.divBy + "").split(".")[0].split("");

    this.resultRows = rows.map((o: any) => {
      o.multipleRs = o.multipleRs.map((p: any) => {
        return this.makeRecord(p)
        // var n = parseInt(p);
        // if (isNaN(n)) {
        //   return {
        //     val: -1,
        //     disp: " "
        //   }
        // }
        // return {
        //   val: n,
        //   items: this.generateResultArray(n, false),
        //   disp: "?"
        // }
      });
      o.subRs = o.subRs.map((p: any) => {
        return this.makeRecord(p);
        // var n = parseInt(p);
        // if (isNaN(n)) {
        //   return {
        //     val: -1,
        //     disp: " "
        //   }
        // }
        // return {
        //   val: n,
        //   items: this.generateResultArray(n, false),
        //   disp: "?"
        // }
      })
      return o;
    });
    // process generate correct answers
    this.finalRows = fnRows.map(o => {
      return this.makeRecord(o);
      // var ival = parseInt(o);
      // return {
      //   val: ival,
      //   items: this.generateResultArray(ival, false),
      //   disp: "?"
      // }
    });
    var data = [...this.resultRows.reduce((p: any, c: any) => [...p, ...c.multipleRs, ...c.subRs], []), this.finalRows];
    this.ans.setData(data, this.opertateEnum, false);


    // console.log(rows);
  }
  showChoose(item: EResultChoose) {
    this.ans.showChoose(item)
    // console.log(item);
    // if (item.disp == "?") {
    //   this.answers = item.items;
    //   this.currentItem = item;
    //   this.firstTime = true;
    // } else {
    //   this.answers = [];
    // }

  }
  doAnswer(item: ElType) {

    // item.class = item.color;
    // if (item.value == this.currentItem.val) {
    //   this.currentItem.disp = item.value;
    // } else {
    //   if (this.firstTime) {
    //     this.invalidCount = this.invalidCount + 1;
    //     this.firstTime = false;
    //     if (!this.completed) {
    //       this.completed = true;
    //       this.sqlData.update(this.opertateEnum, false);
    //     }
    //   }
    // }
    // var done = false;

    // done = this.finalRows.filter(o => o.disp == "?").length == 0;


    // // console.log("done", done, this.finalRow, "com:", this.completed);
    // if (done) {
    //   if (!this.completed) {
    //     this.completed = true;
    //     this.sqlData.update(this.opertateEnum, this.invalidCount == 0);
    //   }
    // }

  }
}
