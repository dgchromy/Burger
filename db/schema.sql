DROP DATABASE IF EXISTS burgers_DB; 

CREATE DATABASE burgers_DB;

CREATE TABLE burgers (
    id INT NOT NULL auto_increment,
    burger_name VARCHAR(30),
    devoured BOOLEAN default false,
    primary key (id)
);

