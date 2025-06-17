import './Home.css';
// import computador from "../../assets/computador.webp"
import programador from "../../assets/programador.avif"
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className='home'>

            <div className='container-introducao'>
                <div className='container-interno-introducao'>
                    <h1 className="animate__animated animate__fadeIn">Web designer</h1>
                    <p className="animate__animated animate__fadeIn">Olá! me chamo <a href="https://www.youtube.com/watch?v=EOA1wBw_Jt4" target='_blank'>H</a>eitor Denech, sou apaixonado por transformar ideias em experiências visuais criativas e funcionais. Através do design responsivo,
                        interfaces intuitivas e foco na usabilidade, busco criar sites que não apenas sejam bonitos,
                        mas que realmente funcionem para o usuário.</p>
                    <p className="animate__animated animate__fadeIn">Neste portfólio, você encontrará projetos que refletem meu aprendizado contínuo, atenção aos detalhes e compromisso com a inovação. </p>
                    <p className="animate__animated animate__fadeIn">Seja bem-vindo(a) ao meu universo digital!</p>

                    <div className='container-interno-introducao-btn'>
                        <Link to="/projetos">
                            <button className="animate__animated animate__fadeIn">Projetos</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='container-img'>
                <img className='animate__animated animate__fadeIn' src={programador} alt="" />
            </div>

        </section>
    )
}

export default Home