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
    getIconLi
} from "./components/cards"
import items from "./components/items"

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
        getIconLi
    }
}

export function getItems(id) {
    return {
        ...getDataAnimation('items', id, itemsObject)
    }

}

export default imp
