import animationDispatcher from "../animationDispatcher"
import checkboxesActionTypes from "./checkboxesActionTypes"

const checkboxesActions = {
    newCheckboxes (
        id, checkLimit, typeInput, animationCSS, textInput, textValue, colorStart, colorEnd, opacityNotCheck,
        opacityCheck, timeAnimation, typeAnimFillMode, colorLine,
        displayCheck, textDecoration, textDecorationThickness, textDecorationColor, transitionTimingFunction,
        toEnableAnimationP, durationAnimationP, duration1AnimationP, fillModeAnimationP,
        transitionYEnable, transitionYEnable1, transitionXEnable, transitionXEnable1, checkAnimationTransition,
        setFlagAnimTransitionCheckLimit, toEnableAnimationP_2, setStopAnimation, onAnim, widthImg, heightImg,
        duration, timing, delay, iterations, direction, fillMode, playState) {

         animationDispatcher.dispatch ({
                type: checkboxesActionTypes.NEW_CHECKBOXES,
                id: id,
                checkLimit: checkLimit,
                typeInput: typeInput,
                animationCSS: animationCSS,
                textInput: textInput,
                textValue: textInput,
                colorStart: colorStart,
                colorEnd: colorEnd,
                opacityNotCheck: opacityNotCheck,
                opacityCheck: opacityCheck,
                timeAnimation: timeAnimation,
                typeAnimFillMode: typeAnimFillMode,
                colorLine: colorLine,
                duration: duration,
                timing: timing,
                delay: delay,
                iterations: iterations,
                direction: direction,
                fillMode: direction,
                playState: playState,

                displayCheck: displayCheck,
                textDecoration: textDecoration,
                textDecorationThickness: textDecorationThickness,
                textDecorationColor: textDecorationColor,
                transitionTimingFunction: transitionTimingFunction,

                toEnableAnimationP: toEnableAnimationP,
                durationAnimationP: durationAnimationP,
                duration1AnimationP: duration1AnimationP,
                fillModeAnimationP: fillModeAnimationP,

                transitionYEnable: transitionYEnable,
                transitionYEnable1: transitionYEnable1,
                transitionXEnable: transitionXEnable,
                transitionXEnable1: transitionXEnable1,

                checkAnimationTransition: checkAnimationTransition,
                setFlagAnimTransitionCheckLimit: setFlagAnimTransitionCheckLimit,
                toEnableAnimationP_2: toEnableAnimationP_2,
                setStopAnimation: setStopAnimation,
                onAnim: onAnim,
                widthImg: widthImg,
                heightImg: heightImg
        })
    },
    changeValue (id, key, value) {
        //console.log("ID", id)
        //console.log("KEY", key)
        //console.log("VALUE", value)

        animationDispatcher.dispatch({
            type: checkboxesActionTypes.CHANGE_CHECKBOXES_VALUE,
            id: id,
            key: key,
            value: value
        })
    }
}

export default checkboxesActions
