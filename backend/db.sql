CREATE DATABASE `wws`;

CREATE TABLE `game`
(
    `room_code` VARCHARACTER (45) NOT NULL ,
    `player_id` INTEGER NOT NULL,
    `identity1` INTEGER NOT NULL ,
    `identity2` INTEGER NOT NULL ,
    `player_state` VARCHARACTER (200),
    PRIMARY KEY (`room_code`, `player_id`)
);

CREATE TABLE `game_states`
(
    `room_code` VARCHARACTER (45) NOT NULL ,
    `state` VARCHARACTER (200) NOT NULL ,
    PRIMARY KEY (`room_code`)
)