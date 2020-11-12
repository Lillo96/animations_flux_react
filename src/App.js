import logo from './logo.svg';
import './App.css';
import React from 'react';
import imp, {getCheckboxes} from './imp'

function App(props) {
  //const checkbox = getCheckboxes('checkbox01')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <imp.checkboxes entry={'in'} id="checkbox01" checks={2} limit={2} {...props}
        >
        CIAO
        </imp.checkboxes>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
