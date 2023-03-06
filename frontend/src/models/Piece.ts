import { Color } from "./color";
import { Vote } from "./vote";

/**
 * Classe abstraite d'une pièce d'échec.
 * x et y vont de 0 à 7
 */
export abstract class Piece {

    name: String;
    color: Color;
    isCheck: boolean;

    constructor(name: String, color: Color) {
        this.name = name
        this.color = color;
        this.isCheck = false;
    }

    public abstract allowedMoves(from: Vote, cases: any[][]): number[];

    getName(): String {
        return this.name;
    }

    public isEmptyPiece(): boolean {
        return this.name == "empty";
    }
}