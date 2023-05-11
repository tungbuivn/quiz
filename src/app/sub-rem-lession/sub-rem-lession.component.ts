import { Component } from '@angular/core';
import { SubLessionComponent } from '../sub-lession/sub-lession.component';
import { EOperate } from '../OperType';

@Component({
  selector: 'app-sub-rem-lession',
  templateUrl: '../add-lession/add-lession.component.html',
  styleUrls: ['../add-lession/add-lession.component.scss', "../add-rem-lession/add-rem-lession.component.scss"]
})
export class SubRemLessionComponent extends SubLessionComponent {
  override init(): void {
    this.opertateEnum = EOperate.TruNho;
    this.operate = "-";
    super.refresh();
  }
  override generateNumber() {
    var urange = parseInt(this.urange);
    var lrange = parseInt(this.lrange);


    var dv = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8])[0];
    var chuc = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])[0];
    chuc = 1;
    this.firstNumber = chuc * 10 + dv;
    var secU = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(p => (dv + 10) - p < 10))[0];
    var chucU = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(p => p < chuc))[0];
    this.secondNumber = chucU * 10 + secU;


  }
}
