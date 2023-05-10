import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-add-lession',
  templateUrl: './add-lession.component.html',
  styleUrls: ['./add-lession.component.scss']
})
export class AddLessionComponent {
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;
  operate: string = '+';
  answers: { code: string; value: any; color: string; }[] = [];
  correct: boolean = false;
  showResultEl: boolean = false;
  @Input() urange: string = "20";
  @Input() lrange: string = "10";
  countCorrect: number = 0;
  countWrong: number = 0;
  constructor() {
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
  refresh() {
    var urange = parseInt(this.urange);
    var lrange = parseInt(this.lrange);
    this.showResultEl = false;

    this.firstNumber = parseInt(Math.random() * 1234 + "") % (urange - lrange) + lrange;
    this.secondNumber = parseInt(Math.random() * 1234 + "") % (urange - this.firstNumber);
    this.result = Function(`return ${this.firstNumber}${this.operate}${this.secondNumber}`)();
    this.answers = this.shuffle([this.result, this.result + 1, this.result - 1, this.result + 2]).map((o, i) => {
      return {
        code: String.fromCharCode(65 + i),
        color: o == this.result ? "green" : 'warn',
        value: o
      }
    });

  }
  showResult(value: number) {
    this.correct = value == this.result;
    if (this.countCorrect) {
      this.countCorrect++;
    } else {
      this.countWrong++;
    }
    this.showResultEl = true;
  }

}
