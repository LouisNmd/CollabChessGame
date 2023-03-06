import { Piece } from "../Piece";
import { Vote } from "../vote";

export class EmptyPiece extends Piece {

    constructor() {
        super("empty", null!);
    }

    public allowedMoves(from: Vote, cases: any[][]): number[] {
        return new Array(0);
    }
}