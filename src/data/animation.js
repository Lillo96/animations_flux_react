function getAnimation (NameAnimation, defaultValues, style) {
    const animation = {}

    if (style) {
        console.log('YES STYLE')
    } else {
        const { duration, timing, delay, direction, fillMode, iterations, playState } = defaultValues
        animation.animationDuration = duration || '1s'
        animation.animationTimingFunction = timing || 'ease'
        animation.animationDelay = delay || '0s'
        animation.animationInterationCount = iterations || '0s'
        animation.animationDirection = direction || 'normal'
        animation.animationFillMode = fillMode || 'both'
        animation.animationPlayState = playState || 'running'
    }

    animation.animationName = NameAnimation

    return animation
}

export default getAnimation
