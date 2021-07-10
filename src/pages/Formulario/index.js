import React from 'react'
import Nav from '../../components/Nav'
import BannerFormulario from '../../components/BannerFormulario'
import Footer from '../../components/Footer'
import Img from "../../assets/cat__png.png"

import './styles.css'

const Formulario = () => {
return (
        <>
            <Nav />
            <BannerFormulario />
            <div className="titulo">
        <h1>
            Critérios de adoção
        </h1>

        <div className="criterios-pai">
        <div className="criterios">
            <h1>
                Janelas Teladas
            </h1>
            <h3>
                Todas as janelas devem ter redes de proteção antes da chegada do gatinho.
            </h3>
            </div>

            <div className="criterios">
            <h1>
                Casas Seguras
            </h1>
            <h3>
                As casas devem ter muro altos, telas e barreiras que impeça a saída do gato.
            </h3>
            </div>

            <div className="criterios">
            <h1>
                Termo de responsabilidade
            </h1>
            <h3>
                A pessoa responsável pela adoção, terá que assinar um termo, comprometendo cuidar e não abandonar o gatinho.
            </h3>

        </div>
        </div>

        <h1 className="vc-segue">
        Você segue todos esses critérios?
        </h1>

        <h1 className="clique-no">
        Então, clique no link abaixo  e preencha o formulário  que entraremos em contato:
        </h1>

        <div className="retangulo">
            <a className="botao_quero" href='https://docs.google.com/forms/d/e/1FAIpQLScX2pYLK6yAEq0SIxT13jVR8sTR7g1EchWhypY7K9mAxIM7gA/viewform' target="_blank" rel= "noreferrer">
                QUERO ADOTAR
            </a>

        </div>

        <img className="cat" src={Img} alt="Foto de um gato" />
        </div>
            <Footer />
        </>
    
)
}
export default Formulario