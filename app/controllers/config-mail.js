'use strict'

const nodemailer = require('nodemailer');

    const dataSendMail = async() => {        
        let sender = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth:{
            user: 'sender email address',
            pass: 'sender pass email' }
        });

        const emoji = '&#128540'

        const info = await sender.sendMail({
            from: '<sender email address>',
            to: 'recipient email address ',
            subject: 'subject email',
            text: 'text mail',
            html: `<b>tags html.</b> ${emoji}`,
        });

        if(info) {
            console.log('Email successfully sent');
        };
    };

module.exports = dataSendMail;