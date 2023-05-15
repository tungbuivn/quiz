import { Component, Input, OnInit } from '@angular/core';
import { AddLessionComponent } from '../add-lession/add-lession.component';
import { SqlDataService } from '../sql-data.service';
import { EOperate, ElType } from '../OperType';

@Component({
  selector: 'app-cong-doc',
  templateUrl: './cong-doc.component.html',
  styleUrls: ['../add-lession/add-lession.component.scss', './cong-doc.component.scss']
})
export class CongDocComponent extends AddLessionComponent implements OnInit {

  // ans1: Promise<any>[] = [];
  @Input() num1: string = "";
  @Input() num2: string = "";

  ngOnInit(): void {
    this.num1 = "";
    this.num2 = "";
  }
  override init() {
    this.operate = "+";
    this.opertateEnum = EOperate.CongDoc;
    this.refresh();
  }


  override refresh() {

    this.posCount = 0;
    this.num1 = "";
    this.num2 = "";
    this.prevAns = false;
    var dv = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])[0];
    var chuc = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8])[0];
    this.firstNumberArr = [chuc, dv];

    var dv2 = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])[0];
    var chuc2 = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(o => o + chuc < 9))[0] || " ";
    this.secondNumberArr = [chuc2, dv2];
    this.resultArr = ["?", "?"];
    this.rem = 0;
    var sum = dv + dv2;
    if (sum >= 10) {
      this.rem = 1;
      sum = sum - 10;
    }
    this.result = sum;
    this.firstTime = true;
    this.generateResultArray(sum);

  }
  updateInput(type: number) {
    var n1 = parseInt(this.num1);
    var n2 = parseInt(this.num2);
    if (isNaN(n1) || isNaN(n2)) {
      return;
    }
    this.posCount = 0;
    this.prevAns = false;
    this.rem = 0;
    var sum = n1 + n2;

    this.firstTime = true;
    this.firstNumberArr = (n1 + "").split("").map(o => parseInt(o));
    this.secondNumberArr = (n2 + "").split("").map(o => parseInt(o));
    while (this.secondNumberArr.length < 2) {
      (this.secondNumberArr as any).unshift("")
    }
    var last1 = this.firstNumberArr[this.firstNumberArr.length - 1];
    var last2 = this.secondNumberArr[this.secondNumberArr.length - 1];
    this.resultArr = ["?", "?"];
    var rs = (sum + "").split("");
    this.rem = last1 + last2 >= 10 ? 1 : 0;
    this.result = last1 + last2 - 10 * this.rem;
    // this.result = sum+(last1+last2>=10);
    this.generateResultArray(this.result);

  }
  doAnswer(item: ElType) {
    item.class = item.color;
    var valid = false;
    if (this.posCount == 0) {
      valid = item.value == this.result;
      if (this.firstTime) {
        this.firstTime = false;
        this.prevAns = valid;
        if (!valid) {
          this.sqlData.update(this.opertateEnum, false);
          // this.countWrong = this.countWrong + 1;
        }
      }
      if (valid) {
        this.resultArr[1] = this.result;
        this.posCount = 1;
        this.result = Function(`return  ${this.firstNumberArr[0]}${this.operate}${this.rem}${this.operate}${parseInt(this.secondNumberArr[0] + "") || 0}`)();
        this.generateResultArray(this.result);
        this.firstTime = true;
      }
    } else {
      // debugger;
      valid = item.value == this.result;
      if (this.firstTime) {
        var correct = valid && this.prevAns;

        if (this.prevAns) {
          this.sqlData.update(this.opertateEnum, correct)
          // if (correct) {
          //   this.countCorrect = this.countCorrect + 1;
          // } else {
          //   this.countWrong = this.countWrong + 1;
          // }
        }


        this.firstTime = false;
      }
      if (valid) {
        this.resultArr[0] = this.result;
      }
    }
  }

}
