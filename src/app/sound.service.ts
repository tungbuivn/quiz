import { Injectable } from '@angular/core';
import { Howl } from "howler";
import { ResultCountService } from './result-count.service';
// import { sounds } from './sounds'
import { HttpClient } from '@angular/common/http';
import n2words from 'n2words'
// import dung from '../assets/dung.json';
// import sai from '../assets/sai.json';
type FileInfo = { name: string; text: string };
@Injectable({
  providedIn: 'root'
})
export class SoundService {
  data!: any[];
  valid: number = 0;
  invalid: number = 0;
  soundFiles: FileInfo[] = [
    { name: 'dung', text: "Đúng rồi" },
    { name: 'sai', text: "" },
    //===
    { name: '0', text: "không" },
    { name: '1', text: "một" },
    { name: '2', text: "hai" },
    { name: '3', text: "ba" },
    { name: '4', text: "bốn" },
    { name: '5', text: "năm" },
    { name: '6', text: "sáu" },
    { name: '7', text: "bảy" },
    { name: '8', text: "tám" },
    { name: '9', text: "chín" },
    { name: '10', text: "mười" },
    { name: 'bang', text: "bằng" },
    { name: 'chia', text: "chia" },
    { name: 'cong', text: "cộng" },
    { name: 'lam', text: "lăm" },
    { name: 'muoi', text: "mươi" },
    { name: 'nhan', text: "nhân" },
    { name: 'nho', text: "nhớ" },
    { name: 'tru', text: "trừ" },
    { name: 'viet', text: "viết" }
  ];
  mapObject: any = {};
  soundLoaded!: Promise<void>;

  constructor(private resultCount: ResultCountService, private httpClient: HttpClient) {
    const contentType = "audio/mp3";
    // một hai ba bốn năm sáu bảy tám chín mười mươi mốt cộng trừ nhân chia bằng viết nhớ
    // var soundArray = ["sai", "dung"].map(o => `assets/${o}.json`).map(u => httpClient.get(u));
    // var a = dung;
    // console.log(dung);
    var d = this.soundFiles.map((o) => import(`../assets/${o.name}.json`));
    this.soundLoaded = Promise.all(d).then((x) => {

      // debugger;
      this.data = x.map((o, i) => {
        var sx = this.soundFiles[i];

        var so = new Howl({
          src: [`data:${contentType};base64,${o.audioContent}`]
        });
        this.mapObject[sx.text] = so;
        return so;
      });
    })


    // this.data = [
    //   new Howl({
    //     src: [`data:${contentType};base64,${sai.audioContent}`]
    //   }),
    //   new Howl({
    //     src: [`data:${contentType};base64,${dung.audioContent}`]
    //   })
    // ];
    resultCount.onUpdate.subscribe((status) => {
      this.valid = this.valid + (status ? 1 : 0);
      this.invalid = this.invalid + (!status ? 1 : 0);
      // this.play(status ? 1 : 0);

    })

  }
  speakText(text: string) {
    var ntext = text.split(" ").map((s) => {
      // is number ?
      if (!isNaN(parseFloat(s))) {
        return n2words(s, { lang: 'vi' }).split(" ");
      } else {
        // is text
        return [s];
      }
      return [s];
    }).reduce((p, c) => {
      return [...p, ...c]
    }, [])
      .map(o => {
        return this.mapObject[o]
      }).reduce((p, c) => {
        return p.then(() => {
          return new Promise((resolve) => {
            console.log("playing ", c)
            c.on("end", () => {
              resolve(true);
            });
            c.play();
          })

        })
      }, Promise.resolve())
      // do play sound
      ;
    // debugger;
  }
  play(id: number | boolean) {
    this.soundLoaded.then(() => {
      this.data[id ? 1 : 0].play();
    });

  }
}
