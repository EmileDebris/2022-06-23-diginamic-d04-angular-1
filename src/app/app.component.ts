import { LikeHate } from './models/like-hate';
import { Component } from '@angular/core';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';
  unCollegue = {
    pseudo : "JC",
    score : 2594566,
    photo : "https://file1.telestar.fr/var/telestar/storage/images/media/images/2015/photos/20150403-camera-cafe-que/yvan-le-bolloc-h/817654-3-fre-FR/Yvan-Le-Bolloc-h.jpg?alias=width400&size=x100&format=jpeg"
  }

  updateScore(lh:LikeHate){
    if (lh == LikeHate.LIKE){
      this.unCollegue.score += 1000;
    }
    if (lh == LikeHate.HATE){
      this.unCollegue.score -= 1000;
    }
  }

}
