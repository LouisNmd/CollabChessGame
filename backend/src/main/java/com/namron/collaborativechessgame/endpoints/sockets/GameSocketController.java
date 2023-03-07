package com.namron.collaborativechessgame.endpoints.sockets;

import com.namron.collaborativechessgame.game.GameRepositoryManager;
import com.namron.collaborativechessgame.player.models.Color;
import com.namron.collaborativechessgame.player.models.Player;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RequiredArgsConstructor
@RestController
@Slf4j
public class GameSocketController {

    private final GameRepositoryManager gameRepositoryManager;

    /**
     * Endpoint WebSocket permettant a un joueur de voter pour un coup
     *
     * @param id     l'id de la partie
     * @param vote   le vote du joueur au format echec (ex: a1c1)
     * @param player le joueur qui vote
     * @return la liste des votes
     */
    @MessageMapping("/vote/{id}/{vote}")
    @SendTo("/topic/vote")
    public HashMap<String, Integer> vote(@PathVariable String id, @PathVariable String vote, @RequestBody Player player) {
        LOGGER.debug("Vote reçu pour le coup {} dans la partie {}", vote, id);
        return gameRepositoryManager.vote(id, vote, player);
    }


    /**
     * Endpoint WebSocket permettant a un joueur de rejoindre une partie et renvois aux abonnes le nom du nouveau joueur
     *
     * @param id         L'id de la partie
     * @param color      la couleur de l'equipe rejointe par le joueur
     * @param playerName le nom du joueur
     * @return le nom du joueur
     */
    @MessageMapping("/join/{id}/{color}")
    @SendTo("/topic/join")
    public String join(@PathVariable String id, @PathVariable Color color, @RequestBody String playerName) {
        LOGGER.debug("Connexion à la partie en cours...");
        gameRepositoryManager.connectPlayer(playerName, color, id);
        return playerName;
    }
}
