import React from 'react'
import PropTypes from 'prop-types'
import checkboxesActions from "../data/checkboxes/checkboxesActions"
import getAnimation from "../data/animation"

import styled, {keyframes} from "styled-components"

function checkboxes({
    id, checkLimit, typeInput, animationCSS, textInput, textValue, colorStart, colorEnd, opacityNotCheck,
    opacityCheck, timeAnimation, typeAnimFillMode, colorLine, duration, timing, delay, iterations, direction, fillMode, playState, ...rest
}) {
    let animation
    let getAnimationCSS, getAnimationCSS_1
    let timeAnim, fillAnim, timeAnim2


   if (!rest.checkboxes.state.has(id)) {

       animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState })
       //console.log(animation)

       //console.log("Dentro di !rest", colorEnd)

       checkboxesActions.newCheckboxes(
            id, checkLimit, typeInput, animationCSS, textInput, textValue, colorStart, colorEnd, opacityNotCheck, opacityCheck,
            timeAnimation, typeAnimFillMode, colorLine, duration, timing, delay,iterations, direction, fillMode, playState
        )


       setAnimationCSS(id, cssStylesKeyFrames(true,1, colorStart))

   } else {


       const variableArray = [checkLimit, textInput, textValue, colorStart, colorEnd, opacityNotCheck,
           opacityCheck, timeAnimation, typeAnimFillMode, colorLine]
        //console.log("Dentro else di !rest", colorEnd)

        checkValue(
/*            rest.checkboxes.state.get(id).get('id'),
            checkLimit,
            rest.checkboxes.state.get(id).get('checkLimit'),
            colorStart,
            rest.checkboxes.state.get(id).get('colorStart'),
            colorEnd,
            rest.checkboxes.state.get(id).get('colorEnd'),
            opacityNotCheck,
            rest.checkboxes.state.get(id).get('opacityNotCheck'),
            opacityCheck,
            rest.checkboxes.state.get(id).get('opacityCheck'),
            colorLine,
            rest.checkboxes.state.get(id).get('colorLine'),*/
            variableArray, rest.checkboxes.state.get(id)
            )

        //console.log(rest.checkboxes.state.get(id).get('colorEnd'))
        const checkboxObj = rest.checkboxes.state.get(id)
        //console.log("checkOBJ",checkboxObj)

        animation = getAnimation(id, {}, checkboxObj.style)
        //console.log(animation)

       console.log(rest.checkboxes.state.get(id).get('checkLimit'))

        setAnimationCSS(id, cssStylesKeyFrames(rest.checkboxes.state.get(id).get('checkLimit'),
                                               rest.checkboxes.state.get(id).get('typeInput'),
                                               rest.checkboxes.state.get(id).get('colorStart'),
                                               rest.checkboxes.state.get(id).get('colorEnd'),
                                               rest.checkboxes.state.get(id).get('opacityNotCheck'),
                                               rest.checkboxes.state.get(id).get('opacityCheck')
                            ))

        getAnimationCSS = rest.checkboxes.state.get(id).get('animationCSS')
        getAnimationCSS_1 = setKeyframes2(rest.checkboxes.state.get(id).get('checkLimit'),
                                          rest.checkboxes.state.get(id).get('typeInput'),
                                          rest.checkboxes.state.get(id).get('colorLine')
                                        )

        timeAnim = rest.checkboxes.state.get(id).get('timeAnimation')
        fillAnim = rest.checkboxes.state.get(id).get('typeAnimFillMode')

        if (rest.checkboxes.state.get(id).get('typeInput') == 2) {
            timeAnim2 = rest.checkboxes.state.get(id).get('timeAnimation')
            timeAnim = '0s'
        }
   }

   const KeyFrames = styled.div`
          animation: ${timeAnim} ${getAnimationCSS} ${fillAnim};
       `;

   const KeyFrame2 = styled.div`
          animation: ${timeAnim2} ${getAnimationCSS_1} both;
       `;

   return (
       <div id={id} style={animation} {...rest}>
          <KeyFrame2>
               <KeyFrames>
                   { rest.children }
               </KeyFrames>
          </KeyFrame2>

       </div>

   )
}

