import animationDispatcher from "../animationDispatcher"
import CSSRootActionTypes from "./CSSRootActionTypes"

const CSSRootActions = {
    updateOnCheckRule (id, rule, value) {
        animationDispatcher.dispatch({
            type: CSSRootActionTypes.UPDATE_RULE,
            id: id,
            rule: rule,
            value: value
        })
    }
}

export default CSSRootActions
