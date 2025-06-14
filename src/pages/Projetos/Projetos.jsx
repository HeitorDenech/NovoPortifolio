import './Projetos.css'
import apresentacao from "../../assets/apresentacao.avif"
import portifolio from "../../assets/portifoliowallpaper.avif"

function Projetos() {
    return (
        <section className='projetos'>

            <section className='container-introducao-projetos'>

                <div className='container-introducao-projetos-text'>
                    <h1>Meus Projetos</h1>
                    <p>Aqui estão alguns dos projetos que desenvolvi para praticar e aprimorar minhas habilidades como Web Designer.
                        Cada projeto representa um desafio e um aprendizado!</p>
                </div>

                <div className='container-introducao-projetos-img'>
                    <img src={apresentacao} alt="" />
                </div>

            </section>

            <section className='container-projetos-principal'>

                <div className='title-container-projetos'>
                    <h1>meus projetos</h1>
                </div>

                <div className='container-projetos'>
                    <div className='container-projetos-img'>
                        <img src={portifolio} alt="" />
                    </div>
                    <div>
                        <h1>Primeiro portifólio</h1>
                    </div>
                    <div>
                        <p>Meu primeiro portifólio, e primeiro projeto em react</p>
                    </div>
                    <div>
                        <a href="https://heitor-portifolio.vercel.app/" target='_blank'>
                            <button>
                                View project
                            </button>
                        </a>
                    </div>
                </div>

                <div className='container-projetos'>
                    <div className='container-projetos-img'>
                        <img src={portifolio} alt="" />
                    </div>
                    <div>
                        <h1>Primeiro portifólio</h1>
                    </div>
                    <div>
                        <p>Meu primeiro portifólio, e primeiro projeto em react</p>
                    </div>
                    <div>
                        <a href="https://heitor-portifolio.vercel.app/" target='_blank'>
                            <button>
                                View project
                            </button>
                        </a>
                    </div>
                </div>

                <div className='container-projetos'>
                    <div className='container-projetos-img'>
                        <img src={portifolio} alt="" />
                    </div>
                    <div>
                        <h1>Primeiro portifólio</h1>
                    </div>
                    <div>
                        <p>Meu primeiro portifólio, e primeiro projeto em react</p>
                    </div>
                    <div>
                        <a href="https://heitor-portifolio.vercel.app/" target='_blank'>
                            <button>
                                View project
                            </button>
                        </a>
                    </div>
                </div>
                

            </section>

        </section>
    );
}

export default Projetos;