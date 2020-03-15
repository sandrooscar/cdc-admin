import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';
import InputCustomizado from './componentes/InputCustomizado';
import ButtonCustomizado from './componentes/ButtonCustomizado';
import AutorBox from './Autor';
import {Link} from 'react-router';

class App extends Component {

  render() {
    console.log("render");
    return (
      <div id="layout">

        <a href="#menu" id="menuLink" className="menu-link">

          <span></span>
        </a>

        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Company</a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item"><Link to="#" className="pure-menu-link">Home</Link></li>
              <li className="pure-menu-item"><Link to="/autor" className="pure-menu-link">Autor</Link></li>
              <li className="pure-menu-item"><Link to="#" className="pure-menu-link">Livro</Link></li>


            </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>Bem-vindo ao sistema</h1>
          </div>
          <div className="content" id="content">
          </div>
        </div>

      </div>
    )
  }
}

export default App;
