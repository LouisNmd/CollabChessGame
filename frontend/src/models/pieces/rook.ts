import { Board } from "../board";
import { Color } from "../color";
import { Piece } from "../Piece";
import { Vote } from "../vote";

export class Rook extends Piece {

    constructor(color: Color) {
        super("ROOK_".concat(color), color);
    }    
    
    public allowedMoves(from: Vote, cases: Piece[][]): number[] {
        let allowedMoves: number[] = new Array(0);
        switch(this.color) {
            case Color.WHITE:
                for(let delta = 1; delta < 8; delta++) {
                    if(from.y-delta >= 0 && (cases[from.y-delta][from.x].isEmptyPiece() || cases[from.y-delta][from.x].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x, from.y - delta)));
                    if(from.y+delta < 8 && (cases[from.y+delta][from.x].isEmptyPiece() || cases[from.y+delta][from.x].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x, from.y + delta)));
                    if(from.x-delta >= 0 && (cases[from.y][from.x-delta].isEmptyPiece() || cases[from.y][from.x-delta].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - delta, from.y)));
                    if(from.x+delta < 8 && (cases[from.y][from.x+delta].isEmptyPiece() || cases[from.y][from.x+delta].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + delta, from.y)));
                }
                break;
            case Color.BLACK:
                for(let delta = 1; delta < 8; delta++) {
                    if(from.y-delta >= 0 && (cases[from.y-delta][from.x].isEmptyPiece() || cases[from.y-delta][from.x].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x, from.y - delta)));
                    if(from.y+delta < 8 && (cases[from.y+delta][from.x].isEmptyPiece() || cases[from.y+delta][from.x].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x, from.y + delta)));
                    if(from.x-delta >= 0 && (cases[from.y][from.x-delta].isEmptyPiece() || cases[from.y][from.x-delta].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - delta, from.y)));
                    if(from.x+delta < 8 && (cases[from.y][from.x+delta].isEmptyPiece() || cases[from.y][from.x+delta].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + delta, from.y)));
                }
                break;
        }
        return allowedMoves;
    }
}