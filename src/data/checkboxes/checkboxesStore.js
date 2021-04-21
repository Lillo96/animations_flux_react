import { ReduceStore } from 'flux/utils'
import animationDispatcher from "../animationDispatcher"
import Immutable from 'immutable'
import style from '../styleObject'
import checkboxesActionTypes from "./checkboxesActionTypes"
import checkboxes from "./checkboxesObject"
import cardsActionTypes from "../cards/cardsActionTypes";

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
                        toEnableAnimationP_2: action.toEnableAnimationP_2,
                        setStopAnimation: action.setStopAnimation,
                        onAnim: action.onAnim,
                        widthImg: action.widthImg,
                        heightImg: action.heightImg,
                        textValue2: action.textValue2,
                        textValueFinal: action.textValueFinal,
                        textValue1: action.textValue1,

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

            case checkboxesActionTypes.UPDATE_CHECK:

                if(!action.id){
                    return state;
                }

                state = state.update(
                    action.id,

                    check => check.set('checkLimit', !check.checkLimit),
                );

                return state;

                break;

            case checkboxesActionTypes.UPDATE_CHECK_ANIMATION:

                if(!action.id){
                    return state;
                }

                state = state.update(
                    action.id,

                    check => check.set('checkAnimationTransition', !check.checkAnimationTransition),
                );

                return state;

                break;

            case checkboxesActionTypes.CHANGE_CHECKBOXES_TEXTVALUE:

                if (!action.id) {
                    return state;
                }

                state = state.update(
                    action.id,

                    check => check.set(action.idParam, action.value)
                )

                break;

            case checkboxesActionTypes.UPDATE_CHECK_VALUETEXT:

                if(!action.id){
                    return state;
                }

                state.map( check => {

                    if (check.id === action.id){

                        if(!check.textValue) {

                            state = state.update(
                                check.id,

                                check => check.set('textValueFinal', check.textValue2)
                            );

                        } else {

                            state = state.update(
                                check.id,

                                check => check.set('textValueFinal', check.textValue1)
                            );

                        }
                    }

                })

                state = state.update(
                    action.id,

                    check => check.set('textValue', !check.textValue),
                );

                return state;

                break;

            default:
                return state
        }
    }
}

export default new CheckboxesStore()
