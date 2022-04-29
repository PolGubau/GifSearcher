import React from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className='App-content'>
        <h1>Los stickers de Gisela</h1>
        <Link to='/gif/cat'>Gif de gatos</Link>
        <Link to='/gif/dog'>Gif de perros</Link>
        <Link to='/gif/Afganistan'>Gif de Afganistán</Link>

        <Route
          path='/gif/:keyword'
          component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
