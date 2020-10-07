"use strict" 

var http = require("http");
var app = require("./config/express")();
var tarefaEnvioEmail = require("./app/controllers/taks/envioEmail")

tarefaEnvioEmail()

const PORT = process.env.PORT || 3500
http.createServer(app) 
    .listen(app.get('port'), function() {
        console.log("Dia do Lixo");
        console.log('Express: Port ' + app.get('port'));
    });

module.exports = app