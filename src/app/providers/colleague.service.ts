import { Colleague } from './../models/colleague';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

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

  getList(){
    return this.colleagueList;
  }

  constructor() { }
}
