import React, { Component} from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Content from './Content.js';
import {Link} from 'react-router-dom';




class App extends Component {

  state = {
      posts: [],
  };

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/posts/')
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
      <ul>
      {this.state.posts.map((post) =>
      <li>
      <Link to={`content/${post.id}`}>
          {post.title}
      </Link>
      </li>
      )
    }
      </ul>
      
    </div>

    <Footer />
    </div>
  );
  
}
}

export default App;
