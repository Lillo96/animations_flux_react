import getDataAnimation from "./view"
import checkboxes, {setCheckLimit, setTextValue} from "./components/checkboxes";
import cards, {setCheckLimitCards} from "./components/cards"
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
        setCheckLimitCards
    }
}

export function getItems(id) {
    return {
        ...getDataAnimation('items', id, itemsObject)
    }

}

export default imp
