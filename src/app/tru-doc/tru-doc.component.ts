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
    this.operate = "-";
    this.opertateEnum = EOperate.TruDoc;
    this.refresh();
  }
  override refresh() {

    this.posCount = 0;
    this.prevAns = false;
    var dv = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])[0];
    var chuc = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8])[0];
    this.firstNumberArr = [chuc, dv];

    var dv2 = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])[0];
    var chuc2 = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(o => o + (dv < dv2 ? 1 : 0) <= chuc))[0] || " ";
    this.secondNumberArr = [chuc2, dv2];
    this.resultArr = ["?", "?"];
    this.rem = 0;
    var sum = dv - dv2;
    if (sum < 0) {
      this.rem = 1;
      sum = sum + 10;
    }
    this.result = sum;
    this.firstTime = true;
    this.generateResultArray(sum);

  }
}
