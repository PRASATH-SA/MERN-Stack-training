import logo from './logo.svg';
import './App.css';

function Rajesh() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Sridhar dhaan maass
        </p>
        <a
          className="App-link"
          href="https://www.favoflex.com/FAVOFLEX.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about Favoflex
        </a>
      </header>
    </div>
  );
}

function Prasath(){
   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          I'm Prasath
        </p>
        <a
          className="App-link"
          href="https://www.prasath.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about Prasath
        </a>
      </header>
    </div>
  );
}
export default Prasath;