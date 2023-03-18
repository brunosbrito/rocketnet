-- Active: 1679007393293@@127.0.0.1@3307

DROP SCHEMA IF EXISTS Brunonet;

CREATE SCHEMA IF NOT EXISTS Brunonet;

CREATE TABLE
    Brunonet.plans (
        id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        description TEXT NOT NULL,
        value DECIMAL,
        speed INTEGER NOT NULL
    );

CREATE TABLE
    Brunonet.clients (
        id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        cpf TEXT NOT NULL,
        rg TEXT NOT NULL,
        date_of_birth DATE,
        tel TEXT NOT NULL,
        email TEXT NOT NULL,
        adress TEXT NOT NULL,
        number INTEGER NOT NULL,
        district TEXT NOT NULL,
        city TEXT NOT NULL,
        cep TEXT NOT NULL,
        plan_id INTEGER,
        FOREIGN KEY (plan_id) REFERENCES Brunonet.plans (id)
    );

CREATE TABLE
    Brunonet.coverage (
        cep_true TEXT NOT NULL,
        cep_false TEXT NOT NULL
    );

INSERT INTO
    Brunonet.clients (
        name,
        cpf,
        rg,
        date_of_birth,
        tel,
        email,
        adress,
        number,
        district,
        city,
        cep
    )
VALUES (
        "Bruno",
        "123456789",
        "MG19612234",
        26 / 12 / 1996,
        "319999-9999",
        "bruno@bruno.com",
        "Rua Igarapva",
        130,
        "Cruzeiro",
        "Betim",
        "32661-362"
    );

INSERT INTO
    Brunonet.plans (description, value, speed)
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

INSERT INTO
    Brunonet.coverage (cep_true, cep_false)
VALUES ('32010-770', '32900-000')