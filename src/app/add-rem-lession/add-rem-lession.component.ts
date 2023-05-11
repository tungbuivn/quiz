import { Component } from '@angular/core';
import { AddLessionComponent } from '../add-lession/add-lession.component';
import { SqlDataService } from '../sql-data.service';
import { EOperate } from '../OperType';

// cong co nho
@Component({
  selector: 'app-add-rem-lession',
  templateUrl: '../add-lession/add-lession.component.html',
  styleUrls: ['../add-lession/add-lession.component.scss', './add-rem-lession.component.scss'],

})
export class AddRemLessionComponent extends AddLessionComponent {

  override init(): void {
    this.opertateEnum = EOperate.CongNho;
    this.urange = "90";
    super.init();

  }
  override generateNumber() {
    var urange = parseInt(this.urange);
    var lrange = parseInt(this.lrange);
    if (urange - lrange <= 10) {
      this.firstNumber = NaN;
      this.secondNumber = NaN;
      return;
    }
    this.showResultEl = false;

    // num from 2->9
    var unit = this.shuffle([2, 3, 4, 5, 6, 7, 8, 9])[0];

    // unit 2 inrange 1..9
    var unit2 = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(num => num + unit >= 11))[0];
    // hang chuc
    var chuc = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(o => o < (urange - lrange) / 10))[0] || 1;

    this.firstNumber = unit2;//+ chuc * 10;

    this.secondNumber = unit;
  }
}
