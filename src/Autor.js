import React, { Component } from 'react';
import $ from 'jquery';
import InputCustomizado from './componentes/InputCustomizado';
import ButtonCustomizado from './componentes/ButtonCustomizado';
import PubSub from 'pubsub-js';
import TratadorErros from './TratadorErros';

class FormularioAutor extends Component {
    constructor(){
        super();
        this.state = {nome:'',email:'', senha:''};
        this.enviaForm = this.enviaForm.bind(this);
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
      }

    setNome(evento){
        this.setState({nome:evento.target.value});
    }

    setEmail(evento){    
        this.setState({email:evento.target.value});
    }

    setSenha(evento){
        this.setState({senha:evento.target.value});
    }

    //evento é um static event
    enviaForm(evento){
        evento.preventDefault();
        console.log("dados enviados");
        $.ajax({
            url: "http://localhost:8080/api/autores",
            contentType: 'application/json',
            type:'post',
            data: JSON.stringify({nome:this.state.nome,email:this.state.email,senha:this.state.senha}),
            success: function(novaListagem){
                console.log(novaListagem);
                console.log("formularioAutor enviado com sucesso");
                PubSub.publish('atualiza-lista-autores', novaListagem);
            },
            error: function(resposta){
                if(resposta.status === 400){
                    new TratadorErros().publicaErros(resposta.responseJSON);
                }
            }
        })
    }

    render(){
        return(
            <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="Post">
                <InputCustomizado id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} label="Nome"/>                                              
                <InputCustomizado id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} label="Email"/>                                              
                <InputCustomizado id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} label="Senha"/>                                                                      
                <ButtonCustomizado type="submit" caption="Gravar"/>
            </form>
        );
    }
}

class TabelaAutores extends Component {
    render(){
        return(
            <div>
              <table className="pure-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>email</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      this.props.lista.map(function(autor){
                        return(
                          <tr key={autor.id}>
                            <td>{autor.nome}</td>
                            <td>{autor.email}</td>
                          </tr>
                        );
                      })
                    }
                </tbody>
              </table>
            </div>
        );
    }
}

export default class AutorBox extends Component {
    constructor(){
        super();
        this.state = { lista: [] };
    }

    componentWillMount(){
        console.log("autobox willMount");
    }

    componentDidMount(){
        console.log("autobox didMount");
        /* faz o this apontar para o this do App, caso contrário não seria possivel manipular o setState */
        $.ajax({
            url:"http://localhost:8080/api/autores",
            dataType: 'json',
            success: function(resposta){
            console.log("autobox chegou a resposta");
            this.setState({lista:resposta});
            }.bind(this) 
        })
        PubSub.subscribe('atualiza-lista-autores', function(topico, novaListagem){
            this.setState({lista:novaListagem});
        }.bind(this));
    }

    render(){
        return (
            <div>
                <div className="pure-form pure-form-aligned">
                    <FormularioAutor callBackAtualizaListagem={this.atualizaListagem}/>
                    <TabelaAutores lista={this.state.lista}/>
                </div>
            </div>
        );
    }
}