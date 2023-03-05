import { Color } from "./color";
import { Piece } from "./Piece";
import { Bishop } from "./pieces/bishop";
import { King } from "./pieces/king";
import { Knight } from "./pieces/knight";
import { Pawn } from "./pieces/pawn";
import { Queen } from "./pieces/queen";
import { Rook } from "./pieces/rook";
import { Vote } from "./vote";

export class Board {

    // Black
    private blackRook1 = new Rook(0, 7, Color.BLACK);
    private blackKnight1 = new Knight(1, 7, Color.BLACK);
    private blackBishop1 = new Bishop(2, 7, Color.BLACK);
    private blackQueen = new Queen(3, 7, Color.BLACK);
    private blackKing = new King(4, 7, Color.BLACK);
    private blackBishop2 = new Bishop(5, 7, Color.BLACK);
    private blackKnight2 = new Knight(6, 7, Color.BLACK);
    private blackRook2 = new Rook(7, 7, Color.BLACK);
    
    private blackPawn1 = new Pawn(0, 6, Color.BLACK);
    private blackPawn2 = new Pawn(1, 6, Color.BLACK);
    private blackPawn3 = new Pawn(2, 6, Color.BLACK);
    private blackPawn4 = new Pawn(3, 6, Color.BLACK);
    private blackPawn5 = new Pawn(4, 6, Color.BLACK);
    private blackPawn6 = new Pawn(5, 6, Color.BLACK);
    private blackPawn7 = new Pawn(6, 6, Color.BLACK);
    private blackPawn8 = new Pawn(7, 6, Color.BLACK);
    
     // White
    private whiteRook1 = new Rook(0, 0, Color.WHITE);
    private whiteKnight1 = new Knight(1, 0, Color.WHITE);
    private whiteBishop1 = new Bishop(2, 0, Color.WHITE);
    private whiteQueen = new Queen(3, 0, Color.WHITE);
    private whiteKing = new King(4, 0, Color.WHITE);
    private whiteBishop2 = new Bishop(5, 0, Color.WHITE);
    private whiteKnight2 = new Knight(6, 0, Color.WHITE);
    private whiteRook2 = new Rook(7, 0, Color.WHITE);

    private whitePawn1 = new Pawn(0, 6, Color.WHITE);
    private whitePawn2 = new Pawn(1, 6, Color.WHITE);
    private whitePawn3 = new Pawn(2, 6, Color.WHITE);
    private whitePawn4 = new Pawn(3, 6, Color.WHITE);
    private whitePawn5 = new Pawn(4, 6, Color.WHITE);
    private whitePawn6 = new Pawn(5, 6, Color.WHITE);
    private whitePawn7 = new Pawn(6, 6, Color.WHITE);
    private whitePawn8 = new Pawn(7, 6, Color.WHITE);

    cases: any[][];

    constructor() {
        this.cases = [
            [this.blackRook1, this.blackKnight1, this.blackBishop1, this.blackQueen, this.blackKing, this.blackBishop2, this.blackKnight2, this.blackRook2],
            [this.blackPawn1, this.blackPawn2, this.blackPawn3, this.blackPawn4, this.blackPawn5, this.blackPawn6, this.blackPawn7, this.blackPawn8],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [this.whitePawn1, this.whitePawn2, this.whitePawn3, this.whitePawn4, this.whitePawn5, this.whitePawn6, this.whitePawn7, this.whitePawn8],
            [this.whiteRook1, this.whiteKnight1, this.whiteBishop1, this.whiteQueen, this.whiteKing, this.whiteBishop2, this.whiteKnight2, this.whiteRook2],
        ]
    }

    public getCases(): any[][] {
        return this.cases;
    }

    public getFlatCases(): any[] {
        return this.cases.reduce((accumulator, value) => accumulator.concat(value));
    }

    public movePieceWithFlatCoord(previousIndex: number, currentIndex: number): void {
        let previousVote = Board.flatCoorMapper(previousIndex);
        let currentVote = Board.flatCoorMapper(currentIndex);

        let movedPiece = this.cases[previousVote.x][previousVote.y];
        this.cases[previousVote.x][previousVote.y] = null;

        this.cases[currentVote.x][currentVote.y] = movedPiece;
    }

    public static flatCoorMapper(index: number): Vote {
        let y: number = index%8;
        let x: number = Math.floor(index/8);

        return new Vote(x, y);
    }
}