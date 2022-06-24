import { Vote } from './models/vote';
import { Colleague } from './models/colleague';
import { ColleagueListComponent } from './shared/components/colleague-list/colleague-list.component';
import { LikeHate } from './models/like-hate';
import { Component } from '@angular/core';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';

}
