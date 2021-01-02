import React from 'react'
import PropTypes from 'prop-types'
import cardsActions from "../data/cards/cardsActions"
import getAnimation from "../data/animation"

import styled, {keyframes, css} from "styled-components"
import checkboxesActions from "../data/checkboxes/checkboxesActions";

function cards({
    id, checkLimit, typeInput, animationCSS, textInput, textValue, duration, timing, delay, iterations,
    direction, fillMode, playState, ...rest
}) {

    let animation, flipped
    let getAnimationCSS, getAnimationCSS_1

    if (!rest.cards.state.has(id)) {

        animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState })
        //console.log(animation)

        cardsActions.newCards(
            id, checkLimit, typeInput, animationCSS, textInput, textValue, duration, timing, delay,
            iterations, direction, fillMode, playState
        )

        setAnimationCSS(id, cssStylesKeyFrames(true,1))

    } else {

        //console.log("Dentro else di !rest")

        const cardObj = rest.cards.state.get(id)

        animation = getAnimation(id, {}, cardObj.style)
        //console.log(animation)

        //setAnimationCSS(id, cssStylesKeyFrames(rest.checkboxes.state.get(id).get('checkLimit'), rest.checkboxes.state.get(id).get('typeInput')))
        setAnimationCSS(id, cssStylesKeyFrames(true,1))
        getAnimationCSS = rest.cards.state.get(id).get('animationCSS')
        // getAnimationCSS_1 = setKeyframes2(rest.checkboxes.state.get(id).get('checkLimit'), rest.checkboxes.state.get(id).get('typeInput'))

    }

    /*const CardContainer = styled.div`
            display: flex;
            flex-direction: column;
            transition: z-index 500ms, transform 500ms;
            z-index: 0;
            -webkit-perspective: 1000px;
            transform-style: preserve-3d;
            
            &.flipped {
                z-index: 1;
            }
       `;

    const CardSide = css`
        width: 100%;
        min-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        -moz-backface-visibility: none;
        -webkit-backface-visibility: none;
        backface-visibility: none;
        border: 2px solid #0d0d0d;
    `;

    const CardFront = styled.div`
        ${CardSide}
        z-index: 0;
        background: #d7d7d7;
    `;

    const CardBack = styled.div`
        ${CardSide}
        transform: rotateY(-180deg) translate(100%, 0);
        background: #d7d7d7;
        z-index: 1;
    `;

    const CardInner = styled.div`
        flex: 1;
        display: flex;
        transition: transform 500ms;
        transform-style: preserve-3d;
        
        &.flipped {
            transform: rotateY(180deg);
        }
    `;*/

    //const [flipped, setFlipped ] = React.useState(false);

    return (
        <div id={id} style={animation} {...rest}>
            { rest.children }
        </div>
    )
}


export function setAnimationCSS (id, value) {
    //console.log(value)
    cardsActions.changeValue(id, 'animationCSS', value)
}

function cssStylesKeyFrames(checkLimit, typeInput) {

    let tmp

    tmp = keyframes`
        .flip3D {
            width: 240px;
            height: 200px;
            margin: 10px;
            float: left;
        }
    
    `;

    /*if (checkLimit){
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

                /!*tmp = keyframes`
                      from {
                        opacity: 0;
                        color: white;
                      }

                      to {
                        opacity: 1;
                        color: red;
                      }
                  `;*!/

                break;

            default:
                return
        }
    }*/

    return tmp
}

export function setCheckLimitCards (value) {
    //console.log(value)
    cardsActions.changeValue(this.id, 'checkLimit', value)
}

cards.propType = {
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

export default cards
