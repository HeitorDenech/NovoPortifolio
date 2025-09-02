const nodemailer = require('nodemailer');
require('dotenv').config();

async function testarCredenciais() {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    try {
        // Testa a conexão SMTP sem enviar e-mail
        await transporter.verify();
        console.log('✅ Credenciais válidas! Conexão com Gmail funcionando.');
    } catch (error) {
        console.error('❌ Erro nas credenciais ou conexão:', error.message);
    }
}

testarCredenciais();
