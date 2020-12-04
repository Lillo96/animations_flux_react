import logo from './logo.svg';
import './App.css';
import React from 'react'
import imp, { getCheckboxes } from './imp'

function App (props) {

  const checkbox1 = getCheckboxes('checkboxprova')
  const checkbox2 = getCheckboxes('checkboxprova2')
  const checkbox3 = getCheckboxes('checkboxprova3')
  //console.log(checkbox1)
  //console.log(checkbox1)

  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);

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

        <imp.checkboxes id='checkboxprova' typeInput={1} checkLimit={ true } {...props}>

          <label>
            <input type="checkbox"
                   checked={!checked}
                   onChange={() => setChecked(!checked)}
                   onClick={() => { checkbox1.setCheckLimit(!checked) }}
            />
              Checkbox
          </label>


        </imp.checkboxes>

        <imp.checkboxes id='checkboxprova2' typeInput={2} checkLimit={ true } {...props}>

          <label>
            <input type="checkbox"
                   checked={!checked1}
                   onChange={() => setChecked1(!checked1)}
                   onClick={() => { checkbox3.setCheckLimit(!checked1) }}
            />
            Checkbox
          </label>


        </imp.checkboxes>

        <imp.checkboxes id='checkboxprova3' typeInput={2} checkLimit={ true } {...props}>

          <label>
            <input type="checkbox"
                   checked={!checked2}
                   onChange={() => setChecked2(!checked2)}
                   onClick={() => { checkbox2.setCheckLimit(!checked2) }}
            />
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
