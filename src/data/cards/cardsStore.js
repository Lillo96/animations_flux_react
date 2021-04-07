import { ReduceStore } from 'flux/utils'
import animationDispatcher from "../animationDispatcher"
import Immutable from 'immutable'
import style from '../styleObject'
import cardsActionTypes from "./cardsActionTypes";
import cards from "./cardsObject"
import {Component} from "react";

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

                        widthCard2: action.widthCard2,
                        heightCard2: action.heightCard2,
                        positionCard2: action.positionCard2,
                        overflowCard2: action.overflowCard2,
                        backgroundRGBACard2: action.backgroundRGBACard2,
                        transitionRGBACard2: action.transitionRGBACard2,
                        backgroundNameCard2: action.backgroundNameCard2,
                        fontFamilyNameCard2: action.fontFamilyNameCard2,
                        colorNameCard2: action.colorNameCard2,
                        textAlignNameCard2: action.textAlignNameCard2,
                        textTransformNameCard2: action.textTransformNameCard2,
                        marginNameCard2: action.marginNameCard2,
                        paddingTopBottomNameCard2: action.paddingTopBottomNameCard2,
                        paddingRightLeftNameCard2: action.paddingRightLeftNameCard2,
                        positionNameCard2: action.positionNameCard2,
                        bottomNameCard2: action.bottomNameCard2,
                        widthNameCard2: action.widthNameCard2,
                        transitionNameCard2: action.transitionNameCard2,

                        positionCard3: action.positionCard3,
                        topCard3: action.topCard3,
                        leftCard3: action.leftCard3,
                        positionAdditionalCard3: action.positionAdditionalCard3,
                        backgroundAdditionalCard3: action.backgroundAdditionalCard3,
                        transitionAdditionalCard3_1: action.transitionAdditionalCard3_1,
                        transitionAdditionalCard3_2: action.transitionAdditionalCard3_2,
                        overflowAdditionalCard3: action.overflowAdditionalCard3,
                        widthHoverAdditionalCard3: action.widthHoverAdditionalCard3,
                        borderRadiusAdditionalCard3_1: action.borderRadiusAdditionalCard3_1,
                        textAlignMoreInfoCard3: action.textAlignMoreInfoCard3,
                        widthMoreInfoCard3: action.widthMoreInfoCard3,
                        heightMoreInfoCard3: action.heightMoreInfoCard3,
                        floatMoreInfoCard3: action.floatMoreInfoCard3,
                        justifyContentMoreInfoCard3: action.justifyContentMoreInfoCard3,
                        positionGeneralCard3: action.positionGeneralCard3,
                        topGeneralCard3: action.topGeneralCard3,
                        rightGeneralCard3: action.rightGeneralCard3,
                        boxSizingGeneralCard3: action.boxSizingGeneralCard3,
                        paddingGeneralCard3: action.paddingGeneralCard3,
                        paddingTopGeneralCard3: action.paddingTopGeneralCard3,
                        backgroundColorGeneralCard3: action.backgroundColorGeneralCard3,
                        frontSizeGeneralCard3: action.frontSizeGeneralCard3,
                        frontSizeGeneralTitleCard3: action.frontSizeGeneralTitleCard3,
                        frontSizeGeneralTextCard3: action.frontSizeGeneralTextCard3,
                        positionGeneralMoreCard3: action.positionGeneralMoreCard3,
                        rightGeneralMoreCard3: action.rightGeneralMoreCard3,
                        fontSizeGeneralMoreCard3: action.fontSizeGeneralMoreCard3,

                        widthButtonCard3: action.widthButtonCard3,
                        heightButtonCard3: action.heightButtonCard3,
                        colorButtonCard3: action.colorButtonCard3,
                        positionButtonCard3: action.positionButtonCard3,
                        topButtonCard3: action.topButtonCard3,
                        leftButtonCard3: action.leftButtonCard3,

                        widthButtonCard2: action.widthButtonCard2,
                        heightButtonCard2: action.heightButtonCard2,
                        colorButtonCard2: action.colorButtonCard2,
                        positionButtonCard2: action.positionButtonCard2,
                        topButtonCard2: action.topButtonCard2,
                        leftButtonCard2: action.leftButtonCard2,

                        checkLimitFlag: action.checkLimitFlag,

                        colorCardFront: action.colorCardFront,
                        colorCardBack: action.colorCardBack,
                        toEnableAnimationButton: action.toEnableAnimationButton,
                        durationAnimationButton: action.durationAnimationButton,
                        duration1AnimationButton: action.duration1AnimationButton,
                        fillModeAnimationButton: action.fillModeAnimationButton,

                        toEnableAnimationWrapper: action.toEnableAnimationWrapper,
                        imgCard2: action.imgCard2,

                        transitionYEnable: action.transitionYEnable,
                        transitionYEnable1: action.transitionYEnable1,
                        transitionXEnable: action.transitionXEnable,
                        transitionXEnable1: action.transitionXEnable1,

                        count: action.count,

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
                break;

            case cardsActionTypes.CHANGE_CARDS_VALUE:

                //console.log("WEEEE", state.get(action.id))

                if (state.get(action)) {
                    if (state.get(action.id).has(action.key)) {
                        return state.setIn([action.id, action.key], action.value)
                    }
                } else
                    return state.setIn([action.id, action.key], action.value)

            break;

            default:
                return state

        }
    }
}

export default new CardsStore()
