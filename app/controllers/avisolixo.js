"use strict"

var nodemailer = require("nodemailer");


    const envioEmail = async() => {
        console.log("chegou no controller");
        
        var remetente = nodemailer.createTransport({
            host: "SMTP.office365.com",
            port: 587,
            secure: false,
            auth:{
            user: "fs_ribeiro@outlook.com",
            pass: "Fe121410" }
        });

        const emoji = '&#128540'

        let info = await remetente.sendMail({
    
            from: '"Não seja porco 🤮" <fs_ribeiro@outlook.com>', // sender address
            to: "fernando.s.ribeiro@outlook.com", // list of receivers
            subject: "Dia de lixo ✔", // Subject line
            text: "Bora jogar o lixo fora? Larga de preguiça.", // plain text body
            html: `<b>Bora jogar o lixo fora? Larga de preguiça.</b> ${emoji}`, // html body */
        });

        if(info) {
            console.log("Email enviado com sucesso");
        }
    }
    

module.exports = envioEmail