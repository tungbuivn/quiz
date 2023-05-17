import { Component, Input } from '@angular/core';
import { EOperate, EResultChoose, ElType } from '../OperType';
import { SqlDataService } from '../sql-data.service';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-answer-choose',
  templateUrl: './answer-choose.component.html',
  styleUrls: ['./answer-choose.component.scss']
})
export class AnswerChooseComponent {
  data: EResultChoose[] = [];
  // if is chain is true then, resolve automatic switch answer by chain
  // @Input() isChain: boolean = false;
  answers: ElType[] = [];
  currentItem: EResultChoose = {
    val: 0,
    items: [],
    disp: '?',
    desc: '',
    promise: Promise.resolve(true),
    response: Promise.resolve(true),
    check: (item: ElType) => true
  };
  lastText: string = "";

  constructor(private sqlData: SqlDataService) {

  }
  setData(d: EResultChoose[], op: EOperate, isChain: boolean = false) {
    // debugger;
    this.data = d;
    this.lastText = "";
    this.answers = [];
    if (isChain) {
      this.makeChainResponse();
    }
    // this.data.forEach(e => {
    //   e.response.then(() => {
    //     this.sound.play(true);
    //   }, () => {
    //     this.sound.play(false);
    //   })
    // })
    Promise.allSettled(this.data.map(o => o.response)).then(rs => {
      if (rs.reduce((p, c) => p && c.status == "fulfilled", true)) {
        this.sqlData.update(op, true)
      } else {
        this.sqlData.update(op, false)
      }
    })
  }
  makeChainResponse() {
    this.data.reverse();
    this.data.reduce((p: Promise<boolean>, c: EResultChoose) => {

      return p && p.then(() => {
        this.showChoose(c);
        return c.promise.catch(() => false);
      });
    }, Promise.resolve(true));
    this.data.reverse();
  }
  showChoose(item: EResultChoose) {
    // console.log(item);
    if (item.disp == "?") {
      this.answers = item.items;
      this.currentItem = item;

    } else {
      this.answers = [];
    }

  }
  validate(item: ElType) {
    var n = this.currentItem.desc;
    if (this.currentItem?.check(item)) {
      this.lastText = n;
    };

  }
}
