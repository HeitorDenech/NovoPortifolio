import './Projetos.css'
import apresentacao from "../../assets/apresentacao.avif"
import portifolio from "../../assets/portifoliowallpaper.avif"
import portifolio2 from "../../assets/portifoliowallpaper2.jpg"
import calculadoraimg from "../../assets/calculadoraimg.jpg"

function Projetos() {
    return (
        <section className='projetos'>

            <section className='container-introducao-projetos'>
                <div className='container-introducao-projetos-text' data-aos="fade-right">
                    <h1>Meus Projetos</h1>
                    <p>Aqui estão alguns dos projetos que desenvolvi para praticar e aprimorar minhas habilidades como Web Designer.
                        Cada projeto representa um desafio e um aprendizado!</p>
                </div>

                <div className='container-introducao-projetos-img'>
                    <img data-aos="fade-left" src={apresentacao} alt="" />
                </div>

            </section>

            <section className='container-projetos-principal' data-aos="fade-up">

                <div className='title-container-projetos'>
                    <h1 data-aos="fade-right">meus projetos</h1>
                </div>

                <div className='container-projetos'>
                    <div className='container-projetos-img'>
                        <img src={portifolio2} alt="" />
                    </div>

                    <div className='title-projeto'>
                        <h1>Primeiro portifólio</h1>
                    </div>

                    <div className='descricao-projeto'>
                        <p>Meu primeiro portifólio, e primeiro projeto em react.</p>
                    </div>

                    <div className='div-botao'>
                        <a href="https://heitor-portifolio.vercel.app/" target='_blank'>
                            <button>
                                ver projeto
                            </button>
                        </a>
                    </div>
                </div>

                <div className='container-projetos'>
                    <div className='container-projetos-img'>
                        <img src={calculadoraimg} alt="" />
                    </div>
                    
                    <div className='title-projeto'>
                        <h1>Calculadora</h1>
                    </div>
                    
                    <div className='descricao-projeto'>
                        <p>Fiz uma calculadora para testar meus conhecimentos de JavaScript.</p>
                    </div>

                    <div className='div-botao'>
                        <a href="https://calculadoraheitor.vercel.app/" target='_blank'>
                            <button>
                                ver projeto
                            </button>
                        </a>
                    </div>
                </div>

                <div className='container-projetos'>
                    <div className='container-projetos-img'>
                        <img src={portifolio} alt="" />
                    </div>

                    <div className='title-projeto'>
                        <h1>Em desenvolvimento</h1>
                    </div>

                    <div className='descricao-projeto'>
                        <p>Projeto em desenvolvimento.</p>
                    </div>

                    <div className='div-botao'>
                        <a href='' target='_blank'>
                            <button>
                                ver projeto
                            </button>
                        </a>
                    </div>
                </div>
                

            </section>

        </section>
    );
}

export default Projetos;