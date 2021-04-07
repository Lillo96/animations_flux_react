import animationDispatcher from "../animationDispatcher"
import cardsActionTypes from "./cardsActionTypes"
import PropTypes from "prop-types";

const cardsActions = {
    newCards (
        id, checkLimit, typeInput, animationCSS, textInput, textValue,
        textAlign, display, flexDirection, colorCard, perspective, backfaceVisibility,
        borderDim, borderType, borderColor, height, width, timeAnim, buttonFontSize,
        buttonMargin, buttonBorder, buttonBorderRadius, buttonBackColor,
        colorCard2, marginCard, colorCardTrans1, colorCardTrans2, fontSizeLCentral, fontSizePointsCenter,
        directionOfRotation, directionOfAnimation, directionName, directionOfRotation1,
        backgroundCard, backgroundCard1, backgroundCard2,
        backgroundColorButton, borderButton, colorButton, paddingButtonTopBottom, paddingButtonRightLeft,
        textAlignButton, textDecorationButton, displayButton, fontSizeButton,
        widthCard2, heightCard2, positionCard2, overflowCard2, backgroundRGBACard2, transitionRGBACard2,
        backgroundNameCard2, fontFamilyNameCard2, colorNameCard2, textAlignNameCard2, textTransformNameCard2,
        marginNameCard2, paddingTopBottomNameCard2, paddingRightLeftNameCard2, positionNameCard2,
        bottomNameCard2, widthNameCard2, transitionNameCard2,
        positionCard3, topCard3, leftCard3, positionAdditionalCard3, backgroundAdditionalCard3, transitionAdditionalCard3_1,
        transitionAdditionalCard3_2, overflowAdditionalCard3, widthHoverAdditionalCard3, borderRadiusAdditionalCard3_1, textAlignMoreInfoCard3,
        widthMoreInfoCard3, heightMoreInfoCard3, floatMoreInfoCard3, justifyContentMoreInfoCard3, positionGeneralCard3, topGeneralCard3,
        rightGeneralCard3, boxSizingGeneralCard3, paddingGeneralCard3, paddingTopGeneralCard3, backgroundColorGeneralCard3, frontSizeGeneralCard3,
        frontSizeGeneralTitleCard3, frontSizeGeneralTextCard3, positionGeneralMoreCard3, rightGeneralMoreCard3, fontSizeGeneralMoreCard3,
        widthButtonCard3, heightButtonCard3, colorButtonCard3, positionButtonCard3, topButtonCard3, leftButtonCard3,
        widthButtonCard2, heightButtonCard2, colorButtonCard2, positionButtonCard2, topButtonCard2, leftButtonCard2,
        checkLimitFlag, colorCardFront, colorCardBack, toEnableAnimationButton, durationAnimationButton, duration1AnimationButton, fillModeAnimationButton,
        toEnableAnimationWrapper, imgCard2, transitionYEnable, transitionYEnable1, transitionXEnable, transitionXEnable1, count,
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
            timeAnim: timeAnim, // ANIM
            buttonFontSize: buttonFontSize,
            buttonMargin: buttonMargin,
            buttonBorder: buttonBorder,
            buttonBorderRadius: buttonBorderRadius,
            buttonBackColor: buttonBackColor,
            duration: duration,
            timing: timing,
            delay: delay,
            iterations: iterations,
            direction: direction,
            fillMode: fillMode,
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

            directionOfRotation1: directionOfRotation1, // NEW FOR CARD 3

            backgroundCard: backgroundCard,
            backgroundCard1: backgroundCard1,
            backgroundCard2: backgroundCard2,

            backgroundColorButton: backgroundColorButton,
            borderButton: borderButton,
            colorButton: colorButton,
            paddingButtonTopBottom: paddingButtonTopBottom,
            paddingButtonRightLeft: paddingButtonRightLeft,
            textAlignButton: textAlignButton,
            textDecorationButton: textDecorationButton,
            displayButton: displayButton,
            fontSizeButton: fontSizeButton,

            widthCard2: widthCard2,
            heightCard2: heightCard2,
            positionCard2: positionCard2,
            overflowCard2: overflowCard2,
            backgroundRGBACard2: backgroundRGBACard2,
            transitionRGBACard2: transitionRGBACard2,
            backgroundNameCard2: backgroundNameCard2,
            fontFamilyNameCard2: fontFamilyNameCard2,
            colorNameCard2: colorNameCard2,
            textAlignNameCard2: textAlignNameCard2,
            textTransformNameCard2: textTransformNameCard2,
            marginNameCard2: marginNameCard2,
            paddingTopBottomNameCard2: paddingTopBottomNameCard2,
            paddingRightLeftNameCard2: paddingRightLeftNameCard2,
            positionNameCard2: positionNameCard2,
            bottomNameCard2: bottomNameCard2,
            widthNameCard2: widthNameCard2,
            transitionNameCard2: transitionNameCard2,

            positionCard3: positionCard3,
            topCard3: topCard3,
            leftCard3: leftCard3,
            positionAdditionalCard3: positionAdditionalCard3,
            backgroundAdditionalCard3: backgroundAdditionalCard3,
            transitionAdditionalCard3_1: transitionAdditionalCard3_1,
            transitionAdditionalCard3_2: transitionAdditionalCard3_2,
            overflowAdditionalCard3: overflowAdditionalCard3,
            widthHoverAdditionalCard3: widthHoverAdditionalCard3,
            borderRadiusAdditionalCard3_1: borderRadiusAdditionalCard3_1,
            textAlignMoreInfoCard3: textAlignMoreInfoCard3,
            widthMoreInfoCard3: widthMoreInfoCard3,
            heightMoreInfoCard3: heightMoreInfoCard3,
            floatMoreInfoCard3: floatMoreInfoCard3,
            justifyContentMoreInfoCard3: justifyContentMoreInfoCard3,
            positionGeneralCard3: positionGeneralCard3,
            topGeneralCard3: topGeneralCard3,
            rightGeneralCard3: rightGeneralCard3,
            boxSizingGeneralCard3: boxSizingGeneralCard3,
            paddingGeneralCard3: paddingGeneralCard3,
            paddingTopGeneralCard3: paddingTopGeneralCard3,
            backgroundColorGeneralCard3: backgroundColorGeneralCard3,
            frontSizeGeneralCard3: frontSizeGeneralCard3,
            frontSizeGeneralTitleCard3: frontSizeGeneralTitleCard3,
            frontSizeGeneralTextCard3: frontSizeGeneralTextCard3,
            positionGeneralMoreCard3: positionGeneralMoreCard3,
            rightGeneralMoreCard3: rightGeneralMoreCard3,
            fontSizeGeneralMoreCard3: fontSizeGeneralMoreCard3,

            widthButtonCard3: widthButtonCard3,
            heightButtonCard3: heightButtonCard3,
            colorButtonCard3: colorButtonCard3,
            positionButtonCard3: positionButtonCard3,
            topButtonCard3: topButtonCard3,
            leftButtonCard3: leftButtonCard3,

            widthButtonCard2: widthButtonCard2,
            heightButtonCard2: heightButtonCard2,
            colorButtonCard2: colorButtonCard2,
            positionButtonCard2: positionButtonCard2,
            topButtonCard2: topButtonCard2,
            leftButtonCard2: leftButtonCard2,

            checkLimitFlag: checkLimitFlag,

            colorCardFront: colorCardFront,
            colorCardBack: colorCardBack,
            toEnableAnimationButton: toEnableAnimationButton,
            durationAnimationButton: durationAnimationButton,
            duration1AnimationButton: duration1AnimationButton,
            fillModeAnimationButton: fillModeAnimationButton,

            toEnableAnimationWrapper: toEnableAnimationWrapper,
            imgCard2: imgCard2,

            transitionYEnable: transitionYEnable,
            transitionYEnable1: transitionYEnable1,
            transitionXEnable: transitionXEnable,
            transitionXEnable1: transitionXEnable1,

            count: count

        })
    },

    changeValue (id, key, value) {
        console.log("ID", id)
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
