import React from 'react'
import PropTypes from 'prop-types'
import cardsActions from "../data/cards/cardsActions"
import getAnimation from "../data/animation"

import styled, {keyframes, css} from "styled-components"

let tmp_CardID

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
            // NON DOVREBBE SERVIRE
        //setAnimationCSS(id, cssStylesKeyFrames(true,1))

        tmp_CardID = id
    } else {

        //console.log("Dentro else di !rest")

        const cardObj = rest.cards.state.get(id)

        animation = getAnimation(id, {}, cardObj.style)
        //console.log(animation)

        //setAnimationCSS(id, cssStylesKeyFrames(rest.checkboxes.state.get(id).get('checkLimit'), rest.checkboxes.state.get(id).get('typeInput')))

            // NON DOVREBBE SERVIRE
        //setAnimationCSS(id, cssStylesKeyFrames(true,1))
        //getAnimationCSS = rest.cards.state.get(id).get('animationCSS')

        // getAnimationCSS_1 = setKeyframes2(rest.checkboxes.state.get(id).get('checkLimit'), rest.checkboxes.state.get(id).get('typeInput'))

        tmp_CardID = rest.cards.state.get(id).get('id')
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

export function getImageArea() {

    const ImageArea = styled.div`
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          position: absolute;
          
       `;

    return ImageArea
}

export function getImageWrapper() {

    /*const ImageWrapper = styled.div`
          width: 300px;
          height: 400px;
          position: relative;
          overflow: hidden;
       `;*/


    /*const HeaderImg = styled.img.attrs({
        src: 'https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    })`
        height: 400px;
        width: 300px;
        filter: grayscale(100%);
        transition: 2s;
     `;*/


    /*const Img = styled.img`
        height: 400px;
        width: 300px;
        filter: grayscale(100%);
        transition: 2s;
    `;
*/
    const ImageWrapper = styled.div`
          width: 300px;
          height: 400px;
          position: relative;
          overflow: hidden;
          
          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 180%;
            height: 100%;
            width: 100%;
            background: rgba(255,255,255,.3);
            z-index: 1;
            transform: skew(45deg);
            transition: .5s;
          }
          
          &:hover:before {
            left: -180%;
          }
          
          

       `;

    return ImageWrapper
}

export function getHeaderImage() {
    const HeaderImg = styled.img.attrs({
        src: 'https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    })`
        height: 400px;
        width: 300px;
        filter: grayscale(100%);
        transition: 2s;
        
        &:hover {
            filter: grayscale(0%);
            transform: scale(1.1);
          }
        
         
          
     `;

    return HeaderImg
}

export function getName() {

    const Name = styled.h2`
        background: tomato;
        font-family: Poppins;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        margin: 0;
        padding: 10px 0;
        position: absolute;
        bottom: 0;
        width: 100%;
        transform: perspective(400px) rotateY(90deg);
        transform-origin: right;
        transition: 1s;
        
        &:hover {
            transform: perspective(400px) rotateY(0deg);
        }
    `;

    return Name
}

export function getIconUL() {

    const IconUL = styled.ul`
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        list-style: none;
        background: rgba(255,255,255,0);
    `;

    return IconUL
}

export function getIconLi() {

    const IconLI = styled.li`
        background: #333;
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 40px;
        transform: perspective(800px) rotateY(90deg);
        transition: .5s;
        transform-origin: left;
        
        &:hover {
            transform: perspective(800px) rotateY(0deg);
        }
    `;

    return IconLI

}

export function getCardContainer(idCardHTML) {
    //let CardContainer
    console.log('fuori')

    //console.log("ID", idCardHTML)
    //console.log("TMP_CARD", tmp_CardID)
    //if (idCardHTML === tmp_CardID) {
        console.log('dentro')
        const CardContainer = styled.div`
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
    //}

    return CardContainer
}

export function getCardFront(idCardHTML) {
    //let CardFront
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

    //if (idCardHTML === tmp_CardID) {
        const CardFront = styled.div`
        
        ${CardSide}
        
        z-index: 0;
        background: #d7d7d7;
    `;
   // }

    return CardFront
}

export function getCardBack(idCardHTML) {
    //let CardBack

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

    //if (idCardHTML === tmp_CardID) {
        const CardBack = styled.div`
        
        ${CardSide}
        
        
        transform: rotateY(180deg) translate(100%, 0);
        background: #d7d7d7;
        z-index: 1;
    `;
   // }

    return CardBack
}

export function getCardInner(idCardHTML) {
    //let CardInner

    //if (idCardHTML === tmp_CardID) {
        const CardInner = styled.div`
        flex: 1;
        display: flex;
        transition: transform 500ms;
        transform-style: preserve-3d;

        &.flipped {
            transform: rotateY(180deg);
        }
        `;
    //}

    return CardInner
}

export function getCardCenter() {

    const CardCenter = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        
       `;

    return CardCenter
}

export function getCard() {

    const Card = styled.div`
       
        width: 450px;
        height: 250px;
        background-color: #fff;
        background: linear-gradient(#f8f8f8, #fff);
        box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
        border-radius: 6px;
        overflow: hidden;
        position: relative;
        margin: 1.5rem;
       `;

    return Card
}

export function getAdditional() {

    const Additional = styled.div`
       
        position: absolute;
        width: 150px;
        height: 100%;
        background: linear-gradient(#dE685E, #EE786E);
        transition: width 0.4s;
        overflow: hidden;
        z-index: 2;
       `;

    return Additional
}

export function getUserCard() {

    const UserCard = styled.div`
       
        position: absolute;
        width: 150px;
        height: 100%;
        background: linear-gradient(#dE685E, #EE786E);
        transition: width 0.4s;
        overflow: hidden;
        z-index: 2;
       `;

    return UserCard
}

export function getLevelCenter() {

    const LevelCenter = styled.div`
        top: 15%;
        color: #fff;
        text-transform: uppercase;
        font-size: 0.75em;
        font-weight: bold;
        background: rgba(0,0,0,0.15);
        padding: 0.125rem 0.75rem;
        border-radius: 100px;
        white-space: nowrap;
       `;

    return LevelCenter
}

export function getPointsCenter() {

    const PointsCenter = styled.div`
        top: 15%;
        color: #fff;
        text-transform: uppercase;
        font-size: 0.75em;
        font-weight: bold;
        background: rgba(0,0,0,0.15);
        padding: 0.125rem 0.75rem;
        border-radius: 100px;
        white-space: nowrap;
        
        top: 85%;
       `;

    return PointsCenter
}

export function getSvg() {

    const cssSvg = css`
         width: 110px;
         height: 110px;
         viewBox: 0 0 250 250;
         xmlns: "http://www.w3.org/2000/svg"; 
         role: img;
         aria-labelledby: title desc;
    `;

    const Svg = styled.div`
        ${cssSvg}
    
        top: 50%;
       `;

    return Svg
}

export function getMoreInfo() {

    const MoreInfo = styled.div`
         width: 300px;
         float: left;
         position: absolute;
         left: 150px;
         height: 100%;
       `;

    return MoreInfo
}

export function getMoreInfoName() {

    const Name = styled.h1`
        color: #fff;
        margin-bottom: 0;
       `;

    return Name
}

export function getCoords() {

    const Coords = styled.div`
        margin: 0 1rem;
        color: #fff;
        font-size: 1rem;
       `;

    return Coords
}

export function getStats() {

    const Stats = styled.div`
        font-size: 2rem;
        display: flex;
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        right: 1rem;
        top: auto;
         color: #fff;
         
         .i {
            display: block;
         }
       `;

    return Stats
}

export function getStatsTitle() {

    const Title = styled.div`
        font-size: 0.75rem;
        font-weight: bold;
        text-transform: uppercase;
       `;

    return Title
}

export function getStatsValue() {

    const Value = styled.div`
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.5rem;
       `;

    return Value
}

export function getCardGeneral() {

    const General = styled.div`
        width: 300px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        box-sizing: border-box;
        padding: 1rem;
        padding-top: 0;
       `;

    return General
}

export function getCardGeneralMore() {

    const GeneralMore = styled.span`
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        font-size: 0.9em;
       `;

    return GeneralMore
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
