import React from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className='App-content'>
        <Link to='/'><h1>Los stickers de Gisela</h1></Link>
        <Link to='/search/cat'>Gifs de gatos</Link>
        <Link to='/search/dog'>Gifs de perros</Link>
        <Link to='/search/Afganistan'>Gifs de Afganistán</Link>

        <Route
          path='/'
          component={Home} />
        <Route
          path='/search/:keyword'
          component={ListOfGifs} />
        <Route
          path='/gif/:id'
          component={Detail} />
      </section>
    </div>
  );
}

export default App;
