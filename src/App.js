import React from 'react';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Home } from './Home';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'
import { SearchPage } from './SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path='/search'>
            <SearchPage />
            <Footer />
          </Route>
          <Route path='/'>
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
      {/* <Header />
      <Home />
      <Footer /> */}
    </div>
  );
}

export default App;
