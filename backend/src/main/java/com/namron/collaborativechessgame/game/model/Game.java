package com.namron.collaborativechessgame.game.model;

import com.namron.collaborativechessgame.player.models.Color;
import com.namron.collaborativechessgame.player.models.Player;
import lombok.Data;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.security.InvalidParameterException;
import java.util.HashMap;
import java.util.List;
import java.util.NoSuchElementException;

@Document("games")
@Data
public class Game {
    @Id
    private String id;
    private Team whiteTeam;
    private Team blackTeam;
    private boolean isWhiteTurn;

    public Game(String id) {
        this.id = id;
        this.isWhiteTurn = true;
        this.whiteTeam = new Team();
        this.blackTeam = new Team();
    }

    public void addPlayer(Player player, Color color) {
        if (whiteTeam.containsPlayer(player.getName()) || blackTeam.containsPlayer(player.getName()))
            throw new DuplicateKeyException("Player " + player.getName() + " already present in the game");
        switch (color) {
            case BLACK -> blackTeam.addPlayer(player);
            case WHITE -> whiteTeam.addPlayer(player);
        }
    }

    public void removePlayer(Player player) {
        var isWhitePlayer = whiteTeam.containsPlayer(player.getName());
        var isBlackPlayer = blackTeam.containsPlayer(player.getName());
        if (!isWhitePlayer && !isBlackPlayer)
            throw new NoSuchElementException("Player " + player.getName() + " is not present in the game");

        if (isWhitePlayer) {
            whiteTeam.removePlayer(player);
        } else {
            blackTeam.removePlayer(player);
        }
    }

    public HashMap<String, Integer> addVote(String vote, Player player) {
        // todo : verifier la coherence des votes
        HashMap<String, Integer> result;
        if(isWhiteTurn) {
            if(!whiteTeam.containsPlayer(player.getName())) throw new InvalidParameterException(player.getName() + " is not allowed to play on this game");
            if(whiteTeam.hasPlayerAlreadyVoted(player.getName())) throw new InvalidParameterException(player.getName() + " is not allowed to play on this turn");
            whiteTeam.addVote(vote, player.getName());
            result = whiteTeam.getVotes();
        } else {
            if(!blackTeam.containsPlayer(player.getName())) throw new InvalidParameterException(player.getName() + " is not allowed to play on this game");
            if(blackTeam.hasPlayerAlreadyVoted(player.getName())) throw new InvalidParameterException(player.getName() + " is not allowed to play on this turn");
            blackTeam.addVote(vote, player.getName());
            result = blackTeam.getVotes();
        }
        return result;
    }
}
