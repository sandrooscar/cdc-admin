//componente utilizando bind para acesso direto ao state
class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isToggleOn: true };
  
      // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  // Essa sintaxe garante que o `this` seja vinculado ao handleClick.
  // Atenção: essa é uma sintaxe *experimental*.
  //Essa sintaxe é habilitada por padrão no Create React App.
  //O problema com esta sintaxe é que um callback diferente é criado toda vez que o LoggingButton é renderizado. Na maioria dos casos, tudo bem. No entanto, se esse //callback for passado para componentes inferiores através de props, esses componentes poderão fazer uma renderização extra. Geralmente recomendamos a vinculação //no construtor ou a sintaxe dos campos de classe para evitar esse tipo de problema de desempenho.
  class LoggingButton extends React.Component {
    // Essa sintaxe garante que o `this` seja vinculado ao handleClick.
    // Atenção: essa é uma sintaxe *experimental*.
    handleClick = () => {
      console.log('this is:', this);
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Clique Aqui
        </button>
      );
    }
  }
  
  function App(){
    return(
      <div>
      <LoggingButton/>
      <Toggle/>
        </div>
    );  
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );