import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import SearchHandyMen from '../../routes/SearchLandingPage/SearchHandyMen'
import HandymanListPage from '../../routes/HandymanListPage/HandymanListPage'
import HandymanPage from '../../routes/HandymanPage/HandymanPage'
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
        <Route
          exact
          path={'/handymen'}
          component={HandymanListPage}
        />
        <Route
          exact
          path={'/handymen/:handyman_id'}
          component={HandymanPage}
        />
      </main>
    </div>
  );
}

export default App;
