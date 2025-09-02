const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rota para enviar mensagem
app.post('/contato', async (req, res) => {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    // Configuração do transporte do Gmail
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS // senha de app
        }
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `Nova mensagem de ${nome}`,
            text: mensagem
        });

        res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar:', error);
        res.status(500).json({
            message: 'Erro ao enviar mensagem. Verifique as credenciais ou conexão.'
        });
    }
});

// Inicializa servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
