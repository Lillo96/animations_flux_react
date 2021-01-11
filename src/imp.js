import getDataAnimation from "./view"
import checkboxes, {
    setCheckLimit,
    setTextValue,
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
    getCardGeneralText
} from "./components/cards"
import tabs,{
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
} from "./components/tabs"

import checkboxesObject from "./data/checkboxes/checkboxesObject"
import cardsObject from "./data/cards/cardsObject"
import tabsObject from "./data/tabs/tabsObject"

const imp = {
    checkboxes: checkboxes,
    cards: cards,
    tabs: tabs
}

/*export function getHTMLCards(nameFunction) {
    switch (nameFunction) {
        case 'CardContainer':
            return {
                setCheckLimitCards,
            }
            break;
    }
}*/

export function getCheckboxes(id) {
    return {
        ...getDataAnimation('checkboxes', id, checkboxesObject),
        setCheckLimit,
        setTextValue,
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
        getCardGeneralText
    }
}

export function getTabs(id) {
    return {
        ...getDataAnimation('tabs', id, tabsObject),
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
