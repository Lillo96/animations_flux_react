import Immutable from 'immutable'

const checkboxes = Immutable.Record({
    id: '',
    type: 'checkboxes',
    typeInput: 1,
    checkLimit: true,
    style: null,
    animationCSS: '',
    textInput: '',
    textValue: '',
    colorStart: 'white',
    colorEnd: 'red',
    opacityNotCheck: 1,
    opacityCheck: 1,
    timeAnimation: '1s',
    typeAnimFillMode: 'both',
    colorLine: 'black'
})

export default checkboxes
