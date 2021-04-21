import animationDispatcher from "../animationDispatcher"
import itemsActionTypes from "./itemsActionTypes";
import PropTypes from "prop-types";
import cardsActionTypes from "../cards/cardsActionTypes";

const itemsActions = {
    newItems (
        id, checkLimit, typeInput, animationCSS, textInput, textValue,

        borderDim_ContItem, borderType_ContItem, borderColor_ContItem, colorDivItems, width_DivItem, borderDim_DivItems, borderType_DivItems,borderColor_DivItems, color_DivItemHead, fontWeight_DivItemHead, fontSize_DivItemHead,
        paddingX_DivItemsHeadFinal,paddingY_DivItemsHeadFinal, paddingX_DivItemsHeadFinal_p, paddingY_DivItemsHeadFinal_p,
        margin_DivItemsHeadFinal_p, color_DivItemsHeadFinal_p, fontWeigh_DivItemsHeadFinal_p, fontSize_DivItemsHeadFinal_p,
        width_DivItemsHead_hr, marginX_DivItemsHead_hr, marginY_DivItemsHead_hr, borderDim_DivItemsHead_hr, borderType_DivItemsHead_hr,
        borderColor_DivItemsHead_hr, padding_ItemsBody, margin_ItemsBody, display_ItemsBody, gripGap_ItemsBody, padding_ItemsBodyContent,
        paddingRight_ItemsBodyContent, display_ItemsBodyContent, color_ItemsBodyContent, fontSize_ItemsBodyContent, gripGap_ItemsBodyContent,
        borderDim_ItemsBodyContent, borderType_ItemsBodyContent, borderColor_ItemsBodyContent, borderRadius_hover_ItemsBodyContent, borderDim_hover_ItemsBodyContent, borderType_hover_ItemsBodyContent,
        borderColor_hover_ItemsBodyContent, fontSize_ItemsBodyContentIcon, color_ItemsBodyContentIcon, fontWeight_ItemsBodyContentIcon,

        width_TilesWrapLi1, fontFamily_TilesWrapLi1,fontFamily_TilesWrapLi2,height_TilesWrapLi,
        backgroundColor_TilesWrapLi, borderDim_TilesWrapLi, borderType_TilesWrapLi,borderColor_TilesWrapLi,fontSize_TilesWrap_h2,
        fontSize_getTilesWrap_h3, color_getTilesWrap_h3, marginBotton_getTilesWrap_h3, fontSize_TilesWrap_p, lineHeight_TilesWrap_p, color_TilesWrap_p,

        checkSpan, transitionYEnable, transitionYEnable1, transitionXEnable, transitionXEnable1, durationAnimationP, duration1AnimationP,
        fillModeAnimationP, colorEndSpan, colorStartSpan, textInputSpan, toEnableAnimationSpan,
        checkIcon, toEnableAnimationIcon, durationAnimationIcon, duration1AnimationIcon, fillModeAnimationIcon, transitionYEnableIcon,
        transitionYEnable1Icon, transitionXEnableIcon, transitionXEnable1Icon, color_ItemsBodyContentIcon_end, color_ItemsBodyContentIcon_start,
        textInputIcon, checkButton,
        minWidthLi, maxWidthLi, padding1Li, padding2Li, padding3Li, positionLi, verticalAlignLi, marginLi, textAlignLi, opacityButtonLiEnter, colorEndLi,
        opacityButtonLiEnd, colorStartLi, topLiH2Enter, opacityLiH2Enter, topLiH2End, opacityLiH2End, marginTopP,
        typeTransitionButton, typeTransitionButton1, typeTransitionButton2,

        backgroundWrapButton, borderWrap1, borderWrap2, borderWrap3, paddingWrap1, paddingWrap2, colorButtonWrap, borderRadiusWrap,
        positionWrap, transitionDurationWrap1, transitionFillModeWrap2, opacityWrap, cursorWrap, overflowWrap, marginWrap,
        backgroundWrapButton_2, borderWrap1_2, borderWrap2_2, borderWrap3_2, paddingWrap1_2, paddingWrap2_2, colorButtonWrap_2, borderRadiusWrap_2,
        positionWrap_2, transitionDurationWrap1_2, transitionFillModeWrap2_2, opacityWrap_2, cursorWrap_2, overflowWrap_2, marginWrap_2,
        flag1, flag2, flag3, flag4, flag5, flag6, flag7, flag8, flag9, flag10, flag11, flag12, flag13, flag14, flag15, flag16, flag17, flag18, flag19, flag20,
        duration, timing, delay, iterations, direction, fillMode, playState) {
        animationDispatcher.dispatch ({
            type: itemsActionTypes.NEW_ITEMS,
            id: id,
            checkLimit: checkLimit,
            typeInput: typeInput,
            animationCSS: animationCSS,
            textInput: textInput,
            textValue: textInput,

            borderDim_ContItem: borderDim_ContItem,
            borderType_ContItem: borderType_ContItem,
            borderColor_ContItem: borderColor_ContItem,
            colorDivItems: colorDivItems,
            width_DivItem: width_DivItem,
            borderDim_DivItems: borderDim_DivItems,
            borderType_DivItems: borderType_DivItems,
            borderColor_DivItems: borderColor_DivItems,
            color_DivItemHead: color_DivItemHead,
            fontWeight_DivItemHead: fontWeight_DivItemHead,
            fontSize_DivItemHead: fontSize_DivItemHead,
            paddingX_DivItemsHeadFinal: paddingX_DivItemsHeadFinal,
            paddingY_DivItemsHeadFinal: paddingY_DivItemsHeadFinal,
            paddingX_DivItemsHeadFinal_p: paddingX_DivItemsHeadFinal_p,
            paddingY_DivItemsHeadFinal_p: paddingY_DivItemsHeadFinal_p,
            margin_DivItemsHeadFinal_p: margin_DivItemsHeadFinal_p,
            color_DivItemsHeadFinal_p: color_DivItemsHeadFinal_p,
            fontWeigh_DivItemsHeadFinal_p: fontWeigh_DivItemsHeadFinal_p,
            fontSize_DivItemsHeadFinal_p: width_DivItemsHead_hr,
            width_DivItemsHead_hr: width_DivItemsHead_hr,
            marginX_DivItemsHead_hr: marginX_DivItemsHead_hr,
            marginY_DivItemsHead_hr: marginY_DivItemsHead_hr,
            borderDim_DivItemsHead_hr: borderDim_DivItemsHead_hr,
            borderType_DivItemsHead_hr: borderType_DivItemsHead_hr,
            borderColor_DivItemsHead_hr: borderColor_DivItemsHead_hr,
            padding_ItemsBody: padding_ItemsBody,
            margin_ItemsBody: margin_ItemsBody,
            display_ItemsBody: display_ItemsBody,
            gripGap_ItemsBody: gripGap_ItemsBody,
            padding_ItemsBodyContent: padding_ItemsBodyContent,
            paddingRight_ItemsBodyContent: paddingRight_ItemsBodyContent,
            display_ItemsBodyContent: display_ItemsBodyContent,
            color_ItemsBodyContent: color_ItemsBodyContent,
            fontSize_ItemsBodyContent: fontSize_ItemsBodyContent,
            gripGap_ItemsBodyContent: gripGap_ItemsBodyContent,
            borderDim_ItemsBodyContent: borderDim_ItemsBodyContent,
            borderType_ItemsBodyContent: borderType_ItemsBodyContent,
            borderColor_ItemsBodyContent: borderColor_ItemsBodyContent,
            borderRadius_hover_ItemsBodyContent: borderRadius_hover_ItemsBodyContent,
            borderDim_hover_ItemsBodyContent: borderDim_hover_ItemsBodyContent,
            borderType_hover_ItemsBodyContent: borderType_hover_ItemsBodyContent,
            borderColor_hover_ItemsBodyContent: borderColor_hover_ItemsBodyContent,
            fontSize_ItemsBodyContentIcon: fontSize_ItemsBodyContentIcon,
            color_ItemsBodyContentIcon: color_ItemsBodyContentIcon,
            fontWeight_ItemsBodyContentIcon: fontWeight_ItemsBodyContentIcon,

            width_TilesWrapLi1: width_TilesWrapLi1,
            fontFamily_TilesWrapLi1: fontFamily_TilesWrapLi1,
            fontFamily_TilesWrapLi2: fontFamily_TilesWrapLi2,
            height_TilesWrapLi: height_TilesWrapLi,
            backgroundColor_TilesWrapLi: backgroundColor_TilesWrapLi,
            borderDim_TilesWrapLi: borderDim_TilesWrapLi,
            borderType_TilesWrapLi: borderType_TilesWrapLi,
            borderColor_TilesWrapLi: borderColor_TilesWrapLi,
            fontSize_TilesWrap_h2: fontSize_TilesWrap_h2,
            fontSize_getTilesWrap_h3: fontSize_getTilesWrap_h3,
            color_getTilesWrap_h3: color_getTilesWrap_h3,
            marginBotton_getTilesWrap_h3: marginBotton_getTilesWrap_h3,
            fontSize_TilesWrap_p: fontSize_TilesWrap_p,
            lineHeight_TilesWrap_p: lineHeight_TilesWrap_p,
            color_TilesWrap_p: color_TilesWrap_p,

            duration: duration,
            timing: timing,
            delay: delay,
            iterations: iterations,
            direction: direction,
            fillMode: direction,
            playState: playState,

            checkSpan: checkSpan,
            transitionYEnable: transitionYEnable,
            transitionYEnable1: transitionYEnable1,
            transitionXEnable: transitionXEnable,
            transitionXEnable1: transitionXEnable1,
            durationAnimationP: durationAnimationP,
            duration1AnimationP: duration1AnimationP,
            fillModeAnimationP: fillModeAnimationP,
            colorEndSpan: colorEndSpan,
            colorStartSpan: colorStartSpan,
            textInputSpan: textInputSpan,
            toEnableAnimationSpan: toEnableAnimationSpan,
            checkIcon: checkIcon,
            toEnableAnimationIcon: toEnableAnimationIcon,
            durationAnimationIcon: durationAnimationIcon,
            duration1AnimationIcon: duration1AnimationIcon,
            fillModeAnimationIcon: fillModeAnimationIcon,
            transitionYEnableIcon: transitionYEnableIcon,
            transitionYEnable1Icon: transitionYEnable1Icon,
            transitionXEnableIcon: transitionXEnableIcon,
            transitionXEnable1Icon: transitionXEnable1Icon,
            color_ItemsBodyContentIcon_end: color_ItemsBodyContentIcon_end,
            color_ItemsBodyContentIcon_start: color_ItemsBodyContentIcon_start,
            textInputIcon: textInputIcon,
            checkButton: checkButton,

            minWidthLi: minWidthLi,
            maxWidthLi: maxWidthLi,
            padding1Li: padding1Li,
            padding2Li: padding2Li,
            padding3Li: padding3Li,
            positionLi: positionLi,
            verticalAlignLi: verticalAlignLi,
            marginLi: marginLi,
            textAlignLi: textAlignLi,
            opacityButtonLiEnter: opacityButtonLiEnter,
            colorEndLi: colorEndLi,
            opacityButtonLiEnd: opacityButtonLiEnd,
            colorStartLi: colorStartLi,
            topLiH2Enter: topLiH2End,
            opacityLiH2Enter: opacityLiH2Enter,
            topLiH2End: topLiH2End,
            opacityLiH2End: opacityLiH2End,
            marginTopP: marginTopP,

            typeTransitionButton: typeTransitionButton,
            typeTransitionButton1: typeTransitionButton1,
            typeTransitionButton2: typeTransitionButton2,

            backgroundWrapButton: backgroundWrapButton,
            borderWrap1: borderWrap1,
            borderWrap2: borderWrap2,
            borderWrap3: borderWrap3,
            paddingWrap1: paddingWrap1,
            paddingWrap2: paddingWrap2,
            colorButtonWrap: colorButtonWrap,
            borderRadiusWrap: borderRadiusWrap,
            positionWrap: positionWrap,
            transitionDurationWrap1: transitionDurationWrap1,
            transitionFillModeWrap2: transitionFillModeWrap2,
            opacityWrap: opacityWrap,
            cursorWrap: cursorWrap,
            overflowWrap: overflowWrap,
            marginWrap: marginWrap,

            backgroundWrapButton_2: backgroundWrapButton_2,
            borderWrap1_2: borderWrap1_2,
            borderWrap2_2: borderWrap2_2,
            borderWrap3_2: borderWrap3_2,
            paddingWrap1_2: paddingWrap1_2,
            paddingWrap2_2: paddingWrap2_2,
            colorButtonWrap_2: colorButtonWrap_2,
            borderRadiusWrap_2: borderRadiusWrap_2,
            positionWrap_2: positionWrap_2,
            transitionDurationWrap1_2: transitionDurationWrap1_2,
            transitionFillModeWrap2_2: transitionFillModeWrap2_2,
            opacityWrap_2: opacityWrap_2,
            cursorWrap_2: cursorWrap_2,
            overflowWrap_2: overflowWrap_2,
            marginWrap_2: marginWrap_2,

            flag1: flag1,
            flag2: flag2,
            flag3: flag3,
            flag4: flag4,
            flag5: flag5,
            flag6: flag6,
            flag7: flag7,
            flag8: flag8,
            flag9: flag9,
            flag10: flag10,
            flag11: flag11,
            flag12: flag12,
            flag13: flag13,
            flag14: flag14,
            flag15: flag15,
            flag16: flag16,
            flag17: flag17,
            flag18: flag18,
            flag19: flag19,
            flag20: flag20

        })
    },

    changeValue (id, key, value) {

        animationDispatcher.dispatch({
            type: itemsActionTypes.CHANGE_ITEMS_VALUE,
            id: id,
            key: key,
            value: value
        })
    },

    updateCheckSpan(id){
        animationDispatcher.dispatch({
            type: itemsActionTypes.UPDATE_CHECKSPAN,
            id,
        });
    },

    updateCheckLimit(id){
        animationDispatcher.dispatch({
            type: itemsActionTypes.UPDATE_CHECKLIMIT,
            id,
        });
    },

    updateCheckIcon(id){
        animationDispatcher.dispatch({
            type: itemsActionTypes.UPDATE_CHECKICON,
            id,
        });
    },

    updateFlagValue(id, idParam, valueFlag) {

        if (animationDispatcher.isDispatching()) {
            animationDispatcher._stopDispatching()
        }

        animationDispatcher.dispatch({
            type: itemsActionTypes.UPDATE_VALUE_FLAG,
            id,
            idParam,
            valueFlag
        })

    }

}

export default itemsActions
