import { Component } from '@angular/core';
import { CongDocComponent } from '../cong-doc/cong-doc.component';
import { EOperate } from '../OperType';

@Component({
  selector: 'app-tru-doc',
  templateUrl: '../cong-doc/cong-doc.component.html',
  styleUrls: ['../add-lession/add-lession.component.scss', '../cong-doc/cong-doc.component.scss', './tru-doc.component.scss']
})
export class TruDocComponent extends CongDocComponent {
  override init(): void {
    this.lrange = "2";
    this.urange = "1";

    this.num1 = "";
    this.num2 = "";
    this.operate = "-";
    this.opertateEnum = EOperate.TruDoc;
    this.refresh();
  }
  override refresh() {
    this.num1 = "";
    this.num2 = "";


    var lran = parseInt("".padStart(parseInt(this.lrange), '9'));
    var uran = parseInt("".padStart(parseInt(this.urange), '9'));
    var uranMin = parseInt(1 + "".padStart(parseInt(this.urange) - 1, '0'));
    if (uran > lran) {
      uran = lran;
    }
    // debugger;
    var firstNum = this.rand(lran / 10 + 1, lran) << 0;
    var secNum = 0;
    //do {
    secNum = this.rand(uran / 10 + 1, uran) << 0;
    if (secNum > firstNum) {
      secNum = this.rand(uranMin, firstNum)
    }
    //} while (secNum>firstNum);

    this.prepareQuest(firstNum, secNum);

    // this.posCount = 0;
    // this.prevAns = false;
    // var dv = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])[0];
    // var chuc = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8])[0];
    // this.firstNumberArr = [chuc, dv];

    // var dv2 = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])[0];
    // var chuc2 = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(o => o + (dv < dv2 ? 1 : 0) <= chuc))[0] || " ";
    // this.secondNumberArr = [chuc2, dv2];
    // this.resultArr = ["?", "?"];
    // this.rem = 0;
    // var sum = dv - dv2;
    // if (sum < 0) {
    //   this.rem = 1;
    //   sum = sum + 10;
    // }
    // this.result = sum;
    // this.firstTime = true;
    // this.generateResultArray(sum);

  }
  // override updateInput(type: number) {
  //   super.updateInput(1);
  //   var n1 = parseInt(this.num1);
  //   var n2 = parseInt(this.num2);
  //   if (isNaN(n1) || isNaN(n2)) {
  //     return;
  //   }

  //   var last1 = this.firstNumberArr[this.firstNumberArr.length - 1];
  //   var last2 = this.secondNumberArr[this.secondNumberArr.length - 1];
  //   this.resultArr = ["?", "?"];

  //   this.rem = last1 - last2 < 0 ? 1 : 0;
  //   this.result = last1 - last2 + 10 * this.rem;
  //   // this.result = sum+(last1+last2>=10);
  //   this.generateResultArray(this.result);

  // }
}
