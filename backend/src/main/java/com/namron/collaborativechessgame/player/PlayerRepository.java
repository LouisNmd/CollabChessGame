package com.namron.collaborativechessgame.player;

import com.namron.collaborativechessgame.player.models.Player;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Component;

@Component
public interface PlayerRepository extends MongoRepository<Player, String> {

    @Query("{name:'?0'}")
    Player findPlayerByName(String name);
}
