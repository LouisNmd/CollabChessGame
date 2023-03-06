package com.namron.collaborativechessgame.models;

import lombok.AllArgsConstructor;
import nonapi.io.github.classgraph.json.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("players")
@AllArgsConstructor
public class Player {
    @Id
    private String name;
}