function setKeyframes2(checkLimit, typeInput, colorLine) {

    let tmp

    if (checkLimit){
        console.log('Ok')
    } else {
        //console.log('tmp = 1')
        //console.log("QQ", typeInput)
        switch (typeInput) {

            case 2:
                //console.log("OO", typeInput)

               /* tmp = keyframes`
                    to {
                        color: white;
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                        text-decoration: line-through;
                        text-decoration-thickness: 3px;
                        transition-timing-function: clip-path 3s cubic-bezier(.25,.77,.74,.24);
                    }
                    
                    from {
                        color: white;
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                        text-decoration: line-through;
                        text-decoration-thickness: 3px;
                        transition-timing-function: clip-path 3s cubic-bezier(.25,.77,.74,.24);
                    }
                `;*/


                tmp = keyframes`  
                      
                      50% {
                        clip-path: polygon(0 0, 1% 0, 1% 100%, 0% 100%);
                        color: ${colorLine};
                        text-decoration: line-through;
                        text-decoration-thickness: 3px;
                        transition-timing-function: clip-path 3s cubic-bezier(.25,.77,.74,.24);
                      }
                      
                      75% {
                        color: ${colorLine};
                        clip-path: polygon(0 0, 1% 0, 1% 100%, 0% 100%);
                        text-decoration: line-through;
                        text-decoration-thickness: 3px;
                        transition-timing-function: clip-path 3s cubic-bezier(.25,.77,.74,.24);
                      }
                    
                      100% {
                        color: ${colorLine};
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                        text-decoration: line-through;
                        text-decoration-thickness: 3px;
                        transition-timing-function: clip-path 3s cubic-bezier(.25,.77,.74,.24);
                      }
                  `;


                /*tmp = keyframes`
                      from {
                        opacity: 0.5;
                        color: white;
                      }

                      to {
                        color: white;
                        opacity: 0.5;
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                        text-decoration-color: black;
                        text-decoration: line-through;
                        text-decoration-thickness: 3px;
                        text-decoration-color: red;
                        transition: clip-path 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
                      }
                  `;*/

                //originFrame = '@keyframes ' + state.get('id') + ' {\nfrom {\n opacity: 0.5;\n color: black\n }\n\n'
                //endFrame = 'to {\n opacity: ' + tmp + ';\n content: \'\';\n display: block\n width: 0%;\n height: 2px;\n background-color: #000;\n position: absolute;\n top: 50%;\n left: 7.5%;\n transform: translateY(-50%);\n transition: width 100ms ease-in-out;\n }\n\n}\n\n'
                //endFrame = 'to {\n color: white; opacity: 0.5;\n clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n text-decoration-color: black;\n text-decoration: line-through;\n text-decoration-thickness: 3px;\n text-decoration-color: red;\n transition: clip-path 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n }\n\n}\n\n'


                break;

            default:
                return
        }
    }

    return tmp

}

