import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxChessBoardModule } from 'ngx-chess-board';
import { ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RxStompService } from '@stomp/ng2-stompjs';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    DragDropModule,
    NgxChessBoardModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [RxStompService],
  bootstrap: [AppComponent]
})


export class AppModule { }
