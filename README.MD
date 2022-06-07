## COMANDOS EXECUTADOS
1 - npm init
2 - npm install lite-server
3 - tsc --init
4 - npm start UTILIZADO PARA RODAR O PROGRAMA

## ARQUIVO PACKAGE.JSON
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server",
    "watch": "tsc --watch"
  },

  ## Sobre como testar 
* Teste mão livre
    * Faça suas alterações em src/app.ts
    * Rode *tsc* ou *npm watch* para compilar elas para o arquivo /app.js
    * Caso queira fazer um teste interagindo com o DOM, altere o index.html
    * Rode o npm start e acesse o localhost:3000
    * Caso queira fazer testes usando html é só alterar o index.html.