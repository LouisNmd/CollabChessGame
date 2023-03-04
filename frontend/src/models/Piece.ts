import { Color } from "./color";

/**
 * Classe abstraite d'une pièce d'échec.
 * x et y vont de 0 à 7
 */
export abstract class Piece {

    x: number;
    y: number;
    name: String;
    color: Color;

    constructor(x: number, y: number, name: String, color: Color) {
        this.x = x;
        this.y = y;
        this.name = name
        this.color = color;
    }

    protected abstract isMoveValid(targetX: number, targetY: number): boolean;
    
    move(targetX: number, targetY: number): boolean {
        if(this.isMoveValid(targetX, targetY)) {
            this.x = targetX;
            this.y = targetY;
            return true;
        } else {
            return false
        }
    }

    getName(): String {
        return this.name;
    }
}