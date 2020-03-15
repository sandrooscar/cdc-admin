import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AutorBox from './Autor';
import Home from './Home';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    (<Router>
        <app>
        <Switch>            
            <Route exact path="/" component={Home}/>
            <Route path="/autor" component={AutorBox}/>
            <Route path="/livro"/>                
        </Switch>            
        </app>
    </Router>)
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
