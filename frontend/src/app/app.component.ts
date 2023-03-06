import { Component, ViewChild } from '@angular/core';
import { NgxChessBoardView } from 'ngx-chess-board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('board', {static: false}) board!: NgxChessBoardView;

  lastVote: any;
  hasGameStarted: boolean = false;

  public vote(event: any): void {
    this.lastVote = event;
  }
}
