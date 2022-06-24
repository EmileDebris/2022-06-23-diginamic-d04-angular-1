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
  @Output() vote = new EventEmitter<Vote>();

  updateScore(co:Colleague, lh:LikeHate){
    if (lh == LikeHate.LIKE){
      co.score += 1;
    }
    if (lh == LikeHate.HATE){
      co.score -= 1;
    }
    this.vote.emit({
      colleague: co,
      vote: lh
    })
  }
  constructor() { }

  ngOnInit(): void {
  }

}
