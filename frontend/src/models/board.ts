import { Color } from "./color";
import { Bishop } from "./pieces/bishop";
import { King } from "./pieces/king";
import { Knight } from "./pieces/knight";
import { Pawn } from "./pieces/pawn";
import { Queen } from "./pieces/queen";
import { Rook } from "./pieces/rook";

export class Board {

    // Black
    blackRook1 = new Rook(0, 7, Color.BLACK);
    blackKnight1 = new Knight(1, 7, Color.BLACK);
    blackBishop1 = new Bishop(2, 7, Color.BLACK);
    blackQueen = new Queen(3, 7, Color.BLACK);
    blackKing = new King(4, 7, Color.BLACK);
    blackBishop2 = new Bishop(5, 7, Color.BLACK);
    blackKnight2 = new Knight(6, 7, Color.BLACK);
    blackRook2 = new Rook(7, 7, Color.BLACK);

    blackPawn1 = new Pawn(0, 6, Color.BLACK);
    blackPawn2 = new Pawn(1, 6, Color.BLACK);
    blackPawn3 = new Pawn(2, 6, Color.BLACK);
    blackPawn4 = new Pawn(3, 6, Color.BLACK);
    blackPawn5 = new Pawn(4, 6, Color.BLACK);
    blackPawn6 = new Pawn(5, 6, Color.BLACK);
    blackPawn7 = new Pawn(6, 6, Color.BLACK);
    blackPawn8 = new Pawn(7, 6, Color.BLACK);

    // White
    whiteRook1 = new Rook(0, 0, Color.WHITE);
    whiteKnight1 = new Knight(1, 0, Color.WHITE);
    whiteBishop1 = new Bishop(2, 0, Color.WHITE);
    whiteQueen = new Queen(3, 0, Color.WHITE);
    whiteKing = new King(4, 0, Color.WHITE);
    whiteBishop2 = new Bishop(5, 0, Color.WHITE);
    whiteKnight2 = new Knight(6, 0, Color.WHITE);
    whiteRook2 = new Rook(7, 0, Color.WHITE);

    whitePawn1 = new Pawn(0, 6, Color.WHITE);
    whitePawn2 = new Pawn(1, 6, Color.WHITE);
    whitePawn3 = new Pawn(2, 6, Color.WHITE);
    whitePawn4 = new Pawn(3, 6, Color.WHITE);
    whitePawn5 = new Pawn(4, 6, Color.WHITE);
    whitePawn6 = new Pawn(5, 6, Color.WHITE);
    whitePawn7 = new Pawn(6, 6, Color.WHITE);
    whitePawn8 = new Pawn(7, 6, Color.WHITE);

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
}