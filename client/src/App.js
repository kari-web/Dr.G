import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import SignInPage from './pages/SignIn/SignIn';
import LearningPage from './pages/LearningPage/LearningPage';
import SexEdPage from './pages/SexEdPage/SexEdPage';

function App() {
  return (  
    <div>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/student/signin' component={SignInPage}/>
        <Route path='/student/learning' exact component={LearningPage}/>
        <Route path='/student/learning/sexed' component={SexEdPage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;