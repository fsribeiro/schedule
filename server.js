"use strict" 

var http = require("http");
var app = require("./config/express")();
var tarefaEnvioEmail = require("./app/controllers/taks/envioEmail")
var rota = require("./app/routes/teste")

app.get('/lixo', async(req, res) =>{
    res.send("Dia do lixo de pé")
})

tarefaEnvioEmail()
const PORT = process.env.PORT || 3500

http.createServer(app) 
    .listen(PORT, function() {
        console.log("Dia do Lixo");
        console.log('Express: Port ' + PORT);
    });

module.exports = app