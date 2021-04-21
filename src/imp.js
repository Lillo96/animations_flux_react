import getDataAnimation from "./view"
import checkboxes, {
    getIMGCheck,
    getPCheck,
    getInputCheck
} from "./components/checkboxes";
import cards, {
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
    getMoreInfo,
    getCoords,
    getCardGeneral,
    getCardGeneralMore,
    getCardGeneralTitle,
    getCardGeneralText,
} from "./components/cards"
import items ,{
    getDivItems,
    getDivItemsHead,
    getDivItemsHead_p,
    getDivItemsHead_hr,
    getItemsBody,
    getItemsBodyContent,
    getItemsBodyContent_icon,
    getTilesWrap_li,
    getTilesWrap_p,
    getTilesWrap_button,
    setCheckItems,
    getTilesWrap_button_1,
    getTilesWrap_button_2
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
        ...getDataAnimation('checkboxes', id, checkboxesObject)
    }
}

export function getCards (id) {
    return {
        ...getDataAnimation('cards', id, cardsObject)
    }
}

export function getItems(id) {
    return {
        ...getDataAnimation('items', id, itemsObject)
    }

}

export default imp
