"use strict" 

var http = require("http");
var app = require("./config/express")();
const tarefaEnvioEmail = require("./app/controllers/taks/envioEmail")
//const tarefaEnvio2 = require("./app/controllers/taks/envioEmail")
const ola = require("./app/controllers/taks/teste");


app.get('/lixo', async(req, res) =>{
    console.log(ola);
    const data = new Date()
    console.log('data.get', data.get);
    //tarefaEnvio2.tarefaEnvio2()
    res.send("Dia do lixo de pés")
})

tarefaEnvioEmail()
const PORT = process.env.PORT || 3500

http.createServer(app) 
    .listen(PORT, function() {
        console.log("Dia do Lixo");
        console.log('Express: Port ' + PORT);
    });

module.exports = app