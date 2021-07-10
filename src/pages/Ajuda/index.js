import React from 'react'
import Nav from '../../components/Nav'
import BannerAjuda from '../../components/BannerAjuda'
import Footer from '../../components/Footer'

import './styles.css'

const Desaparecidos = () => {
return (
        <>
            <Nav />
            <BannerAjuda />
            <div className="titulo">
        <h1>
            Faça a sua doação
        </h1>
        </div>

        <div>
            <p className="text-doacao">
            Existem pessoas que me perguntam: "como faz pra ajudar um gatinho?", "Tal coisa é muito cara?", E até afirmam que se cada um doasse algo, a carga não seria tão pesada pra nós, financeiramente falando.
                </p>

                <p className="text-doacao">
                O número de gatinhos abandonados cresce todos os dias, inclusive conosco. Não é fácil manter ração (que aumenta todo mês), honrar castração, vermífugação e ainda pagar contas mensais com apenas 1 salário minimo.
                </p>

                <p className="text-doacao">
                É difícil e as vezes frustrante, pois não conseguimos fazer por todos devido aos gastos... Estamos sempre precisando de coisas básicas para eles.
                </p>
                <p className="text-doacao">
                Por isso, se você puder ajudar nosso projeto, doando qualquer valor, será de grande valia.
            </p>
        </div>

        <div className="titulo">
        <h1>
            Você pode doar qualquer quantia pela nossa conta:
        </h1>
        </div>

        <div className="contas">

         <div className="banco-do-brasil-pai"> 

         <h1 className="nubank">Banco do Brasil:</h1>
        <h3 className="agencia">Agência: 3501-7<br></br>
                Conta-corrente: 119736-3</h3>

        
        <h1 className="nubank">Nubank:</h1>
        <h3 className="agencia">Agência: 0001 <br></br>
                Conta-corrente: 72185746-2</h3>

                <h1 className="nubank">Picpay:</h1>
        <h3 className="agencia">@jordanna.araujo</h3>

                <h1 className="nubank">PIX:</h1>
        <h3 className="agencia">jordannafgaraujo@gmail.com</h3>
        

        </div>
        </div>
            <Footer />
        </>
    
)
}
export default Desaparecidos