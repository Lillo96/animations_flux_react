import React from 'react'
import PropTypes from 'prop-types'
import checkboxesActions from "../data/checkboxes/checkboxesActions"

function checkboxes({ id, onCheck, ...rest }) {

    if (!rest.checkboxes.state.has(id)) {
        checkboxesActions.newCheckboxes(id)
        console.log("Dentro !rest")
    } else {
        const checkboxObj = rest.checkboxes.state.get(id)
        console.log(checkboxObj)
        console.log("Dentro else di !rest")
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
