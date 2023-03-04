import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'HTMLCodePipe'
})
@Injectable({
    providedIn: 'root'
})
export class HTMLCodePipe implements PipeTransform {

  transform(value: String): String {
    switch(value) {
        case "ROOK_BLACK":
            return "\u265c";
        case "KNIGHT_BLACK":
            return "\u265a";
        case "BISHOP_BLACK":
            return "\u265d";
        case "QUEEN_BLACK":
            return "\u265b";
        case "KING_BLACK":
            return "\u265a";
        case "PAWN_BLACK":
            return "\u265f";
        case "PAWN_WHITE":
            return "\u2659";
        case "ROOK_WHITE":
            return "\u2656";
        case "KNIGHT_WHITE":
            return "\u2658";
        case "BISHOP_WHITE":
            return "\u2657";
        case "QUEEN_WHITE":
            return "\u2655";
        case "KING_WHITE":
            return "\u2654";
        default:
            throw new Error("Unkown piece " + value);
    }
}

}
