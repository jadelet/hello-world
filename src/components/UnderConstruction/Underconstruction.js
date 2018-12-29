import React, {Component} from 'react';
import under_construction from "../images/under_construction.jpg";
import "./under_construction.css";

class UnderConstruction extends Component {
  // state = {  }

  render() {
    return (
      <div>
        <title>
          <a href="/about" className="construction">
            Sorry friends, seems we're still working out a few bugs on this
            page. . .
          </a>
        </title>
        <div id="imagecontainer">
          <img id = "angryprogrammer"
            src={under_construction}
            alt="THIS PAGE IS STILL UNDER CONSTRUCTION--SEE EVEN THE IMAGE LINK IS BROKEN"
          />
        </div>
      </div>
    );
  }
}

export default UnderConstruction;
