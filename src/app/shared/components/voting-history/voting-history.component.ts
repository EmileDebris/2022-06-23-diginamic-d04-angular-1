import { LikeHate } from './../../../models/like-hate';
import { Vote } from './../../../models/vote';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {

  @Input() voteList!:{pseudo:string, score:number, photo:string, vote:LikeHate}[]

  toString(vote:{pseudo:string, score:number, photo:string, vote:LikeHate}):string{
   return `${vote.pseudo} est ${vote.vote==LikeHate.LIKE ? "aimé" : "détesté"}, son score est maintenant de ${vote.score}`
  }

  delVote(i:number){
    this.voteList.splice(i, 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
