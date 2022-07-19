import logo from './logo.svg';
import Button from './button';
import './App.css';


const element = "Digital Inovation One";
const element1 = <h1>Olá, React</h1>;

function sum(a,b){
  return a+b
}

function renderizaElement() {
  return (
    <div>
      {element}
      {element1}
      <Button onClick={()=> sum(5, 5)} name="Click aqui"/>
      <Button />
    </div>
  );
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
          {renderizaElement()}
      </header>
    </div>
  );
}

export default App;
