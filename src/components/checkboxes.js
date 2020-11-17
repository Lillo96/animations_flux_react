import React from 'react'
import PropTypes from 'prop-types'

function checkboxes({id, ...rest}) {
    return (
        <div id={id} {...rest}>
            { rest.children }
        </div>
    )
}

export default checkboxes
