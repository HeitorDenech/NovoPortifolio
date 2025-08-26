import './Experiencias.css';
import campus from "../../assets/campus-Sao-Leopoldo.jpg";

function Experiencias() {
    return (
        <section className='experiencias'>
            <section className='container-esquerda-experiencias'>

                <div className='container-esquerda-1' data-aos="fade-right">

                    <h1>Senac</h1>

                    <p>Minha primeira vez vendo a programação, foi no meu primeiro ano do ensino médio, no 
                        <a href="https://www.senacrs.com.br/unidade/39" target='blank'> Senac RS </a> 
                        localizado em São Leopoldo. Por ser um curso técnico, tive contato com várias 
                        linguagens, como python, html, css e javascript. Ao decorrer do curso, comecei a me
                        interessar muito pelo front-end, fazeno figmas, me aprofundando mais em
                        html, css e javascript e em react.
                    </p>

                </div>

            </section>

            <section className='linha-experiencias'>

            </section>

            <section className='container-direita-experiencias'>

                <div className='container-direita-1' data-aos="fade-left">
                    <img src={campus} alt="" />
                </div>

            </section>

        </section>
    )
}

export default Experiencias