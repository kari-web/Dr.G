import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import React from 'react';

function App() {
  return (
    
    <div>
      {/* <h1>Hello</h1> */}
      <BrowserRouter>
      <Header />
      <Switch>
        <Route to='/' exact component={LandingPage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;