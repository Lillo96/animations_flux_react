import { ReduceStore } from 'flux/utils'
import animationDispatcher from "../animationDispatcher"
import { CSSRootObject, rule } from "./CSSRootObject"
import CSSRootActionTypes from "./CSSRootActionTypes"

class CSSRootStore extends ReduceStore {
    constructor () {
        super(animationDispatcher)
    }

    getInitialState () {
        return CSSRootObject()
    }

    reduce (state, action) {
        switch (action.type) {
            case CSSRootActionTypes.INSERT_RULE: {
                //console.log("IIIIIIIIIIIIIIIIIIIIII")
                let index

                // Called only if state.sheet is not defined yet
                if ('sheet' in action) {
                    index = action.sheet.cssRules.length
                    action.sheet.insertRule(action.rule, index)
                    return state.set('sheet', action.sheet).set('rules', state.rules.set(
                        action.id,
                        rule({
                            index: index,
                            rule: action.rule
                        })
                    ))
                }

                if (state.rules.has(action.id)) {
                    index = state.rules.get(action.id).index
                    state.sheet.removeRule(index)
                    state.sheet.insertRule(action.rule, index)
                    return state.setIn(['rules', action.id, 'rule'], action.rule)
                } else {
                    index = state.sheet.cssRules.length
                    state.sheet.insertRule(action.rule, index)

                    return state.setIn(
                        ['rules', action.id],
                        rule({
                            index: index,
                            rule: action.rule
                        })
                    )
                }
            }

            default:
                return state
        }
    }
}

export default new CSSRootStore()
