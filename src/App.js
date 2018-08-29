import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';
import Main from './components/Main';
import SocialLinks from './components/SocialLinks';
import Resume from './components/Resume';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    );
  }
}

export default App;
