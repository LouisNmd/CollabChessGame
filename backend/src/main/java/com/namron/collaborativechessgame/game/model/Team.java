package com.namron.collaborativechessgame.game.model;

import com.namron.collaborativechessgame.player.models.Player;
import lombok.Data;

import java.util.*;

@Data
public class Team {
    private HashMap<String, Player> members;
    private HashMap<String, Integer> votes;
    private Set<String> votersName;

    public Team() {
        this.members = new HashMap<>();
        this.votes = new HashMap<>();
        this.votersName = new HashSet<>();
    }

    public int size() {
        return members.size();
    }
    public boolean containsPlayer(String name) {
        return members.containsKey(name);
    }

    public void addPlayer(Player player) {
        members.put(player.getName(), player);
    }

    public void removePlayer(Player player) {
        members.remove(player.getName());
    }

    public void addVote(String vote, String playerName) {
        if(votes.containsKey(vote)) {
            votes.computeIfPresent(vote, (key, value) -> value + 1);
        } else {
            votes.put(vote, 1);
        }
        votersName.add(playerName);
    }

    public boolean hasPlayerAlreadyVoted(String playerName) {
        return votersName.contains(playerName);
    }

    public void resetVotes() {
        votes.clear();
    }

    public boolean hasAllPlayersVoted() {
        return members.size() == votes.size();
    }
}
