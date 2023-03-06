import { CdkDragDrop, CdkDragEnter, CdkDragRelease, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Board } from 'src/models/board';
import { Color } from 'src/models/color';
import { Vote } from 'src/models/vote';

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.scss']
})
export class ChessGameComponent implements OnInit {

  private isWhite: boolean = true;
  board: Board = new Board();
  dragPosition = {x: 0, y: 0};
  isDragging: boolean = false;
  allowedMoves: number[] = [];
  userColor: Color;
  
  from!: Vote;
  to!: Vote;

  constructor() {
    this.userColor = Color.WHITE;
  }

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

  endingDrag(event: CdkDragDrop<any>): void {
    this.to = Board.flatCoorMapper(event.container.data.index);
    if(this.allowedMoves.indexOf(event.container.data.index) > -1) {
      this.board.movePieceWithFlatCoord(event.previousContainer.data.index, event.container.data.index);
      let piece = this.board.cases[this.to.y][this.to.x];
      this.allowedMoves = piece.allowedMoves(this.to, this.board.cases);
      this.board.tagCasesAsCheck(this.allowedMoves);
    }
    this.allowedMoves = [];
  }

  startingDrag(event: CdkDragStart<any>): void {
    this.from = Board.flatCoorMapper(event.source.dropContainer.data.index);
    let piece = this.board.cases[this.from.y][this.from.x];
    this.allowedMoves = piece.allowedMoves(this.from, this.board.cases);
  }

  getDotClass(index: number): String {
    return this.allowedMoves.findIndex(value => value == index) > -1 ? 'redDot' : ''
  }
}
