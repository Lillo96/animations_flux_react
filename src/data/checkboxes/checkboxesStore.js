import { ReduceStore } from 'flux/utils'
import animationDispatcher from "../animationDispatcher"
import Immutable from 'immutable'
import style from '../styleObject'
import checkboxesActionTypes from "./checkboxesActionTypes"
import checkboxes from "./checkboxesObject"

class CheckboxesStore extends ReduceStore{
    constructor () {
        super(animationDispatcher)
    }

    getInitialState() {
        return Immutable.OrderedMap()
    }

    reduce (state, action) {
        switch (action.type) {
            case checkboxesActionTypes.NEW_CHECKBOXES: {
                return state.set(
                    action.id,
                    checkboxes({
                        id: action.id,
                        onCheck: action.onCheck
                    })
                )}
            case checkboxesActionTypes.CHANGE_CHECKBOXES_VALUE: {
                console.log("Dentro CHANGE_CHECKBOXES_VALUE");
            }

            default:
                return state
        }
    }
}

export default new CheckboxesStore()
