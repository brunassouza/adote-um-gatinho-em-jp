import React, {useState, useEffect} from 'react'
import Nav from '../../components/Nav'
import BannerDesaparecidos from '../../components/BannerDesaparecidos'
import Footer from '../../components/Footer'

import './styles.css'

const Desaparecidos = () => {
    const [cats, setCat] = useState([])

useEffect(()=> {
    fetch('https://my-json-server.typicode.com/brunassouza/api-gatos-desaparecidos/cards')
    .then(resposta => resposta.json())
    .then(dados => setCat(dados))

},[])

return (
        <>
            <Nav />
            <BannerDesaparecidos />
            <div className="titulo">
        <h1>
            Gatos Desaparecidos
        </h1>
        </div>

        <ul className="cats">
    {cats.map(gato => {
        return <li className="gato">
        
        <img className="images" src={gato.url} alt={gato.Nome}/>
        <p> Nome: {gato.Nome} </p>
        <p> Telefone para contato: {gato.tel} </p>
        <p> Mais informações: {gato.infos} </p>

        </li>
    })} </ul>
    
            <Footer />
        </>
    
)
}
export default Desaparecidos