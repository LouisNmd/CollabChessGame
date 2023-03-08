import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { GameControllerApi } from 'src/generate-ressources/openapi';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  gameFormGroup: UntypedFormGroup;
  gameControllerApi: GameControllerApi = new GameControllerApi();

  constructor(private websocketService: WebsocketService) {
    this.gameFormGroup = new UntypedFormGroup({
      playerName: new UntypedFormControl("Michel", Validators.required),
      color: new UntypedFormControl("0", Validators.required),
      gameId: new UntypedFormControl(),
      isJoiningGame: new UntypedFormControl(false, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  public switchIsJoiningGame() {
    if(this.gameFormGroup.get('isJoiningGame')?.value) {
        this.gameFormGroup.controls['isJoiningGame'].setValue(false);
    } else {
        this.gameFormGroup.controls['isJoiningGame'].setValue(true);
    }
  }

  public submitGameFormGroup() {
    this.gameControllerApi
      .createNewGame()
      .then(gameId => {
        console.log("Connexion à " + gameId);
        let playerName = this.gameFormGroup.get('playerName')?.value
        let color = this.gameFormGroup.get('color')?.value
        //this.websocketService.join(gameId, color, playerName);
      })
      .catch(error => {
        console.log("Erreur lors de la création de la partie");
      })
  }

}
