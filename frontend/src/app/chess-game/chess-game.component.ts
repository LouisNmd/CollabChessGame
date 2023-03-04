import { Component, OnInit } from '@angular/core';
import { Board } from 'src/models/board';

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.scss']
})
export class ChessGameComponent implements OnInit {

  private isWhite: boolean = false;
  board: Board = new Board();

  constructor() {}

  ngOnInit(): void {
  }

  setTileColorClass(index: number): String {
    if(index == 0) this.isWhite = !this.isWhite;
    if(this.isWhite) {
      this.isWhite = false;
      return "white-tile";
    } else {
      this.isWhite = true;
      return "black-tile";
    }
  }
}
