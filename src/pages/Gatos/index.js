import React, {useState, useEffect} from 'react'
import Nav from '../../components/Nav'
import BannerDisponiveis from '../../components/BannerDisponiveis'
import Footer from '../../components/Footer'

import './styles.css'

const Gatos = () => {
    const [cats, setCat] = useState([]) //renderiza os personagens na tela

useEffect(()=> {
    fetch('https://my-json-server.typicode.com/brunassouza/api-gatos-disponiveis/cards')
    .then(resposta => resposta.json())
    .then(dados => setCat(dados))

},[])

return (
    <>
            <Nav />
            <BannerDisponiveis />
            <div className="titulo">
        <h1>
            Gatos Disponíveis para Adoção
        </h1>
        </div>
        
        <ul className="catss">
    {cats.map(gato => {
        return <li className="gatos">
        
        <img className="images" src={gato.url} alt={gato.Nome}/>
        <p> Nome:  {gato.Nome} </p>
        <p> Mais informações: {gato.infos} </p>
        {/* <button className="botao">QUERO ADOTAR</button>
        <form className="botao" action="../formulario">
    <input type="submit" value="Go to Google" />
</form> */}
        <a className="botao" href="../formulario" rel= "noreferrer">QUERO ADOTAR</a>
        </li>
        
    })}
   
    </ul>
            
            <Footer />
            
        </>
        
    )
}
export default Gatos
