import { Component, OnInit } from '@angular/core';

import { interval, map, Observable, take, tap, of, first, last, range, concat, filter, merge, mergeMap } from 'rxjs';



@Component({
  selector: 'yuj-rx-usage',
  templateUrl: './rx-usage.component.html',
  styleUrls: ['./rx-usage.component.css']
})
export class RxUsageComponent implements OnInit {
  result$: any;
  constructor() { }

  ngOnInit(): void {
    // const numbers = interval(1000); //decelared 
    // const onlyTen = numbers.pipe(
    //   take(5),
    //   map(v => v + "- Modified stream in map ->" + Date.now()),
    //   map(v => v + "->> Another modification")
    // );

    // onlyTen.subscribe((v) => {
    //   console.log(v)
    // });

    this.rxJsOperatos();
  }

  rxJsOperatos() {
    //http request -> return obs 

    // const observable = new Observable(subscriber => {
    //   subscriber.next("surekha");
    //   subscriber.next("dsdsd");
    //   subscriber.next("pune");
    //   subscriber.complete();
    // });

    // observable.subscribe(ob => console.log(ob))

    // let myAnotherObs = of(1,2,3,4,6); //way obs

    // myAnotherObs.pipe(
    //   map((v: any) => {
    //     return v * 10 + 20
    //   })
    // )
    // .subscribe(fin => console.log(fin))


    // first
    // of(1,2,3,4,6)
    //   // .pipe(first())
    //   .pipe(
    //     map(v => v + 5),// values modififed from stre
    //     last() // 6, 7,8,9,11
    //   )
    //   .subscribe((v) => console.log(`value from ops chaining: ${v}`));

    // concat
    // const timer$ = interval(1000).pipe(take(10)); // 1 a,b
    // const sequence$ = range(100, 5); // 2 vv,yy //with ops with 

    this.result$ = concat(
      interval(1000).pipe(take(10)),
      range(100, 5))
      .pipe(
        map((v: any) => v + " -> Yuj"),
        take(10)
      )


    let cname = 'Pune';

    // let myFilterObs1$ = of(10, 56, 100, 20, 12);
    // let myFilterObs2$ = of(10, 56, 100, 20, 12);
    // let myFilterObs3$ = of(10, 56, 100, 20, 12);

    // myFilterObs1$.pipe(
    //   // merge(myFilterObs2$,myFilterObs3$),
    //   filter(val => val < 100)
    // ).subscribe(final => {
    //   console.log(final)
    // })



    // const letters = of(10, 20, 30);
    // let everyObs$ = interval(1000);

    // const result = letters.pipe(
    //   mergeMap(x => {
    //     return everyObs$.pipe(
    //       take(5),
    //       filter(i => i + x > 10)
    //     )
    //   }

    //   )
    // );

    // result.subscribe(x => console.log(x));

  }


}
