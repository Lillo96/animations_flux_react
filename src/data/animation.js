import {keyframes} from "styled-components";

function getAnimation(id, valueDefault, style) {
    const animation = {}

    if (style) {

        const { duration, timing, delay, iterations, direction, fillMode, playState } = valueDefault

        // console.log("DENTRO STYLE ESISTE")
        animation.animationDuration = duration || style.duration
        animation.animationTimingFunction = timing || style.timing
        animation.animationDelay = delay || style.delay
        animation.animationIterationCount = iterations || style.iterations
        animation.animationDirection = direction || style.direction
        animation.animationFillMode = fillMode || style.fillMode
        animation.animationPlayState = playState || style.playState

    } else {
        // console.log("DENTRO STYLE NON ESISTE")
        const { duration, timing, delay, iterations, direction, fillMode, playState } = valueDefault
        animation.animationDuration = duration || '1s'
        animation.animationTimingFunction = timing || 'ease'
        animation.animationDelay = delay || '1s'
        animation.animationIterationCount = iterations || '1'
        animation.animationDirection = direction || 'normal'
        animation.animationFillMode = fillMode || 'both'
        animation.animationPlayState = playState || 'running'
    }

    animation.animationName = id

    return animation
}

export default getAnimation
