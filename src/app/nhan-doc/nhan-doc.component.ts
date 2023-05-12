import { Component, OnInit } from '@angular/core';
import { AddLessionComponent } from '../add-lession/add-lession.component';
import { ElType } from '../OperType';
type EResult = { val: number, disp: string; items: ElType[] }

@Component({
  selector: 'app-nhan-doc',
  templateUrl: './nhan-doc.component.html',
  styleUrls: ['../add-lession/add-lession.component.scss', './nhan-doc.component.scss']
})
export class NhanDocComponent extends AddLessionComponent implements OnInit {
  firstRow: number[] = [];
  secondRow: number[] = [];
  resultRows: EResult[][] = [];
  finalRow: EResult[] = [];
  currentItem: EResult = { val: 99999, disp: "", items: [] };
  invalidCount: number = 0;
  override init(): void {
    // so luong chu so hang thu nhat
    this.lrange = "2";
    // so luong chu so hang thu hai
    this.urange = "1";
    this.operate = "*";
  }
  ngOnInit(): void {

    this.refresh();

  }
  override refresh(): void {
    // generate first row
    var flen = parseInt(this.lrange);
    var slen = parseInt(this.urange);
    this.firstRow = [];
    this.secondRow = [];
    this.resultRows = [];
    this.finalRow = [];
    this.answers = [];
    this.invalidCount = 0;
    this.firstTime = false;
    for (var i = 0; i < flen; i++) {
      if (i == 0) {
        this.firstRow.push(this.shuffle(this.randomNumberArr)[0])
      } else {
        this.firstRow.push(this.shuffle(this.randomNumberArr.filter(o => o > 0))[0])
      }

    }
    for (var i = 0; i < slen; i++) {
      this.secondRow.push(this.shuffle(this.randomNumberArr.filter(o => o > 0))[0])
      // this.resultRows.push([]);
    }
    this.firstRow.reverse();

    var frv = parseInt(this.firstRow.join(""));
    var app: any[] = [];
    // 55
    // 55
    //===
    this.secondRow.forEach(e => {
      var value = Function(`return ${e}${this.operate}${frv}`)();
      this.resultRows.push([...(value + "").split("").map(o => {
        var ival = parseInt(o);
        return {
          val: ival,
          items: this.generateResultArray(ival, false),
          disp: "?"
        }
      }), ...app]);
      app.push(" ");
    })
    this.secondRow.reverse();
    if (this.resultRows.length > 1) {
      this.finalRow = (parseInt(this.firstRow.join("")) * parseInt(this.secondRow.join("")) + "").split("").map(o => {
        var ival = parseInt(o);
        return {
          val: ival,
          items: this.generateResultArray(ival, false),
          disp: "?"
        }

      });
    }

    // so luong rows ket qua truoc khi cong chinh la do dai secondrow


  }
  showChoose(item: EResult) {
    // console.log(item);
    if (item.disp == "?") {
      this.answers = item.items;
      this.currentItem = item;
      this.firstTime = true;
    } else {
      this.answers = [];
    }

  }
  doAnswer(item: ElType) {

    item.class = item.color;
    if (item.value == this.currentItem.val) {
      this.currentItem.disp = item.value;
    } else {
      if (this.firstTime) {
        this.invalidCount = this.invalidCount + 1;
        this.firstTime = false;
      }
    }
  }
}
