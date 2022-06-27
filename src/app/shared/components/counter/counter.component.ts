import { Subscription } from 'rxjs';
import { VoteService } from './../../../providers/vote.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  totalLike = 0;
  totalHate = 0;
  abonnement!:Subscription


  constructor(private voteService : VoteService) { }

  ngOnInit(): void {this.abonnement = this.voteService.abonner().subscribe(voteList => voteList.forEach( vote => {
      if (vote.like_hate == "LIKE"){
        this.totalLike ++;
      }
      else{
        this.totalHate ++
      }
    }))
  }

  ngOnDestroy(): void {
      this.abonnement.unsubscribe();
  }
}
