import React from 'react'
import Img from "../../assets/logo-adote-um-gatinho.png"
import { Link } from 'react-router-dom'

import './styles.css'


const Footer = () => {
    return (
        <>
        <footer>
            <section className="footer-1">
        <div>
            <div className="footer-adote">
        <img className="footer-logo" src={Img} alt="logo adote um gatinho jp" />
        </div>
        <div className="text-footer">
        <p>Site criada para adoção de gatos em João Pessoa. <br></br>endo em vista que são mais prejudicados por conta do julgamento <br></br> de tantos que não acreditam que gatos podem dar amor tanto quanto cachorros.<br></br>Não somos ONG! Atualmente somos um "grupo" de pessoas que se esforçam para chamar atenção para a adoção de gatos em João Pessoa! </p>
        </div>
        </div>

        <div className="item-footer">
            <p>Menu</p>
            <ul>
                <li>
                <Link className="links_footer" to='/Formulario'>
                    Quero adotar
                    </Link>
                </li>
                <li>
                <Link className="links_footer" to='/Desaparecidos'>
                    Gatos desaparecidos
                    </Link>
                </li>
                <li>
                <Link className="links_footer" to='/ajuda'>
                    Quero Ajudar
                    </Link>
                </li>
            </ul>
        </div>

        <div className="redes-sociais">
            <p>Acompanhe nas redes sociais</p>
            <Link className="link_insta" to='https://www.instagram.com/adoteumgatinhojp/'>
                <img className="logo_insta" src="https://image.flaticon.com/icons/png/512/1400/1400829.png" alt="logo instagram"/>
                </Link>

                <Link className="link_insta" to='https://www.facebook.com/adoteumgatinhojp/'>
                <img className="logo_facebook" src="https://image.flaticon.com/icons/png/512/733/733603.png" alt="logo facebook"/>
                </Link>
    
        </div>
        </section>
        </footer>
        <section className="footer-2">
        <div className="rodape">
            <p className="text">
                2016 - 2021 - TODOS OS DIREITOS RESERVADOS
            </p>
            <p className="desenvolvido-por">
                Desenvolvido por <a href="https://www.linkedin.com/in/brunasilvadesouza/" target="_blank" rel="noreferrer">Bruna Souza</a>
            </p>
        </div>
        </section>
        </>
         

        
   )}
export default Footer