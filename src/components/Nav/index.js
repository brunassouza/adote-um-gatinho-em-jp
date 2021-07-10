import React from 'react'
import Img from "../../assets/logo-adote-um-gatinho.png"
import { Link } from 'react-router-dom'

import './styles.css'

const Nav = () => {
    return (
        <div className="navbar">
        <nav className="menu">
            <div>
             <img className="img-adote" src={Img} alt="Logotipo Adote um Gatinho JP"></img>
             </div>
            <ul>
                <li>
                    <Link className="link" to='/'>
                        Gatos Disponíveis
                    </Link>
                </li>
                <li>
                <Link className="link" to='/Desaparecidos'>
                        Gatos Desaparecidos
                </Link>
                </li>
                <li>
                <Link className="link" to='/ajuda'>
                        Quero Ajudar
                    </Link>
                </li>
                <li>
                <Link className="link" to='/formulario'>
                        Quero Adotar
                    </Link>
                </li>
            </ul>
        </nav>
        </div>

        
    )
    
}

export default Nav