"use strict"

const nodemailer = require("nodemailer");

    const envioEmail = async() => {
        console.log("chegou no controller");
        
        let remetente = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            auth:{
            user: "fs_ribeiro@outlook.com",
            pass: "Fe!@#121410" }
        });

        const emoji = '&#128540'

        const info = await remetente.sendMail({
            from: '"Não seja porco 🤮" <fs_ribeiro@outlook.com>',
            to: "fernando.s.ribeiro@outlook.com",
            subject: "Dia de lixo ✔",
            text: "Bora jogar o lixo fora? Larga de preguiça.",
            html: `<b>Bora jogar o lixo fora? Larga de preguiça.</b> ${emoji}`,
        });

        if(info) {
            console.log("Email enviado com sucesso");
        }
    }
    

module.exports = envioEmail