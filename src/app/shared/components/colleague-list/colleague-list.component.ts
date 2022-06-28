import { Events } from './../../../models/events';
import { EventsService } from './../../../providers/events.service';
import { filter, Subscription } from 'rxjs';
import { ColleagueService } from './../../../providers/colleague.service';
import { Colleague } from './../../../models/colleague';
import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit, OnDestroy {

  colleagueList:Colleague[] =[]
  abonnement!:Subscription

  constructor(private colleagueService:ColleagueService, private eventsService:EventsService) {}

  refresh() {
    this.colleagueService.listerColleague()
      .subscribe(listeColleguesServeur => this.colleagueList = listeColleguesServeur);
  }

  ngOnInit(): void {
    this.refresh();
    this.abonnement = this.eventsService.getEventObservable()
    .pipe(
      filter(evenement => evenement === Events.REFRESH)
      )
      .subscribe(() => this.refresh())
  }

  ngOnDestroy(): void {
      this.abonnement.unsubscribe()
  }

}
