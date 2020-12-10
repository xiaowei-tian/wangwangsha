CREATE DATABASE `wws`;

CREATE TABLE `game_states` ( `id` VARCHARACTER (45) NOT NULL , `total_player` INTEGER NOT NULL , `identities` VARCHARACTER (45) NOT NULL , PRIMARY KEY ( `id` ) ) ;

CREATE TABLE `game_boards` ( 
    `id` INTEGER NOT NULL AUTO_INCREMENT, 
    `board_name` VARCHARACTER(45) NOT NULL, 
    `total_player` INTEGER NOT NULL , 
    `identities` VARCHARACTER (45) NOT NULL , 
    PRIMARY KEY ( `id` ) ) ;