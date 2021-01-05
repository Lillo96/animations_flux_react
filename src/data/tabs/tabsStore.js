import { ReduceStore } from 'flux/utils'
import animationDispatcher from "../animationDispatcher"
import Immutable from 'immutable'
import style from '../styleObject'
import tabsActionTypes from "./tabsActionTypes";
import tabs from "./tabsObject"

class TabsStore extends ReduceStore {
    constructor () {
        super(animationDispatcher)
    }

    getInitialState() {
        return Immutable.OrderedMap()
    }

    reduce (state, action) {
        switch (action.type) {
            case tabsActionTypes.NEW_TABS:

                return state.set(
                    action.id,
                    tabs({
                        id: action.id,
                        checkLimit: action.checkLimit,
                        typeInput: action.typeInput,
                        animationCSS: action.animationCSS,
                        textInput: action.textInput,
                        textValue: action.textValue,
                        style: style({
                            duration: action.duration,
                            timing: action.timing,
                            delay: action.delay,
                            iterations: action.iterations,
                            direction: action.direction,
                            fillMode: action.fillMode,
                            playState: action.playState,
                        }),
                    })
                );

            case tabsActionTypes.CHANGE_TABS_VALUE:

                if (state.get(action.id).has(action.key)) {
                    return state.setIn([action.id, action.key], action.value)
                } else if (action.key.startsWith('style.')) {
                    action.key = action.key.substr(6)

                    if (state.get(action.id).style.has(action.key)) {
                        return state.setIn([action.id, 'style', action.key], action.value)
                    } else {
                        throw Error('style of items does not have a property ' + action.key)
                    }
                } else {
                    throw Error('items does not have a property ' + action.key)
                }


            default:
                return state
        }
    }
}

export default new TabsStore()
