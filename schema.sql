DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;


USE burgers_db;

CREATE TABLE burgers (
	id INT auto_increment not null,
    burger_name varchar(200) not null,
    primary key (id)
);



ALTER TABLE burgers ADD eaten boolean default false;

INSERT INTO burgers (burger_name) VALUES ("my burger");
INSERT INTO burgers (burger_name, eaten) VALUES ("my burger", true);


UPDATE burgers SET eaten = true WHERE id = 1;

INSERT INTO burgers (burger_name) VALUE ("Beeef" );