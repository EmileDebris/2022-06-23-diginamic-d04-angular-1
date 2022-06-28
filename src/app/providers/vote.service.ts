import { HttpClient } from '@angular/common/http';
import { Vote } from './../models/vote';
import { LikeHate } from './../models/like-hate';
import { Colleague, FullColleague } from './../models/colleague';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

const url:string="https://colleagues-app.herokuapp.com/api/v2/votes"

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private voteSubject = new Subject<Vote>();

  addVote(colleague:Colleague, vote:LikeHate){
    return this.http.post<FullColleague>(url, {
      "pseudo": colleague.pseudo,
      "like_hate": vote
    }).pipe(
      tap(fullColleague => this.voteSubject.next({colleague:fullColleague, vote, score: fullColleague.score})));
  }

  getListeVotes(){
    return this.http.get<Vote[]>(url);
  }

  abonner(): Observable<Vote>{
    return this.voteSubject.asObservable()
  }

  constructor(private http:HttpClient) { }
}
