import { AfterContentInit, AfterViewInit, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { SqlDataService } from '../sql-data.service';
import { EOperate, EResultChoose, ElType } from '../OperType';
import { ResultCountService } from '../result-count.service';
import { AnswerChooseComponent } from '../answer-choose/answer-choose.component';
import { SoundService } from '../sound.service';




@Component({
  selector: 'app-add-lession',
  templateUrl: './add-lession.component.html',
  styleUrls: ['./add-lession.component.scss'],

})
export class AddLessionComponent implements OnInit, AfterViewInit {
  posCount: number = 0;
  firstNumberArr: number[] = [];
  secondNumberArr: number[] = [];
  resultArr: any[] = [];
  prevAns: boolean = false;
  rem: number = 0;
  firstTime: boolean = false;


  firstNumber: number = 0;
  secondNumber: number = 0;
  lastfirstNumber: number = -1;
  lastsecondNumber: number = -1;
  result: number = 0;
  operate: string = '+';
  opertateEnum: EOperate = EOperate.Cong;
  answers: ElType[] = [];
  correct: boolean = false;
  showResultEl: boolean = false;
  @Input() urange: string = "20";
  @Input() lrange: string = "10";
  @ViewChild(AnswerChooseComponent, { static: false }) ans!: AnswerChooseComponent;
  finalResult!: EResultChoose[];
  viewDone!: Promise<boolean>;
  viewDoneResolve!: () => void;
  // countCorrect: number = 0;
  // countWrong: number = 0;
  constructor(protected sqlData: SqlDataService, private sound: SoundService) {
    // this.init();
    this.viewDone = new Promise((resolve, reject) => {
      this.viewDoneResolve = () => {
        resolve(true);

      };
    })
  }

  ngAfterContentInit(): void {

  }
  ngOnInit(): void {
    // debugger;

    this.viewDone.then(() => {
      this.init();
    })
    // throw new Error('Method not implemented.');

  }
  ngAfterViewInit(): void {
    // debugger;
    this.viewDoneResolve();

  }
  randomNumberArr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  rand(from: number, to: number): number {
    var d = to - from;
    var len = 0;
    while (len < to) {
      len = len * 10 + 9;
    }
    var n = ((Math.random() * len) << 0) % d + from;
    if (isNaN(n)) {
      // this mean from==to
      return from;
    }
    return n;
  }
  makeRecord(num: number | string, desc: string = "") {
    var n = parseInt(`${num}`);
    var r: EResultChoose = {
      val: -1,
      items: [],
      disp: " ",
      desc: desc,
      promise: Promise.resolve(true),
      response: Promise.resolve(true),
      check: () => true
    };
    if (num == -999) {
      r.disp = " ";
    } else
      if (!isNaN(n)) {
        Object.assign(r, {
          val: n,
          items: this.generateResultArray(n, false),
          disp: "?"
        });
        r.response = new Promise((resolve2, reject2) => {
          r.promise = new Promise((resolve, reject) => {
            r.check = (test: any) => {
              test.class = test.color;
              var val = n == test.value;
              if (val) {
                this.sound.play(true);
                resolve(true);
                resolve2(true);
              } else {
                this.sound.play(false);
                reject2(false);
              }
              return val;
            }
          });
        })
        r.response.catch(() => false);
        r.promise.then(() => {
          r.disp = `${n}`;
        }).catch(() => false)
      } else {
        if (num == ".") {
          r.disp = ".";
        }
      }




    return r;
  }
  init() {
    this.refresh();
  }
  shuffle(array: any[]) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
  generateNumber() {
    var urange = parseInt(this.urange);
    var lrange = parseInt(this.lrange);

    var i = 0;
    do {
      this.firstNumber = this.rand(lrange, urange);
    } while ((this.firstNumber == this.lastfirstNumber) && (i < 10));
    i = 0;
    do {
      i = i + 1;

      this.secondNumber = this.rand(this.firstNumber, urange) - this.firstNumber;
    } while ((this.lastsecondNumber == this.secondNumber) && (i < 10));
  }
  generateResultArray(num: number, saveResult: boolean = true) {
    var merge = [num + 1, num - 1, num + 2, num - 2, num + 3, num - 3]
      // remove all negative value
      .filter(o => o >= 0)
      .reduce((p: number[], q: any) => {
        if (p.length < 3) {

          p.push(q);
        }
        return p;
      }, []);
    var rs = this.shuffle(
      [num, ...merge]
    )
      // only take first 4 value
      .map((o, i) => {

        var rs: ElType = {
          code: String.fromCharCode(65 + i),
          color: o == num ? "green" : 'warn',
          value: o,
          class: ""
        }

        return rs;
      }, []);
    if (saveResult) {
      this.answers = rs;
    }
    return rs;
  }
  refresh() {
    this.showResultEl = false;
    this.generateNumber();

    this.lastfirstNumber = this.firstNumber;
    this.lastsecondNumber = this.secondNumber;
    var rs = Function(`return ${this.firstNumber}${this.operate}${this.secondNumber}`)() + "";
    this.finalResult = [rs].map(o => this.makeRecord(o));
    this.ans.setData(this.finalResult, this.opertateEnum, true);


  }


}
