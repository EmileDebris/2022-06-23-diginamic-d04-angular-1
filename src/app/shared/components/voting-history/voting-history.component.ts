import { LikeHate } from './../../../models/like-hate';
import { Vote } from './../../../models/vote';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {

  @Input() vote!:Vote

  toString(lh:LikeHate):string{
    if (lh==LikeHate.LIKE){
      return "aimé(e)"
    }
    else{
      return "detesté(e)"
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
