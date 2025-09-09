// src/pages/Contato/Contato.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import './Contato.css';

function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_bolsonaro';
        const templateID = 'template_6k9d0dn';
        const publicKey = '6o-FARkmF2lQOhktn';

        const templateParams = {
            name: formData.nome,
            email: formData.email,
            message: formData.mensagem,
            title: 'Mensagem do Contato'
        };

        // Tempo aleatório entre 3 e 6 segundos
        const delay = Math.floor(Math.random() * 3000) + 3000;

        // Mostra o loading animado sem scroll
        Swal.fire({
            title: 'Enviando sua mensagem...',
            html: 'Aguarde alguns segundos...',
            timerProgressBar: true,
            didOpen: () => Swal.showLoading(),
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            customClass: {
                popup: 'swal-no-scroll'
            }
        });

        setTimeout(() => {
            emailjs.send(serviceID, templateID, templateParams, publicKey)
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Mensagem enviada!',
                        text: 'Obrigado por entrar em contato.',
                        customClass: {
                            popup: 'swal-no-scroll'
                        }
                    });
                    setFormData({ nome: '', email: '', mensagem: '' });
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro ao enviar!',
                        text: 'Tente novamente mais tarde.',
                        customClass: {
                            popup: 'swal-no-scroll'
                        }
                    });
                    console.error('Erro no envio:', error);
                });
        }, delay);
    };

    return (
        <section className='contato'>
            <h1 data-aos="fade-right">Contato</h1>

            <form onSubmit={handleSubmit} className='contato-container' data-aos="fade-right">
                <div className='contato-container-nome'>
                    <p>Nome * <i className="bi bi-person-fill"></i></p>
                    <input
                        type="text"
                        name="nome"
                        placeholder='Seu Nome'
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='contato-container-email'>
                    <p>E-mail * <i className="bi bi-envelope-fill"></i></p>
                    <input
                        type="email"
                        name="email"
                        placeholder='Seu endereço de E-mail'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='contato-container-mensagem'>
                    <p>Mensagem * <i className="bi bi-pencil-fill"></i></p>
                    <textarea
                        name="mensagem"
                        placeholder="Escreva sua mensagem aqui"
                        rows="5"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div className='contato-container-botao'>
                    <button type="submit">
                        Enviar <i className="bi bi-send-fill"></i>
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Contato;
