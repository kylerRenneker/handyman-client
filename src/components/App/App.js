import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import SearchLandingPage from '../../routes/SearchLandingPage/SearchLandingPage'
import HandymanListPage from '../../routes/HandymanListPage/HandymanListPage'
import HandymanPage from '../../routes/HandymanPage/HandymanPage'
import SignUpPage from '../../routes/SignUpPage/SignUpPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import ProfilePage from '../../routes/ProfilePage/ProfilePage'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='app__header'>
        <Header />
      </header>
      <main className='app__main'>
        <Switch>
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
            path={'/handymen/:handyman_id'}
            component={HandymanPage}
          />

          <Route
            path={'/handymanSignup'}
            component={SignUpPage}
          />

          <Route
            path={'/signup'}
            component={SignUpPage}
          />

          <Route
            path={'/login'}
            component={LoginPage}
          />

          <Route
            path={'/profile'}
            component={ProfilePage}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
