import { LikeHate } from './../../../models/like-hate';
import { Vote } from './../../../models/vote';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {

  @Input() voteList!:Vote[]

  LikeHate = LikeHate

  toString(vote:Vote):string{
    return `${vote.colleague.pseudo} est ${vote.vote==LikeHate.LIKE ? "aimé" : "détesté"}, son score est maintenant de ${vote.colleague.score} ${vote.colleague.score > 0 ? ":-)" : ":-("}`
  }

  delVote(i:number){
    this.voteList.splice(i, 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
