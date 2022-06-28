import { Vote } from './../../../models/vote';
import { LikeHate } from './../../../models/like-hate';
import { Subscription } from 'rxjs';
import { VoteService } from './../../../providers/vote.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  totalLike = 0;
  totalHate = 0;
  abonnementVote!:Subscription


  constructor(private voteService : VoteService) { }

  refresh(){
    this.totalLike = 0
    this.totalHate = 0
    this.voteService.getListeVotes().subscribe(voteList => voteList.forEach(vote =>{
      if (vote.like_hate == LikeHate.LIKE){
        this.totalLike ++;
      }
      else{
        this.totalHate ++;
      }
    }))
  }

  ngOnInit(): void {
    this.refresh();
    this.abonnementVote = this.voteService.abonner().subscribe(() => this.refresh())
  }

  ngOnDestroy(): void {
      this.abonnementVote.unsubscribe();
  }
}
