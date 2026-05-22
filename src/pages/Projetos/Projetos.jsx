import './Projetos.css'
import apresentacao from "../../assets/apresentacao.avif"
import cinemawallpaper from "../../assets/cinemawallpaper.png"
import portifolio2 from "../../assets/portifoliowallpaper2.jpg"
import calculadoraimg from "../../assets/calculadoraimg.jpg"
import trufasdebrigadeiro from "../../assets/trufas-de-brigadeiro.webp"

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

            <section className='container-title-projetos'>
                <h1 data-aos="fade-right">Meus Projetos</h1>
            </section>

            <section className='container-projetos-principal' data-aos="fade-up">

                <div className='container-projetos'>
                    <div className='container-projetos-img'>
                        <img src={cinemawallpaper} alt="" />
                    </div>

                    <div className='title-projeto'>
                        <h1>Cine10</h1>
                    </div>

                    <div className='descricao-projeto'>
                        <p>Cine10 é um site informativo de cinema, onde possui as melhores indicações de filmes, série, etc.</p>
                    </div>

                    <div className='div-botao'>
                        <a href='https://cine10.vercel.app/' target='_blank'>
                            <button>
                                ver projeto
                            </button>
                        </a>
                    </div>
                </div>


                <div className='container-projetos'>
                    <div className='container-projetos-img'>
                        <img src={trufasdebrigadeiro} alt="" />
                    </div>

                    <div className='title-projeto'>
                        <h1>Trufas Artesanais</h1>
                    </div>

                    <div className='descricao-projeto'>
                        <p>Fiz uma simples landing page de trufas para um amigo meu.</p>
                    </div>

                    <div className='div-botao'>
                        <a href="https://landing-page-trufa.vercel.app/" target='_blank'>
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




            </section>

        </section>
    );
}

export default Projetos;