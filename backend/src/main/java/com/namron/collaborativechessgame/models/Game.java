package com.namron.collaborativechessgame.models;

import lombok.AllArgsConstructor;
import nonapi.io.github.classgraph.json.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("games")
@AllArgsConstructor
public class Game {
    @Id
    private String id;
    private List<Player> playerList;
}
