import { ReduceStore } from 'flux/utils'
import animationDispatcher from "../animationDispatcher"
import Immutable from 'immutable'
import style from '../styleObject'
import checkboxesActionTypes from "./checkboxesActionTypes"
import checkboxes from "./checkboxesObject"

class CheckboxesStore extends ReduceStore {
    constructor () {
        super(animationDispatcher)
    }

    getInitialState() {
        return Immutable.OrderedMap()
    }

    reduce (state, action) {
        switch (action.type) {
            case checkboxesActionTypes.NEW_CHECKBOXES:

                return state.set(
                    action.id,
                     checkboxes({
                        id: action.id,
                        checkLimit: action.checkLimit,
                        typeInput: action.typeInput,
                        animationCSS: action.animationCSS,
                        textInput: action.textInput,
                        textValue: action.textValue,
                        colorStart: action.colorStart,
                        colorEnd: action.colorEnd,
                        opacityNotCheck: action.opacityNotCheck,
                        opacityCheck: action.opacityCheck,
                        timeAnimation: action.timeAnimation,
                        typeAnimFillMode: action.typeAnimFillMode,
                        colorLine: action.colorLine,
                        displayCheck: action.displayCheck,
                        textDecoration: action.textDecoration,
                        textDecorationThickness: action.textDecorationThickness,
                        textDecorationColor: action.textDecorationColor,
                        transitionTimingFunction: action.transitionTimingFunction,
                        toEnableAnimationP: action.toEnableAnimationP,
                        durationAnimationP: action.durationAnimationP,
                        duration1AnimationP: action.duration1AnimationP,
                        fillModeAnimationP: action.fillModeAnimationP,
                        checkAnimationTransition: action.checkAnimationTransition,
                        setFlagAnimTransitionCheckLimit: action.setFlagAnimTransitionCheckLimit,
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

            case checkboxesActionTypes.CHANGE_CHECKBOXES_VALUE:

                    if (state.get(action.id).has(action.key)) {
                        return state.setIn([action.id, action.key], action.value)
                    } else if (action.key.startsWith('style.')) {
                        action.key = action.key.substr(6)

                        if (state.get(action.id).style.has(action.key)) {
                            return state.setIn([action.id, 'style', action.key], action.value)
                        } else {
                            throw Error('style of checkboxes does not have a property ' + action.key)
                        }
                    } else {
                        throw Error('checkboxes does not have a property ' + action.key)
                    }


            default:
                return state
        }
    }
}

export default new CheckboxesStore()
