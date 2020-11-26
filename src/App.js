import logo from './logo.svg';
import './App.css';
import React from 'react'
import imp, { getCheckboxes } from './imp'

function App (props) {

  const checkbox1 = getCheckboxes('prova')
  //console.log(checkbox1)
  console.log(checkbox1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {       /*CHECKBOX*/      }

        { /* <input id="c1" type="checkbox" onClick={ () => { checkbox1.getValueCheck(10) }}/> */ }
        <imp.checkboxes id={'prova'} onClick={ () => { checkbox1.getValueCheck('value') }} {...props}>
          Checkbox
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
