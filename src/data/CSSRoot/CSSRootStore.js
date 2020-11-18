import { ReduceStore } from 'flux/utils'
import animationDispatcher from "../animationDispatcher"
import { CSSRootObject } from "./CSSRootObject"
import CSSRootActionTypes from "./CSSRootActionTypes"

class CSSRootStore extends ReduceStore{
    constructor () {
        super(animationDispatcher);
    }

    getInitialState () {
        return CSSRootObject()
    }

    reduce (state, action) {
        switch (action.type) {
            case CSSRootActionTypes.INSERT_RULE: {

            }

            default:
                return state
        }
    }
}

export default new CSSRootStore()
