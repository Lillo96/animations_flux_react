import { ReduceStore } from 'flux/utils'
import animationDispatcher from "../animationDispatcher"
import Immutable from 'immutable'
import style from '../styleObject'
import tabsActionTypes from "./itemsActionTypes";
import tabs from "./itemsObject"
import PropTypes from "prop-types";

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


            default:
                return state
        }
    }
}

export default new ItemsStore()
