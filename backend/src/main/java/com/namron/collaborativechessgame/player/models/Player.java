package com.namron.collaborativechessgame.player.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("players")
@Data
@AllArgsConstructor
@Getter
public class Player {
    @Id
    private String name;
    private int gamePlayed;
}
