import React from 'react'
import './App.css';
import Home from './Pages/Home/index';
import Detail from './Pages/Detail/index';
import SearchResults from './Pages/SearchResults/index';
import { Link, Route } from "wouter";
import staticContext from './context/staticContext';
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    // All lo que esté dentro del provider tendrá acceso al contexto
    // Lo que tiene Provider ya no lee el archivo del conrtexto sino lo que tenga en value
    <staticContext.Provider value={{ dev: 'Pol' }}>

      <div className="App">
        <section className='App-content'>
          <Link to='/'><h1>Iván's Gifs</h1></Link>

          {/* En las rutas queremos añadir el contexto de los gifs */}
          <GifsContextProvider>

            <Route
              path='/'
              component={Home} />
            <Route
              path='/search/:keyword'
              component={SearchResults} />
            <Route
              path='/gif/:id'
              component={Detail} />
          </GifsContextProvider>


        </section>
      </div>
    </staticContext.Provider >
  );
}

export default App;
