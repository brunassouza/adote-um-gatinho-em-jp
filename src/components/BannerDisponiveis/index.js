import React from 'react'
import Img from "../../assets/foto-cat.jfif"
import "./styles.css"

const Disponiveis = () => {
return(
    <div className="header">
        <div className="banner">
    <img className="banner-cat" src={Img} alt="Foto de um gato" />
    </div>
    <div className="texto-cat">
        <h1>Que tal adotar um gatinho? <br></br>Você pode se apaixonar agora por um pet</h1>
        </div>
    </div>
    
)
}
export default Disponiveis
