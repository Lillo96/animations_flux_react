import checkboxesStore from "./data/checkboxes/checkboxesStore"

import checkboxesActions from "./data/checkboxes/checkboxesActions"

function getDataAnimation(type, id, tmpObj) {
    const state = objectByType(type)
    const obj = state.get(id, tmpObj({ id: id })).toJS()
    const ret = { }
    //console.log("STATE", state)
    //console.log("OBJ", obj)

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

        default:
            throw TypeError(`"${type}" is not an animation defined in uit`)
    }
}

export default getDataAnimation
