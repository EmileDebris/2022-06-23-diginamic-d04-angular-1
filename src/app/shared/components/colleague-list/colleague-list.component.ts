import { Subscription } from 'rxjs';
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

  colleagueList:Colleague[] =[]
  abonnement!:Subscription;


  constructor(private colleagueService:ColleagueService) { }

  ngOnInit(): void {this.abonnement = this.colleagueService.listerColleague().subscribe(col => this.colleagueList = col)}

}
