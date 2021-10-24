CREATE DATABASE `wws`;

CREATE TABLE `game_states` 
( 
    `id` VARCHARACTER (45) NOT NULL , 
    `total_player` INTEGER NOT NULL , 
    `identities` VARCHARACTER (45) NOT NULL , 
    PRIMARY KEY ( `id` ) 
);

CREATE TABLE `game`
(
    `room_code` VARCHARACTER (45) NOT NULL ,
    `player_id` INTEGER NOT NULL,
    `identity1` INTEGER NOT NULL ,
    `identity2` INTEGER NOT NULL ,
    PRIMARY KEY (`room_code`, `player_id`)
);