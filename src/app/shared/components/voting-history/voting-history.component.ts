import { VoteService } from './../../../providers/vote.service';
import { LikeHate } from './../../../models/like-hate';
import { Vote } from './../../../models/vote';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit, OnDestroy {

  voteList:Vote[] = []
  abonnement!:Subscription
  LikeHate = LikeHate

  constructor(private voteService:VoteService) { }

  removeElement(i:number){
    this.voteList.splice(i,1);
  }

  refresh() {
    this.voteService.getListeVotes()
      .subscribe(votesServeur => this.voteList = votesServeur);
  }


  ngOnInit(): void {
    this.refresh();
    this.abonnement = this.voteService.abonner().subscribe(() => this.refresh())
  }

  ngOnDestroy(): void {
      this.abonnement.unsubscribe();
  }
}
