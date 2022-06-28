import { Events } from './../../models/events';
import { EventsService } from './../../providers/events.service';
import { Colleague } from './../../models/colleague';
import { LikeHate } from './../../models/like-hate';
import { Vote } from './../../models/vote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage implements OnInit {


  constructor(private eventsService : EventsService) { }

  refresh(){
    this.eventsService.addEvent(Events.REFRESH)
  }

  ngOnInit(): void {
  }

}
