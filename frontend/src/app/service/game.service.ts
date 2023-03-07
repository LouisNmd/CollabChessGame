import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Color } from 'src/models/color';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private socket: Socket) { }

  join(gameId: String, color: Color, playerName: String) {
    this.socket.emit("/join/" + gameId + "/" + color, playerName);
  }
}
