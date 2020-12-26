import React from 'react'
import PropTypes from 'prop-types'
import cardsActions from "../data/cards/cardsActions";
import getAnimation from "../data/animation"

import styled, {keyframes} from "styled-components"

function cards({
    id, checkLimit, typeInput, animationCSS, textInput, textValue, duration, timing, delay, iterations,
    direction, fillMode, playState, ...rest
}) {

    let animation
    let getAnimationCSS, getAnimationCSS_1

    if (!rest.cards.state.has(id)) {

        animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState })
        //console.log(animation)

        cardsActions.newCards(
            id, checkLimit, typeInput, animationCSS, textInput, textValue, duration, timing, delay,
            iterations, direction, fillMode, playState
        )

        //setAnimationCSS(id, cssStylesKeyFrames(true,1))

    } else {

        //console.log("Dentro else di !rest")

        const cardObj = rest.cards.state.get(id)

        animation = getAnimation(id, {}, cardObj.style)
        //console.log(animation)

        // setAnimationCSS(id, cssStylesKeyFrames(rest.checkboxes.state.get(id).get('checkLimit'), rest.checkboxes.state.get(id).get('typeInput')))
        // getAnimationCSS = rest.checkboxes.state.get(id).get('animationCSS')
        // getAnimationCSS_1 = setKeyframes2(rest.checkboxes.state.get(id).get('checkLimit'), rest.checkboxes.state.get(id).get('typeInput'))

    }

    return (
        <div id={id} style={animation} {...rest}>
             { rest.children }
        </div>
    )
}




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
