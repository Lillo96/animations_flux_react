import animationDispatcher from '../animationDispatcher'
import checkboxesActionTypes from './checkboxesActionTypes'

const checkboxesActions = {
    newcheckboxes(
        id, entry, checks, limit
    ) {
      animationDispatcher.dispatch ({
          type: checkboxesActionTypes.NEW_CHECKBOXES,
          id: id,
          entry: entry,
          checks: checks,
          limit: limit
      })
    },
    changeValue (id, key, value) {
        animationDispatcher.dispatch({
            type: checkboxesActionTypes.CHANGE_CHECKBOXES_VALUE,
            id: id,
            key: key,
            value: value
        })
    }
}

export default checkboxesActions
