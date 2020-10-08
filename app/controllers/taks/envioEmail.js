
var schedule = require("node-schedule");

const email = require("../avisolixo")

async function tarefaEnvio() {

        var enviarEmailLixo = new schedule.RecurrenceRule();

        enviarEmailLixo.hour = 06
        enviarEmailLixo.minute = 07
        let dia = new Date()
        enviarEmailLixo.dayOfWeek = dia.getDay()

       // if(enviarEmailLixo.dayOfWeek == 0 || enviarEmailLixo.dayOfWeek == 2 || enviarEmailLixo.dayOfWeek == 3) {
            schedule.scheduleJob(enviarEmailLixo , async function(){

            console.log("Envio de email aviso lixo (início previsto às 20:00)... " + new Date().toISOString());

                await email()
    
            })

            
}

module.exports = tarefaEnvio

       



