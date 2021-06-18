import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import TesteModal from './pages/TesteModal';
import Camisa from './pages/Camisa';


const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #DDDDDD;
`

function App() {

  return(
    <Body>
      <BrowserRouter>
        <header>
          <h1 style={{paddingLeft:10}}>Link to pratice content pages</h1>
          <nav>
            <ul>
            <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/About" >Teste de modal</Link>
              </li>
              <li>
                <Link to="/produto/camisa" >Camisa</Link>
              </li>
              <li>
                <Link to="/produto/chinelo" >Chinelo</Link>
              </li>
            </ul>
          </nav>
        </header>
        <hr />

        <div>
          <Switch>
            <Route exact path="/">
              <p style={{padding: 15}}> Por enquanto nada aqui!</p>
            </Route>
            <Route exact path="/About">
              <TesteModal />
            </Route>
            <Route exact path="/produto/:tipo">
              <Camisa />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Body>
  )
}

 

export default App;
