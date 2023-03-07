package com.namron.collaborativechessgame.endpoints.sockets;

import com.namron.collaborativechessgame.game.GameRepositoryManager;
import com.namron.collaborativechessgame.player.models.Player;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RequiredArgsConstructor
@Component
@RestController
@Slf4j
public class GameSocketController {

    private final GameRepositoryManager gameRepositoryManager;

    /*@MessageMapping("/vote/{id}/{vote}")
    @SendTo("/topic/vote")*/
    @PostMapping("/vote/{id}/{vote}")
    public HashMap<String, Integer> vote(@PathVariable String id, @PathVariable String vote, @RequestBody Player player) {
        LOGGER.debug("Vote reçu pour le coup {} dans la partie {}", vote, id);
        return gameRepositoryManager.vote(id, vote, player);
    }

}
