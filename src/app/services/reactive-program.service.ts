import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable, Subject, Subscription, interval, of } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReactiveProgramService {
  private dataObservable: Observable<string>;
  private stopSubject = new Subject<void>();

  constructor() {
    this.dataObservable = interval(1000).pipe(
      map((num) => `Contador ${num}`),
      map((data) => data.toUpperCase()),
      takeUntil(this.stopSubject)
    );
  }

  examplePromise(value: string) {
    return new Promise<string>((resolve, reject) => {
      resolve(value);
    });
  }

  getDataObservable(): Observable<string> {
    return this.dataObservable;
  }

  stopData(): void {
    this.stopSubject.next();
    this.stopSubject.complete();
  }
}
