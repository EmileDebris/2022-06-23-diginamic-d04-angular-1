import { VoteService } from './../../../providers/vote.service';
import { LikeHate } from './../../../models/like-hate';
import { Vote } from './../../../models/vote';
import { Colleague } from './../../../models/colleague';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit {

  @Input() col !: Colleague

  updateScore(lh:LikeHate){
    this.voteService.addVote(this.col, lh);
  }

  constructor(private voteService : VoteService) { }

  ngOnInit(): void {
  }

}
