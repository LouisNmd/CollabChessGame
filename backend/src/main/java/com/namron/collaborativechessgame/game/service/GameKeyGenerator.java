package com.namron.collaborativechessgame.game.service;

import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class GameKeyGenerator {
    public String generate() {
        return UUID.randomUUID().toString();
    }
}
