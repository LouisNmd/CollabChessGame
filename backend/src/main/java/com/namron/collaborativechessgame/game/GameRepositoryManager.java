package com.namron.collaborativechessgame.game;

import com.namron.collaborativechessgame.game.model.Game;
import com.namron.collaborativechessgame.player.PlayerRepositoryManager;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class GameRepositoryManager {
    private final GameRepository gameRepository;
    private final PlayerRepositoryManager playerRepositoryManager;

    public void create(Game game) {
        try {
            gameRepository.save(game);
            LOGGER.info("Création de la partie n°{}", game.getId());
        } catch(Exception e) {
            // TODO vérifier les exception de mongodb
            throw new RuntimeException();
        }
    }

    public void connectPlayer(String playerName, String gameId) {
        try {
            var game = gameRepository.findGameById(gameId);
            var player = playerRepositoryManager.retrieveOrCreate(playerName);
            game.addPlayer(player);
            gameRepository.save(game);
            LOGGER.info("Le joueur {} à rejoint la partie {}", playerName, gameId);
        } catch (Exception e) {
            // TODO vérifier les exception de mongodb
            throw new RuntimeException();
        }
    }

    public void disconnectPlayer(String playerName, String gameId) {
        try {
            var game = gameRepository.findGameById(gameId);
            var player = playerRepositoryManager.retrieveOrCreate(playerName);
            game.addPlayer(player);
            gameRepository.save(game);
            LOGGER.info("Le joueur {} à rejoint la partie {}", playerName, gameId);
        } catch (Exception e) {
            // TODO vérifier les exception de mongodb
            throw new RuntimeException();
        }
    }

    public void delete(String id) {
        try {
            gameRepository.deleteById(id);
        } catch (Exception e) {
            // TODO vérifier les exception de mongodb
            throw new RuntimeException();
        }
    }
}
