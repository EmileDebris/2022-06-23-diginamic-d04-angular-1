import { Events } from './../models/events';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventSubject = new Subject<Events>()

  constructor() { }

  addEvent(evenement:Events){
    this.eventSubject.next(evenement);
  }

  getEventObservable(){
    return this.eventSubject.asObservable();
  }
}
