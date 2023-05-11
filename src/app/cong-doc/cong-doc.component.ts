import { Component } from '@angular/core';
import { AddLessionComponent } from '../add-lession/add-lession.component';
import { SqlDataService } from '../sql-data.service';
import { EOperate } from '../OperType';

@Component({
  selector: 'app-cong-doc',
  templateUrl: './cong-doc.component.html',
  styleUrls: ['./cong-doc.component.scss']
})
export class CongDocComponent extends AddLessionComponent {


  override init() {
    this.operate = "+";
    this.opertateEnum = EOperate.CongDoc;
    this.refresh();
  }


  override refresh() {

    var dv = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])[0];
    var chuc = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8])[0];
    this.firstNumberArr = [chuc, dv];

    var dv2 = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])[0];
    var chuc2 = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(o => o + chuc < 9))[0];
    this.secondNumberArr = [chuc2, dv2];

  }

}
