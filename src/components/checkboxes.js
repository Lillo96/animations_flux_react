import React from 'react'
import PropTypes from 'prop-types'
import checkboxesActions from "../data/checkboxes/checkboxesActions"
import getAnimation from "../data/animation"
import CSSRootActions from "../data/CSSRoot/CSSRootActions"
import {getCheckboxes} from "../imp";

import styled, {css, keyframes} from "styled-components"

function checkboxes({
    id, checkLimit, typeInput, duration, timing, delay, iterations,
    direction, fillMode, playState, ...rest
}) {
    let animation
    let role
    let CSS
    let checkboxObj
    let Ex
    let Ex2
    let tmpAnimation
    let tmpCSS

   if (!rest.checkboxes.state.has(id)) {
        //console.log('ID DENTRO NEW CHECKBOXES' ,id)
        animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState })
       //console.log(animation)
       checkboxesActions.newCheckboxes(
            id, checkLimit, typeInput, duration, timing, delay,
            iterations, direction, fillMode, playState
        )
       console.log("Dentro !rest")

       //Ex2 = cssStyles(true, 1)

       tmpCSS = cssStylesKeyFrames(true,1)
   } else {
       console.log("Dentro else di !rest", rest.checkboxes.state.get(id).get('checkLimit'))

        const checkboxObj = rest.checkboxes.state.get(id)
        //console.log(checkboxObj)
        //console.log(checkboxObj.style)
        animation = getAnimation(id, {}, checkboxObj.style)
        //console.log(animation)

        //console.log('ID', id)


        //console.log('CHECKFRAM', checkboxesKeyFrames(checkboxObj))
        //CSSRootActions.addRule(id, checkboxesKeyFrames(checkboxObj))
        //Ex = cssStyles(checkLimit, typeInput)

       console.log(rest.checkboxes.state.get(id))
       //const checkboxObj = rest.checkboxes.state.get(id)

       Ex2 = cssStyles(rest.checkboxes.state.get(id).get('checkLimit'), rest.checkboxes.state.get(id).get('typeInput'))

       tmpCSS = cssStylesKeyFrames(rest.checkboxes.state.get(id).get('checkLimit'), rest.checkboxes.state.get(id).get('typeInput'))
   }
    //console.log(rest.checkboxes.state.get(id))
    //checkboxObj = rest.checkboxes.state.get(id)
    //Ex = cssStyles(checkboxObj.get('checkLimit'), checkboxObj.get('typeInput'))


    const KeyFrames = styled.div`
          animation: ${tmpCSS} both;
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

    console.log("AAA", checkLimit)
    if (checkLimit){
        console.log('true')

        switch (typeInput) {
            case 1 :
                console.log("CC", typeInput)

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

                 tmp = keyframes`  
                      from {
                        opacity: 0;
                        color: black;
                      }
                    
                      to {
                         opacity: 0.8;
                         color: white;
                      }
                  `;

                break;

            case 2 :
                console.log("BB", typeInput)

                tmp = keyframes`  
                      from {
                        opacity: 0;
                        color: white;
                      }
                    
                      to {
                         opacity: 0.8;
                         color: white;
                      }
                  `;

                break;

        }


    } else {
        console.log('tmp = 1')
        console.log("QQ", typeInput)
        switch (typeInput) {
            case 1 :
                console.log("GG", typeInput)

                /*tmp = keyframes`
                     from {
                        opacity: 0;
                        color: red;
                     }

                      to {
                        opacity: 1;
                        color: red;
                       }
                `;
                */

                tmp = keyframes`  
                      from {
                        opacity: 0;
                        color: red;
                      }
                    
                      to {
                        opacity: 1;
                        color: red;
                      }
                  `;


                break;

            case 2 :
                console.log("OO", typeInput)

                tmp = keyframes`  
                      from {
                        opacity: 0.5;
                        color: black;
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
                  `;

                //originFrame = '@keyframes ' + state.get('id') + ' {\nfrom {\n opacity: 0.5;\n color: black\n }\n\n'
                //endFrame = 'to {\n opacity: ' + tmp + ';\n content: \'\';\n display: block\n width: 0%;\n height: 2px;\n background-color: #000;\n position: absolute;\n top: 50%;\n left: 7.5%;\n transform: translateY(-50%);\n transition: width 100ms ease-in-out;\n }\n\n}\n\n'
                //endFrame = 'to {\n color: white; opacity: 0.5;\n clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n text-decoration-color: black;\n text-decoration: line-through;\n text-decoration-thickness: 3px;\n text-decoration-color: red;\n transition: clip-path 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n }\n\n}\n\n'


                break;

        }
    }

    return tmp
}

function cssStyles(checkLimit, typeInput) {

    //console.log(state)

    //let typeCL = state.get('typeInput')
    let tmp

    console.log("AAA", checkLimit)
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
