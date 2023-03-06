import { Color } from "./color";
import { Piece } from "./Piece";
import { Bishop } from "./pieces/bishop";
import { EmptyPiece } from "./pieces/empty";
import { King } from "./pieces/king";
import { Knight } from "./pieces/knight";
import { Pawn } from "./pieces/pawn";
import { Queen } from "./pieces/queen";
import { Rook } from "./pieces/rook";
import { Vote } from "./vote";

export class Board {

    // Black
    private blackRook1 = new Rook(Color.BLACK);
    private blackKnight1 = new Knight(Color.BLACK);
    private blackBishop1 = new Bishop(Color.BLACK);
    private blackQueen = new Queen(Color.BLACK);
    private blackKing = new King(Color.BLACK);
    private blackBishop2 = new Bishop(Color.BLACK);
    private blackKnight2 = new Knight(Color.BLACK);
    private blackRook2 = new Rook(Color.BLACK);
    
    private blackPawn1 = new Pawn(Color.BLACK);
    private blackPawn2 = new Pawn(Color.BLACK);
    private blackPawn3 = new Pawn(Color.BLACK);
    private blackPawn4 = new Pawn(Color.BLACK);
    private blackPawn5 = new Pawn(Color.BLACK);
    private blackPawn6 = new Pawn(Color.BLACK);
    private blackPawn7 = new Pawn(Color.BLACK);
    private blackPawn8 = new Pawn(Color.BLACK);
    
     // White
    private whiteRook1 = new Rook(Color.WHITE);
    private whiteKnight1 = new Knight(Color.WHITE);
    private whiteBishop1 = new Bishop(Color.WHITE);
    private whiteQueen = new Queen(Color.WHITE);
    private whiteKing = new King(Color.WHITE);
    private whiteBishop2 = new Bishop(Color.WHITE);
    private whiteKnight2 = new Knight(Color.WHITE);
    private whiteRook2 = new Rook(Color.WHITE);

    private whitePawn1 = new Pawn(Color.WHITE);
    private whitePawn2 = new Pawn(Color.WHITE);
    private whitePawn3 = new Pawn(Color.WHITE);
    private whitePawn4 = new Pawn(Color.WHITE);
    private whitePawn5 = new Pawn(Color.WHITE);
    private whitePawn6 = new Pawn(Color.WHITE);
    private whitePawn7 = new Pawn(Color.WHITE);
    private whitePawn8 = new Pawn(Color.WHITE);

    cases: Piece[][];

    constructor() {
        this.cases = [
            [this.blackRook1, this.blackKnight1, this.blackBishop1, this.blackQueen, this.blackKing, this.blackBishop2, this.blackKnight2, this.blackRook2],
            [this.blackPawn1, this.blackPawn2, this.blackPawn3, this.blackPawn4, this.blackPawn5, this.blackPawn6, this.blackPawn7, this.blackPawn8],
            [new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece()],
            [new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece()],
            [new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece()],
            [new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece(), new EmptyPiece()],
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

        let movedPiece = this.cases[previousVote.y][previousVote.x];
        this.cases[previousVote.y][previousVote.x] = new EmptyPiece();

        
        // TODO : réfacto lors de la connexion avec le back
        if(movedPiece instanceof Pawn) {
            movedPiece.hasMoved = true;
            if(Math.abs(previousVote.y - currentVote.y) == 2) {
                let leftCase = this.cases[currentVote.y][currentVote.x - 1];
                let rightCase = this.cases[currentVote.y][currentVote.x + 1];
                if(!leftCase.isEmptyPiece() && leftCase instanceof Pawn && movedPiece.color != leftCase.color) leftCase.canPriseEnPassantOnRight = true;
                if(!rightCase.isEmptyPiece() && rightCase instanceof Pawn && movedPiece.color != rightCase.color) rightCase.canPriseEnPassantOnLeft = true;
            } else if(previousVote.x != currentVote.x && this.cases[currentVote.y][currentVote.x] == new EmptyPiece()) {
                if(movedPiece.canPriseEnPassantOnLeft) {
                    console.log("En passant on left");
                    this.cases[previousVote.y][previousVote.x-1] = new EmptyPiece();
                } else if(movedPiece.canPriseEnPassantOnRight) {
                    console.log("En passant on right");
                    this.cases[previousVote.y][previousVote.x+1] = new EmptyPiece();
                }
            }
        }

        this.cases[currentVote.y][currentVote.x] = movedPiece;
    }

    public static flatCoorMapper(index: number): Vote {
        let x: number = index%8;
        let y: number = Math.floor(index/8);

        return new Vote(x, y);
    }

    public static multidimentionnalCoordMapper(position: Vote): number {
        return position.y * 8 + position.x;
    }
    
    public tagCasesAsCheck(allowedMoves: number[]): void {
        allowedMoves.forEach(value => {
            let boardCase = Board.flatCoorMapper(value);
            this.cases[boardCase.y][boardCase.x].isCheck = true;
        });
    }

    public static isThereAnyPiecesBetweenCoord(from: Vote, to: Vote, cases: Piece[][]): boolean {
        if(from.x == to.x) {
            if(from.y == to.y) {
                return true;
            } else {
                let lowestY = Math.min(from.y, to.y);
                let highestY = Math.max(from.y, to.y);
                for(let i=lowestY; i<highestY; i++) {
                    if(!cases[i][from.x].isEmptyPiece() && i!=from.y) return true;
                }
            }
        } else {
            if(from.y == to.y) {
                let lowestX = Math.min(from.x, to.x);
                let highestX = Math.max(from.x, to.x);
                for(let i=lowestX; i<highestX; i++) {
                    if(!cases[from.y][i].isEmptyPiece() && i!=from.x) return true;
                }
            } else {
                let deltaX = to.x - from.x;
                let deltaY = to.y - from.y;
                if(Math.sign(deltaX) == -1) {
                    if(Math.sign(deltaY) == -1) {
                        for(let i=1; i<Math.abs(deltaX); i++) {
                            console.log(i);
                            console.log(cases[from.y-i][from.x-i]);
                            if(!cases[from.y-i][from.x-i].isEmptyPiece()) return true;
                        }
                    } else {
                        for(let i=1; i<Math.abs(deltaX); i++) {
                            if(!cases[from.y+i][from.x-i].isEmptyPiece()) return true;
                        }
                    }
                } else {
                    if(Math.sign(deltaY) == -1) {
                        for(let i=1; i<deltaX; i++) {
                            if(!cases[from.y-i][from.x+i].isEmptyPiece()) return true;
                        }
                    } else {
                        for(let i=1; i<deltaY; i++) {
                            if(!cases[from.y+i][from.x+i].isEmptyPiece()) return true;
                        }
                    }
                }
            }
        }

        return false;
    }
}