import { Injectable } from '@angular/core';
import { Howl } from "howler";
import { ResultCountService } from './result-count.service';
import { sounds } from './sounds'
@Injectable({
  providedIn: 'root'
})
export class SoundService {
  data: any[];
  valid: number = 0;
  invalid: number = 0;

  constructor(private resultCount: ResultCountService) {
    const contentType = "audio/mp3";
    this.data = [
      new Howl({
        src: [`data:${contentType};base64,${sounds.sai}`]
      }),
      new Howl({
        src: [`data:${contentType};base64,${sounds.dung}`]
      })
    ];
    resultCount.onUpdate.subscribe((status) => {
      this.valid = this.valid + (status ? 1 : 0);
      this.invalid = this.invalid + (!status ? 1 : 0);
      // this.play(status ? 1 : 0);

    })

  }
  play(id: number | boolean) {
    this.data[id ? 1 : 0].play()
  }
}
