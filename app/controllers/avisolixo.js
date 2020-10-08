"use strict"

var nodemailer = require("nodemailer");


    async function envioEmail() {
        console.log("chegou no controller");
        
        var remetente = await nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth:{
            user: "fernandoribeirodosantos@gmail.com",
            pass: "fe19071991121410" }
        });

        const emoji = '&#128540'

        let info = await remetente.sendMail({
    
            from: '"Não seja porco 🤮" <fs_ribeiro@outlook.com>', // sender address
            to: "fernando.s.ribeiro@outlook.com, cintiaf.silva@hotmail.com", // list of receivers
            subject: "Dia de lixo ✔", // Subject line
            text: "Bora jogar o lixo fora? Larga de preguiça.", // plain text body
            html: `<b>Bora jogar o lixo fora? Larga de preguiça.</b> ${emoji}`, // html body */
        });

        if(info) {
            console.log("Email enviado com sucesso");
        }
    }
    

module.exports = envioEmail