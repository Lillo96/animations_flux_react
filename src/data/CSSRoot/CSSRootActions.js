import animationDispatcher from "../animationDispatcher"
import CSSRootActionTypes from "./CSSRootActionTypes"

let docLoad = false

const CSSRootActions = {
    addRule (id, rule) {
        if (docLoad) {
           console.log('DENTRO docLoad True')
           setTimeout(() => {
               animationDispatcher.dispatch({
                   type: CSSRootActionTypes.INSERT_RULE,
                   rule: rule,
                   id: id
               })
           },200)
        } else {
            console.log("DENTRO docLoad False", document.readyState)
            if (document.readyState === 'complete') {
                docLoad = true
                for (const styleSheet of document.styleSheets) {
                    console.log("STYLE SHEET", document.styleSheets)
                    if (styleSheet.cssRules.length > 0 &&
                        Object.hasOwnProperty.call(Object.getPrototypeOf(styleSheet.cssRules[0]),'name')) {
                            if (styleSheet.cssRules[0].name === 'impAnimationLibrary') {
                                console.log("CIAOOOOOOO")
                                animationDispatcher.dispatch({
                                    type: CSSRootActionTypes.INSERT_RULE,
                                    sheet: styleSheet,
                                    rule: rule,
                                    id: id
                                })
                            }
                    }
                }
            } else {
                setTimeout(() => null)
            }
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
