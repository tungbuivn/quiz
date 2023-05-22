import { Component } from '@angular/core';
import { SqlDataService } from '../sql-data.service';
import { EOperate, ESqlSummary } from '../OperType';
import { CdkColumnDef } from '@angular/cdk/table';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [CdkColumnDef]
})
export class SummaryComponent {
  data: ESqlSummary[] = [];
  displayedColumns: string[] = [];
  constructor(private sqlData: SqlDataService) {
    this.init();
  }
  async init() {
    this.displayedColumns = ["mdate", "mtypename", "mvalid", "minvalid"];
    this.sqlData.getSummary().then(rs => {
      this.data = rs.map(o => {
        o.mtypename = EOperate[o.mtype]; // "A"
        return o;
      })
    });
  }
}
