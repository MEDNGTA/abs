# abs

Créer la base donnèe : 

><sup> CREATE DATABASE uniServ; </sup> 

Connecté à la base de donnée : 

><sup> \c uniServ; </sup> 

Créer les deux tables : 

><sup> CREATE TABLE userServ (
  id SERIAL PRIMARY KEY,
  fname VARCHAR(50) NOT NULL,
  lname VARCHAR(50) NOT NULL,
  dbirth DATE NOT NULL,
  username VARCHAR(50) NOT NULL UNIQUE,
  pass VARCHAR(255) NOT NULL,
  prev VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  phnum INTEGER NOT NULL UNIQUE
);</sup> 
><sup> 
CREATE TABLE stats (
  id SERIAL PRIMARY KEY,
  ucity VARCHAR(50) NOT NULL,
  num1 INTEGER NOT NULL,
  num2 INTEGER NOT NULL,
  num3 INTEGER NOT NULL
);</sup> 

changer mot de passe utilisateur postgres:

><sup> ALTER USER postgres WITH PASSWORD 'postgres';</sup> 
