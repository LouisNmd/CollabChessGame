import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Board } from 'src/models/board';
import { Piece } from 'src/models/Piece';

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.scss']
})
export class ChessGameComponent implements OnInit {

  private isWhite: boolean = false;
  private draggingPiece!: Piece;
  board: Board = new Board();
  dragPosition = {x: 0, y: 0};
  isDragging: boolean = false;

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

  drop(event: CdkDragDrop<any>) {
    //this.board.cases[event.previousContainer.data.index]=event.container.data.item
    //this.board.cases[event.container.data.index]=event.previousContainer.data.item
    console.log(event);
  }
}
