"use strict" 

var http = require("http");
var app = require("./config/express")();
//var tarefaEnvioEmail = require("./app/controllers/taks/envioEmail")
const tarefaEnvio2 = require("./app/controllers/taks/envioEmail")
const ola = require("./app/controllers/taks/teste");


app.get('/lixo', async(req, res) =>{
    console.log(ola);
    tarefaEnvio2.tarefaEnvio2()
    res.send("Dia do lixo de pés")
})

//tarefaEnvio2.tarefaEnvio2()
const PORT = process.env.PORT || 3500

http.createServer(app) 
    .listen(PORT, function() {
        console.log("Dia do Lixo");
        console.log('Express: Port ' + PORT);
    });

module.exports = app