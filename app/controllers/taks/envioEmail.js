
let schedule = require("node-schedule");
const email = require("../avisolixo");

// const tarefaEnvio = () => {

//     setTimeout(() => {
//         let enviarEmailLixo = new schedule.RecurrenceRule();
//        /*  enviarEmailLixo.hour = 21;
//         enviarEmailLixo.minute = 60; */

//         schedule.scheduleJob(enviarEmailLixo , function(){
//             console.log("Envio de email aviso lixo (início previsto às 6:39)... " + new Date().toISOString());
//             email();
//         });  
//     },2000);
// }///;

exports.tarefaEnvio2 = async () => {
    console.log('log');
    let enviarEmailLixo = new schedule.RecurrenceRule();
    const resp = await schedule.scheduleJob(enviarEmailLixo , function(){
        console.log("Envio de email aviso lixo (início previsto às 6:39)... " + new Date().toISOString());
        email();
    });  

    return resp;

};

//module.exports = tarefaEnvio2
       



