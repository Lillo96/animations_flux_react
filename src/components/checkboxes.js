import React from 'react'
import PropTypes from 'prop-types'
import checkboxesActions from "../data/checkboxes/checkboxesActions"
import getAnimation from "../data/animation"

import styled, {keyframes, css } from "styled-components"

let tmp_CardID

function checkboxes({
    id, checkLimit, typeInput, animationCSS, textInput, textValue, colorStart, colorEnd, opacityNotCheck,
    opacityCheck, timeAnimation, typeAnimFillMode, colorLine,
    displayCheck, textDecoration, textDecorationThickness, textDecorationColor, transitionTimingFunction,
    toEnableAnimationP, durationAnimationP, duration1AnimationP, fillModeAnimationP,
    transitionYEnable, transitionYEnable1, transitionXEnable, transitionXEnable1,
    checkAnimationTransition, setFlagAnimTransitionCheckLimit, toEnableAnimationP_2, setStopAnimation, onAnim,
    widthImg, heightImg, textValue2, textValueFinal, textValue1,
    duration, timing, delay, iterations, direction, fillMode, playState, ...rest
}) {
    let animation

      if (!rest.checkboxes.state.has(id)) {

           animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState })

           /*checkboxesActions.newCheckboxes(
               id, checkLimit, typeInput, animationCSS, textInput, textValue, colorStart, colorEnd, opacityNotCheck,
               opacityCheck, timeAnimation, typeAnimFillMode, colorLine,
               displayCheck, textDecoration, textDecorationThickness, textDecorationColor, transitionTimingFunction,
               toEnableAnimationP, durationAnimationP, duration1AnimationP, fillModeAnimationP,
               transitionYEnable, transitionYEnable1, transitionXEnable, transitionXEnable1,
               checkAnimationTransition, setFlagAnimTransitionCheckLimit, toEnableAnimationP_2, setStopAnimation, onAnim,
               widthImg, heightImg, textValue2, textValueFinal, textValue1,
               duration, timing, delay, iterations, direction, fillMode, playState,
            )*/

           tmp_CardID = id // NEW

       } else {

           const variableArray = [ checkLimit, typeInput, animationCSS, textInput, textValue, colorStart, colorEnd, opacityNotCheck,
               opacityCheck, timeAnimation, typeAnimFillMode, colorLine,
               displayCheck, textDecoration, textDecorationThickness, textDecorationColor, transitionTimingFunction,
               toEnableAnimationP, durationAnimationP, duration1AnimationP, fillModeAnimationP,
               transitionYEnable, transitionYEnable1, transitionXEnable, transitionXEnable1,
               checkAnimationTransition, setFlagAnimTransitionCheckLimit, toEnableAnimationP_2, setStopAnimation, onAnim,
               widthImg, heightImg, textValue2, textValueFinal, textValue1] // NEW

           const cardObj = rest.checkboxes.state.get(id) // NEW

           animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState }, cardObj.style) // NEW

           tmp_CardID = rest.checkboxes.state.get(id).get('id') // NEW

           checkValue(variableArray, rest.checkboxes.state.get(id))
       }

       return (
            <div id={id} style={animation} {...rest}>
                {rest.children }
            </div>
       )

}

function checkValue (variableArray, rest) {

    const tmp = ["checkLimit", "typeInput", "animationCSS", "textInput", "textValue", "colorStart", "colorEnd", "opacityNotCheck",
        "opacityCheck", "timeAnimation", "typeAnimFillMode", "colorLine",
        "displayCheck", "textDecoration", "textDecorationThickness", "textDecorationColor", "transitionTimingFunction",
        "toEnableAnimationP", "durationAnimationP", "duration1AnimationP", "fillModeAnimationP",
        "transitionYEnable", "transitionYEnable1", "transitionXEnable", "transitionXEnable1",
        "checkAnimationTransition", "setFlagAnimTransitionCheckLimit", "toEnableAnimationP_2", "setStopAnimation", "onAnim", "widthImg", "heightImg",
        "textValue2", "textValueFinal", "textValue1"
    ]

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
        31: "heightImg",
        32: "textValue2",
        33: "textValueFinal"
        34: "textValue1"
    */

    for (let i = 1; i < tmp.length; i++) {

        if ( (variableArray[i] !== undefined ) && (variableArray[i] !== rest.get(tmp[i]))) {
            if (i !== 4) {
                if (i !== 25) {
                    if (i !== 33) {
                        checkboxesActions.changeValue(rest.get('id'), tmp[i], variableArray[i])
                    }
                }
            }
        }
    }

    if (rest.get('textValueFinal') === '') {
        checkboxesActions.changeValue(rest.get('id'), 'textValueFinal', variableArray[34])
    }


}

export function getPCheck (Check) {

    let CheckLabel, tmp, tmp1, duration, fillMode

    switch (Check.typeInput) {

        case 1:

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
                                    : Check.checkLimit ? `line ${Check.durationAnimationP} ${Check.duration1AnimationP} ${Check.fillModeAnimationP};`: '' } 
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

            break;

        case 3:

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
                    css`animation: ${tmp1} ${duration} ${fillMode};` :
                    Check.checkLimit === null ? '' : css `animation: ${tmp} ${duration} ${fillMode};`
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
    textValue: PropTypes.bool,
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
    heightImg: PropTypes.string,
    textValue2: PropTypes.string,
    textValueFinal: PropTypes.string,
    textValue1: PropTypes.string

}

export default checkboxes
