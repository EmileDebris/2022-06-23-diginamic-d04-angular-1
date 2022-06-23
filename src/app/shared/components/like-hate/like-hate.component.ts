import { LikeHate } from './../../../models/like-hate';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent implements OnInit {

  @Output() like = new EventEmitter<LikeHate>();
  @Output() hate = new EventEmitter<LikeHate>();

  onClickLike(){
    this.like.emit(LikeHate.LIKE);
  }

  onClickHate(){
    this.hate.emit(LikeHate.HATE)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
