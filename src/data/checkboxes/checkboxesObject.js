import Immutable from 'immutable'

const checkboxes = Immutable.Record({
    id: '',
    type: 'checkboxes',
    typeInput: null,
    checkLimit: true,
    style: null,
    animationCSS: '',
    textInput: '',
    textValue: ''
})

export default checkboxes
