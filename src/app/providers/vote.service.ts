import { HttpClient } from '@angular/common/http';
import { Vote } from './../models/vote';
import { LikeHate } from './../models/like-hate';
import { Colleague } from './../models/colleague';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

const url:string="https://colleagues-app.herokuapp.com/api/v2/votes"

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private voteSubject = new Subject<Vote>();



  addVote(co:Colleague, vote:LikeHate){
    this.http.post<any>(url, {
      "pseudo": co.pseudo,
      "like_hate": (vote==LikeHate.LIKE) ? "LIKE" : "HATE"
    }).subscribe(post =>{window.location.reload()});
  }

  abonner(): Observable<Vote[]>{
    return this.http.get<Vote[]>(url);
  }

  constructor(private http:HttpClient) { }
}
