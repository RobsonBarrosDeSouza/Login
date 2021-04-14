const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config({path: './.env'});

const app = express();
app.use("/scripts", express.static(__dirname + "/scripts/"));
//app.use("/Css", express.static(__dirname + "/Css/"));
app.use("/imagens", express.static(__dirname + "/imagens/"));
app.use(express.static(__dirname + '/Css'));
   
const db = mysql.createConnection({
        host:process.env.DATABASE_HOST,
        user:process.env.DATABASE_USER,
        password:process.env.DATABASE_PASSWORD,
        database:process.env.DATABASE    
});

const publicDirectory = path.join(__dirname,'./plublic');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended:false}));

app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'hbs');

db.connect( (error) =>{
    if(error) {
        console.log(error)
    }else{
    console.log("MSQL conectado...")
    }
})

// DEFINIDA ROTAS
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

 app.listen(3000, () => {
     console.log("SERVIDOR INICIADO NA PORTA 3000");
 })