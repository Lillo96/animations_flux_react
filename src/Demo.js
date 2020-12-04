import React from 'react'
import imp, { getCheckboxes } from './imp'

function Demo(props) {

    const checkbox1 = getCheckboxes('checkboxprova')
    const checkbox2 = getCheckboxes('checkboxprova2')

    const [checked, setChecked] = React.useState(true);
    const [checked1, setChecked1] = React.useState(true);

    //,position: 'absolute', top: '50%', left: '50%',width: '1200px', height: '600px', tableLayout: 'fixed'

    const demoHeaderConst = {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'black',
    }

    return (
        <div className="Demo" style={{textAlign: 'center'}}>
                <header className="Demo-header" style={ demoHeaderConst }>

                    <div className="Checkboxes">

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
                                       onClick={() => { checkbox2.setCheckLimit(!checked1) }}
                                />
                                Checkbox
                            </label>

                        </imp.checkboxes>

                    </div>

                </header>
        </div>
    )

}

export default Demo
