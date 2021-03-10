import React from 'react'
import PropTypes from 'prop-types'
import checkboxesActions from "../data/checkboxes/checkboxesActions"
import getAnimation from "../data/animation"

import styled, {keyframes} from "styled-components"
import cardsActions from "../data/cards/cardsActions";
import transitions from "@material-ui/core/styles/transitions";

let tmp_CardID

function checkboxes({
    id, checkLimit, typeInput, animationCSS, textInput, textValue, colorStart, colorEnd, opacityNotCheck,
    opacityCheck, timeAnimation, typeAnimFillMode, colorLine,
    displayCheck, textDecoration, textDecorationThickness, textDecorationColor, transitionTimingFunction,
    toEnableAnimationP, durationAnimationP, duration1AnimationP, fillModeAnimationP,
    transitionYEnable, transitionYEnable1, transitionXEnable, transitionXEnable1,
    checkAnimationTransition, setFlagAnimTransitionCheckLimit, toEnableAnimationP_2, setStopAnimation, onAnim,
    widthImg, heightImg,
    duration, timing, delay, iterations, direction, fillMode, playState, ...rest
}) {
    let animation

       // NO
       let getAnimationCSS, getAnimationCSS_1, timeAnim, fillAnim, timeAnim2

       if (!rest.checkboxes.state.has(id)) {

           animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState })

           checkboxesActions.newCheckboxes(
               id, checkLimit, typeInput, animationCSS, textInput, textValue, colorStart, colorEnd, opacityNotCheck,
               opacityCheck, timeAnimation, typeAnimFillMode, colorLine,
               displayCheck, textDecoration, textDecorationThickness, textDecorationColor, transitionTimingFunction,
               toEnableAnimationP, durationAnimationP, duration1AnimationP, fillModeAnimationP,
               transitionYEnable, transitionYEnable1, transitionXEnable, transitionXEnable1,
               checkAnimationTransition, setFlagAnimTransitionCheckLimit, toEnableAnimationP_2, setStopAnimation, onAnim,
               widthImg, heightImg,
               duration, timing, delay, iterations, direction, fillMode, playState,
            )

           // NO
           // setAnimationCSS(id, cssStylesKeyFrames(true,1, colorStart))

           tmp_CardID = id // NEW
           // console.log(duration, animation)
       } else {

            // NO
            /*

           const variableArray = [checkLimit, textInput, textValue, colorStart, colorEnd, opacityNotCheck,
               opacityCheck, timeAnimation, typeAnimFillMode, colorLine]
            //console.log("Dentro else di !rest", colorEnd)

            checkValue(
    /!*            rest.checkboxes.state.get(id).get('id'),
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
                rest.checkboxes.state.get(id).get('colorLine'),*!/
                variableArray, rest.checkboxes.state.get(id)
                )

            //console.log(rest.checkboxes.state.get(id).get('colorEnd'))
            const checkboxObj = rest.checkboxes.state.get(id)
            //console.log("checkOBJ",checkboxObj)

            animation = getAnimation(id, {}, checkboxObj.style)
            //console.log(animation)

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
            }*/

           const variableArray = [ checkLimit, typeInput, animationCSS, textInput, textValue, colorStart, colorEnd, opacityNotCheck,
               opacityCheck, timeAnimation, typeAnimFillMode, colorLine,
               displayCheck, textDecoration, textDecorationThickness, textDecorationColor, transitionTimingFunction,
               toEnableAnimationP, durationAnimationP, duration1AnimationP, fillModeAnimationP,
               transitionYEnable, transitionYEnable1, transitionXEnable, transitionXEnable1,
               checkAnimationTransition, setFlagAnimTransitionCheckLimit, toEnableAnimationP_2, setStopAnimation, onAnim,
               widthImg, heightImg] // NEW

           checkValue(variableArray, rest.checkboxes.state.get(id)) // NEW

           const cardObj = rest.checkboxes.state.get(id) // NEW

           animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState }, cardObj.style) // NEW

           tmp_CardID = rest.checkboxes.state.get(id).get('id') // NEW

       }

       // NO
       /*
       const KeyFrames = styled.div`
              animation: ${timeAnim} ${getAnimationCSS} ${fillAnim};
           `;

       const KeyFrame2 = styled.div`
              animation: ${timeAnim2} ${getAnimationCSS_1} both;
           `;
    */

       // NEW
       return (
            <div id={id} style={animation} {...rest}>
                {rest.children }
            </div>
       )

       // NO
       /*   return (
           <div id={id} style={animation} {...rest}>
              <KeyFrame2>
                   <KeyFrames>
                       { rest.children }
                   </KeyFrames>
              </KeyFrame2>

           </div>
       )*/
}

