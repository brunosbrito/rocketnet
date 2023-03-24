-- Active: 1679071139938@@127.0.0.1@3307

DROP SCHEMA IF EXISTS Rocketnet;

CREATE SCHEMA IF NOT EXISTS Rocketnet;

CREATE TABLE
    Rocketnet.plans (
        id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        description TEXT NOT NULL,
        price TEXT NOT NULL,
        name TEXT NOT NULL
    );

CREATE TABLE
    Rocketnet.clients (
        id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        tel TEXT NOT NULL,
        plan_id INTEGER,
        FOREIGN KEY (plan_id) REFERENCES Rocketnet.plans (id)
    );

CREATE TABLE Rocketnet.coverage (cep_true TEXT NOT NULL);

INSERT INTO
    Rocketnet.plans (description, price, name)
VALUES (
        'COMBO FIBRA ÓPTICA 50MBPS R$49,9/MES + WI-FI + HBO MAX',
        '49,99',
        '50 MEGAS'
    ), (
        'COMBO FIBRA ÓPTICA 100MBPS R$99,9/MES + WI-FI + HBO MAX ',
        '49,99',
        '50 MEGAS'
    ), (
        'COMBO FIBRA ÓPTICA 300MBPS R$149,9/MES + WI-FI + HBO MAX ',
        '49,99',
        '50 MEGAS'
    ), (
        'COMBO FIBRA ÓPTICA 500MBPS R$179,9/MES + WI-FI + HBO MAX ',
        '49,99',
        '50 MEGAS'
    ), (
        'COMBO FIBRA ÓPTICA 700MBPS R$199,9/MES + WI-FI + HBO MAX ',
        '49,99',
        '50 MEGAS'
    ), (
        'COMBO FIBRA ÓPTICA 1GBPS R$219,9/MES + WI-FI + HBO MAX ',
        '49,99',
        '50 MEGAS'
    );