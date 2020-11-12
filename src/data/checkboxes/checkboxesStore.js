import { ReduceStore } from 'flux/utils'
import animationDispatcher from '../animationDispatcher';
import checkboxes from './checkboxesObject'
import checkboxesActionTypes from './checkboxesActionTypes'
import style from '../styleObject'
import Immutable from 'immutable'

class CheckboxesStore extends ReduceStore {
    constructor() {
        super(animationDispatcher);
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
                        checks: action.checks,
                        limit: action.limit,
                        entry: action.entry
                    })
                )
            }

            case checkboxesActionTypes.CHANGE_CHECKBOXES_VALUE: {
                if (state.get(action.id).has(action.key)) {
                    return state.setIn([action.id, action.key], action.value)
                } else if (action.key.startsWith('style')) {
                    action.key = action.key.substr(6)

                    if (state.get(action.id).has(action.key)) {
                        return state.setIn([action.id, action.key], action.value)
                    } else {
                        throw Error("Error")
                    }
                } else {
                    throw Error("Error")
                }
            }

            default:
                return state
        }
    }
}

export default new CheckboxesStore()
