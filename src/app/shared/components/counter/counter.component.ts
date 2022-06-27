import { LikeHate } from './../../../models/like-hate';
import { VoteService } from './../../../providers/vote.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  totalLike = 0;
  totalHate = 0;

  constructor(private voteService : VoteService) { }

  ngOnInit(): void {this.voteService.abonner().subscribe(vote => {
      if (vote.vote == LikeHate.LIKE){
        this.totalLike ++;
      }
      else{
        this.totalHate ++
      }
    })
  }
}
