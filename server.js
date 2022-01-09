"use strict" 

var http = require("http");
var app = require("./config/express")();
const taskSendMail = require("./app/controllers/taks/envioEmail")
const dayWeek = require("./app/controllers/day-week");

app.get('/hello', async(req, res) =>{
    res.send("Salve")
});

if(dayWeek()) {
    taskSendMail();
}

const PORT = process.env.PORT || 3500

http.createServer(app) 
    .listen(PORT, function() {
        console.log('Express: Port ' + PORT);
    });

module.exports = app