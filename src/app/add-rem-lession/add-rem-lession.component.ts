import { Component } from '@angular/core';
import { AddLessionComponent } from '../add-lession/add-lession.component';

// cong co nho
@Component({
  selector: 'app-add-rem-lession',
  templateUrl: '../add-lession/add-lession.component.html',
  styleUrls: ['../add-lession/add-lession.component.scss']
})
export class AddRemLessionComponent extends AddLessionComponent {
  constructor() {
    super()
    this.urange = "40";
    this.refresh();
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
    var i = 0;

    // num from 2->9
    var unit = this.shuffle([2, 3, 4, 5, 6, 7, 8, 9])[0];
    // unit 2 inrange 11..urange
    var unit2 = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(num => num + unit >= 11))[0] + parseInt(Math.random() * 1234 + "") % (urange - lrange) + lrange;
    // var unit2 = parseInt(Math.random() * 1234 + "") % (urange - 11) + 11;
    // 40-10->30
    this.firstNumber = unit2;

    this.secondNumber = unit;
  }
}
