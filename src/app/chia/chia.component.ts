import { Component } from '@angular/core';
import { NhanComponent } from '../nhan/nhan.component';
import { EOperate } from '../OperType';

@Component({
  selector: 'app-chia',
  templateUrl: '../add-lession/add-lession.component.html',
  styleUrls: ['../add-lession/add-lession.component.scss', '../nhan/nhan.component.scss']
})
export class ChiaComponent extends NhanComponent {
  override init(): void {
    this.lrange = "2";
    this.opertateEnum = EOperate.Chia;
    this.operate = "/";
    super.refresh();
  }
  override generateNumber() {
    var lr = parseInt(this.lrange);
    this.firstNumber = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(o => o * lr))[0];
    this.secondNumber = lr;
  }
}
