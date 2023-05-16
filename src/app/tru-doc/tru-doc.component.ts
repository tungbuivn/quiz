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

    var firstNum = this.rand(lran / 10 + 1, lran) << 0;
    var secNum = 0;

    secNum = this.rand(uran / 10 + 1, uran) << 0;
    if (secNum > firstNum) {
      secNum = this.rand(uranMin, firstNum)
    }


    this.prepareQuest(firstNum, secNum);


  }

}
