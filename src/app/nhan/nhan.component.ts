import { Component } from '@angular/core';
import { AddLessionComponent } from '../add-lession/add-lession.component';
import { EOperate } from '../OperType';

@Component({
  selector: 'app-nhan',
  templateUrl: '../add-lession/add-lession.component.html',
  styleUrls: ['../add-lession/add-lession.component.scss', './nhan.component.scss']
})
export class NhanComponent extends AddLessionComponent {
  override init(): void {
    this.lrange = "2";
    this.opertateEnum = EOperate.Nhan;
    this.operate = "*";
    super.refresh();
  }
  override generateNumber() {

    this.firstNumber = parseInt(this.lrange)
    this.secondNumber = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])[0];


  }
}
