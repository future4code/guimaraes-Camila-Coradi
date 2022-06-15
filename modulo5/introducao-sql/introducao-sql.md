CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
/*  
VARCHAR- Representa String
DATE - Representa data (YYYY-MM-DD) 
PRIMARY KEY - É o identificador único de um registro na tabela.
NOT NULL - Garante que uma coluna não admite valores NULL
*/   
SHOW DATABASES;
/* Comando serve para visualizar bases de dados */

SHOW TABLES;
/*Mostra as tabelas criadas*/

DESCRIBE actor;
/*Exbibe cada elemento da tabela criada*/

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
120000,
"1963-08-23",
"female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
120000,
"1963-08-23",
"female"
);
/*Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'*/
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
/*Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1*/
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
/*Código de erro: 1364. O campo 'nome' não tem um valor padrão*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
SELECT * FROM Actor;
SELECT id, salary from Actor;
SELECT id, name from Actor WHERE gender = "male";
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";
SELECT salary from Actor WHERE name = "Tony Ramos";
SELECT * FROM actor WHERE gender = "invalid";
SELECT * FROM actor WHERE salary > 50000;
SELECT id, nome from Actor WHERE id = "002"
/*Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'*/

