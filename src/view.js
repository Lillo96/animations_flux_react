import checkboxesStore from "./data/checkboxes/checkboxesStore"

import checkboxesActions from "./data/checkboxes/checkboxesActions"

import CSSRootActions from "./data/CSSRoot/CSSRootActions"
import CSSRootStore from "./data/CSSRoot/CSSRootStore"

function getDataAnimation(type, id, tmpObj) {
    const state = objectByType(type)
    const obj = state.get(id, tmpObj({ id: id })).toJS()
    const ret = {
        getKeyFrames
    }
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

function actionByType(type) {
    switch (type) {
        case 'checkboxes':
            return checkboxesActions

        default:
            throw TypeError(`"${type}" is not an animation defined in uit`)
    }
}

function getKeyFrames () {
    const tmpCSSStoreRoot = CSSRootStore.getState()
    if (tmpCSSStoreRoot.rules.has(this.id)) {
        return tmpCSSStoreRoot.rules.get(this.id).rule
    }
}

export default getDataAnimation
