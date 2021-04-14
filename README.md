para o funcionamento do codigo é necessário a instalação das dependências : (
"bcryptjs": "^2.4.3",     

 "cookie-parser": "^1.4.5", 

"dotenv": "^8.2.0",

  "express": "^4.17.1",
  
  "hbs": "^4.1.1",

    "jsonwebtoken": "^8.5.1",
  
  "mysql2": "^2.2.5",
 
   "nodemon": "^2.0.7" ).

adicionar o  "start": "nodemon --ignore '*.hbs.js' app.js"

criar um banco com o nome "node" e uma tabela com o nome "users". Dentro da tabela "users" conter  4 colunas, com os respectivos nomes: "id :(int, alto_incremente, primary key) ", "name:(varchar(30))", "email:(varchar(30))", "password:(varchar(100))". 

a porta utilizada está sendo a 3000

para iniciar o projeto utilizar o "npm start".
