import animationDispatcher from "../animationDispatcher"
import itemsActionTypes from "./itemsActionTypes";

const itemsActions = {
    newItems (
        id, checkLimit, typeInput, animationCSS, textInput, textValue, duration, timing, delay,
        iterations, direction, fillMode, playState) {
        animationDispatcher.dispatch ({
            type: itemsActionTypes.NEW_ITEMS,
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
            type: itemsActionTypes.CHANGE_ITEMS_VALUE,
            id: id,
            key: key,
            value: value
        })
    }
}

export default itemsActions