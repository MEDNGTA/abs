# abs

Créer la base donnèe : 

CREATE DATABASE uniServ;

Connecté à la base de donnée : 
\c uniServ;

Créer les deux tables : 

CREATE TABLE userServ (
  id SERIAL PRIMARY KEY,
  fname VARCHAR(50) NOT NULL,
  lname VARCHAR(50) NOT NULL,
  dbirth DATE NOT NULL,
  username VARCHAR(50) NOT NULL UNIQUE,
  pass VARCHAR(255) NOT NULL,
  prev VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  phnum INTEGER NOT NULL UNIQUE
);
CREATE TABLE stats (
  id SERIAL PRIMARY KEY,
  ucity VARCHAR(50) NOT NULL,
  num1 INTEGER NOT NULL,
  num2 INTEGER NOT NULL,
  num3 INTEGER NOT NULL
);

changer mot de passe utilisateur postgres:

ALTER USER postgres WITH PASSWORD 'postgres';
