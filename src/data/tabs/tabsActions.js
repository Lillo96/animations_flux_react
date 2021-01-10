import animationDispatcher from "../animationDispatcher"
import tabsActionTypes from "./tabsActionTypes";

const tabsActions = {
    newTabs (
        id, checkLimit, typeInput, animationCSS, textInput, textValue, duration, timing, delay,borderDim_ContItem, borderType_ContItem,
        borderColor_ContItem, colorDivItems, width_DivItem, borderDim_DivItems, borderType_DivItems,borderColor_DivItems, color_DivItemHead, fontWeight_DivItemHead, fontSize_DivItemHead,
        paddingX_DivItemsHeadFinal,paddingY_DivItemsHeadFinal, paddingX_DivItemsHeadFinal_p, paddingY_DivItemsHeadFinal_p,
        margin_DivItemsHeadFinal_p, color_DivItemsHeadFinal_p, fontWeigh_DivItemsHeadFinal_p, fontSize_DivItemsHeadFinal_p,
        width_DivItemsHead_hr, marginX_DivItemsHead_hr, marginY_DivItemsHead_hr, borderDim_DivItemsHead_hr, borderType_DivItemsHead_hr,
        borderColor_DivItemsHead_hr, padding_ItemsBody, margin_ItemsBody, display_ItemsBody, gripGap_ItemsBody, padding_ItemsBodyContent,
        paddingRight_ItemsBodyContent, display_ItemsBodyContent, color_ItemsBodyContent, fontSize_ItemsBodyContent, gripGap_ItemsBodyContent,
        borderDim_ItemsBodyContent, borderType_ItemsBodyContent, borderColor_ItemsBodyContent, borderRadius_hover_ItemsBodyContent, borderDim_hover_ItemsBodyContent, borderType_hover_ItemsBodyContent,
        borderColor_hover_ItemsBodyContent, fontSize_ItemsBodyContentIcon, color_ItemsBodyContentIcon, fontWeight_ItemsBodyContentIcon,
        iterations, direction, fillMode, playState) {
        animationDispatcher.dispatch ({
            type: tabsActionTypes.NEW_TABS,
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
            duration: duration,
            timing: timing,
            delay: delay,
            iterations: iterations,
            direction: direction,
            fillMode: direction,
            playState: playState,

        })
    },
    changeValue (id, key, value) {
        //console.log("ID", id)
        //console.log("KEY", key)
        //console.log("VALUE", value)

        animationDispatcher.dispatch({
            type: tabsActionTypes.CHANGE_TABS_VALUE,
            id: id,
            key: key,
            value: value
        })
    }
}

export default tabsActions
