import checkboxes from "./components/checkboxes";

import checkboxesObject from "./data/checkboxes/checkboxesObject"

import getDataAnimation from "./view"

const imp = {
    checkboxes: checkboxes
}

export function getCheckboxes(id) {
    const returnObject = {
        ...getDataAnimation('checkboxes', id, checkboxesObject)
    }

    return returnObject
}

export default imp
