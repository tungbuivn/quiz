import { Component } from '@angular/core';
import { AddLessionComponent } from '../add-lession/add-lession.component';
import { EOperate } from '../OperType';

@Component({
  selector: 'app-nhan',
  templateUrl: './nhan.component.html',
  styleUrls: ['./nhan.component.scss']
})
export class NhanComponent extends AddLessionComponent {
  override init(): void {
    this.opertateEnum = EOperate.Nhan;
    this.operate = "x";
    super.refresh();
  }
  override generateNumber() {
    var urange = parseInt(this.urange);
    var lrange = parseInt(this.lrange);

    var i = 0;
    do {
      this.firstNumber = parseInt(Math.random() * 1234 + "") % (urange - lrange) + lrange;
    } while ((this.firstNumber == this.lastfirstNumber) && (i < 10));
    i = 0;
    do {
      i = i + 1;

      this.secondNumber = parseInt(Math.random() * 1234 + "") % (urange - this.firstNumber);
    } while ((this.lastsecondNumber == this.secondNumber) && (i < 10));
  }
}
