import React, { Component } from 'react';
import Navbar from './Navbar.js'
import './App.css';

class Header extends Component {
    render() {
        return <div className='header'>
                    <h1>Hello World!</h1>
                    <Navbar />
                </div>
        
    }
  }


export default Header;  