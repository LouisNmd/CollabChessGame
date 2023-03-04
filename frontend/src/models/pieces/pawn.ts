import { Color } from "../color";
import { Piece } from "../Piece";

export class Pawn extends Piece {

    private hasMoved: boolean;
    constructor(x: number, y: number, color: Color) {
        super(x, y, "PAWN_".concat(color), color);
        this.hasMoved = false;
    }

    protected isMoveValid(targetX: number, targetY: number): boolean {
        return true;
    }
}