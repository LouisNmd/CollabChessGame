import { Board } from "../board";
import { Color } from "../color";
import { Piece } from "../Piece";
import { Vote } from "../vote";

export class Pawn extends Piece {

    hasMoved: boolean;
    canPriseEnPassantOnLeft: boolean;
    canPriseEnPassantOnRight: boolean;
    constructor(color: Color) {
        super("PAWN_".concat(color), color);
        this.hasMoved = false;
        this.canPriseEnPassantOnLeft = false;
        this.canPriseEnPassantOnRight = false;
    }

    public allowedMoves(from: Vote, cases: Piece[][]): number[] {
        let allowedMoves: number[] = new Array(0);
        switch(this.color) {
            case Color.WHITE:
                if(cases[from.y-1][from.x].isEmptyPiece()) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x, from.y - 1)));
                if(cases[from.y-2][from.x].isEmptyPiece() && !this.hasMoved) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x, from.y - 2)));
                if((cases[from.y-1][from.x-1] != null && cases[from.y-1][from.x-1].color == Color.BLACK) || this.canPriseEnPassantOnLeft) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 1, from.y - 1)));
                if((cases[from.y-1][from.x+1] != null && cases[from.y-1][from.x+1].color == Color.BLACK) || this.canPriseEnPassantOnRight) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 1, from.y - 1)));
                break;
            case Color.BLACK:
                if(cases[from.y+1][from.x].isEmptyPiece()) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x, from.y + 1)));
                if(cases[from.y+2][from.x].isEmptyPiece() && !this.hasMoved) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x, from.y + 2)));
                if((cases[from.y+1][from.x-1] != null && cases[from.y+1][from.x-1].color == Color.WHITE) || this.canPriseEnPassantOnLeft) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 1, from.y + 1)));
                if((cases[from.y+1][from.x+1] != null && cases[from.y+1][from.x+1].color == Color.WHITE) || this.canPriseEnPassantOnRight) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 1, from.y + 1)));
                break;
        }

        return allowedMoves;
    }
}