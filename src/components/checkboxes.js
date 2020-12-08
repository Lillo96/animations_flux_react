import React from 'react'
import PropTypes from 'prop-types'
import checkboxesActions from "../data/checkboxes/checkboxesActions"
import getAnimation from "../data/animation"

import styled, {keyframes} from "styled-components"

function checkboxes({
    id, checkLimit, typeInput, animationCSS, textInput, textValue, duration, timing, delay, iterations,
    direction, fillMode, playState, ...rest
}) {
    let animation
    let getAnimationCSS

   if (!rest.checkboxes.state.has(id)) {
       console.log("Dentro !rest")

       animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState })
       //console.log(animation)

       checkboxesActions.newCheckboxes(
            id, checkLimit, typeInput, animationCSS, textInput, textValue, duration, timing, delay,
            iterations, direction, fillMode, playState
        )
       setAnimationCSS(id, cssStylesKeyFrames(true,1))

   } else {
        console.log("Dentro else di !rest")

        const checkboxObj = rest.checkboxes.state.get(id)

        animation = getAnimation(id, {}, checkboxObj.style)
        //console.log(animation)

        setAnimationCSS(id, cssStylesKeyFrames(rest.checkboxes.state.get(id).get('checkLimit'), rest.checkboxes.state.get(id).get('typeInput')))
        getAnimationCSS = rest.checkboxes.state.get(id).get('animationCSS')

   }


   const KeyFrames = styled.div`
          animation: 1s ${getAnimationCSS} both;
       `;

   return (

       <div id={id} style={animation} {...rest}>
            <KeyFrames>
               { rest.children }
            </KeyFrames>
       </div>
   )
}

function cssStylesKeyFrames(checkLimit, typeInput) {

    let tmp

    //console.log("AAA", checkLimit)
    if (checkLimit){
        //console.log('true')

        switch (typeInput) {
            case 1:
                //console.log("CC", typeInput)
                tmp = keyframes`  
                      0% {
                        opacity: 0;
                        color: black;
                      }
                      
                      25% {
                        opacity: 0.25;
                        color: black;
                      }
                      
                      50% {
                        opacity: 0.5;
                        color: white;
                      }
                      
                      75% {
                        opacity: 0.75;
                        color: white;
                      }
                    
                      100% {
                         opacity: 0.8;
                         color: white;
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
                        color: black;
                      }
                      
                      25% {
                        opacity: 0.25;
                        color: black;
                      }
                      
                      50% {
                        opacity: 0.5;
                        color: white;
                      }
                      
                      75% {
                        opacity: 0.75;
                        color: white;
                      }
                    
                      100% {
                         opacity: 0.8;
                         color: white;
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
                        color: black;
                      }
                      
                      25% {
                        opacity: 0.25;
                        color: black;
                      }
                      
                      50% {
                        opacity: 0.5;
                        color: white;
                      }
                      
                      75% {
                        opacity: 0.75;
                        color: white;
                      }
                    
                      100% {
                         opacity: 0.8;
                         color: white;
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
                //console.log("GG", typeInput)

                tmp = keyframes`  
                      0% {
                        opacity: 0;
                        color: white;
                      }
                      
                      25% {
                        opacity: 0.25;
                        color: white;
                      }
                      
                      50% {
                        opacity: 0.5;
                        color: red;
                      }
                      
                      75% {
                        opacity: 0.75;
                        color: red;
                      }
                    
                      100% {
                        opacity: 1;
                        color: red;
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
                        color: white;
                      }
                      
                      25% {
                        opacity: 0.25;
                        color: white;
                      }
                      
                      50% {
                        color: white;
                        opacity: 0.5;
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                        text-decoration-color: black;
                        text-decoration: line-through;
                        text-decoration-thickness: 3px;
                        text-decoration-color: red;
                        transition: clip-path 300ms cubic-bezier(0.25, 0.46, 0.35, 0.74);
                      }
                      
                      75% {
                        color: white;
                        opacity: 0.75;
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                        text-decoration-color: black;
                        text-decoration: line-through;
                        text-decoration-thickness: 3px;
                        text-decoration-color: red;
                        transition: clip-path 300ms cubic-bezier(0.25, 0.46, 0.40, 0.84);
                      }
                    
                      100% {
                        color: white;
                        opacity: 1;
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                        text-decoration-color: black;
                        text-decoration: line-through;
                        text-decoration-thickness: 3px;
                        text-decoration-color: red;
                        transition: clip-path 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
                        color: white;
                      }
                      
                      25% {
                        opacity: 0.25;
                        color: white;
                      }
                      
                      50% {
                        opacity: 0.5;
                        color: red;
                      }
                      
                      75% {
                        opacity: 0.75;
                        color: red;
                      }
                    
                      100% {
                        opacity: 1;
                        color: red;
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
    //console.log(value)
    checkboxesActions.changeValue(this.id, 'checkLimit', value)
}

export function setAnimationCSS (id, value) {
    //console.log(value)
    checkboxesActions.changeValue(id, 'animationCSS', value)
}

export function setTextValue (valueCheck, valueText) {
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
    textValue: PropTypes.string
}

export default checkboxes
