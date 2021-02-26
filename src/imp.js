import getDataAnimation from "./view"
import checkboxes, {
    getIMGCheck,
    getPCheck,
    setCheckLimit,
    setTextValue,
    getInputCheck
} from "./components/checkboxes";
import cards, {
    setCheckLimitCards,
    getCardContainer,
    getCardBack,
    getCardFront,
    getCardInner,
    getCardButton,
    getImageArea,
    getImageWrapper,
    getHeaderImage,
    getName,
    getIconUL,
    getIconLi,
    getCardCenter,
    getCard,
    getAdditional,
    getUserCard,
    getLevelCenter,
    getPointsCenter,
    getSvg,
    getMoreInfo,
    getMoreInfoName,
    getCoords,
    getStats,
    getStatsValue,
    getStatsTitle,
    getCardGeneral,
    getCardGeneralMore,
    getCardGeneralTitle,
    getCardGeneralText,
    setValueVariable,
    provaFunction_CheckValue ///////
} from "./components/cards"
import items ,{
    getContainerItems,
    getDivItems,
    getDivItemsHead,
    getDivItemsHead_p,
    getDivItemsHead_hr,
    getItemsBody,
    getItemsBodyContent,
    getItemsBodyContent_icon,
    getTilesWrap,
    getTilesWrap_li,
    getTilesWrap_h2,
    getTilesWrap_h3,
    getTilesWrap_p,
    getTilesWrap_button
} from "./components/items"

import checkboxesObject from "./data/checkboxes/checkboxesObject"
import cardsObject from "./data/cards/cardsObject"
import itemsObject from "./data/items/itemsObject"

const imp = {
    checkboxes: checkboxes,
    cards: cards,
    items: items
}

export function getCheckboxes(id) {
    return {
        ...getDataAnimation('checkboxes', id, checkboxesObject),
        getIMGCheck,
        getPCheck,
        setCheckLimit,
        setTextValue,
        getInputCheck
    }
}

export function getCards(id) {
    return {
        ...getDataAnimation('cards', id, cardsObject),
        setCheckLimitCards,
        getCardContainer,
        getCardFront,
        getCardInner,
        getCardBack,
        getCardButton,
        getImageArea,
        getImageWrapper,
        getHeaderImage,
        getName,
        getIconUL,
        getIconLi,
        getCardCenter,
        getCard,
        getAdditional,
        getUserCard,
        getLevelCenter,
        getPointsCenter,
        getSvg,
        getMoreInfo,
        getMoreInfoName,
        getCoords,
        getStats,
        getStatsValue,
        getStatsTitle,
        getCardGeneral,
        getCardGeneralMore,
        getCardGeneralTitle,
        getCardGeneralText,
        setValueVariable,
        provaFunction_CheckValue
    }
}

export function getItems(id) {
    return {
        ...getDataAnimation('items', id, itemsObject),
        getContainerItems,
        getDivItems,
        getDivItemsHead,
        getDivItemsHead_p,
        getDivItemsHead_hr,
        getItemsBody,
        getItemsBodyContent,
        getItemsBodyContent_icon,
        getTilesWrap,
        getTilesWrap_li,
        getTilesWrap_h2,
        getTilesWrap_h3,
        getTilesWrap_p,
        getTilesWrap_button
    }

}

export default imp
