import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessGameComponent } from './chess-game/chess-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { HTMLCodePipe } from './pipe/htmlcode.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChessCasePipe } from './pipe/chess-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChessGameComponent,
    HTMLCodePipe,
    ChessCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
