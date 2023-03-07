import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardView } from 'ngx-chess-board';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @ViewChild('board', {static: false}) board!: NgxChessBoardView;

  lastVote: any;
  hasGameStarted: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  public vote(event: any): void {
    this.lastVote = event;
  }
}
