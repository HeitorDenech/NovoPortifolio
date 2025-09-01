import React, { useState } from 'react';
import './Contato.css';

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

    // Envia os dados (vamos conectar ao back depois)
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData); // temporário, só pra testar
    };

    return (
        <section className='contato'>
            <h1>
                Contato
            </h1>

            <section className='contato-container'>

                {/* <h1>Envie-me uma mensagem!</h1> */}

                <div className='contato-container-nome'>
                    <p>nome * <i class="bi bi-person-fill"></i></p>
                    <input type="text" placeholder='Seu Nome' />
                </div>

                <div className='contato-container-email'>
                    <p>endereço de e-mail * <i class="bi bi-envelope-fill"></i></p>
                    <input type="email" placeholder='Seu endereço de E-mail' />
                </div>

                <div className='contato-container-mensagem'>
                    <p>mensagem * <i class="bi bi-pencil-fill"></i></p>
                    <textarea placeholder='Escreva sua mensagem aqui' rows="5"></textarea>
                </div>

                <div className='contato-container-botao'>
                    <button>
                        Enviar <i class="bi bi-send-fill"></i>
                    </button>
                </div>

            </section>

        </section>
    )
}

export default Contato