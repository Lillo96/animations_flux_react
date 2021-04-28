import getDataAnimation from "./view"
import checkboxes from "./components/checkboxes";
import cards from "./components/cards"
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
