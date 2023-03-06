package com.namron.collaborativechessgame.game;

import com.namron.collaborativechessgame.game.model.Game;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Component;

@Component
public interface GameRepository extends MongoRepository<Game, String> {
    @Query("{id:'?0'}")
    Game findGameById(String id);
}
