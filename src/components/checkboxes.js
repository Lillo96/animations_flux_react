import React from 'react'
import PropTypes from 'prop-types'
import checkboxesActions from "../data/checkboxes/checkboxesActions"
import getAnimation from "../data/animation"
import CSSRootActions from "../data/CSSRoot/CSSRootActions"

function checkboxes({
    id, checkLimit, duration, timing, delay, iterations,
    direction, fillMode, playState, ...rest
}) {
    let animation

   if (!rest.checkboxes.state.has(id)) {
        //console.log('ID DENTRO NEW CHECKBOXES' ,id)
        animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState })
       //console.log(animation)
       checkboxesActions.newCheckboxes(
            id, checkLimit, duration, timing, delay,
            iterations, direction, fillMode, playState
        )
        //console.log("Dentro !rest")
   } else {
        const checkboxObj = rest.checkboxes.state.get(id)
        //console.log(checkboxObj)
        //console.log("Dentro else di !rest")
        //console.log(checkboxObj.style)
        animation = getAnimation(id, {}, checkboxObj.style)
        //console.log(animation)

        //console.log('ID', id)
        console.log('CHECKFRAM', checkboxesKeyFrames(checkboxObj))
        CSSRootActions.addRule(id, checkboxesKeyFrames(checkboxObj))
   }


   return (
       <div id={id} style={animation} {...rest}>
            { rest.children }
       </div>
   )
}

function checkboxesKeyFrames (state) {
    //console.log("VALUE onCheck", state)
    let tmp

    if (state.get('checkLimit')){
        //console.log('OOO')
        tmp = (state.get('checkLimit') / 100).toString()
        //console.log(tmp)
    } else {
        //console.log('IIII')
        tmp = 1
    }

    let originFrame
    let endFrame

    originFrame = '@keyframes ' + state.get('id') + ' {\nfrom {\n'
    endFrame = 'to {\n'

    originFrame += 'opacity: 0;\n' + 'color: red;\n' + 'color: red;\n'
    endFrame += 'opacity: ' + tmp + ';\n' + 'color: red;\n'

    originFrame += '}\n\n'
    endFrame += '}\n\n}\n\n'

    return originFrame + endFrame
}

export function setCheckLimit (value) {
    console.log(value)
    checkboxesActions.changeValue(this.id, 'checkLimit', value)
}

checkboxes.propType = {
    anim: PropTypes.object,
    id: PropTypes.string,
    //onCheck: PropTypes.string,
    checkLimit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    timing: PropTypes.string,
    delay: PropTypes.string,
    iterations: PropTypes.string,
    direction: PropTypes.string,
    fillMode: PropTypes.string,
    playState: PropTypes.string
}

export default checkboxes
