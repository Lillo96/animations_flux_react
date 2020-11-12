import checkboxesStore from './data/checkboxes/checkboxesStore'
import CSSRootStore from './data/CSSRoot/CSSRootStore'

import checkboxesActions from './data/checkboxes/checkboxesActionTypes'
import CSSRootActions from './data/CSSRoot/CSSRootActions'

function getAnimationData(type, id, tempObject) {
    const ret = {
        setIterations
    }

    return ret
}

function actionsByType(type) {
    switch (type) {
        case 'checkboxes':
            return checkboxesActions

        default:
            throw TypeError("Error")
    }
}

function setIterations (value) {
    actionsByType(this.type).changeValue(this.id, 'style.iterations', value)
    CSSRootActions.updateStyleRule(this.id, 'animationIterationCount', value)
}

export default getAnimationData
