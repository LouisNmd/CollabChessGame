import { Board } from "../board";
import { Color } from "../color";
import { Piece } from "../Piece";
import { Vote } from "../vote";

export class King extends Piece {

    constructor(color: Color) {
        super("KING_".concat(color), color);
    }

    public allowedMoves(from: Vote, cases: Piece[][]): number[] {
        console.log("Moving king from " + from.x + " " + from.y);
        let allowedMoves: number[] = new Array(0);
        switch(this.color) {
            case Color.WHITE:
                if((from.x + 1 < 8 && from.y + 1 < 8) && (cases[from.y + 1][from.x + 1].isEmptyPiece() || cases[from.y + 1][from.x + 1].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 1, from.y + 1)));
                if(from.x + 1 < 8 && (cases[from.y][from.x + 1].isEmptyPiece() || cases[from.y][from.x + 1].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 1, from.y)));
                if((from.x + 1 < 8 && from.y - 1 >= 0) && (cases[from.y - 1][from.x + 1].isEmptyPiece() || cases[from.y - 1][from.x + 1].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 1, from.y - 1)));
                
                if(from.y - 1 >=0 && (cases[from.y - 1][from.x].isEmptyPiece() || cases[from.y - 1][from.x].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x, from.y - 1)));
                if(from.y + 1 < 8 && (cases[from.y + 1][from.x].isEmptyPiece() || cases[from.y + 1][from.x].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x, from.y + 1)));
                
                if((from.x - 1 >=0 && from.y + 1 < 8) && (cases[from.y + 1][from.x - 1].isEmptyPiece() || cases[from.y + 1][from.x - 1].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 1, from.y + 1)));
                if(from.x - 1 >= 0 && (cases[from.y][from.x - 1].isEmptyPiece() || cases[from.y][from.x - 1].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 1, from.y)));
                if((from.x - 1 >= 0 && from.y - 1 >= 0) && (cases[from.y - 1][from.x - 1].isEmptyPiece() || cases[from.y - 1][from.x - 1].color == Color.BLACK)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 1, from.y - 1)));
                break;
            case Color.BLACK:
                if((from.x + 1 < 8 && from.y + 1 < 8) && (cases[from.y + 1][from.x + 1].isEmptyPiece() || cases[from.y + 1][from.x + 1].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 1, from.y + 1)));
                if(from.x + 1 < 8 && (cases[from.y][from.x + 1].isEmptyPiece() || cases[from.y][from.x + 1].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 1, from.y)));
                if((from.x + 1 < 8 && from.y - 1 >= 0) && (cases[from.y - 1][from.x + 1].isEmptyPiece() || cases[from.y - 1][from.x + 1].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x + 1, from.y - 1)));
                
                if(from.y - 1 >=0 && (cases[from.y - 1][from.x].isEmptyPiece() || cases[from.y - 1][from.x].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x, from.y - 1)));
                if(from.y + 1 < 8 && (cases[from.y + 1][from.x].isEmptyPiece() || cases[from.y + 1][from.x].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x, from.y + 1)));
                
                if((from.x - 1 >=0 && from.y + 1 < 8) && (cases[from.y + 1][from.x - 1].isEmptyPiece() || cases[from.y + 1][from.x - 1].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 1, from.y + 1)));
                if(from.x - 1 >= 0 && (cases[from.y][from.x - 1].isEmptyPiece() || cases[from.y][from.x - 1].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 1, from.y)));
                if((from.x - 1 >= 0 && from.y - 1 >= 0) && (cases[from.y - 1][from.x - 1].isEmptyPiece() || cases[from.y - 1][from.x - 1].color == Color.WHITE)) allowedMoves.push(Board.multidimentionnalCoordMapper(new Vote(from.x - 1, from.y - 1)));
                break;
        }

        return allowedMoves;
    }
}