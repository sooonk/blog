import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './Contact.js';
import Content from './Content.js';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/contact' component={Contact} />
        <Route path='/content/:id' component={Content} />


    </Switch>
</BrowserRouter>
    , document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
