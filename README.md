# ROCKETNET

# Contexto
Este projeto trata-se de uma aplicação full stack, onde é possivel verificar a disponibilida em sua região, escolher um plano e cadastrar-se.

## CEP VÁLIDO PARA TESTAR A APLICAÇÂO
> 32010-770


## Técnologias usadas

Front-end:
> Desenvolvido usando: React + vite e TypeScript

Back-end:
> Desenvolvido usando: Docker, MySQL, NodeJs, Express e TypeScript

## Clone o Repositório

> Primerio clone o repositório atraves do comando 
> htttps: ```https://github.com/brunosbrito/rocketnet.git```
> ou
> SSH: ```git@github.com:brunosbrito/rocketnet.git```

## Executando aplicação

### Para rodar o back-end:
	1 - inicializar o container
  ```
    cd rocketnet
    cd back-end
    docker-compose up -d
    docker exec -it brunonet bash
    npm install
    npm run dev
 
  ```
  2 - Criar o banco de dados
  ```
    abrir outro terminal
    cd rocketnet
    cd back-end
    docker exec -it brunonet bash
    npm run restore
 
  ```


### Para rodar o front-end:
  ```
    cd rocketnet
    cd front-end
    npm install
    npm run dev
 
  ```
