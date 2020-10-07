
var schedule = require("node-schedule");

var email = require("../avisolixo")

var tarefaEnvio = () => {

    setTimeout(() => {

        console.log("aqui");


        var enviarEmailLixo = new schedule.RecurrenceRule();

        enviarEmailLixo.hour = 01
        enviarEmailLixo.minute = 36
        
        schedule.scheduleJob(enviarEmailLixo , function(){

            console.log("Envio de email aviso lixo (início previsto às 6:39)... " + new Date().toISOString());

            email()

        })
        
    },1000)
       
}

module.exports = tarefaEnvio

       