// NO
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

// NO
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

// NO
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

export function setCheckLimit (value, flag) {

    let result

    if (value != null) {
        switch (this.typeInput) {
            case 1:
            case 2:
            case 3:

                result = (value === this.checkLimit) ? !value : value
                checkboxesActions.changeValue(this.id, 'checkLimit', result)

                break;

            default:
                return;
        }
    }

    if (flag != null) {

        switch (flag) {
            case true:
                checkboxesActions.changeValue(this.id, 'checkAnimationTransition', flag)
                break;

            case false:
                checkboxesActions.changeValue(this.id, 'checkAnimationTransition', flag)
                break;

            default:
                return;
        }

    }

}

// NO
export function setAnimationCSS (id, value) {
    //console.log(value)
    checkboxesActions.changeValue(id, 'animationCSS', value)
}

export function setTextValue (valueCheck, valueText) {

    switch (!this.checkLimit) {
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

/*    const tmp = ["checkLimit", "textInput", "textValue", "colorStart", "colorEnd", "opacityNotCheck",
        "opacityCheck", "timeAnimation", "typeAnimFillMode", "colorLine", "displayCheck", "textDecoration", "textDecorationThickness",
        "textDecorationColor", "transitionTimingFunction", "toEnableAnimationP", "durationAnimationP", "duration1AnimationP", "fillModeAnimationP",
        "transitionYEnable", "transitionYEnable1", "transitionXEnable", "transitionXEnable1", "checkAnimationTransition", "setFlagAnimTransitionCheckLimit",
        "toEnableAnimationP_2"]*/


    const tmp = ["checkLimit", "typeInput", "animationCSS", "textInput", "textValue", "colorStart", "colorEnd", "opacityNotCheck",
        "opacityCheck", "timeAnimation", "typeAnimFillMode", "colorLine",
        "displayCheck", "textDecoration", "textDecorationThickness", "textDecorationColor", "transitionTimingFunction",
        "toEnableAnimationP", "durationAnimationP", "duration1AnimationP", "fillModeAnimationP",
        "transitionYEnable", "transitionYEnable1", "transitionXEnable", "transitionXEnable1",
        "checkAnimationTransition", "setFlagAnimTransitionCheckLimit", "toEnableAnimationP_2", "setStopAnimation", "onAnim", "widthImg", "heightImg"]

    /*
        0: "checkLimit",
        1: "typeInput",
        2: "animationCSS",
        3: "textInput",
        4: "textValue",
        5: "colorStart",
        6: "colorEnd",
        7: "opacityNotCheck",
        8: "opacityCheck",
        9: "timeAnimation",
        10: "typeAnimFillMode",
        11: "colorLine",
        12: "displayCheck",
        13: "textDecoration",
        14: "textDecorationThickness",
        15: "textDecorationColor",
        16: "transitionTimingFunction",
        17: "toEnableAnimationP",
        18: "durationAnimationP",
        19: "duration1AnimationP",
        20: "fillModeAnimationP",
        21: "transitionYEnable",
        22: "transitionYEnable1",
        23: "transitionXEnable",
        24: "transitionXEnable1",
        25: "checkAnimationTransition",
        26: "setFlagAnimTransitionCheckLimit",
        27: "toEnableAnimationP_2",
        28: "setStopAnimation",
        29: "onAnim",
        30: "widthImg",
        31: "heightImg"

    */

    /*
    // Parte da 3 perchè non devo modificare "checkLimit", "textInput" e "textValue"
    for (let i = 3; i < variableArray.length; i++) {
        //if (variableArray[i] != rest.)
        //console.log(variableArray[i])
        //console.log(rest.get(tmp[i]))

        if (variableArray[i] != rest.get(tmp[i])) {
            checkboxesActions.changeValue(rest.get('id'), tmp[i], variableArray[i])
        }


    }
    */

    for (let i = 5; i < tmp.length; i++) {

        if (variableArray[i] != rest.get(tmp[i])) {
            if ((i != 25 && i != 28) && i != 29) {
                checkboxesActions.changeValue(rest.get('id'), tmp[i], variableArray[i])
            }
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

export function getPCheck (Check) {

    let CheckLabel, tmp, tmp1, duration, fillMode

    switch (Check.typeInput) {

        case 1:

            /*            let tmp = keyframes`
                          0% {
                            opacity: 0;
                            color: ${Check.colorStart};
                          }

                          25% {
                            opacity: ${Check.opacityNotCheck/4};
                            color: ${Check.colorStart};
                          }

                          50% {
                            opacity: ${Check.opacityNotCheck/2};
                            color: ${Check.colorStart};
                          }

                          75% {
                            opacity: ${Check.opacityNotCheck/4 + Check.opacityNotCheck/2};
                            color: ${Check.colorStart};
                          }

                          100% {
                             opacity: ${Check.opacityNotCheck};
                             color: ${Check.colorStart};
                          }
                      `;

                let tmp1 = keyframes`
                          0% {
                            opacity: 0;
                            color: ${Check.colorStart};
                          }

                          25% {
                            opacity: ${Check.opacityCheck/4};
                            color: ${Check.colorStart};
                          }

                          50% {
                            opacity: ${Check.opacityCheck/2};
                            color: ${Check.colorEnd};
                          }

                          75% {
                            opacity: ${Check.opacityCheck/4 + Check.opacityCheck/2};
                            color: ${Check.colorEnd};
                          }

                          100% {
                            opacity: ${Check.opacityCheck};
                            color: ${Check.colorEnd};
                          }
                      `;*/

            // CASO IN CUI ATTIVAZIONE DELL'ANIM ALLA TRANSIZIONE DEL MOUSE SOPRA IL TESTO

            if (Check.toEnableAnimationP) {

                let tmp = ( (!Check.transitionYEnable && !Check.transitionYEnable1) && (!Check.transitionXEnable && !Check.transitionXEnable1)) ? true : false

                /* GESTIONE SE SI VUOLE L'ANIM CON:
                    1: CHECKLIMIT TRUE
                    2: CHECKLIMIT FALSE
                    3: ENTRAMBI
                 */

                // CASO IN CUI SI VOLESSE O MENO DISATTIVARE L'ANIMAZIONE ATTIVA CON LA TRANSIZIONE DEL MOUSE O CLICK
                switch (Check.setStopAnimation){

                    case false:

                        switch (Check.setFlagAnimTransitionCheckLimit) {

                            case 1:

                                CheckLabel = styled.p`
                
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim ? `
                                        animation: ${(Check.checkAnimationTransition && Check.checkLimit) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                                    ` : ''}
                      
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    } 
                           
                                `;

                                break;

                            case 2:

                                CheckLabel = styled.p`
                
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim ? `
                                        animation: ${(Check.checkAnimationTransition && !Check.checkLimit) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                                    ` : ''}
                                    
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    } 
                           
                                `;

                                break;

                            case 3:

                                CheckLabel = styled.p`
                
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim ? `
                                        animation: ${(Check.checkAnimationTransition) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                                    ` : ''}
                                  
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    } 
                           
                                `;

                                break;

                            default:
                                return;
                        }

                        break;

                    case true:

                        switch (Check.setFlagAnimTransitionCheckLimit) {

                            case 1:

                                CheckLabel = styled.p`
                
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim ? `
                                        animation: ${(!Check.checkAnimationTransition && Check.checkLimit) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                                    ` : ''}
                      
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    } 
                           
                                `;

                                break;

                            case 2:

                                CheckLabel = styled.p`
                
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim ? `
                                        animation: ${(!Check.checkAnimationTransition && !Check.checkLimit) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                                    ` : ''}
                      
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    } 
                           
                                `;

                                break;

                            case 3:

                                CheckLabel = styled.p`
                
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim ? `
                                        animation: ${(!Check.checkAnimationTransition) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                                    ` : ''}
                                  
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    } 
                           
                                `;

                                break;

                            default:
                                return;
                        }

                        break;

                    default:
                        return;

                }


            } else {

                /* GESTIONE SE SI VUOLE L'ANIM CON:
                    1: CHECKLIMIT TRUE
                    2: CHECKLIMIT FALSE
                    3: ENTRAMBI
                 */

                let tmp = ( (!Check.transitionYEnable && !Check.transitionYEnable1) && (!Check.transitionXEnable && !Check.transitionXEnable1)) ? true : false

                switch (Check.setFlagAnimTransitionCheckLimit) {

                    case 1:

                        CheckLabel = styled.p`
                
                            display: ${Check.displayCheck};
                            opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                            color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                        
                            ${Check.onAnim ? `    
                                animation: ${(Check.checkLimit && Check.toEnableAnimationP_2) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                            ` : ''}
                          
                            @keyframes icon {
                                      0%,100%{
                                             transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                      }
                                      50% {
                                             transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                             transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                      }
                            } 
                   
                        `;

                        break;

                    case 2:

                        CheckLabel = styled.p`
                
                            display: ${Check.displayCheck};
                            opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                            color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                          
                            ${Check.onAnim ? `
                                animation: ${(!Check.checkLimit && Check.toEnableAnimationP_2) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                            ` : ''}
                          
                            @keyframes icon {
                                      0%,100%{
                                             transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                      }
                                      50% {
                                             transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                             transform: ${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                      }
                            } 
                   
                        `;

                        break;

                    case 3:

                        CheckLabel = styled.p`
                      
                            display: ${Check.displayCheck};
                            opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                            color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                          
                            ${Check.onAnim ? `
                                animation: ${(Check.toEnableAnimationP_2) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                            ` : ''}
                            
                            @keyframes icon {
                                      0%,100%{
                                             transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                      }
                                      50% {
                                             transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                             transform: ${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                      }
                            } 
                   
                        `;

                        break;

                }

            }

        break;

        case 2:

            // CASO IN CUI ATTIVAZIONE DELL'ANIM ALLA TRANSIZIONE DEL MOUSE SOPRA IL TESTO

            if (Check.toEnableAnimationP) {

                let tmpT = ( (!Check.transitionYEnable && !Check.transitionYEnable1) && (!Check.transitionXEnable && !Check.transitionXEnable1)) ? true : false

                /* GESTIONE SE SI VUOLE L'ANIM CON:
                    1: CHECKLIMIT TRUE
                    2: CHECKLIMIT FALSE
                    3: ENTRAMBI
                 */

                // CASO IN CUI SI VOLESSE O MENO DISATTIVARE L'ANIMAZIONE ATTIVA CON LA TRANSIZIONE DEL MOUSE O CLICK
                switch (Check.setStopAnimation) {

                    case true:

                        switch (Check.setFlagAnimTransitionCheckLimit) {

                            case 1:

                                CheckLabel = styled.p`
                
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim ? `
                                        animation: ${(!Check.checkAnimationTransition && Check.checkLimit) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP}, 
                                        line ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};`
                                    : Check.checkLimit ? `line ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                                    ` : ''}
                      
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmpT ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmpT ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    } 
                           
                                    @keyframes line { 
                                      
                                          from, to {                           
                                                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                                                text-decoration: ${Check.textDecoration};
                                                text-decoration-thickness: ${Check.textDecorationThickness};
                                                text-decoration-color: ${Check.textDecorationColor};
                                                transition-timing-function: clip-path ${Check.transitionTimingFunction} cubic-bezier(.25,.77,.74,.24);
                                          }
                                    }
                                    
                                `;

                                break;

                            case 2:

                                CheckLabel = styled.p`
                
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                    
                                    ${Check.onAnim ? `
                                        animation: ${(!Check.checkAnimationTransition && !Check.checkLimit) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` 
                                    : Check.checkLimit ? `line ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};`: ''};
                                    ` : ''}
                      
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmpT ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmpT ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    }
                                    
                                    @keyframes line {
                                          from, to {                           
                                                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                                                text-decoration: ${Check.textDecoration};
                                                text-decoration-thickness: ${Check.textDecorationThickness};
                                                text-decoration-color: ${Check.textDecorationColor};
                                                transition-timing-function: clip-path ${Check.transitionTimingFunction} cubic-bezier(.25,.77,.74,.24);
                                          }
                                    } 
                           
                                `;

                                break;

                            case 3:

                                CheckLabel = styled.p`
                
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim ? `
                                        animation: ${!Check.checkAnimationTransition ?
                                            `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP} ${Check.checkLimit ? `, line ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` 
                                                : ''}`
                                    : ''} 
                                    ` : ''}
                                  
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmpT ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmpT ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    }
                                    
                                    @keyframes line {
                                          from, to {                           
                                                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                                                text-decoration: ${Check.textDecoration};
                                                text-decoration-thickness: ${Check.textDecorationThickness};
                                                text-decoration-color: ${Check.textDecorationColor};
                                                transition-timing-function: clip-path ${Check.transitionTimingFunction} cubic-bezier(.25,.77,.74,.24);
                                          }
                                    }  
                           
                                `;

                                break;
                        }

                        break;

                    case false:

                        switch (Check.setFlagAnimTransitionCheckLimit) {

                            case 1:

                                CheckLabel = styled.p`
                        
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim ? `
                                        animation: ${(Check.checkAnimationTransition && Check.checkLimit) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP}, line ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` 
                                    : Check.checkLimit ? `line ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                                    ` : ''}
                      
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmpT ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmpT ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    } 
                           
                                    @keyframes line { 
                                      
                                          from, to {                           
                                                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                                                text-decoration: ${Check.textDecoration};
                                                text-decoration-thickness: ${Check.textDecorationThickness};
                                                text-decoration-color: ${Check.textDecorationColor};
                                                transition-timing-function: clip-path ${Check.transitionTimingFunction} cubic-bezier(.25,.77,.74,.24);
                                          }
                                    }
                                    
                                `;

                                break;

                            case 2:

                                CheckLabel = styled.p`
                        
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim ? `
                                        animation: ${(Check.checkAnimationTransition && !Check.checkLimit) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};`
                                    : Check.checkLimit ? `line ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};`: ''};
                                    ` : ''}
                      
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmpT ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmpT ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    }
                                    
                                    @keyframes line {
                                          from, to {                           
                                                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                                                text-decoration: ${Check.textDecoration};
                                                text-decoration-thickness: ${Check.textDecorationThickness};
                                                text-decoration-color: ${Check.textDecorationColor};
                                                transition-timing-function: clip-path ${Check.transitionTimingFunction} cubic-bezier(.25,.77,.74,.24);
                                          }
                                    } 
                           
                                `;

                                break;

                            case 3:

                                CheckLabel = styled.p`
                        
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                    
                                    ${Check.onAnim ? `
                                        animation: icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP} ${Check.checkLimit ? `, line ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : ';'}
                                    ` : ''}
                                  
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmpT ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmpT ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    }
                                    
                                    @keyframes line {
                                          from, to {                           
                                                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                                                text-decoration: ${Check.textDecoration};
                                                text-decoration-thickness: ${Check.textDecorationThickness};
                                                text-decoration-color: ${Check.textDecorationColor};
                                                transition-timing-function: clip-path ${Check.transitionTimingFunction} cubic-bezier(.25,.77,.74,.24);
                                          }
                                    }  
                           
                                `;

                                break;
                        }

                        break;

                    default:
                        return;
                }

            } else {

                /* GESTIONE SE SI VUOLE L'ANIM CON:
                    1: CHECKLIMIT TRUE
                    2: CHECKLIMIT FALSE
                    3: ENTRAMBI
                 */

                let tmpT = ( (!Check.transitionYEnable && !Check.transitionYEnable1) && (!Check.transitionXEnable && !Check.transitionXEnable1)) ? true : false

                switch (Check.setFlagAnimTransitionCheckLimit) {

                    case 1:

                        CheckLabel = styled.p`
                
                            display: ${Check.displayCheck};
                            opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                            color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                          
                            ${Check.onAnim ? `
                                animation: ${(Check.checkLimit && Check.toEnableAnimationP_2) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP}, line ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                            ` : ''}
                          
                            @keyframes icon {
                                      0%,100%{
                                             transform: ${tmpT ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                      }
                                      50% {
                                             transform: ${tmpT ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                             transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                      }
                            } 
                            
                            @keyframes line { 
                                  from, to {                           
                                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                                        text-decoration: ${Check.textDecoration};
                                        text-decoration-thickness: ${Check.textDecorationThickness};
                                        text-decoration-color: ${Check.textDecorationColor};
                                        transition-timing-function: clip-path ${Check.transitionTimingFunction} cubic-bezier(.25,.77,.74,.24);
                                  }
                            }
                   
                        `;

                        break;

                    case 2:

                        CheckLabel = styled.p`
                
                            display: ${Check.displayCheck};
                            opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                            color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                          
                            ${Check.onAnim ? `
                                animation: ${(!Check.checkLimit && Check.toEnableAnimationP_2) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : `line ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` };
                            ` : ''}
                            
                            @keyframes icon {
                                      0%,100%{
                                             transform: ${tmpT ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                      }
                                      50% {
                                             transform: ${tmpT ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                             transform: ${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                      }
                            }
                            
                            @keyframes line { 
                                  from, to {                           
                                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                                        text-decoration: ${Check.textDecoration};
                                        text-decoration-thickness: ${Check.textDecorationThickness};
                                        text-decoration-color: ${Check.textDecorationColor};
                                        transition-timing-function: clip-path ${Check.transitionTimingFunction} cubic-bezier(.25,.77,.74,.24);
                                  }
                            } 
                   
                        `;

                        break;

                    case 3:

                        console.log('OKOKOKOK')

                        CheckLabel = styled.p`
                      
                            display: ${Check.displayCheck};
                            opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                            color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                          
                            ${Check.onAnim ? `
                                animation: ${(Check.toEnableAnimationP_2) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP} ${Check.checkLimit ? `, line ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : ';' }` : ''};
                            ` : ''}
                          
                            @keyframes icon {
                                      0%,100%{
                                             transform: ${tmpT ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                      }
                                      50% {
                                             transform: ${tmpT ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                             transform: ${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                      }
                            }
                            
                            @keyframes line { 
                                  from, to {                           
                                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                                        text-decoration: ${Check.textDecoration};
                                        text-decoration-thickness: ${Check.textDecorationThickness};
                                        text-decoration-color: ${Check.textDecorationColor};
                                        transition-timing-function: clip-path ${Check.transitionTimingFunction} cubic-bezier(.25,.77,.74,.24);
                                  }
                            }  
                   
                        `;

                        break;
                }

            }


/*            tmp = keyframes`
                      
                      from, to {                           
                            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                            text-decoration: ${Check.textDecoration};
                            text-decoration-thickness: ${Check.textDecorationThickness};
                            text-decoration-color: ${Check.textDecorationColor};
                            transition-timing-function: clip-path ${Check.transitionTimingFunction} cubic-bezier(.25,.77,.74,.24);
                      }
                      
                  `;

            tmp1 = keyframes`  
                      
                      from, to {
                        opacity: ${Check.opacityNotCheck};
                        color: ${Check.colorStart};
                      }
                      
                  `;

            duration = (Check.style === null) ? '1s' : Check.style.duration
            fillMode = (Check.style === null) ? 'both' : Check.style.fillMode

            CheckLabel = styled.p`
                
                display: ${Check.displayCheck};
                
                ${Check.checkLimit ?
                `animation: ${tmp1} ${duration} ${fillMode};` :
                Check.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                 }  
                             
            `;*/

            break;

        case 3:

            /*            let tmp = keyframes`
              0% {
                opacity: 0;
                color: ${Check.colorStart};
              }

              25% {
                opacity: ${Check.opacityNotCheck/4};
                color: ${Check.colorStart};
              }

              50% {
                opacity: ${Check.opacityNotCheck/2};
                color: ${Check.colorStart};
              }

              75% {
                opacity: ${Check.opacityNotCheck/4 + Check.opacityNotCheck/2};
                color: ${Check.colorStart};
              }

              100% {
                 opacity: ${Check.opacityNotCheck};
                 color: ${Check.colorStart};
              }
          `;

    let tmp1 = keyframes`
              0% {
                opacity: 0;
                color: ${Check.colorStart};
              }

              25% {
                opacity: ${Check.opacityCheck/4};
                color: ${Check.colorStart};
              }

              50% {
                opacity: ${Check.opacityCheck/2};
                color: ${Check.colorEnd};
              }

              75% {
                opacity: ${Check.opacityCheck/4 + Check.opacityCheck/2};
                color: ${Check.colorEnd};
              }

              100% {
                opacity: ${Check.opacityCheck};
                color: ${Check.colorEnd};
              }
          `;*/

            // CASO IN CUI ATTIVAZIONE DELL'ANIM ALLA TRANSIZIONE DEL MOUSE SOPRA IL TESTO

            if (Check.toEnableAnimationP) {

                let tmp = ( (!Check.transitionYEnable && !Check.transitionYEnable1) && (!Check.transitionXEnable && !Check.transitionXEnable1)) ? true : false

                /* GESTIONE SE SI VUOLE L'ANIM CON:
                    1: CHECKLIMIT TRUE
                    2: CHECKLIMIT FALSE
                    3: ENTRAMBI
                 */

                // CASO IN CUI SI VOLESSE O MENO DISATTIVARE L'ANIMAZIONE ATTIVA CON LA TRANSIZIONE DEL MOUSE O CLICK
                switch (Check.setStopAnimation){

                    case true:

                        switch (Check.setFlagAnimTransitionCheckLimit) {

                            case 1:

                                CheckLabel = styled.p`
                
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim ? `
                                        animation: ${(Check.checkLimit && !Check.checkAnimationTransition) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                                    ` : '' }
                      
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    } 
                           
                                `;

                                break;

                            case 2:

                                console.log('2', Check.checkLimit, Check.checkAnimationTransition)
                                CheckLabel = styled.p`
                
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim ? `
                                        animation: ${(!Check.checkLimit && !Check.checkAnimationTransition) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                                    ` : '' }
                      
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    } 
                           
                                `;

                                break;

                            case 3:

                                CheckLabel = styled.p`
                
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim && !Check.checkAnimationTransition ? `
                                        animation: icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};                            
                                    ` : '' }
                                  
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    } 
                           
                                `;

                                break;
                        }
                        break;

                    case false:

                        switch (Check.setFlagAnimTransitionCheckLimit) {

                            case 1:

                                CheckLabel = styled.p`
                
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim ? `
                                        animation: ${(Check.checkLimit && Check.checkAnimationTransition) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                                    ` : '' }
                      
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    } 
                           
                                `;

                                break;

                            case 2:

                                console.log('2', Check.checkLimit, Check.checkAnimationTransition)
                                CheckLabel = styled.p`
                        
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim ? `
                                        animation: ${(!Check.checkLimit && Check.checkAnimationTransition) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                                    ` : '' }
                                    
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    } 
                           
                                `;

                                break;

                            case 3:

                                CheckLabel = styled.p`
                        
                                    display: ${Check.displayCheck};
                                    opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                                    color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                  
                                    ${Check.onAnim && Check.checkAnimationTransition ? `
                                        animation: icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};
                                    ` : '' }
                                  
                                    @keyframes icon {
                                              0%,100%{
                                                     transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                                     transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                              }
                                              50% {
                                                     transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                                     transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                                     transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                                     transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                              }
                                    } 
                           
                                `;

                                break;
                        }

                        break;

                    default:
                        return;
                }

            } else {

                /* GESTIONE SE SI VUOLE L'ANIM CON:
                    1: CHECKLIMIT TRUE
                    2: CHECKLIMIT FALSE
                    3: ENTRAMBI
                 */

                let tmp = ( (!Check.transitionYEnable && !Check.transitionYEnable1) && (!Check.transitionXEnable && !Check.transitionXEnable1)) ? true : false

                switch (Check.setFlagAnimTransitionCheckLimit) {

                    case 1:

                        CheckLabel = styled.p`
                
                            display: ${Check.displayCheck};
                            opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                            color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                                
                            ${Check.onAnim ? `                     
                                animation: ${(Check.checkLimit && Check.toEnableAnimationP_2) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                            ` : ''}
                            
                            @keyframes icon {
                                      0%,100%{
                                             transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                      }
                                      50% {
                                             transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                             transform:${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                      }
                            } 
                   
                        `;

                        break;

                    case 2:

                        CheckLabel = styled.p`
                
                            display: ${Check.displayCheck};
                            opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                            color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                          
                            ${Check.onAnim ? ` 
                                animation: ${(!Check.checkLimit && Check.toEnableAnimationP_2) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                            ` : ''}
                          
                            @keyframes icon {
                                      0%,100%{
                                             transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                      }
                                      50% {
                                             transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                             transform: ${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                      }
                            } 
                   
                        `;

                        break;

                    case 3:

                        CheckLabel = styled.p`
                      
                            display: ${Check.displayCheck};
                            opacity: ${Check.checkLimit ? Check.opacityCheck : Check.opacityNotCheck};
                            color: ${Check.checkLimit ? Check.colorEnd : Check.colorStart};
                          
                            ${Check.onAnim ? `
                                animation: ${(Check.toEnableAnimationP_2) ? `icon ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};` : '' };
                            ` : ''}
                          
                            @keyframes icon {
                                      0%,100%{
                                             transform: ${tmp ? 'translateY(0px)' : Check.transitionYEnable ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(0px)' : ''};
                                             transform: ${Check.transitionXEnable ? 'translateX(0px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(0px)' : ''};
                                      }
                                      50% {
                                             transform: ${tmp ? 'translateY(3px)' : Check.transitionYEnable ? 'translateY(3px)' : ''};
                                             transform: ${Check.transitionYEnable1 ? 'translateY(-3px)' : ''};
                                             transform: ${Check.transitionXEnable ? 'translateX(3px)' : ''};
                                             transform: ${Check.transitionXEnable1 ? 'translateX(-3px)' : ''};
                                      }
                            } 
                   
                        `;

                        break;
                }

            }

            break;

        default:
            return;
    }

    return CheckLabel
}

export function getIMGCheck (Check) {

    let CheckLabel, tmp, tmp1, duration, fillMode

    switch (Check.typeInput) {

        case 1:
        case 2:

            /*            let tmp = keyframes`
                          0% {
                            opacity: 0;
                            color: ${Check.colorStart};
                          }

                          25% {
                            opacity: ${Check.opacityNotCheck/4};
                            color: ${Check.colorStart};
                          }

                          50% {
                            opacity: ${Check.opacityNotCheck/2};
                            color: ${Check.colorStart};
                          }

                          75% {
                            opacity: ${Check.opacityNotCheck/4 + Check.opacityNotCheck/2};
                            color: ${Check.colorStart};
                          }

                          100% {
                             opacity: ${Check.opacityNotCheck};
                             color: ${Check.colorStart};
                          }
                      `;

                let tmp1 = keyframes`
                          0% {
                            opacity: 0;
                            color: ${Check.colorStart};
                          }

                          25% {
                            opacity: ${Check.opacityCheck/4};
                            color: ${Check.colorStart};
                          }

                          50% {
                            opacity: ${Check.opacityCheck/2};
                            color: ${Check.colorEnd};
                          }

                          75% {
                            opacity: ${Check.opacityCheck/4 + Check.opacityCheck/2};
                            color: ${Check.colorEnd};
                          }

                          100% {
                            opacity: ${Check.opacityCheck};
                            color: ${Check.colorEnd};
                          }
                      `;*/

            const tmp = keyframes`

                 to {
                    filter: grayscale(0%);
                    // transform: scale(1.1);
                 }
                 
            `;

            const tmp1 = keyframes`

                 from {
                    filter: grayscale(0%);
                    // transform: scale(1.1);
                 }
                 
            `;

            duration = (Check.style === null) ? '1s' : Check.style.duration
            fillMode = (Check.style === null) ? 'both' : Check.style.fillMode

            CheckLabel = styled.img`

                display: ${Check.displayCheck};
                width: ${Check.widthImg};
                height: ${Check.heightImg};
                filter: grayscale(100%);
                transition: .5s;
                 
                ${Check.checkLimit ?
                    `animation: ${tmp1} ${duration} ${fillMode};` :
                    Check.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                }  
                                             
            `;

            break;

        case 3:

            CheckLabel = styled.img`
                display: ${Check.displayCheck};
                width: ${Check.widthImg};
                height: ${Check.heightImg};
                filter: grayscale(100%);
                transition: .5s;
            `;

            break;

        default:
            return;
    }

    return CheckLabel
}

// NO
export function getInputCheck (Check) {

    let InputCheck = styled.input`

                             
            `;

    return InputCheck
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
    colorLine: PropTypes.string,

    displayCheck: PropTypes.string,
    textDecoration: PropTypes.string,
    textDecorationThickness: PropTypes.string,
    textDecorationColor: PropTypes.string,
    transitionTimingFunction: PropTypes.string,

    toEnableAnimationP: PropTypes.bool,
    durationAnimationP: PropTypes.string,
    duration1AnimationP: PropTypes.string,
    fillModeAnimationP: PropTypes.string,

    transitionYEnable: PropTypes.bool,
    transitionYEnable1: PropTypes.bool,
    transitionXEnable: PropTypes.bool,
    transitionXEnable1: PropTypes.bool,

    checkAnimationTransition: PropTypes.bool,
    setFlagAnimTransitionCheckLimit: PropTypes.number,
    toEnableAnimationP_2: PropTypes.bool,

    setStopAnimation: PropTypes.bool,
    onAnim: PropTypes.bool,

    widthImg: PropTypes.string,
    heightImg: PropTypes.string

}

export default checkboxes
