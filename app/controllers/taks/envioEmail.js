
let schedule = require("node-schedule");
const email = require("../avisolixo");

const tarefaEnvio = () => {

    setTimeout(() => {
        let enviarEmailLixo = new schedule.RecurrenceRule();
        enviarEmailLixo.hour = 14;
        enviarEmailLixo.minute = 05;

        schedule.scheduleJob(enviarEmailLixo , function(){
            console.log("Envio de email aviso lixo (início previsto às 6:39)... " + new Date().toISOString());
            email();
        });  
    },2000);
};

module.exports = tarefaEnvio;

       



