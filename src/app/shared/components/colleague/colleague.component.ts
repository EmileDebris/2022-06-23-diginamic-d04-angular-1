import { Subscription } from 'rxjs';
import { VoteService } from './../../../providers/vote.service';
import { LikeHate } from './../../../models/like-hate';
import { Vote } from './../../../models/vote';
import { Colleague } from './../../../models/colleague';
import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit, OnDestroy {
  votes: Vote[] = [];
  @Input() col !: Colleague;
  abonnement!:Subscription;

  constructor(private voteService : VoteService) { }

  updateScore(lh:LikeHate){
    this.voteService.addVote(this.col, lh)
    .subscribe(fullcol => {
      this.col.score = fullcol.score}) ;
  }



  ngOnInit(): void {
    this.abonnement = this.voteService.abonner()
    .subscribe(vote => {
      this.votes.unshift(vote)
    });
  }
  ngOnDestroy(): void {
      this.abonnement.unsubscribe()
  }

}
