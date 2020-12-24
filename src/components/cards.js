import React from 'react'
import PropTypes from 'prop-types'
//import checkboxesActions from "../data/checkboxes/checkboxesActions"
//import getAnimation from "../data/animation"

import styled, {keyframes} from "styled-components"
import checkboxes from "./checkboxes";

function cards({
    id, checkLimit, typeInput, animationCSS, textInput, textValue, duration, timing, delay, iterations,
    direction, fillMode, playState, ...rest
}) {}


cards.propType = {
    anim: PropTypes.object,
    id: PropTypes.string,
    typeInput: PropTypes.number,
    checkLimit: PropTypes.bool,
    duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    timing: PropTypes.string,
    delay: PropTypes.string,
    iterations: PropTypes.string,
    direction: PropTypes.string,
    fillMode: PropTypes.string,
    playState: PropTypes.string,
    animationCSS: PropTypes.string,
    textInput: PropTypes.string,
    textValue: PropTypes.string
}

export default cards
