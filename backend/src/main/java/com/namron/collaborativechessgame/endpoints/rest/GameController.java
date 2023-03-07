package com.namron.collaborativechessgame.endpoints.rest;

import com.namron.collaborativechessgame.game.GameRepositoryManager;
import com.namron.collaborativechessgame.game.model.Game;
import com.namron.collaborativechessgame.game.service.GameKeyGenerator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/game")
@RequiredArgsConstructor
@Slf4j
public class GameController {

    private final GameRepositoryManager gameRepositoryManager;
    private final GameKeyGenerator keyGenerator;

    @PostMapping("/create")
    public String createNewGame() {
        LOGGER.debug("Création d'une nouvelle partie en cours...");
        var gameId = keyGenerator.generate();
        var newGame = new Game(gameId);
        gameRepositoryManager.create(newGame);
        return gameId;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteGame(@PathVariable String id) {
        LOGGER.debug("Suppression de la partie en cours...");
        gameRepositoryManager.delete(id);
    }
}
