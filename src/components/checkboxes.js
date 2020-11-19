import React from 'react'
import PropTypes from 'prop-types'
import checkboxesActions from "../data/checkboxes/checkboxesActions"
import getAnimation from "../data/animation"
import CSSRootActions from "../data/CSSRoot/CSSRootActions"

function checkboxes({ id, onCheck, ...rest }) {

    let animation
    const value = { onCheck }

    if (!rest.checkboxes.state.has(id)) {
        console.log('ID DENTRO NEW CHECKBOXES' ,id)
        animation = getAnimation(id, value)
        checkboxesActions.newCheckboxes(id)
        console.log("Dentro !rest")
    } else {
        const checkboxObj = rest.checkboxes.state.get(id)
        console.log(checkboxObj)
        console.log("Dentro else di !rest")

        animation = getAnimation(id, {}, checkboxObj.style)

        CSSRootActions.addRule(id, null)
    }

    return (
        <div id={id} {...rest}>
            { rest.children }
        </div>
    )
}

checkboxes.propType = {
    id: PropTypes.string,
    onCheck: PropTypes.string
}

export default checkboxes
