import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Contact from './Contact'
import './App.css';

class Navbar extends Component {
    render() {
        return <div className='header'>
                    
                    <nav>
                        <Link to='/'>HOME</Link>
                        <Link to='contact' >Kontakt</Link>
                    </nav>
                </div>
        
    }
  }


export default Navbar;  