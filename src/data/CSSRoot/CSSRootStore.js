import { ReduceStore } from 'flux/utils'
import animationDispatcher from "../animationDispatcher";
import {CSSRootObject, rule} from "./CSSRootObject";
import CSSRootActionTypes from "./CSSRootActionTypes";

class CSSRootStore  extends ReduceStore {
    constructor() {
        super(animationDispatcher);
    }

    getInitialState() {
        return CSSRootObject()
    }

    reduce (state, action) {
        switch (action.type) {
            case CSSRootActionTypes.UPDATE_STYLE_RULE:
                document.getElementById(action.id).style[action.rule] = action.value
                return state

            default:
                return state

        }
    }
}

export default new CSSRootStore()
