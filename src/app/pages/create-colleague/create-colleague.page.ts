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

  constructor(private colleagueServ:ColleagueService) { }


  newColleague:AddColleague = {
    pseudo : '',
    photo : '',
    first: '',
    last: ''
  }

  valider(statutForm:NgForm){
    this.colleagueServ.addColleague(this.newColleague).subscribe(colleague => this.newColleague = colleague)

    statutForm.reset()

    this.newColleague = {
      pseudo : '',
      photo : '',
      first: '',
      last: ''
    }
  }



  ngOnInit(): void {
  }

}
