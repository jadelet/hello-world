import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 
'react-router-dom';
import Portfolio from './components/portfolioComponent';
import About from './components/about/about.js';
import Navbar from './components/navbar/navbar.js';
import Under_Construction from './components/UnderConstruction/Underconstruction.js';
import Blog from './components/blog/blogcomponent.js';
import Github from './components/github/githubcomponent.js';
import Linkedin from './components/linkedin/linkedincomponent.js';


const App = () => (
  <Router>
    <div>
     <Navbar> </Navbar> 
      <Route exact path='/about/' component={About} />
     {/* temporary diversion until actual page is done */}
      {/* <Route exact path='/portfolio/' component={Portfolio} /> */}
      <Route exact path='/portfolio/' component={Under_Construction}/>
      {/* <Route exact path='/bizwebsite/' component={() => window.location = 'http://www.jackofallcodes.net'} />  */}
      {/* Originally were direct links. */}
      {/* <Route exact path='/blog/'component={() => window.location = 'https://jensheidy.wordpress.com/'}/> */}
      <Route exact path='/github/'component={() => window.location = 'https://github.com/jadelet'}/>
      <Route exact path='/blog/'component={Blog}/>
      {/* <Route exact path='/github/'component={Github}/> */}
      <Route exact path='/linkedin/'component={Linkedin}/>
      <Route exact path='/' component={About} />
     
     
    </div>
  </Router>
 
)

export default App;