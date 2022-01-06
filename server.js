"use strict" 

var http = require("http");
var app = require("./config/express")();
var tarefaEnvioEmail = require("./app/controllers/taks/envioEmail")
var port = 3003;
tarefaEnvioEmail()

http.createServer(app) 
    .listen(port, function() {
        console.log("Dia do Lixo");
        console.log('Express: Port ' + port);
    });

module.exports = app