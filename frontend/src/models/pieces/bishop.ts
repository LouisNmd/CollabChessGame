import { Color } from "../color";
import { Piece } from "../Piece";

export class Bishop extends Piece {

    constructor(x: number, y: number, color: Color) {
        super(x, y, "BISHOP_".concat(color), color);
    }

    protected isMoveValid(targetX: number, targetY: number): boolean {
        return true;
    }
}