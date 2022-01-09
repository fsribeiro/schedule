
let schedule = require("node-schedule");
const infoMail = require("../avisolixo");

const taskSend = () => {

    setTimeout(() => {
        let sendMail = new schedule.RecurrenceRule();
        sendMail.hour = 06;
        sendMail.minute = 39;

        schedule.scheduleJob(sendMail , function(){
            console.log("Message for exibition in terminal  (início previsto às 6:39)... " + new Date().toISOString());
            infoMail();
        });  
    },2000);
};

module.exports = taskSend;
       



