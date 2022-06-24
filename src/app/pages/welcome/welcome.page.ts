import { Colleague } from './../../models/colleague';
import { LikeHate } from './../../models/like-hate';
import { Vote } from './../../models/vote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage implements OnInit {

  voteList:{pseudo:string, score:number, photo:string, vote:LikeHate}[] = []


  addVote(vote:Vote){
    let copyVote = {
      pseudo : vote.colleague.pseudo,
      score : vote.colleague.score,
      photo : vote.colleague.photo,
      vote : vote.vote
    }
    this.voteList.push(copyVote)
  }

  colleagueList:Colleague[] = [
    {
      pseudo : "JeanC",
      score : 999,
      photo : "https://file1.telestar.fr/var/telestar/storage/images/media/images/2015/photos/20150403-camera-cafe-que/yvan-le-bolloc-h/817654-3-fre-FR/Yvan-Le-Bolloc-h.jpg?alias=width400&size=x100&format=jpeg"
    },
    {
      pseudo : "JClaude",
      score : -999,
      photo : "https://file1.telestar.fr/var/telestar/storage/images/media/images/2015/photos/20150403-camera-cafe-que/yvan-le-bolloc-h/817654-3-fre-FR/Yvan-Le-Bolloc-h.jpg?alias=width400&size=x100&format=jpeg"
    },
    {
      pseudo : "JC",
      score : 999,
      photo : "https://file1.telestar.fr/var/telestar/storage/images/media/images/2015/photos/20150403-camera-cafe-que/yvan-le-bolloc-h/817654-3-fre-FR/Yvan-Le-Bolloc-h.jpg?alias=width400&size=x100&format=jpeg"
    },
    {
      pseudo : "JeanClaude",
      score : 999,
      photo : "https://file1.telestar.fr/var/telestar/storage/images/media/images/2015/photos/20150403-camera-cafe-que/yvan-le-bolloc-h/817654-3-fre-FR/Yvan-Le-Bolloc-h.jpg?alias=width400&size=x100&format=jpeg"
    },
    {
      pseudo : "JC",
      score : 999,
      photo : "https://file1.telestar.fr/var/telestar/storage/images/media/images/2015/photos/20150403-camera-cafe-que/yvan-le-bolloc-h/817654-3-fre-FR/Yvan-Le-Bolloc-h.jpg?alias=width400&size=x100&format=jpeg"
    },
    {
      pseudo : "JC",
      score : 999,
      photo : "https://file1.telestar.fr/var/telestar/storage/images/media/images/2015/photos/20150403-camera-cafe-que/yvan-le-bolloc-h/817654-3-fre-FR/Yvan-Le-Bolloc-h.jpg?alias=width400&size=x100&format=jpeg"
    },
    {
      pseudo : "JC",
      score : 999,
      photo : "https://file1.telestar.fr/var/telestar/storage/images/media/images/2015/photos/20150403-camera-cafe-que/yvan-le-bolloc-h/817654-3-fre-FR/Yvan-Le-Bolloc-h.jpg?alias=width400&size=x100&format=jpeg"
    },
    {
      pseudo : "JC",
      score : 999,
      photo : "https://file1.telestar.fr/var/telestar/storage/images/media/images/2015/photos/20150403-camera-cafe-que/yvan-le-bolloc-h/817654-3-fre-FR/Yvan-Le-Bolloc-h.jpg?alias=width400&size=x100&format=jpeg"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
