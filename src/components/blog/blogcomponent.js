import React, {Component} from 'react';
import Iframe from 'react-iframe'

class Blog extends Component {
  // state = {  }

  render() {
    return(
  <div>
   

<Iframe url="https://jensheidy.wordpress.com/"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
        </div>
    )}
}

export default Blog;