
var schedule = require("node-schedule");

var email = require("../avisolixo")

var tarefaEnvio = () => {

    setTimeout(() => {

        var enviarEmailLixo = new schedule.RecurrenceRule();

        enviarEmailLixo.hour = 19
        enviarEmailLixo.minute = 15
        let dia = new Date()
        enviarEmailLixo.dayOfWeek = dia.getDay()

        if(enviarEmailLixo.dayOfWeek == 0 || enviarEmailLixo.dayOfWeek == 2 || enviarEmailLixo.dayOfWeek == 3) {
            schedule.scheduleJob(enviarEmailLixo , function(){

            console.log("Envio de email aviso lixo (início previsto às 20:00)... " + new Date().toISOString());
    
            email()
    
            })
       }       
    },1000)       
}
module.exports = tarefaEnvio

       



