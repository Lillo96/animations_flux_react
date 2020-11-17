import checkboxesStore from "./data/checkboxes/checkboxesStore"

import checkboxesActions from "./data/checkboxes/checkboxesActions"

function getDataAnimation(type) {
    console.log(objectByType(type))
    const ret = {
        getValueCheck
    }

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

function getValueCheck (value) {
    console.log(value)
}

export default getDataAnimation
