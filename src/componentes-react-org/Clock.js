
//https://pt-br.reactjs.org/docs/state-and-lifecycle.html
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    
    //executado uma únid=ca vez após evento render ser executado, executado na primeira renderização do componente
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    
    //executado quando o componente é removido
    componentWillUnmount() {
       clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
    
    render() {
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
      )  
    }
  }
  
  function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('O link foi clicado.');
    }
  
    return (
      <a href="#" onClick={handleClick}>
        Clique Aqui
      </a>
    );
  }
    
  function App(){
    return (
      <div>
       <Clock />
       <ActionLink />
  
      </div>
    );  
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );