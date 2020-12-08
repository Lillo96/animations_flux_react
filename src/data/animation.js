function getAnimation(id, valueDefault, style) {
    const animation = {}

    if (style) {
        //console.log("DENTRO STYLE ESISTE")
        animation.animationDuration = style.duration
        animation.animationTimingFunction = style.timing
        animation.animationDelay = style.delay
        animation.animationIterationCount = style.iterations
        animation.animationDirection = style.direction
        animation.animationFillMode = style.fillMode
        animation.animationPlayState = style.playState

        //originFrame = '@keyframes checkboxprova {\nfrom {\n opacity: 0;\n color: white;\n }\n\n'
        //endFrame = 'to {\n opacity: ' + 1 + ';\n color: white;\n }\n\n}\n\n'

    } else {
        //console.log("DENTRO STYLE NON ESISTE")
        const { duration, timing, delay, iterations, direction, fillMode, playState } = valueDefault
        animation.animationDuration = duration || '1s'
        animation.animationTimingFunction = timing || 'ease'
        animation.animationDelay = delay || '0s'
        animation.animationIterationCount = iterations || '1'
        animation.animationDirection = direction || 'normal'
        animation.animationFillMode = fillMode || 'both'
        animation.animationPlayState = playState || 'running'

    }

    animation.animationName = id

    return animation
}

export default getAnimation
