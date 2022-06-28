import { Subscription } from 'rxjs';
import { ColleagueService } from './../../../providers/colleague.service';
import { Colleague } from './../../../models/colleague';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  colleagueList:Colleague[] =[]


  constructor(private colleagueService:ColleagueService) {}

  refresh() {
    this.colleagueService.listerColleague()
      .subscribe(listeColleguesServeur => this.colleagueList = listeColleguesServeur);
  }

  ngOnInit(): void {this.refresh()}

}
