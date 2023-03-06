import { Board } from "../board";
import { Color } from "../color";
import { Piece } from "../Piece";
import { Vote } from "../vote";

export class Bishop extends Piece {

    constructor(color: Color) {
        super("BISHOP_".concat(color), color);
    }

    public allowedMoves(from: Vote, cases: Piece[][]): number[] {
        let allowedMoves: number[] = new Array(0);
        switch(this.color) {
            case Color.WHITE:
                for(let delta = 1; delta < 8; delta++) {
                    if(from.x + delta < 8 && from.y + delta < 8 && !Board.isThereAnyPiecesBetweenCoord(from, new Vote(from.x + delta, from.y + delta), cases) && (cases[from.y + delta][from.x + delta].isEmptyPiece() || cases[from.y + delta][from.x + delta].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + delta, from.y + delta)));
                    if(from.x + delta < 8 && from.y - delta >= 0 && !Board.isThereAnyPiecesBetweenCoord(from, new Vote(from.x + delta, from.y - delta), cases) && (cases[from.y - delta][from.x + delta].isEmptyPiece() || cases[from.y - delta][from.x + delta].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + delta, from.y - delta)));
                    if(from.x - delta >= 0 && from.y + delta < 8 && !Board.isThereAnyPiecesBetweenCoord(from, new Vote(from.x - delta, from.y + delta), cases) && (cases[from.y + delta][from.x - delta].isEmptyPiece() || cases[from.y + delta][from.x - delta].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - delta, from.y + delta)));
                    if(from.x - delta >= 0 && from.y - delta >= 0 && !Board.isThereAnyPiecesBetweenCoord(from, new Vote(from.x - delta, from.y - delta), cases) && (cases[from.y - delta][from.x - delta].isEmptyPiece() || cases[from.y - delta][from.x - delta].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - delta, from.y - delta)));
                }
                break;
            case Color.BLACK:
                for(let delta = 1; delta < 8; delta++) {
                    if(from.x + delta < 8 && from.y + delta < 8 && !Board.isThereAnyPiecesBetweenCoord(from, new Vote(from.x + delta, from.y + delta), cases) && (cases[from.y + delta][from.x + delta].isEmptyPiece() || cases[from.y + delta][from.x + delta].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + delta, from.y + delta)));
                    if(from.x + delta < 8 && from.y - delta >= 0 && !Board.isThereAnyPiecesBetweenCoord(from, new Vote(from.x + delta, from.y - delta), cases) && (cases[from.y - delta][from.x + delta].isEmptyPiece() || cases[from.y - delta][from.x + delta].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + delta, from.y - delta)));
                    if(from.x - delta >= 0 && from.y + delta < 8 && !Board.isThereAnyPiecesBetweenCoord(from, new Vote(from.x - delta, from.y + delta), cases) && (cases[from.y + delta][from.x - delta].isEmptyPiece() || cases[from.y + delta][from.x - delta].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - delta, from.y + delta)));
                    if(from.x - delta >= 0 && from.y - delta >= 0 && !Board.isThereAnyPiecesBetweenCoord(from, new Vote(from.x - delta, from.y - delta), cases) && (cases[from.y - delta][from.x - delta].isEmptyPiece() || cases[from.y - delta][from.x - delta].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - delta, from.y - delta)));
                }
                break;
        }

        return allowedMoves;
    }
}