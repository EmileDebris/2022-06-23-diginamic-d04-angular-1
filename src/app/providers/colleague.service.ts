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
    return this.http.post<FullColleague>(url, newColleague)
  }

  listerColleague():Observable<Colleague[]>{
    return this.http.get<Colleague[]>(url)
  }

  getObservableCS(){
    return this.colleagueSubject.asObservable()
  }

  getPseudo(pseudo:string):Observable<FullColleague>{
    return this.http.get<FullColleague>(url + "/" + pseudo)
  }

}
