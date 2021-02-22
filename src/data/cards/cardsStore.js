import { ReduceStore } from 'flux/utils'
import animationDispatcher from "../animationDispatcher"
import Immutable from 'immutable'
import style from '../styleObject'
import cardsActionTypes from "./cardsActionTypes";
import cards from "./cardsObject"

class CardsStore extends ReduceStore {
    constructor () {
        super(animationDispatcher)
    }

    getInitialState() {
        return Immutable.OrderedMap()
    }

    reduce (state, action) {
        switch (action.type) {
            case cardsActionTypes.NEW_CARDS:

                return state.set(
                    action.id,
                    cards({
                        id: action.id,
                        checkLimit: action.checkLimit,
                        typeInput: action.typeInput,
                        animationCSS: action.animationCSS,
                        textInput: action.textInput,
                        textValue: action.textValue,
                        textAlign: action.textAlign,
                        display: action.display,
                        flexDirection: action.flexDirection,
                        colorCard: action.colorCard,
                        perspective: action.perspective,
                        backfaceVisibility: action.backfaceVisibility,
                        borderDim: action.borderDim,
                        borderType: action.borderType,
                        borderColor: action.borderColor,
                        height: action.height,
                        width: action.width,
                        timeAnim: action.timeAnim,
                        buttonFontSize: action.buttonFontSize,
                        buttonMargin: action.buttonMargin,
                        buttonBorder: action.buttonBorder,
                        buttonBorderRadius: action.buttonBorderRadius,
                        buttonBackColor: action.buttonBackColor,
                        colorCard2: action.colorCard2,
                        marginCard: action.marginCard,
                        colorCardTrans1: action.colorCardTrans1,
                        colorCardTrans2: action.colorCardTrans2,
                        fontSizeLCentral: action.fontSizeLCentral,
                        fontSizePointsCenter: action.fontSizePointsCenter,
                        directionOfRotation: action.directionOfRotation,

                        directionOfAnimation: action.directionOfAnimation, // NEW FOR CARD 2
                        directionName: action.directionName, // NEW FOR CARD 2

                        directionOfRotation1: action.directionOfRotation1, //NEW FOR CARD 3

                        backgroundCard: action.backgroundCard,
                        backgroundCard1: action.backgroundCard1,
                        backgroundCard2: action.backgroundCard2,

                        backgroundColorButton: action.backgroundColorButton,
                        borderButton: action.borderButton,
                        colorButton:  action.colorButton,
                        paddingButtonTopBottom:  action.paddingButtonTopBottom,
                        paddingButtonRightLeft:  action.paddingButtonRightLeft,
                        textAlignButton:  action.textAlignButton,
                        textDecorationButton:  action.textDecorationButton,
                        displayButton:  action.displayButton,
                        fontSizeButton:  action.fontSizeButton,

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

            case cardsActionTypes.CHANGE_CARDS_VALUE:

                if (state.get(action.id).has(action.key)) {
                    return state.setIn([action.id, action.key], action.value)
                } else if (action.key.startsWith('style.')) {
                    action.key = action.key.substr(6)

                    if (state.get(action.id).style.has(action.key)) {
                        return state.setIn([action.id, 'style', action.key], action.value)
                    } else {
                        throw Error('style of cards does not have a property ' + action.key)
                    }
                } else {
                    throw Error('cards does not have a property ' + action.key)
                }


            default:
                return state
        }
    }
}

export default new CardsStore()
