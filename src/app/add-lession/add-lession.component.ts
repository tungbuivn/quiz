import { Component, Inject, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { SqlDataService } from '../sql-data.service';
import { EOperate } from '../OperType';


type ElType = { code: string; value: any; color: string; class: string }

@Component({
  selector: 'app-add-lession',
  templateUrl: './add-lession.component.html',
  styleUrls: ['./add-lession.component.scss'],

})
export class AddLessionComponent {
  firstNumberArr: number[] = [];
  secondNumberArr: number[] = [];
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
  countCorrect: number = 0;
  countWrong: number = 0;
  constructor(protected sqlData: SqlDataService) {
    this.init();
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
      this.firstNumber = parseInt(Math.random() * 1234 + "") % (urange - lrange) + lrange;
    } while ((this.firstNumber == this.lastfirstNumber) && (i < 10));
    i = 0;
    do {
      i = i + 1;

      this.secondNumber = parseInt(Math.random() * 1234 + "") % (urange - this.firstNumber);
    } while ((this.lastsecondNumber == this.secondNumber) && (i < 10));
  }
  refresh() {
    this.showResultEl = false;
    this.generateNumber();

    this.lastfirstNumber = this.firstNumber;
    this.lastsecondNumber = this.secondNumber;

    this.result = Function(`return ${this.firstNumber}${this.operate}${this.secondNumber}`)();
    var merge = [this.result + 1, this.result - 1, this.result + 2, this.result - 2, this.result + 3, this.result - 3]
      // remove all negative value
      .filter(o => o >= 0)
      .reduce((p: number[], q: any) => {
        if (p.length < 3) {

          p.push(q);
        }
        return p;
      }, []);
    this.answers = this.shuffle(
      [this.result, ...merge]
    )


      // only take first 4 value
      .map((o, i) => {

        var rs = {
          code: String.fromCharCode(65 + i),
          color: o == this.result ? "green" : 'warn',
          value: o,
          class: ""
        }

        return rs;
      }, []);

  }
  showResult(item: ElType) {

    item.class = item.color;
    this.correct = item.value == this.result;
    if (this.showResultEl) return;
    if (this.correct) {
      this.countCorrect = this.countCorrect + 1;
    } else {
      this.countWrong = this.countWrong + 1;
    }
    this.sqlData.update(this.opertateEnum, this.correct)

    this.showResultEl = true;
  }

}
