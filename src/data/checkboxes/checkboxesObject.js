import Immutable from 'immutable'
import PropTypes from "prop-types";

const checkboxes = Immutable.Record({
    id: '',
    type: 'checkboxes',
    typeInput: 1,
    checkLimit: true,
    style: null,
    animationCSS: '',
    textInput: '',
    textValue: '',
    colorStart: 'black',
    colorEnd: 'red',
    opacityNotCheck: 1,
    opacityCheck: 1,
    timeAnimation: '1s',
    typeAnimFillMode: 'both',
    colorLine: 'black',

    displayCheck: 'inline-block',
    textDecoration: 'line-through',
    textDecorationThickness: '3px',
    textDecorationColor: '#363839',
    transitionTimingFunction: '1s'
})

export default checkboxes
