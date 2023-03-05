import { CdkDragDrop, CdkDragEnter, CdkDragRelease } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Board } from 'src/models/board';
import { Piece } from 'src/models/Piece';
import { Vote } from 'src/models/vote';

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.scss']
})
export class ChessGameComponent implements OnInit {

  private isWhite: boolean = true;
  private draggingPiece!: Piece;
  board: Board = new Board();
  dragPosition = {x: 0, y: 0};
  isDragging: boolean = false;
  
  from!: Vote;
  to!: Vote;

  constructor() {}

  ngOnInit(): void {
  }

  setTileColorClass(index: number): String {
    if(index%8 == 0) {
      this.isWhite = !this.isWhite;
    }
    if(this.isWhite) {
      this.isWhite = false;
      return "white-tile";
    } else {
      this.isWhite = true;
      return "black-tile";
    }
  }

  movePiece(event: CdkDragDrop<any>) {
    this.from = Board.flatCoorMapper(event.previousContainer.data.index);
    this.to = Board.flatCoorMapper(event.container.data.index);
    this.board.movePieceWithFlatCoord(event.previousContainer.data.index, event.container.data.index);
  }
}
