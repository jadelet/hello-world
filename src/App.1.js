import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from 
'react-router-dom';

import Titlepage from './components/Navbar/Navbar';
import About from './components/About/About';
import Discover from './components/Discover/Discover';
import Search from './components/Search/Search';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path='/about/' component={About} />
      <Route exact path='/discover/' component={Discover} />
      <Route exact path='/search/' component={Search} />
      <Route component ={'/about/'}/>
    </div>
  </Router>
 
)

export default App;
