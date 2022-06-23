import { LikeHate } from './../../../models/like-hate';
import { Colleague } from './../../../models/colleague';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

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


  updateScore(co:Colleague, lh:LikeHate){
    if (lh == LikeHate.LIKE){
      co.score += 1;
    }
    if (lh == LikeHate.HATE){
      co.score -= 1;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
