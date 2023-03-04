import { Component, OnInit } from '@angular/core';
import { Board } from 'src/models/board';

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.scss']
})
export class ChessGameComponent implements OnInit {

  private isWhite: boolean = true;
  board: Board = new Board();

  constructor() {}

  ngOnInit(): void {
  }

  setTileColorClass(): String {
    if(this.isWhite) {
      this.isWhite = false;
      return "white-tile";
    } else {
      this.isWhite = true;
      return "black-tile";
    }
  }

}
