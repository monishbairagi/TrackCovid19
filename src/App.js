import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import './components/style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { About } from './components/About'


const App = () => {
  return (
    <Router>
      <div className="background">
        <Switch>
          <Route exact path="/">
            <Header />
            <div className="card">
              <div className="card-body">
                <Main />
              </div>
            </div>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer crname="Monish Bairagi" />
      </div>
    </Router>
  )
}

export default App
