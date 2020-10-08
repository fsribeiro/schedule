
var schedule = require("node-schedule");

const email = require("../avisolixo")

 async function tarefaEnvio() {

    setTimeout(() => {

        var enviarEmailLixo = new schedule.RecurrenceRule();

        enviarEmailLixo.hour = 02
        enviarEmailLixo.minute = 55
        let dia = new Date()
        enviarEmailLixo.dayOfWeek = dia.getDay()

       // if(enviarEmailLixo.dayOfWeek == 0 || enviarEmailLixo.dayOfWeek == 2 || enviarEmailLixo.dayOfWeek == 3) {
            schedule.scheduleJob(enviarEmailLixo , function(){

            console.log("Envio de email aviso lixo (início previsto às 20:00)... " + new Date().toISOString());
    
            email()
    
            })
      // }       
   },1000)       
}
module.exports = tarefaEnvio

       



