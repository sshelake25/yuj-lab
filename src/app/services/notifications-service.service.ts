import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsServiceService {
 
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(400);
  //who ever want value of this strema they access
  countHolder$: Observable<number> = this.count.asObservable();
  
  constructor() { }

  setCount(countValue: number) {
    this.count.next(countValue)
  }

}



