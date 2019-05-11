import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';

class Content extends Component {

    state = {
        posts: [],
    };

    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(posts => {
            this.setState({
                posts
            })
        })
    }
  render() {

    return (
      <div className='App'>  

      <Header />  
      <div className="content">
        <div><h1>{this.state.posts.title}</h1></div>
        <div>{this.state.posts.body}</div>
      </div>

      <Footer />
      </div>
    );
    
  }
}

export default Content;