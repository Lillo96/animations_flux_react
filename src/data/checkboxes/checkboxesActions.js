import animationDispatcher from "../animationDispatcher"
import checkboxesActionTypes from "./checkboxesActionTypes"

const checkboxesActions = {
    newCheckboxes (id) {
        animationDispatcher.dispatch ({
            type: checkboxesActionTypes.NEW_CHECKBOXES,
            id: id
        })
    },
    changeValue (id, key, value) {
        animationDispatcher.dispatch({
            type: checkboxesActionTypes.CHANGE_CHECKBOXES_VALUE,
            id: id,
            key: key,
            value: value
        })
    }
}

export default checkboxesActions
