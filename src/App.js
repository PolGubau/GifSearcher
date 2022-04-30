import React from 'react'
import './App.css';
import Home from './Pages/Home/index';
import Detail from './Pages/Detail/index';
import SearchResults from './Pages/SearchResults/index';
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className='App-content'>
        <Link to='/'><h1>Los stickers de Gisela</h1></Link>
      

        <Route
          path='/'
          component={Home} />
        <Route
          path='/search/:keyword'
          component={SearchResults} />
        <Route
          path='/gif/:id'
          component={Detail} />
      </section>
    </div>
  );
}

export default App;
