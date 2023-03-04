import { Color } from "../color";
import { Piece } from "../Piece";

export class Knight extends Piece {

    constructor(x: number, y: number, color: Color) {
        super(x, y, "KNIGHT_".concat(color), color);
    }

    protected isMoveValid(targetX: number, targetY: number): boolean {
        return true;
    }
}