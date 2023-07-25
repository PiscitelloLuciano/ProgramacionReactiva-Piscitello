import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, takeUntil } from 'rxjs';
import { ReactiveProgramService } from 'src/app/services/reactive-program.service';

@Component({
  selector: 'app-reactive-program',
  templateUrl: './reactive-program.component.html',
  styleUrls: ['./reactive-program.component.scss'],
})
export class ReactiveProgramComponent implements OnDestroy {
  promesa: Promise<string>;
  observable?: string[];
  private dataSubscription?: Subscription;

  constructor(private serv: ReactiveProgramService) {
    this.promesa = this.serv.examplePromise('La promesa está funcionando');
    this.dataSubscription = this.serv.getDataObservable().subscribe((data) => {
      this.observable = [data];
      if (+data.split(' ')[1] >= 10) {
        this.serv.stopData();
      }
    });
  }
  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
