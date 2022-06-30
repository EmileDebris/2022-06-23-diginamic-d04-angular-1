import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ColleagueService } from './../../../providers/colleague.service';
import { AddColleague } from './../../../models/colleague';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent implements OnInit {
  constructor(private colleagueServ:ColleagueService, private router:Router) { }


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
    this.router.navigateByUrl("/colleagues")
  }


  checkFirstLast(statutForm:NgForm):boolean{
    if (statutForm.errors == null){
      return false;
    }
    if("firstLast" in statutForm.errors){
      return true;
    }
    else{
      return false;
    }
  }



  ngOnInit(): void {
  }

}

