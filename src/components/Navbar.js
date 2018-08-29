import React from 'react';

class Navbar extends React.Component {
 render() {
return (
  <div>
    <nav>
      <ul>
        <li><a href="#about-me">About me</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#contact-me">Contact</a></li>
      </ul>
    </nav>
  </div>
)
  }
}

export default Navbar;