function cssStylesKeyFrames(checkLimit, typeInput, colorStart, colorEnd, opacityNotCheck, opacityCheck) {

   // console.log('Cagliari', colorEnd)
    let tmp

    if (checkLimit){

        switch (typeInput) {
            case 1:
     //           console.log("OO", opacityNotCheck)

                tmp = keyframes`  
                      0% {
                        opacity: 0;
                        color: ${colorStart};
                      }
                      
                      25% {
                        opacity: ${opacityNotCheck/4};
                        color: ${colorStart};
                      }
                      
                      50% {
                        opacity: ${opacityNotCheck/2};
                        color: ${colorStart};
                      }
                      
                      75% {
                        opacity: ${opacityNotCheck/4 + opacityNotCheck/2};
                        color: ${colorStart};
                      }
                    
                      100% {
                         opacity: ${opacityNotCheck};
                         color: ${colorStart};
                      }
                  `;

                 /*tmp = keyframes`
                      from {
                        opacity: 0;
                        color: black;
                      }
                    
                      to {
                         opacity: 0.8;
                         color: white;
                      }
                  `;*/

                break;

            case 2:
                //console.log("BB", typeInput)

                tmp = keyframes`  
                      0% {
                        opacity: 0;
                        color: ${colorStart};
                        transition: 0s;
                      }
                      
                      25% {
                        opacity: ${opacityNotCheck/4};
                        color: ${colorStart};
                        transition: 0s;
                      }
                      
                      50% {
                        opacity: ${opacityNotCheck/2};
                        color: ${colorStart};
                        transition: 0s;
                      }
                      
                      75% {
                        opacity: ${opacityNotCheck/4 + opacityNotCheck/2};
                        color: ${colorStart};
                        transition: 0s;
                      }
                    
                      100% {
                         opacity: ${opacityNotCheck};
                         color: ${colorStart};
                         transition: 0s;
                      }
                  `;

                /*tmp = keyframes`
                      from {
                        opacity: 0;
                        color: black;
                      }
                    
                      to {
                         opacity: 0.8;
                         color: white;
                      }
                  `;*/

                break;

            case 3:

                tmp = keyframes`  
                      0% {
                        opacity: 0;
                        color: ${colorStart};
                      }
                      
                      25% {
                        opacity: ${opacityNotCheck/4};
                        color: ${colorStart};
                      }
                      
                      50% {
                        opacity: ${opacityNotCheck/2};
                        color: ${colorStart};
                      }
                      
                      75% {
                        opacity: ${opacityNotCheck/4 + opacityNotCheck/2};
                        color: ${colorStart};
                      }
                    
                      100% {
                         opacity: ${opacityNotCheck};
                         color: ${colorStart};
                      }
                  `;

                /*tmp = keyframes`
                      from {
                        opacity: 0;
                        color: black;
                      }
                    
                      to {
                         opacity: 0.8;
                         color: white;
                      }
                  `;*/

                break;

            default:
                return

        }


    } else {
        //console.log('tmp = 1')
        //console.log("QQ", typeInput)
        switch (typeInput) {
            case 1:

                tmp = keyframes`  
                      0% {
                        opacity: 0;
                        color: ${colorStart};
                      }
                      
                      25% {
                        opacity: ${opacityCheck/4};
                        color: ${colorStart};
                      }
                      
                      50% {
                        opacity: ${opacityCheck/2};
                        color: ${colorEnd};
                      }
                      
                      75% {
                        opacity: ${opacityCheck/4 + opacityCheck/2};
                        color: ${colorEnd};
                      }
                    
                      100% {
                        opacity: ${opacityCheck};
                        color: ${colorEnd};
                      }
                  `;

                /*tmp = keyframes`
                      from {
                        opacity: 0;
                        color: white;
                      }
                    
                      to {
                        opacity: 1;
                        color: red;
                      }
                  `;*/

                break;

            case 2:
                //console.log("OO", typeInput)

                tmp = keyframes`  
                      0% {
                        opacity: 0;
                        color: ${colorEnd};
                        transition: 0s;
                      }
                      
                      25% {
                        opacity: ${opacityCheck/4};
                        color: ${colorEnd};
                        transition: 0s;
                      }
                      
                      50% {
                        color: ${colorEnd};
                        opacity: ${opacityCheck/2};
                        transition: 0s;
                      }
                      
                      75% {
                        color: ${colorEnd};
                        opacity: ${opacityCheck/4 + opacityCheck/2};
                        transition: 0s;
                      }
                    
                      100% {
                        color: ${colorEnd};
                        opacity: ${opacityCheck};
                        transition: 0s;
                      }
                  `;

                /*tmp = keyframes`
                      from {
                        opacity: 0.5;
                        color: white;
                      }
                    
                      to {
                        color: white;
                        opacity: 0.5;
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                        text-decoration-color: black;
                        text-decoration: line-through;
                        text-decoration-thickness: 3px;
                        text-decoration-color: red;
                        transition: clip-path 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
                      }
                  `;*/

                //originFrame = '@keyframes ' + state.get('id') + ' {\nfrom {\n opacity: 0.5;\n color: black\n }\n\n'
                //endFrame = 'to {\n opacity: ' + tmp + ';\n content: \'\';\n display: block\n width: 0%;\n height: 2px;\n background-color: #000;\n position: absolute;\n top: 50%;\n left: 7.5%;\n transform: translateY(-50%);\n transition: width 100ms ease-in-out;\n }\n\n}\n\n'
                //endFrame = 'to {\n color: white; opacity: 0.5;\n clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n text-decoration-color: black;\n text-decoration: line-through;\n text-decoration-thickness: 3px;\n text-decoration-color: red;\n transition: clip-path 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n }\n\n}\n\n'


                break;

            case 3:

                tmp = keyframes`  
                      0% {
                        opacity: 0;
                        color: ${colorStart};
                      }
                      
                      25% {
                        opacity: ${opacityCheck/4};
                        color: ${colorStart};
                      }
                      
                      50% {
                        opacity: ${opacityCheck/2};
                        color: ${colorEnd};
                      }
                      
                      75% {
                        opacity: ${opacityCheck/4 + opacityCheck/2};
                        color: ${colorEnd};
                      }
                    
                      100% {
                        opacity: ${opacityCheck}; 
                        color: ${colorEnd};
                      }
                  `;

                /*tmp = keyframes`
                      from {
                        opacity: 0;
                        color: white;
                      }
                    
                      to {
                        opacity: 1;
                        color: red;
                      }
                  `;*/

                break;

            default:
                return
        }
    }

    return tmp
}

