import animationDispatcher from "../animationDispatcher"
import checkboxesActionTypes from "./checkboxesActionTypes"

const checkboxesActions = {
    newCheckboxes (id, onCheck) {
        animationDispatcher.dispatch ({
            type: checkboxesActionTypes.NEW_CHECKBOXES,
            id: id,
            onCheck: onCheck
        })
    },
    changeValue (id, key, value) {
        console.log("ID", id)
        console.log("KEY", key)
        console.log("VALUE", value)

        animationDispatcher.dispatch({
            type: checkboxesActionTypes.CHANGE_CHECKBOXES_VALUE,
            id: id,
            key: key,
            value: value
        })
    }
}

export default checkboxesActions
