import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import SearchHandyMen from '../../routes/SearchLandingPage/SearchHandyMen'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="app__header">
        <Header />
      </header>
      <main className="app__main">
        <Route
          exact
          path={'/'}
          component={SearchHandyMen}
        />
      </main>
    </div>
  );
}

export default App;
