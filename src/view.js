import checkboxesStore from "./data/checkboxes/checkboxesStore"
import cardsStore from "./data/cards/cardsStore";
import itemsStore from "./data/items/itemsStore";
//import React from 'react'

//import checkboxesActions from "./data/checkboxes/checkboxesActions"

function getDataAnimation(type, id, tmpObj) {
    const state = objectByType(type)
    const obj = state.get(id, tmpObj({ id: id })).toJS()
    const ret = { }

    for (const prop in obj) {
        //console.log("PROP", prop)
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            //console.log("OBJ[PROP]", obj[prop])
            ret[prop] = obj[prop]
        }
    }
    //console.log("RET", ret)
    return ret
}

function objectByType(type) {
    switch (type) {
        case 'checkboxes':
            return checkboxesStore.getState()

        case 'cards':
            return cardsStore.getState()

        case 'items':
            return itemsStore.getState()

        default:
            throw TypeError(`${type}`)
    }
}

export default getDataAnimation
