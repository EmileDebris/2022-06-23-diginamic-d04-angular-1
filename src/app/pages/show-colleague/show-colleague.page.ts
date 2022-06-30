import { Colleague, FullColleague } from './../../models/colleague';
import { ColleagueService } from './../../providers/colleague.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tc-show-colleague',
  templateUrl: './show-colleague.page.html',
  styleUrls: ['./show-colleague.page.scss']
})
export class ShowColleaguePage implements OnInit {

  colleague:FullColleague={
    pseudo : '',
    score : 0,
    photo : '',
    last: '',
    first: ''
  }

  constructor(private activatedRoute:ActivatedRoute, private colleagueServ : ColleagueService, private router:Router) { }

  retour(){
    this.router.navigateByUrl("/colleagues")
  }

  ngOnInit(): void {
    let pseudo!:any
    this.activatedRoute.paramMap.subscribe(paramMap => pseudo = paramMap.get('pseudo'))
    this.colleagueServ.getPseudo(pseudo).subscribe(fullColleague => this.colleague = fullColleague)
  }

}
