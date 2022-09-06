-- Active: 1659399879401@@35.226.146.116@3306@guimaraes-4211178-camila-leal

CREATE TABLE IF NOT EXISTS Cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL,
    role VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS Cookenu_recipes (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    created_at VARCHAR(10) ,
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES Cookenu_users(id)
);

DROP TABLE Cookenu_users;
DROP TABLE Cookenu_recipes;
SELECT * FROM `Cookenu_users`;
SELECT * FROM `Cookenu_recipes`