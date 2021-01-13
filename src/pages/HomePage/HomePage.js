import './HomePage.css';
import signature from './../../assets/tempSig.png'
import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div className="homepage">
        <div className="landing">
          <div className="description">
            <img src={signature}></img>
            <p>I am designing this website to attempt to learn <a href="https://reactjs.org/">React</a>. It is a pretty difficult thing to do, as I am horrible at designing things that look good, but it is a difficulty that I will have to overcome. <br /> <br />Part of my struggle in making this website is finding good colors and fonts! Why is this so difficult? There are so many options to choose from, some of which look horrible! Other fonts look exactly the same. What is the meaning behind a good font?</p>
          </div>
          <div className="sidePhoto">

          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;