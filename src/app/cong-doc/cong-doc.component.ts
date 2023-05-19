import { Component, Input, OnInit } from '@angular/core';
import { AddLessionComponent } from '../add-lession/add-lession.component';
import { SqlDataService } from '../sql-data.service';
import { EOperate, EResultChoose, ElType } from '../OperType';

@Component({
  selector: 'app-cong-doc',
  templateUrl: './cong-doc.component.html',
  styleUrls: ['../add-lession/add-lession.component.scss', './cong-doc.component.scss']
})
export class CongDocComponent extends AddLessionComponent {

  // ans1: Promise<any>[] = [];
  @Input() num1: string = "";
  @Input() num2: string = "";
  // finalResult: any[] = [];
  currentItem: any;
  invalidCount: any;
  completed: any;

  // override ngOnInit(): void {

  // }
  override init() {
    this.lrange = "2";
    this.urange = "1";

    this.num1 = "";
    this.num2 = "";
    this.operate = "+";
    this.opertateEnum = EOperate.CongDoc;
    this.refresh();
  }


  override refresh() {


    this.num1 = "";
    this.num2 = "";


    var lran = parseInt("".padStart(parseInt(this.lrange), '9'));
    var uran = parseInt("".padStart(parseInt(this.urange), '9'));
    // debugger;
    var firstNum = this.rand(lran / 10 + 1, lran) << 0;
    var secNum = this.rand(uran / 10 + 1, uran) << 0;
    this.prepareQuest(firstNum, secNum);


  }
  prepareQuest(firstNum: number, secNum: number) {
    this.posCount = 0;
    this.firstTime = true;
    this.prevAns = false;
    // firstNum = 97;
    // secNum = 48;

    var total = Function(`return ${firstNum}${this.operate}${secNum}`)() + "";
    this.firstNumberArr = (firstNum + "").split("").map(o => parseInt(o));
    this.secondNumberArr = (secNum + "").split("").map(o => parseInt(o));
    var mlen = Math.max(this.firstNumberArr.length, this.secondNumberArr.length);
    while (mlen > total.length) {
      total = '0' + total
    }
    this.firstNumberArr.reverse();
    this.secondNumberArr.reverse();

    var guideText: string[] = [];

    Array.from(Array(mlen)).reduce((p, o, i) => {
      // debugger;
      var n1 = this.firstNumberArr[i] || 0;
      var n2 = this.secondNumberArr[i] || 0;
      var pre = "";
      var nho = 0;
      // debugger;
      var s1 = Function(`return ${n1} ${this.operate} ${n2} ${this.operate} ${p}`)();
      if (s1 < 0) {
        s1 = Function(`return ${10 + n1} ${this.operate} ${n2} ${this.operate} ${p}`)();
        pre = "1";
        nho = 1;
      }
      var s1Text = `${s1}`.split("");
      var top = this.operate == "+" ? "cộng" : "trừ";
      var t1 = `${pre}${n1} ${top} ${n2}`; // xx cong/tru yy

      var sx = Function(`return ${pre}${n1} ${this.operate} ${n2}`)();
      t1 = t1 + ` bằng ${sx}`;
      if (p > 0) {
        t1 = t1 + ` nhớ ${p} bằng ${s1}`;
      }
      if (s1Text.length >= 2 && i + 1 == mlen) {
        t1 = t1 + ` viết ${s1}`;
        // debugger;
      } else {



        t1 = t1 + ` viết ${s1Text[s1Text.length - 1]}`;

        // if (this.opertateEnum == EOperate.CongDoc) {
        if ((nho > 0 && this.opertateEnum == EOperate.TruDoc)) {
          t1 = t1 + ` nhớ ${1}`;
        }

        if ((s1Text.length > 1)) {
          t1 = t1 + ` nhớ ${s1Text[0]}`;
          nho = parseInt(s1Text[0]);
        }
        // }

      }
      guideText.push(t1);
      return nho;
    }, 0);
    while (guideText.length < total.length) {
      guideText.push(guideText[guideText.length - 1]);
    }
    // console.log(guideText.join("\n"));
    this.firstNumberArr.reverse();
    this.secondNumberArr.reverse();
    guideText.reverse();

    this.finalResult = total.split("").map((o, i) => {
      // preparing text guide
      var r = this.makeRecord(parseInt(o), guideText[i]);
      return r;
    });

    this.ans.setData(this.finalResult, this.opertateEnum, true)

  }
  updateInput(type: number) {
    var n1 = parseInt(this.num1);
    var n2 = parseInt(this.num2);
    if (isNaN(n1) || isNaN(n2)) {
      return;
    }
    this.prepareQuest(n1, n2);


  }
  showChoose(item: EResultChoose) {
    this.ans.showChoose(item);


  }
  // doi khi gap bai kho, tre se bo qua de lam bai tiep, func nay ko cho phep tiep tuc neu chua lam xong
  next() {
    var found = this.ans.data.filter(o => o.disp == "?").length;

    if (found == 0) {
      this.refresh();
    }
  }




}
