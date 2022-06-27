import { Vote } from './../models/vote';
import { LikeHate } from './../models/like-hate';
import { Colleague } from './../models/colleague';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  voteList:Vote[]=[];

  addVote(co:Colleague, vote:LikeHate){
    this.voteList.unshift({
      colleague: {...co},
      vote: vote
    })
  }

  getList(){
    return this.voteList;
  }

  removeElement(i:number){
    this.voteList.splice(i, 1)
  }

  constructor() { }
}
