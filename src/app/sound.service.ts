import { Injectable } from '@angular/core';
import { Howl } from "howler";
import { sounds } from './sounds'
@Injectable({
  providedIn: 'root'
})
export class SoundService {
  data: any[];

  constructor() {
    const contentType = "audio/mp3";
    this.data = [new Howl({
      src: [`data:${contentType};base64,${sounds.dung}`]
    }),
    new Howl({
      src: [`data:${contentType};base64,${sounds.sai}`]
    })];

  }
  play(id: number) {
    this.data[id].play()
  }
}
