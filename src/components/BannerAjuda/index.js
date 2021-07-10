import React from 'react'
import Img from "../../assets/foto-cat.jfif"

import './styles.css'

const Ajuda = () => {
return(
    <div className="header">
        <div className="banner">
    <img className="banner-cat" src={Img} alt="Foto de um gato" />
    </div>
    <div className="texto-cat">
        <h1 className="gatos-desaparecidos">Quero ajudar</h1>
        <h2>Como posso ajudar?</h2>
        </div>
    </div>
    
)
}
export default Ajuda;