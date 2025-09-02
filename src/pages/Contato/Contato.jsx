// src/pages/Contato/Contato.jsx
import React, { useState } from 'react';
import './Contato.css';
import Swal from 'sweetalert2';

function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    // Atualiza os valores do formulário
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Envia os dados para o backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/contato', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Mensagem enviada!',
                    text: data.message || 'Obrigado por entrar em contato.',
                    confirmButtonColor: '#3085d6',
                });

                // Limpa o formulário
                setFormData({ nome: '', email: '', mensagem: '' });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao enviar!',
                    text: data.message || 'Tente novamente mais tarde.',
                    confirmButtonColor: '#d33',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro ao enviar mensagem!',
                text: 'Não foi possível conectar ao servidor.',
                confirmButtonColor: '#d33',
            });
            console.error('Erro no envio:', error);
        }
    };

    return (
        <section className='contato'>
            <h1>Contato</h1>

            <section className='contato-container'>
                <div className='contato-container-nome'>
                    <p>nome * <i className="bi bi-person-fill"></i></p>
                    <input
                        type="text"
                        name="nome"
                        placeholder='Seu Nome'
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </div>

                <div className='contato-container-email'>
                    <p>endereço de e-mail * <i className="bi bi-envelope-fill"></i></p>
                    <input
                        type="email"
                        name="email"
                        placeholder='Seu endereço de E-mail'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className='contato-container-mensagem'>
                    <p>mensagem * <i className="bi bi-pencil-fill"></i></p>
                    <textarea
                        name="mensagem"
                        placeholder="Escreva sua mensagem aqui"
                        rows="5"
                        value={formData.mensagem}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className='contato-container-botao'>
                    <button onClick={handleSubmit}>
                        Enviar <i className="bi bi-send-fill"></i>
                    </button>
                </div>
            </section>
        </section>
    );
}

export default Contato;
