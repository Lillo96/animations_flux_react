import animationDispatcher from "../animationDispatcher"
import CSSRootActionTypes from "./CSSRootActionTypes"

let docLoad = false

const CSSRootActions = {
    addRule (id, rule) {
        if (docLoad) {
           setTimeout(() => {
               animationDispatcher.dispatch({
                   type: CSSRootActionTypes.INSERT_RULE,
                   rule: rule,
                   id: id
               })
           },200)
        } else {
            console.log("DENTRO docLoad False")
        }
    },
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
