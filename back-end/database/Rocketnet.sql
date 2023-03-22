-- Active: 1679007393293@@127.0.0.1@3307

DROP SCHEMA IF EXISTS Rocketnet;

CREATE SCHEMA IF NOT EXISTS Rocketnet;

CREATE TABLE
    Rocketnet.plans (
        id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        description TEXT NOT NULL,
        value DECIMAL,
        speed INTEGER NOT NULL
    );

CREATE TABLE
    Rocketnet.clients (
        id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        cpf TEXT,
        rg TEXT,
        date_of_birth TEXT,
        tel TEXT NOT NULL,
        email TEXT NOT NULL,
        adress TEXT,
        number TEXT,
        district TEXT,
        city TEXT,
        cep TEXT,
        plan_id INTEGER,
        FOREIGN KEY (plan_id) REFERENCES Rocketnet.plans (id)
    );

CREATE TABLE Rocketnet.coverage (cep_true TEXT NOT NULL);

INSERT INTO
    Rocketnet.plans (description, value, speed)
VALUES (
        'COMBO FIBRA ÓPTICA 50MBPS R$49,9/MES + WI-FI + HBO MAX',
        50,
        50
    ), (
        'COMBO FIBRA ÓPTICA 100MBPS R$99,9/MES + WI-FI + HBO MAX ',
        100,
        100
    ), (
        'COMBO FIBRA ÓPTICA 300MBPS R$149,9/MES + WI-FI + HBO MAX ',
        150,
        300
    ), (
        'COMBO FIBRA ÓPTICA 500MBPS R$179,9/MES + WI-FI + HBO MAX ',
        180,
        500
    ), (
        'COMBO FIBRA ÓPTICA 700MBPS R$199,9/MES + WI-FI + HBO MAX ',
        150,
        700
    ), (
        'COMBO FIBRA ÓPTICA 1GBPS R$219,9/MES + WI-FI + HBO MAX ',
        220,
        300
    );

INSERT INTO Rocketnet.coverage (cep_true) VALUES ('32010-770') 