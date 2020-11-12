import React from 'react'
import PropTypes from 'prop-types'
//import CSSRootActions from '../data/CSSRoot/CSSRootActions'
import checkboxesActions from '../data/checkboxes/checkboxesActions'
import getAnimation from "../data/animation";

function checkboxes ({
    id, entry, checks, limit, ...rest
}) {
    let animation

    console.log("CHECKBOXES", rest.checkboxes.state);

    if (!rest.checkboxes.state.has(id)) {
        //ANIMATION
        animation = getAnimation(id, {})
        checkboxesActions.newcheckboxes(id, entry, checks, limit)
    } else {
        const checkboxesObj = rest.checkboxes.state.get(id)
        animation = getAnimation(id, {}, checkboxesObj.style)

        console.log(checkboxesObj);

    }

    return (
      <div id={id} style={animation} {...rest}>
          { rest.children }
      </div>
    )
}

export function setEntry (value) {
    checkboxesActions.changeValue(this.id, 'entry', value)
}

export function setEntryDirection (value) {
    checkboxesActions.changeValue(this.id, 'entryDirection', value)
}

checkboxes.propTypes = {
    id: PropTypes.string,
    entry: PropTypes.oneOf([null, 'in', 'out']),
    checks: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    limit: PropTypes.number,
}

export default checkboxes
