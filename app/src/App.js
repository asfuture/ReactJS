import logo from './logo.svg';
import './App.css';


function sum(a,b){
  return a+b;
}

function primeiroJSX(){
  return (
    <div>
      Alex Ferreira - Introdução ao Reactjs
     <h3>Nota : {sum(5,5)}</h3> 
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá! Mundo. React
        </p>
        {primeiroJSX()}
        <a
          className="App-link"
          href="https://asfuture.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          ASFuture
        </a>
        
      </header>
    </div>
  );
}

export default App;
