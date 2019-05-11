import React, { Component } from 'react';
import './App.css';
import Footer from './Footer.js';
import Header from './Header';

class Contact extends Component {
  render() {
    return (
      <div className="App">
      
      <Header />
      <div className='contact'>
      Dane kontaktowe
      </div>  
      <Footer />
      </div>
    );
    
  }
}

export default Contact;