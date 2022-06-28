import { Observable, Subject, tap } from 'rxjs';
import { Colleague, AddColleague, FullColleague } from './../models/colleague';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url:string="https://colleagues-app.herokuapp.com/api/v2/colleagues"

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  private colleagueSubject = new Subject<Colleague>();

  constructor(private http: HttpClient) { }

  addColleague(newColleague:AddColleague){
    this.http.post<FullColleague>(url, newColleague).pipe(
      tap(fullColleague => this.colleagueSubject.next({
        pseudo: fullColleague.pseudo, score: fullColleague.score, photo:fullColleague.photo
      }))
    )
  }

  listerColleague():Observable<Colleague[]>{
    return this.http.get<Colleague[]>(url)
  }

  getObservableCS(){
    return this.colleagueSubject.asObservable()
  }

}
