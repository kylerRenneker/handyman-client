import React from 'react'
import { Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Header from '../Header/Header'
import SearchLandingPage from '../../routes/SearchLandingPage/SearchLandingPage'
import HandymanListPage from '../../routes/HandymanListPage/HandymanListPage'
import HandymanPage from '../../routes/HandymanPage/HandymanPage'
import SignUpPage from '../../routes/SignUpPage/SignUpPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import './App.css'

function App() {
  const history = createBrowserHistory()
  return (
    <div className='App'>
      <header className='app__header'>
        <Header {...history} />
      </header>
      <main className='app__main'>
        <Route
          exact
          path={'/'}
          component={SearchLandingPage}
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

        <Route
          exact
          path={'/handymanSignup'}
          component={SignUpPage}
        />

        <Route
          exact
          path={'/signup'}
          component={SignUpPage}
        />

        <Route
          exact
          path={'/login'}
          component={LoginPage}
        />
      </main>
    </div>
  );
}

export default App;
