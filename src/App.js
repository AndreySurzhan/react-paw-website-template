import React from 'react';
import Shell from './components/Shell/Shell';

import HomePage from './pages/Home/HomePage';
import AboutUsPage from './pages/AboutUs/AboutUsPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Shell>
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/about-us' component={AboutUsPage} />
            <Route exact path='/' component={HomePage} />
          </Switch>
        </Shell>
      </div>
  </Router>
  );
}

export default App;
