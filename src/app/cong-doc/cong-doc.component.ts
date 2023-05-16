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
    var total = Function(`return ${firstNum}${this.operate}${secNum}`)() + "";
    this.firstNumberArr = (firstNum + "").split("").map(o => parseInt(o));
    this.secondNumberArr = (secNum + "").split("").map(o => parseInt(o));
    var mlen = Math.max(this.firstNumberArr.length, this.secondNumberArr.length);
    if (mlen > total.length) {
      total = total.padStart(mlen - total.length + 1, '0')
    }
    this.finalResult = total.split("").map(o => {
      var r = this.makeRecord(parseInt(o));
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




}
