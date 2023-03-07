import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameControllerApi } from 'src/generate-ressources/openapi';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  gameFormGroup: FormGroup;
  gameControllerApi: GameControllerApi = new GameControllerApi();

  constructor(private gameService: GameService) {
    this.gameFormGroup = new FormGroup({
      playerName: new FormControl("Michel", Validators.required),
      color: new FormControl("0", Validators.required),
      gameId: new FormControl(),
      isJoiningGame: new FormControl(false, Validators.required)
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
        this.gameService.join(gameId, color, playerName);
      })
      .catch(error => {
        console.log("Erreur lors de la création de la partie");
      })
  }

}
