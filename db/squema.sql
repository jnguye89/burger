DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(200),
    devoured BOOLEAN NOT NULL DEFAULT 0,
    date TIMESTAMP
);