import animationDispatcher from "../animationDispatcher"
import cardsActionTypes from "./cardsActionTypes"

const cardsActions = {
    newCards (
        id, checkLimit, typeInput, animationCSS, textInput, textValue, duration, timing, delay,
        iterations, direction, fillMode, playState) {
        animationDispatcher.dispatch ({
            type: cardsActionTypes.NEW_CARDS,
            id: id,
            checkLimit: checkLimit,
            typeInput: typeInput,
            animationCSS: animationCSS,
            textInput: textInput,
            textValue: textInput,
            duration: duration,
            timing: timing,
            delay: delay,
            iterations: iterations,
            direction: direction,
            fillMode: direction,
            playState: playState,

        })
    },
    changeValue (id, key, value) {
        //console.log("ID", id)
        //console.log("KEY", key)
        //console.log("VALUE", value)

        animationDispatcher.dispatch({
            type: cardsActionTypes.CHANGE_CARDS_VALUE,
            id: id,
            key: key,
            value: value
        })
    }
}

export default cardsActions
