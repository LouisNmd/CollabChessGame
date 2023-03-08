package com.namron.collaborativechessgame.game;

import com.namron.collaborativechessgame.game.model.Game;
import com.namron.collaborativechessgame.player.PlayerRepositoryManager;
import com.namron.collaborativechessgame.player.models.Color;
import com.namron.collaborativechessgame.player.models.Player;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;

@Component
@RequiredArgsConstructor
public class GameRepositoryManager {
    private final GameRepository gameRepository;
    private final PlayerRepositoryManager playerRepositoryManager;

    public HashMap<String, Integer> vote(String gameId, String vote, Player player) {
        try {
            var game = gameRepository.findGameById(gameId);
            var result = game.addVote(vote, player);
            gameRepository.save(game);
            return result;
        } catch (Exception e) {
            // TODO vérifier les exception de mongodb
            throw new RuntimeException(e);
        }
    }

    public void create(Game game) {
        try {
            gameRepository.save(game);
        } catch (Exception e) {
            // TODO vérifier les exception de mongodb
            throw new RuntimeException(e);
        }
    }

    public void connectPlayer(String playerName, Color color, String gameId) {
        try {
            var game = gameRepository.findGameById(gameId);
            var player = playerRepositoryManager.retrieveOrCreate(playerName);
            game.addPlayer(player, color);
            gameRepository.save(game);
        } catch (Exception e) {
            // TODO vérifier les exception de mongodb
            throw new RuntimeException(e);
        }
    }

    public void disconnectPlayer(String playerName, String gameId) {
        try {
            var game = gameRepository.findGameById(gameId);
            var player = playerRepositoryManager.retrieveOrCreate(playerName);
            game.removePlayer(player);
            gameRepository.save(game);
        } catch (Exception e) {
            // TODO vérifier les exception de mongodb
            throw new RuntimeException(e);
        }
    }

    public void delete(String id) {
        try {
            gameRepository.deleteById(id);
        } catch (Exception e) {
            // TODO vérifier les exception de mongodb
            throw new RuntimeException(e);
        }
    }
}
