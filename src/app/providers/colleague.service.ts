import { Observable } from 'rxjs';
import { Colleague } from './../models/colleague';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {



  listerColleague():Observable<Colleague[]>{
    return this.http.get<Colleague[]>("https://colleagues-app.herokuapp.com/api/v2/colleagues")
  }

  constructor(private http: HttpClient) { }
}
