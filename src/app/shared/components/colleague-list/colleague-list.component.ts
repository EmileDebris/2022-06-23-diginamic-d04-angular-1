import { Vote } from './../../../models/vote';
import { LikeHate } from './../../../models/like-hate';
import { Colleague } from './../../../models/colleague';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  @Input() colleagueList!:Colleague[]
  @Output() vote = new EventEmitter<Vote>()

  outVote(vote:Vote){
    this.vote.emit(vote);
  }

  constructor() { }

  ngOnInit(): void { }

}
