import { Subscription } from 'rxjs';
import { AddColleague } from './../../models/colleague';
import { ColleagueService } from './../../providers/colleague.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-create-colleague',
  templateUrl: './create-colleague.page.html',
  styleUrls: ['./create-colleague.page.scss']
})
export class CreateColleaguePage implements OnInit {

  constructor(private colleagueServ:ColleagueService) { }


  newColleague:AddColleague = {
    pseudo : '',
    photo : '',
    first: '',
    last: ''
  }

  valider(){
    this.colleagueServ.addColleague(this.newColleague)
  }



  ngOnInit(): void {
  }

}
