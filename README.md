# Brunonet

# Contexto
Este projeto trata-se de uma aplicação full stack, onde é possivel verificar a disponibilida em sua região, escolher um plano e cadastrar-se.

## Técnologias usadas

Front-end:
> Desenvolvido usando: React + vite e TypeScript

Back-end:
> Desenvolvido usando: Docker, MySQL, NodeJs, Express e TypeScript

## Clone o Repositório

> Primerio clone o repositório atraves do comando 
> htttps: ```https://github.com/brunosbrito/brunonet.git```
ou
> SSH: ```git@github.com:brunosbrito/brunonet.git```

## Instalando Dependências

> Frontend
```
cd brunonet
cd front-end
npm install
``` 
> Backend
```
cd brunonet
cd back-end
npm install
``` 

## Executando aplicação

### Para rodar o back-end:
	1 - inicializar o container
  ```
    cd brunonet
    cd back-end
    docker-composer up -d
    docker exec -it brunonet bash
    npm run dev
 
  ```
  2 - Criar o banco de dados
  ```
    abra outro terminal
    cd brunonet
    cd back-end
    dock exec -it brunonet bash
    npm run restore
 
  ```


### Para rodar o front-end:
	1 - execur o container 
  ```
    cd brunonet
    cd front-end
    npm run dev
 
  ```
