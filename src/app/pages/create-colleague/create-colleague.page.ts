import { Subscription } from 'rxjs';
import { AddColleague } from './../../models/colleague';
import { ColleagueService } from './../../providers/colleague.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tc-create-colleague',
  templateUrl: './create-colleague.page.html',
  styleUrls: ['./create-colleague.page.scss']
})
export class CreateColleaguePage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
