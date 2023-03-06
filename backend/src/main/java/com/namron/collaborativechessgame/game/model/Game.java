package com.namron.collaborativechessgame.game.model;

import com.namron.collaborativechessgame.player.models.Player;
import lombok.Data;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

@Document("games")
@Data
public class Game {
    @Id
    private String id;
    private Map<String, Player> playerList;

    public Game(String id) {
        this.id = id;
        this.playerList = new HashMap<>();
    }

    public void addPlayer(Player player) {
        if(playerList.containsKey(player.getName())) throw new DuplicateKeyException("Player " + player.getName() + " already present in the game");
        playerList.put(player.getName(), player);
    }

    public void removePlayer(Player player) {
        if(playerList.containsKey(player.getName())) throw new NoSuchElementException("Player " + player.getName() + " is not present in the game");
        playerList.remove(player.getName(), player);
    }
}
