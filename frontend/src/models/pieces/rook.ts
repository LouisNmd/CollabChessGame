import { Color } from "../color";
import { Piece } from "../Piece";

export class Rook extends Piece {

    constructor(x: number, y: number, color: Color) {
        super(x, y, "ROOK_".concat(color), color);
    }

    protected isMoveValid(targetX: number, targetY: number): boolean {
        return true;
    }
}