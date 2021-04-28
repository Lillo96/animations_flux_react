import { ReduceStore } from 'flux/utils'
import animationDispatcher from "../animationDispatcher"
import Immutable from 'immutable'
import style from '../styleObject'
import tabsActionTypes from "./itemsActionTypes";
import tabs from "./itemsObject";

class ItemsStore extends ReduceStore {
    constructor () {
        super(animationDispatcher)
    }

    getInitialState() {
        return Immutable.OrderedMap()
    }

    reduce (state, action) {
        switch (action.type) {
            case tabsActionTypes.NEW_ITEMS:

                return state.set(
                    action.id,
                    tabs({
                        id: action.id,
                        checkLimit: action.checkLimit,
                        typeInput: action.typeInput,
                        animationCSS: action.animationCSS,
                        textInput: action.textInput,
                        textValue: action.textValue,

                        borderDim_ContItem: action.borderDim_ContItem,
                        borderType_ContItem: action.borderType_ContItem,
                        borderColor_ContItem: action.borderColor_ContItem,
                        colorDivItems: action.colorDivItems,
                        width_DivItem: action.width_DivItem,
                        borderDim_DivItems: action.borderDim_DivItems,
                        borderType_DivItems: action.borderType_DivItems,
                        borderColor_DivItems: action.borderColor_DivItems,
                        color_DivItemHead: action.color_DivItemHead,
                        fontWeight_DivItemHead: action.fontWeight_DivItemHead,
                        fontSize_DivItemHead: action.fontSize_DivItemHead,
                        paddingX_DivItemsHeadFinal: action.paddingX_DivItemsHeadFinal,
                        paddingY_DivItemsHeadFinal: action.paddingY_DivItemsHeadFinal,
                        paddingX_DivItemsHeadFinal_p: action.paddingX_DivItemsHeadFinal_p,
                        paddingY_DivItemsHeadFinal_p: action.paddingY_DivItemsHeadFinal_p,
                        margin_DivItemsHeadFinal_p: action.margin_DivItemsHeadFinal_p,
                        color_DivItemsHeadFinal_p: action.color_DivItemsHeadFinal_p,
                        fontWeigh_DivItemsHeadFinal_p: action.fontWeigh_DivItemsHeadFinal_p,
                        fontSize_DivItemsHeadFinal_p: action.fontSize_DivItemsHeadFinal_p,
                        width_DivItemsHead_hr: action.width_DivItemsHead_hr,
                        marginX_DivItemsHead_hr: action.marginX_DivItemsHead_hr,
                        marginY_DivItemsHead_hr: action.marginY_DivItemsHead_hr,
                        borderDim_DivItemsHead_hr: action.borderDim_DivItemsHead_hr,
                        borderType_DivItemsHead_hr: action.borderType_DivItemsHead_hr,
                        borderColor_DivItemsHead_hr: action.borderColor_DivItemsHead_hr,
                        padding_ItemsBody: action.padding_ItemsBody,
                        margin_ItemsBody: action.margin_ItemsBody,
                        display_ItemsBody: action.display_ItemsBody,
                        gripGap_ItemsBody: action.gripGap_ItemsBody,
                        padding_ItemsBodyContent: action.padding_ItemsBodyContent,
                        paddingRight_ItemsBodyContent: action.paddingRight_ItemsBodyContent,
                        display_ItemsBodyContent: action.display_ItemsBodyContent,
                        color_ItemsBodyContent: action.color_ItemsBodyContent,
                        fontSize_ItemsBodyContent: action.fontSize_ItemsBodyContent,
                        gripGap_ItemsBodyContent: action.gripGap_ItemsBodyContent,
                        borderDim_ItemsBodyContent: action.borderDim_ItemsBodyContent,
                        borderType_ItemsBodyContent: action.borderType_ItemsBodyContent,
                        borderColor_ItemsBodyContent: action.borderColor_ItemsBodyContent,
                        borderRadius_hover_ItemsBodyContent: action.borderRadius_hover_ItemsBodyContent,
                        borderDim_hover_ItemsBodyContent: action.borderDim_hover_ItemsBodyContent,
                        borderType_hover_ItemsBodyContent: action.borderType_hover_ItemsBodyContent,
                        borderColor_hover_ItemsBodyContent: action.borderColor_hover_ItemsBodyContent,
                        fontSize_ItemsBodyContentIcon: action.fontSize_ItemsBodyContentIcon,
                        color_ItemsBodyContentIcon: action.color_ItemsBodyContentIcon,
                        fontWeight_ItemsBodyContentIcon: action.fontWeight_ItemsBodyContentIcon,

                        width_TilesWrapLi1: action.width_TilesWrapLi1,
                        fontFamily_TilesWrapLi1: action.fontFamily_TilesWrapLi1,
                        fontFamily_TilesWrapLi2: action.fontFamily_TilesWrapLi2,
                        height_TilesWrapLi: action.height_TilesWrapLi,
                        backgroundColor_TilesWrapLi: action.backgroundColor_TilesWrapLi,
                        borderDim_TilesWrapLi: action.borderDim_TilesWrapLi,
                        borderType_TilesWrapLi: action.borderType_TilesWrapLi,
                        borderColor_TilesWrapLi: action.borderColor_TilesWrapLi,
                        fontSize_TilesWrap_h2: action.fontSize_TilesWrap_h2,
                        fontSize_getTilesWrap_h3: action.fontSize_getTilesWrap_h3,
                        color_getTilesWrap_h3: action.color_getTilesWrap_h3,
                        marginBotton_getTilesWrap_h3: action.marginBotton_getTilesWrap_h3,
                        fontSize_TilesWrap_p: action.fontSize_TilesWrap_p,
                        lineHeight_TilesWrap_p: action.lineHeight_TilesWrap_p,
                        color_TilesWrap_p: action.color_TilesWrap_p,

                        checkSpan: action.checkSpan,
                        transitionYEnable: action.transitionYEnable,
                        transitionYEnable1: action.transitionYEnable1,
                        transitionXEnable: action.transitionXEnable,
                        transitionXEnable1: action.transitionXEnable1,
                        durationAnimationP: action.durationAnimationP,
                        duration1AnimationP: action.duration1AnimationP,
                        fillModeAnimationP: action.fillModeAnimationP,
                        colorEndSpan: action.colorEndSpan,
                        colorStartSpan: action.colorStartSpan,
                        textInputSpan: action.textInputSpan,
                        toEnableAnimationSpan: action.toEnableAnimationSpan,

                        checkIcon: action.checkIcon,
                        toEnableAnimationIcon: action.toEnableAnimationIcon,
                        durationAnimationIcon: action.durationAnimationIcon,
                        duration1AnimationIcon: action.duration1AnimationIcon,
                        fillModeAnimationIcon: action.fillModeAnimationIcon,
                        transitionYEnableIcon: action.transitionYEnableIcon,
                        transitionYEnable1Icon: action.transitionYEnable1Icon,
                        transitionXEnableIcon: action.transitionXEnableIcon,
                        transitionXEnable1Icon: action.transitionXEnable1Icon,

                        color_ItemsBodyContentIcon_end: action.color_ItemsBodyContentIcon_end,
                        color_ItemsBodyContentIcon_start: action.color_ItemsBodyContentIcon_start,
                        textInputIcon: action.textInputIcon,

                        checkButton: action.checkButton,

                        minWidthLi: action.minWidthLi,
                        maxWidthLi: action.maxWidthLi,
                        padding1Li: action.padding1Li,
                        padding2Li: action.padding2Li,
                        padding3Li: action.padding3Li,
                        positionLi: action.positionLi,
                        verticalAlignLi: action.verticalAlignLi,
                        marginLi: action.marginLi,
                        textAlignLi: action.textAlignLi,
                        opacityButtonLiEnter: action.opacityButtonLiEnter,
                        colorEndLi: action.colorEndLi,
                        opacityButtonLiEnd: action.opacityButtonLiEnter,
                        colorStartLi: action.colorStartLi,
                        topLiH2Enter: action.topLiH2End,
                        opacityLiH2Enter: action.opacityLiH2Enter,
                        topLiH2End: action.topLiH2End,
                        opacityLiH2End: action.opacityLiH2End,
                        marginTopP: action.marginTopP,

                        typeTransitionButton: action.typeTransitionButton,
                        typeTransitionButton1: action.typeTransitionButton1,
                        typeTransitionButton2: action.typeTransitionButton2,

                        backgroundWrapButton: action.backgroundWrapButton,
                        borderWrap1: action.borderWrap1,
                        borderWrap2: action.borderWrap2,
                        borderWrap3: action.borderWrap3,
                        paddingWrap1: action.paddingWrap1,
                        paddingWrap2: action.paddingWrap2,
                        colorButtonWrap: action.colorButtonWrap,
                        borderRadiusWrap: action.borderRadiusWrap,
                        positionWrap: action.positionWrap,
                        transitionDurationWrap1: action.transitionDurationWrap1,
                        transitionFillModeWrap2: action.transitionFillModeWrap2,
                        opacityWrap: action.opacityWrap,
                        cursorWrap: action.cursorWrap,
                        overflowWrap: action.overflowWrap,
                        marginWrap: action.marginWrap,

                        backgroundWrapButton_2: action.backgroundWrapButton_2,
                        borderWrap1_2: action.borderWrap1_2,
                        borderWrap2_2: action.borderWrap2_2,
                        borderWrap3_2: action.borderWrap3_2,
                        paddingWrap1_2: action.paddingWrap1_2,
                        paddingWrap2_2: action.paddingWrap2_2,
                        colorButtonWrap_2: action.colorButtonWrap_2,
                        borderRadiusWrap_2: action.borderRadiusWrap_2,
                        positionWrap_2: action.positionWrap_2,
                        transitionDurationWrap1_2: action.transitionDurationWrap1_2,
                        transitionFillModeWrap2_2: action.transitionFillModeWrap2_2,
                        opacityWrap_2: action.opacityWrap_2,
                        cursorWrap_2: action.cursorWrap_2,
                        overflowWrap_2: action.overflowWrap_2,
                        marginWrap_2: action.marginWrap_2,

                        flag: ({
                            flag1: action.flag1,
                            flag2: action.flag2,
                            flag3: action.flag3,
                            flag4: action.flag4,
                            flag5: action.flag5,
                            flag6: action.flag6,
                            flag7: action.flag7,
                            flag8: action.flag8,
                            flag9: action.flag9,
                            flag10: action.flag10,
                            flag11: action.flag11,
                            flag12: action.flag12,
                            flag13: action.flag13,
                            flag14: action.flag14,
                            flag15: action.flag15,
                            flag16: action.flag16,
                            flag17: action.flag17,
                            flag18: action.flag18,
                            flag19: action.flag19,
                            flag20: action.flag20,
                        }),

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

            case tabsActionTypes.CHANGE_ITEMS_VALUE:

                if (state.get(action.id).has(action.key)) {
                    return state.setIn([action.id, action.key], action.value)
                } else if (action.key.startsWith('style.')) {
                    action.key = action.key.substr(6)

                    if (state.get(action.id).style.has(action.key)) {
                        return state.setIn([action.id, 'style', action.key], action.value)
                    } else {
                        throw Error('style of items does not have a property ' + action.key)
                    }
                } else {
                    throw Error('items does not have a property ' + action.key)
                }

            case tabsActionTypes.UPDATE_CHECKSPAN:

                if(!action.id){
                    return state;
                }

                state = state.update(
                    action.id,

                    item => item.set('checkSpan', !item.checkSpan)
                );

                return state;

            case tabsActionTypes.UPDATE_CHECKLIMIT:

                if(!action.id){
                    return state;
                }

                state = state.update(
                    action.id,

                    item => item.set('checkLimit', !item.checkLimit)
                );

                return state;

            case tabsActionTypes.UPDATE_CHECKICON:

                if(!action.id){
                    return state;
                }

                state = state.update(
                    action.id,

                    item => item.set('checkIcon', !item.checkIcon)
                );

                return state;

            case tabsActionTypes.UPDATE_VALUE_FLAG:

                let tmp = ["flag1", "flag2"]

                if (!action.id) {
                    return state;
                }

                state.map( item => {

                    if (item.id === action.id){

                        for (let i = 0; i < tmp.length; i++) {
                            if (tmp[i] !== action.idParam) {

                                state = state.update(
                                    item.id,

                                    item => item.set(tmp[i], false)
                                );

                            }
                        }

                    } else {

                        for (let i = 0; i < tmp.length; i++) {

                                state = state.update(
                                    item.id,

                                    item => item.set(tmp[i], false)
                                );


                        }

                    }

                })


                state = state.update(
                    action.id,

                    item => item.set(action.idParam, !action.valueFlag)
                )

                return state;

            default:
                return state
        }
    }
}

export default new ItemsStore()