function cssStyles(checkLimit, typeInput) {

    //console.log(state)

    //let typeCL = state.get('typeInput')
    let tmp

    //console.log("AAA", checkLimit)
    if (checkLimit){
        console.log('true')

        switch (typeInput) {
            case 1 :
                console.log("CC", typeInput)
                //tmp = 0.8

                //originFrame = '@keyframes ' + state.get('id') + ' {\nfrom {\n opacity: 0;\n color: black;\n }\n\n'
                //endFrame = 'to {\n opacity: ' + tmp + ';\n color: white;\n }\n\n}\n\n'

                tmp = styled.div`
                opacity: 0.8;
                color: white;
                `;


                break;

            case 2 :
                console.log("BB", typeInput)
                //tmp = 0.8

                //originFrame = '@keyframes ' + state.get('id') + ' {\nfrom {\n opacity: 0;\n color: white;\n }\n\n'
                //endFrame = 'to {\n opacity: ' + tmp + ';\n color: white;\n }\n\n}\n\n'

                tmp = styled.div`
                opacity: 0.8;
                color: white;
                `;

                break;

            default:
                return

        }


    } else {
        console.log('tmp = 1')
        console.log("QQ", typeInput)
        switch (typeInput) {
            case 1 :
                console.log("GG", typeInput)
                //tmp = 1

                //originFrame = '@keyframes ' + state.get('id') + ' {\nfrom {\n opacity: 0;\n color: red;\n }\n\n'
                //endFrame = 'to {\n opacity: ' + tmp + ';\n color: red;\n }\n\n}\n\n'

                tmp = styled.div`
                opacity: 1;
                color: red;
                `;

                break;

            case 2 :
                console.log("OO", typeInput)
                //tmp = 1

                //originFrame = '@keyframes ' + state.get('id') + ' {\nfrom {\n opacity: 0.5;\n color: black\n }\n\n'
                //endFrame = 'to {\n opacity: ' + tmp + ';\n content: \'\';\n display: block\n width: 0%;\n height: 2px;\n background-color: #000;\n position: absolute;\n top: 50%;\n left: 7.5%;\n transform: translateY(-50%);\n transition: width 100ms ease-in-out;\n }\n\n}\n\n'
                //endFrame = 'to {\n color: white; opacity: 0.5;\n clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n text-decoration-color: black;\n text-decoration: line-through;\n text-decoration-thickness: 3px;\n text-decoration-color: red;\n transition: clip-path 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n }\n\n}\n\n'

                tmp = styled.div`
                opacity: 0.5;
                color: white;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                text-decoration-color: black;
                text-decoration: line-through;
                text-decoration-thickness: 3px;
                text-decoration-color: red;
                transition: clip-path 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
                `;

                break;

            default:
                return

        }
    }

    console.log(tmp)
/*
    tmp = styled.div`
                opacity: 0.8;
                color: white;
                `;
*/
    return tmp

}

