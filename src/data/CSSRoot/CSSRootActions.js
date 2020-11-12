import animationDispatcher from '../animationDispatcher'
import CSSRootActionTypes from './CSSRootActionTypes'

const CSSRootActions = {
    updateStyleRule (id, rule, value) {
        animationDispatcher.dispatch({
            type: CSSRootActionTypes.UPDATE_STYLE_RULE,
            id: id,
            rule: rule,
            value: value
        })
    }
}

export default CSSRootActions
