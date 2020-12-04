import React from 'react'
import PropTypes from 'prop-types'
import checkboxesActions from "../data/checkboxes/checkboxesActions"
import getAnimation from "../data/animation"
import CSSRootActions from "../data/CSSRoot/CSSRootActions"

function checkboxes({
    id, checkLimit, typeInput, duration, timing, delay, iterations,
    direction, fillMode, playState, ...rest
}) {
    let animation

   if (!rest.checkboxes.state.has(id)) {
        //console.log('ID DENTRO NEW CHECKBOXES' ,id)
        animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState })
       //console.log(animation)
       checkboxesActions.newCheckboxes(
            id, checkLimit, typeInput, duration, timing, delay,
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
           <label>
               { rest.children }
           </label>
       </div>
   )
}

function checkboxesKeyFrames (state) {
    //console.log("VALUE onCheck", state)
    let tmp

    let originFrame
    let endFrame

    let typeC = state.get('typeInput')

    if (state.get('checkLimit')){
        console.log('true')

        switch (typeC) {
            case 1 :

                tmp = 0.8

                originFrame = '@keyframes ' + state.get('id') + ' {\nfrom {\n opacity: 0;\n color: black;\n }\n\n'
                endFrame = 'to {\n opacity: ' + tmp + ';\n color: white;\n }\n\n}\n\n'
                break;

            case 2 :
                tmp = 0.8

                originFrame = '@keyframes ' + state.get('id') + ' {\nfrom {\n opacity: 0;\n color: white;\n }\n\n'
                endFrame = 'to {\n opacity: ' + tmp + ';\n color: white;\n }\n\n}\n\n'
                break;
        }


    } else {
        console.log('tmp = 1')

        switch (typeC) {
            case 1 :
                tmp = 1

                originFrame = '@keyframes ' + state.get('id') + ' {\nfrom {\n opacity: 0;\n color: red;\n }\n\n'
                endFrame = 'to {\n opacity: ' + tmp + ';\n color: red;\n }\n\n}\n\n'

                break;
            case 2 :
                tmp = 1

                originFrame = '@keyframes ' + state.get('id') + ' {\nfrom {\n opacity: 0.5;\n color: black\n }\n\n'
                //endFrame = 'to {\n opacity: ' + tmp + ';\n content: \'\';\n display: block\n width: 0%;\n height: 2px;\n background-color: #000;\n position: absolute;\n top: 50%;\n left: 7.5%;\n transform: translateY(-50%);\n transition: width 100ms ease-in-out;\n }\n\n}\n\n'
                endFrame = 'to {\n color: white; opacity: 0.5;\n clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n text-decoration-color: black;\n text-decoration: line-through;\n text-decoration-thickness: 3px;\n text-decoration-color: red;\n transition: clip-path 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n }\n\n}\n\n'
                break;
        }
    }

    return originFrame + endFrame
}

export function setCheckLimit (value) {
    console.log(value)
    checkboxesActions.changeValue(this.id, 'checkLimit', value)
}

checkboxes.propType = {
    anim: PropTypes.object,
    id: PropTypes.string,
    typeInput: PropTypes.number,
    //onCheck: PropTypes.string,
    //checkLimit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    checkLimit: PropTypes.bool,
    duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    timing: PropTypes.string,
    delay: PropTypes.string,
    iterations: PropTypes.string,
    direction: PropTypes.string,
    fillMode: PropTypes.string,
    playState: PropTypes.string
}

export default checkboxes
