import React, {Component} from 'react';
import Iframe from 'react-iframe'

class Github extends Component {
  // state = {  }

  render() {
    return(
  <div>
      
      <title> 
      <a className= "jen" href="/about">Jennifer Nicole Sheidy --"jack-of-all-codes"</a>
   </title>
   <div className="imagecontainer">

<Iframe url=" http://gist-it.appspot.com/https://github.com/jadelet"
          width="100%"
          height= "100%"
          className="iframe"
        allowFullScreen/>
        </div>
        </div>
    )}
}

export default Github;