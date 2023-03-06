import { Board } from "../board";
import { Color } from "../color";
import { Piece } from "../Piece";
import { Vote } from "../vote";

export class Knight extends Piece {

    constructor(color: Color) {
        super("KNIGHT_".concat(color), color);
    }

    protected isMoveValid(targetX: number, targetY: number): boolean {
        return true;
    }

    public allowedMoves(from: Vote, cases: Piece[][]): number[] {
        let allowedMoves: number[] = new Array(0);
        switch(this.color) {
            case Color.WHITE:
                if((from.x + 1 < 8 && from.y + 2 < 8) && (cases[from.y + 2][from.x + 1].isEmptyPiece() || cases[from.y + 2][from.x + 1].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 1, from.y + 2)));
                if((from.x + 1 < 8 && from.y - 2 >= 0) && (cases[from.y - 2][from.x + 1].isEmptyPiece() || cases[from.y - 2][from.x + 1].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 1, from.y - 2)));
                if((from.x - 1 >= 0 && from.y + 2 < 8) && (cases[from.y + 2][from.x - 1].isEmptyPiece() || cases[from.y + 2][from.x - 1].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 1, from.y + 2)));
                if((from.x - 1 >= 0 && from.y - 2 >= 0) && (cases[from.y - 2][from.x - 1].isEmptyPiece() || cases[from.y - 2][from.x - 1].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 1, from.y - 2)));
                if((from.x + 2 < 8 && from.y + 1 < 8) && (cases[from.y + 1][from.x + 2].isEmptyPiece() || cases[from.y + 1][from.x + 2].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 2, from.y + 1)));
                if((from.x + 2 < 8 && from.y - 1 >= 0) && (cases[from.y - 1][from.x + 2].isEmptyPiece() || cases[from.y - 1][from.x + 2].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 2, from.y - 1)));
                if((from.x - 2 >= 0 && from.y + 1 < 8) && (cases[from.y + 1][from.x - 2].isEmptyPiece() || cases[from.y + 1][from.x - 2].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 2, from.y + 1)));
                if((from.x - 2 >= 0 && from.y - 1 >= 0) && (cases[from.y - 1][from.x - 2].isEmptyPiece() || cases[from.y - 1][from.x - 2].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 2, from.y - 1)));
                break;
            case Color.BLACK:
                console.log("Moving black knight from " + from.x + " " + from.y);
                if((from.x + 1 < 8 && from.y + 2 < 8) && (cases[from.y + 2][from.x + 1].isEmptyPiece() || cases[from.y + 2][from.x + 1].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 1, from.y + 2)));
                if((from.x + 1 < 8 && from.y - 2 >= 0) && (cases[from.y - 2][from.x + 1].isEmptyPiece() || cases[from.y - 2][from.x + 1].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 1, from.y - 2)));
                if((from.x - 1 >= 0 && from.y + 2 < 8) && (cases[from.y + 2][from.x - 1].isEmptyPiece() || cases[from.y + 2][from.x - 1].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 1, from.y + 2)));
                if((from.x - 1 >= 0 && from.y - 2 >= 0) && (cases[from.y - 2][from.x - 1].isEmptyPiece() || cases[from.y - 2][from.x - 1].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 1, from.y - 2)));
                if((from.x + 2 < 8 && from.y + 1 < 8) && (cases[from.y + 1][from.x + 2].isEmptyPiece() || cases[from.y + 1][from.x + 2].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 2, from.y + 1)));
                if((from.x + 2 < 8 && from.y - 1 >= 0) && (cases[from.y - 1][from.x + 2].isEmptyPiece() || cases[from.y - 1][from.x + 2].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 2, from.y - 1)));
                if((from.x - 2 >= 0 && from.y + 1 < 8) && (cases[from.y + 1][from.x - 2].isEmptyPiece() || cases[from.y + 1][from.x - 2].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 2, from.y + 1)));
                if((from.x - 2 >= 0 && from.y - 1 >= 0) && (cases[from.y - 1][from.x - 2].isEmptyPiece() || cases[from.y - 1][from.x - 2].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 2, from.y - 1)));
                break;
        }

        return allowedMoves;
    }
}