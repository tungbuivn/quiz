import { Component } from '@angular/core';
import { AddLessionComponent } from '../add-lession/add-lession.component';
import { EOperate } from '../OperType';

@Component({
  selector: 'app-sub-lession',
  templateUrl: '../add-lession/add-lession.component.html',
  styleUrls: ['../add-lession/add-lession.component.scss']
})
export class SubLessionComponent extends AddLessionComponent {

  override init(): void {
    this.opertateEnum = EOperate.Tru;
    this.operate = "-";
    super.init();
  }
  override generateNumber() {
    var urange = parseInt(this.urange);
    var lrange = parseInt(this.lrange);

    var i = 0;
    i = i + 1
    this.firstNumber = this.rand(lrange, urange);;

    this.secondNumber = this.rand(lrange, this.firstNumber);

  }
}
