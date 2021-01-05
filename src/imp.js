import getDataAnimation from "./view"
import checkboxes, {setCheckLimit, setTextValue} from "./components/checkboxes";
import cards, {
    setCheckLimitCards,
    getCardContainer,
    getCardBack,
    getCardFront,
    getCardInner,
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
import tabs from "./components/tabs"

import checkboxesObject from "./data/checkboxes/checkboxesObject"
import cardsObject from "./data/cards/cardsObject"
import tabsObject from "./data/tabs/tabsObject"

const imp = {
    checkboxes: checkboxes,
    cards: cards,
    tabs: tabs
}

export function getCheckboxes(id) {
    return {
        ...getDataAnimation('checkboxes', id, checkboxesObject),
        setCheckLimit,
        setTextValue
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
        ...getDataAnimation('tabs', id, tabsObject)
    }

}

export default imp
