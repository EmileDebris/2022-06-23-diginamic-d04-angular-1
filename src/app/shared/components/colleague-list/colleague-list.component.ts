import { ColleagueService } from './../../../providers/colleague.service';
import { Vote } from './../../../models/vote';
import { Colleague } from './../../../models/colleague';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  colleagueList = this.colleagueService.getList();

  constructor(private colleagueService:ColleagueService) { }

  ngOnInit(): void { }

}
