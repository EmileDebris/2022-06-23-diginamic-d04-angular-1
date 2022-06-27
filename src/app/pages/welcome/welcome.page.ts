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

  voteList:Vote[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
