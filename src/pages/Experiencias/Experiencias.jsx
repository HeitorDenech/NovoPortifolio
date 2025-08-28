import './Experiencias.css';
import campus from "../../assets/campus-Sao-Leopoldo.jpg";
import pucrs from "../../assets/pucrs.jpg";

function Experiencias() {
    return (
        <section className='experiencias'>
            <section className='container-esquerda-experiencias'>

                <div className='container-esquerda-1' data-aos="fade-right">

                    <h1>Senac</h1>

                    <p>Minha primeira vez vendo a programação, foi no meu primeiro ano do ensino médio, em 2022, no
                        <a href="https://www.senacrs.com.br/unidade/39" target='blank'> Senac RS </a>
                        localizado em São Leopoldo. Por ser um curso técnico, tive contato com várias
                        linguagens, como python, html, css e javascript. Ao decorrer do curso, comecei a me
                        interessar muito pelo front-end, fazeno figmas, me aprofundando mais em
                        html, css e javascript e em react.
                    </p>

                </div>

                <div className='container-esquerda-2' data-aos="fade-right">
                    <img src={pucrs} alt="" />
                </div>

            </section>

            <section className='linha-experiencias'>

            </section>

            <section className='container-direita-experiencias'>

                <div className='container-direita-1' data-aos="fade-left">
                    <img src={campus} alt="" />
                </div>

                <div className='container-direita-2' data-aos="fade-left">
                    <h1>PUC-RS</h1>

                    <p>Atualmente estou cursando Análise e Desenvolvimento de Sistemas na
                        <a href="https://www.pucrs.br/" target='blank'> PUC-RS </a>
                        , onde estou me aprofundando mais em back-end, estudando Java e banco de dados.
                        Também estou aprendendo mais sobre estrutura de dados e
                        algoritmos, o que está me ajudando muito a pensar como um desenvolvedor.
                        Além disso, participei da <a href="https://www.ages.pucrs.br/" target='blank'>AGES</a>, um grupo de estudos 
                        onde tive a oportunidade de aprender mais sobre front-end e back-end.
                    </p>
                </div>

            </section>

        </section>
    )
}

export default Experiencias