export function setCheckLimit (value) {
    console.log(value)
    checkboxesActions.changeValue(this.id, 'checkLimit', value)
}

export function setAnimationCSS (id, value) {
    //console.log(value)
    checkboxesActions.changeValue(id, 'animationCSS', value)
}

export function setTextValue (valueCheck, valueText) {
    console.log(valueCheck)
    switch (valueCheck) {
        case true:
            checkboxesActions.changeValue(this.id, 'textValue', this.textInput)
            break;

        case false:
            checkboxesActions.changeValue(this.id, 'textValue', valueText)
            break;

        default:
            return
    }
}

function checkValue (variableArray, rest) {

    //console.log(variableArray, rest)
    //console.log(colorEnd, restcolorEnd)

    const tmp = ["checkLimit", "textInput", "textValue", "colorStart", "colorEnd", "opacityNotCheck",
        "opacityCheck", "timeAnimation", "typeAnimFillMode", "colorLine"]

    /*
        0: checkLimit,
        1: textInput,
        2: textValue,
        3: colorStart,
        4: colorEnd,
        5: opacityNotCheck,
        6: opacityCheck,
        7: timeAnimation,
        8: typeAnimFillMode,
        9: colorLine
    */

    // Parte da 3 perchè non devo modificare "checkLimit", "textInput" e "textValue"
    for (let i = 3; i < variableArray.length; i++) {
        //if (variableArray[i] != rest.)
        //console.log(variableArray[i])
        //console.log(rest.get(tmp[i]))

        if (variableArray[i] != rest.get(tmp[i])) {
            checkboxesActions.changeValue(rest.get('id'), tmp[i], variableArray[i])
        }

    }



/*    if (colorEnd != restcolorEnd) {
        checkboxesActions.changeValue(id, 'colorEnd', colorEnd)
    }

    if (colorStart != restcolorStart) {
        checkboxesActions.changeValue(id, 'colorStart', colorStart)
    }

    if (colorLine != restcolorLine) {
        checkboxesActions.changeValue(id, 'colorLine', colorLine)
    }*/
}

checkboxes.propType = {
    anim: PropTypes.object,
    id: PropTypes.string,
    typeInput: PropTypes.number,
    checkLimit: PropTypes.bool,
    duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    timing: PropTypes.string,
    delay: PropTypes.string,
    iterations: PropTypes.string,
    direction: PropTypes.string,
    fillMode: PropTypes.string,
    playState: PropTypes.string,
    animationCSS: PropTypes.string,
    textInput: PropTypes.string,
    textValue: PropTypes.string,
    colorStart: PropTypes.string,
    colorEnd: PropTypes.string,
    opacityNotCheck: PropTypes.string,
    opacityCheck: PropTypes.string,
    timeAnimation: PropTypes.string,
    typeAnimFillMode: PropTypes.string,
    colorLine: PropTypes.string
}

export default checkboxes
