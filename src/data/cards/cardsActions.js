import animationDispatcher from "../animationDispatcher"
import cardsActionTypes from "./cardsActionTypes"
import PropTypes from "prop-types";

const cardsActions = {
    newCards (
        id, checkLimit, typeInput, animationCSS, textInput, textValue,
        textAlign, display, flexDirection, colorCard, perspective, backfaceVisibility,
        borderDim, borderType, borderColor, height, width, timeAnim, buttonFontSize,
        buttonMargin, buttonPadding, buttonBorder, buttonBorderRadius, buttonBackColor,
        colorCard2, marginCard, colorCardTrans1, colorCardTrans2, fontSizeLCentral, fontSizePointsCenter,
        directionOfRotation, directionOfAnimation, directionName, directionOfRotation1,
        duration, timing, delay, iterations, direction, fillMode, playState) {
        animationDispatcher.dispatch ({
            type: cardsActionTypes.NEW_CARDS,
            id: id,
            checkLimit: checkLimit,
            typeInput: typeInput,
            animationCSS: animationCSS,
            textInput: textInput,
            textValue: textInput,
            textAlign: textAlign,
            display: display,
            flexDirection: flexDirection,
            colorCard: colorCard,
            perspective: perspective,
            backfaceVisibility: backfaceVisibility,
            borderDim: borderDim,
            borderType: borderType,
            borderColor: borderColor,
            height: height,
            width: width,
            timeAnim: timeAnim,
            buttonFontSize: buttonFontSize,
            buttonMargin: buttonMargin,
            buttonPadding: buttonPadding,
            buttonBorder: buttonBorder,
            buttonBorderRadius: buttonBorderRadius,
            buttonBackColor: buttonBackColor,
            duration: duration,
            timing: timing,
            delay: delay,
            iterations: iterations,
            direction: direction,
            fillMode: direction,
            playState: playState,
            colorCard2: colorCard2,
            marginCard: marginCard,
            colorCardTrans1: colorCardTrans1,
            colorCardTrans2: colorCardTrans2,
            fontSizeLCentral: fontSizeLCentral,
            fontSizePointsCenter: fontSizePointsCenter,
            directionOfRotation: directionOfRotation,

            directionOfAnimation: directionOfAnimation, // NEW FOR CARD 2
            directionName: directionName, // NEW FOR CARD 2

            directionOfRotation1: directionOfRotation1 // NEW FOR CARD 3
        })
    },
    changeValue (id, key, value) {
        //console.log("ID", id)
        //console.log("KEY", key)
        //console.log("VALUE", value)

        animationDispatcher.dispatch({
            type: cardsActionTypes.CHANGE_CARDS_VALUE,
            id: id,
            key: key,
            value: value
        })
    }
}

export default cardsActions
