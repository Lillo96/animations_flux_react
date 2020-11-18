import logo from './logo.svg';
import './App.css';
import React from 'react'
import imp, { getCheckboxes } from './imp'

function App (props) {

  const checkbox1 = getCheckboxes('prova')
  //console.log("VALORE CHECK", checkbox1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <imp.checkboxes id={"prova"} {...props} onChange={ (e) => { checkbox1.getValueCheck(e) }} {...props}>

          <ul>
            <input id="c1" type="checkbox" />
            <label htmlFor="c1">Checkbox</label>
          </ul>


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
  )
}

export default App
