import { Pipe, PipeTransform } from '@angular/core';
import { Vote } from 'src/models/vote';

@Pipe({
  name: 'chessCase'
})
export class ChessCasePipe implements PipeTransform {

  private ASCII_OFFSET_UPPERCASE: number = 65;

  transform(vote: Vote): String {
    let result = "";
    
    result += String.fromCharCode(vote.y + this.ASCII_OFFSET_UPPERCASE);
    result += (vote.x + 1).toString();

    return result;
  }

}
