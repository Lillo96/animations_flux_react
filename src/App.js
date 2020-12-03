import logo from './logo.svg';
import './App.css';
import React from 'react'
import imp, { getCheckboxes } from './imp'

function App (props) {

  const checkbox1 = getCheckboxes('checkboxprova')
  //console.log(checkbox1)
  //console.log(checkbox1)

  const [checked, setChecked] = React.useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

       {/* <label>
          <input type="checkbox"
                 checked={checked}
                 onChange={() => setChecked(!checked)}
          />
          Check Me!
        </label>*/}

        <imp.checkboxes id='checkboxprova' checkLimit={ 80 } {...props}>

          <label>
            <input type="checkbox"
                   checked={!checked}
                   onChange={() => setChecked(!checked)}
                   onClick={() => { checkbox1.setCheckLimit(!checked) }}
            />
              Checkbox
          </label>


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
