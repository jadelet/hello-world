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

<Iframe surl="https://github.com/jadelet"
          width="100%"
          height= "100%"
          className="iframe"
        allowFullScreen/>
        This browser does not support unsecured iFrame content
        </div>
        </div>
    )}
}

export default Github;