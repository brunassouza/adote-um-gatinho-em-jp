import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Gatos from '../pages/Gatos'

import Desaparecidos from '../pages/Desaparecidos'
import Ajuda from '../pages/Ajuda'
import Formulario from '../pages/Formulario'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component= {Gatos}/>
                <Route path = '/Desaparecidos' component= {Desaparecidos}/>
                <Route path='/ajuda' component= {Ajuda}/>
                <Route path= '/Formulario' component= {Formulario}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes