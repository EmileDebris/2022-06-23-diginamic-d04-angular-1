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

  removeElement(i:number){
    this.voteList.splice(i,1);
  }

  constructor(private voteService:VoteService) { }

  ngOnInit(): void {this.abonnement = this.voteService.abonner().subscribe(vote => this.voteList = vote)
  }

  ngOnDestroy(): void {
      this.abonnement.unsubscribe();
  }
}
