import { LikeHate } from './../../../models/like-hate';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent implements OnInit {

  @Output() lh = new EventEmitter<LikeHate>();
  @Input() score!: number;


  onClickLike(){
    this.lh.emit(LikeHate.LIKE);
  }

  onClickHate(){
    this.lh.emit(LikeHate.HATE)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
