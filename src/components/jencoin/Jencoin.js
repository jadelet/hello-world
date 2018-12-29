import React from 'react';
import ReactCardFlip from 'react-card-flip'
import crazyjen from '../images/crazyjen.jpg';
import projen from '../images/projen.jpg'
import './jencoin.css';



class Jenflip extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <div key="front">
      
          <img src={crazyjen} alt = "This is the front of the coin"/>
          <button onClick={this.handleClick}> Ready to Play!</button>
        </div>
 
        <projen key="back">
 
        <img src= {projen} alt = "This is the back of the coin"/>
        <button onClick={this.handleClick}> Ready to Work!</button>
        </projen>
      </ReactCardFlip>
    )
  }
}

export default Jenflip;