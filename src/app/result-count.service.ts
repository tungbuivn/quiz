import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ResultCountService {
  onUpdate: Subject<boolean> = new Subject()
  constructor() { }
}
