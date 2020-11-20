import React from 'react'
import PropTypes from 'prop-types'
import checkboxesActions from "../data/checkboxes/checkboxesActions"
import getAnimation from "../data/animation"
import CSSRootActions from "../data/CSSRoot/CSSRootActions"

function checkboxes({ id, onCheck, ...rest }) {

    let animation
    const value = { onCheck }

    if (!rest.checkboxes.state.has(id)) {
        //console.log('ID DENTRO NEW CHECKBOXES' ,id)
        animation = getAnimation(id, value)
        checkboxesActions.newCheckboxes(id)
        //console.log("Dentro !rest")
    } else {
        const checkboxObj = rest.checkboxes.state.get(id)
        //console.log(checkboxObj)
        //console.log("Dentro else di !rest")

        animation = getAnimation(id, {}, checkboxObj.style)

        CSSRootActions.addRule(id, `@keyframes ${id} {\n${checkboxesKeyFrames(checkboxObj)}\n}`)
    }

    return (
        <div id={id} style={animation} {...rest}>
            { rest.children }
        </div>
    )
}

function checkboxesKeyFrames ({ onCheck }) {
    console.log("VALUE onCheck", onCheck)
    let tmp

    if (onCheck === ""){
        console.log("DENTRO ONCHECK = '' ")
        tmp ='\n\n' + '% {\n' +
            '   color: red;\n' +
            '}'
    }
    console.log('TMP', tmp)
    return tmp

}

checkboxes.propType = {
    id: PropTypes.string,
    onCheck: PropTypes.string
}

export default checkboxes
