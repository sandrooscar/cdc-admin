import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';

function Welcome(props) {
  console.log({props})
  return <h1>Hello, {props.name}</h1>;
}


class App extends Component {
  render() {
    return (
      <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
    )
    {/*
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>

        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Company</a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autor</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Livros</a></li>
            </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>Cadastro de autores</h1>
          </div>
        </div>
    </div>
    */}
    
  };
}

export default App;
