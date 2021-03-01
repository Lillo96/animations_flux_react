import Immutable from 'immutable'
import PropTypes from "prop-types";

const checkboxes = Immutable.Record({
    id: '',
    type: 'checkboxes',
    typeInput: 1,
    checkLimit: null,
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
    transitionTimingFunction: '1s',

    toEnableAnimationP: true,
    durationAnimationP: '1.5s',
    duration1AnimationP: 'infinite',
    fillModeAnimationP: 'forwards',

    transitionYEnable: false,
    transitionYEnable1: false,
    transitionXEnable: true,
    transitionXEnable1: false,

    checkAnimationTransition: false,
    setFlagAnimTransitionCheckLimit: 1,
    toEnableAnimationP_2: true

})

export default checkboxes
