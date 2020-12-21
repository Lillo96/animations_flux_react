import getDataAnimation from "./view"
import checkboxes, {setCheckLimit, setTextValue} from "./components/checkboxes";

import checkboxesObject from "./data/checkboxes/checkboxesObject"

const imp = {
    checkboxes: checkboxes
}

export function getCheckboxes(id) {
    return {
        ...getDataAnimation('checkboxes', id, checkboxesObject),
        setCheckLimit,
        setTextValue
    }
}

export default imp
