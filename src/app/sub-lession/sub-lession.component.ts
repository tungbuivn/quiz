import { Component } from '@angular/core';
import { AddLessionComponent } from '../add-lession/add-lession.component';

@Component({
  selector: 'app-sub-lession',
  templateUrl: '../add-lession/add-lession.component.html',
  styleUrls: ['../add-lession/add-lession.component.scss']
})
export class SubLessionComponent extends AddLessionComponent {
  constructor() {
    super()
    this.operate = "-";
    this.refresh();
  }
  override generateNumber() {
    var urange = parseInt(this.urange);
    var lrange = parseInt(this.lrange);

    var i = 0;
    // do {
    i = i + 1
    this.firstNumber = parseInt(Math.random() * 1234 + "") % (urange - lrange) + lrange;

    var sub = this.firstNumber - lrange;
    if (sub == 0) {
      this.secondNumber = 0;
    } else {
      this.secondNumber = parseInt(Math.random() * 1234 + "") % (sub) + lrange;
    }

    // } while ((this.secondNumber == this.lastsecondNumber) && (i < 10));
    // console.log(this.firstNumber + " " + this.secondNumber)
  }
}
