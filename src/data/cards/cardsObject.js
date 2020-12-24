import Immutable from 'immutable'

const cards = Immutable.Record({
    id: '',
    type: 'cards',
    typeInput: null,
    checkLimit: true,
    style: null,
    animationCSS: '',
    textInput: '',
    textValue: ''
})

export default cards
