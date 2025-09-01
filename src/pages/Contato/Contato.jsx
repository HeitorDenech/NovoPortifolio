import './Contato.css';

function Contato() {
    return (
        <section className='contato'>
            <h1>
                Contato
            </h1>

            <section className='contato-container'>

                {/* <h1>Envie-me uma mensagem!</h1> */}

                <div className='contato-container-nome'>
                    <p>nome *</p>
                    <input type="text" placeholder='Seu Nome' />
                </div>

                <div className='contato-container-email'>
                    <p>endereço de e-mail *</p>
                    <input type="email" placeholder='Seu endereço de E-mail' />
                </div>

                <div className='contato-container-mensagem'>
                    <p>mensagem *</p>
                    <textarea placeholder='Escreva sua mensagem aqui' rows="5"></textarea>
                </div>

            </section>

        </section>
    )
}

export default Contato