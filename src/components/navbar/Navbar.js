import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/readings">Readings</Link>
      </div>
    )
  }
}

export default NavBar;