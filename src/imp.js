import checkboxes, { setEntry as SetCheckboxesEntry, setEntryDirection as setCheckboxesEntryDirection } from './components/checkboxes'

import checkboxesObject from './data/checkboxes/checkboxesObject'

import getAnimationData from "./view";

const imp = {
    checkboxes: checkboxes
}

export function getCheckboxes(id) {
    const retObject = {
        ...getAnimationData('checkboxes', id, checkboxesObject)
    }

    retObject.setEntry = SetCheckboxesEntry
    retObject.setEntryDirection = setCheckboxesEntryDirection

    return retObject
}

export default imp
