import animationDispatcher from "../animationDispatcher"
import checkboxesActionTypes from "./checkboxesActionTypes"

const checkboxesActions = {
    newCheckboxes (
      id, checkLimit, duration, timing, delay,
      iterations, direction, fillMode, playState) {
         animationDispatcher.dispatch ({
            type: checkboxesActionTypes.NEW_CHECKBOXES,
            id: id,
            checkLimit: checkLimit,
            duration: duration,
            timing: timing,
            delay: delay,
            iterations: iterations,
            direction: direction,
            fillMode: direction,
            playState: playState
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
