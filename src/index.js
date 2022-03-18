import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './styles';

const App = () => {
    return (
       <div>
            <NavBar>
                Olá
            </NavBar>
       </div>   
    )
}

const container = document.getElementById('root')
container ? ReactDOM.render(<App />, container) : false