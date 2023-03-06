package com.namron.collaborativechessgame.player;

import com.namron.collaborativechessgame.game.GameRepository;
import com.namron.collaborativechessgame.player.models.Player;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
@Slf4j
public class PlayerRepositoryManager {
    private final GameRepository gameRepository;
    private final PlayerRepository playerRepository;

    public Player retrieveOrCreate(String playerName) {
        var player = Optional.ofNullable(this.playerRepository.findPlayerByName(playerName))
                .orElse(new Player(playerName, 0));
        this.playerRepository.save(player);
        return player;
    }
}
