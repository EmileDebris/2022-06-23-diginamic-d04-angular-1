import { Vote } from './../models/vote';
import { LikeHate } from './../models/like-hate';
import { Colleague } from './../models/colleague';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private voteSubject = new Subject<Vote>();

  voteList:Vote[]=[];

  addVote(co:Colleague, vote:LikeHate){
    let newVote = {
      colleague: {...co},
      vote: vote
    };

    this.voteSubject.next(newVote);
  }

  abonner(): Observable<Vote>{
    return this.voteSubject.asObservable();
  }

  constructor() { }
}
