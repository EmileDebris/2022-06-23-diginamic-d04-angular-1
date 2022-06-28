import { EventsService } from './../../../providers/events.service';
import { VoteService } from './../../../providers/vote.service';
import { LikeHate } from './../../../models/like-hate';
import { Vote } from './../../../models/vote';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter } from 'rxjs';
import { Events } from 'src/app/models/events';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit, OnDestroy {

  voteList:Vote[] = []
  abonnementVote!:Subscription
  abonnementEvents!:Subscription
  LikeHate = LikeHate

  constructor(private voteService:VoteService, private eventsService:EventsService) { }

  removeElement(i:number){
    this.voteList.splice(i,1);
  }

  refresh() {
    this.voteService.getListeVotes()
      .subscribe(votesServeur => this.voteList = votesServeur);
  }


  ngOnInit(): void {
    this.refresh();
    this.abonnementVote = this.voteService.abonner().subscribe(() => this.refresh())
    this.abonnementEvents = this.eventsService.getEventObservable()
    .pipe(filter(evenement => evenement === Events.REFRESH))
    .subscribe(() => this.refresh())
  }

  ngOnDestroy(): void {
      this.abonnementVote.unsubscribe();
  }
}
