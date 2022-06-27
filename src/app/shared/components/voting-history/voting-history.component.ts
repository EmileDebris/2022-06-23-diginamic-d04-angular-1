import { VoteService } from './../../../providers/vote.service';
import { LikeHate } from './../../../models/like-hate';
import { Vote } from './../../../models/vote';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {

  voteList:Vote[] = []

  LikeHate = LikeHate

  removeElement(i:number){
    this.voteList.splice(i,1);
  }

  constructor(private voteService:VoteService) { }

  ngOnInit(): void {this.voteService.abonner().subscribe(vote => this.voteList.unshift(vote))
  }

}
