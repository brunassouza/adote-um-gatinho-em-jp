import React from 'react'
import Img from "../../assets/foto-cat.jfif"

import './styles.css'

const Desaparecidos = () => {
return(
    <div className="header">
        <div className="banner">
    <img className="banner-cat" src={Img} alt="Foto de um gato" />
    </div>
    <div className="texto-cat">
        <h1 className="gatos-desaparecidos">Gatos Desaparecidos</h1>
        <h2>Ajude as pessoas a acharem seus bichanos</h2>
        </div>
    </div>
    
)
}
export default Desaparecidos