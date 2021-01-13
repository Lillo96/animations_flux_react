import React from 'react'
import PropTypes from 'prop-types'
import cardsActions from "../data/cards/cardsActions"
import getAnimation from "../data/animation"

import styled, {keyframes, css} from "styled-components"

let tmp_CardID

function cards({
    id, checkLimit, typeInput, animationCSS, textInput, textValue,
    textAlign, display, flexDirection, colorCard, perspective, backfaceVisibility,
    borderDim, borderType, borderColor, height, width, timeAnim, buttonFontSize,
    buttonMargin, buttonBorder, buttonBorderRadius, buttonBackColor,
    colorCard2, marginCard, colorCardTrans1, colorCardTrans2, fontSizeLCentral, fontSizePointsCenter,
    duration, timing, delay, iterations,direction, fillMode, playState, ...rest
}) {

    let animation, flipped
    let getAnimationCSS, getAnimationCSS_1

    if (!rest.cards.state.has(id)) {

        animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState })
        //console.log(animation)

        cardsActions.newCards(
            id, checkLimit, typeInput, animationCSS, textInput, textValue,
            textAlign, display, flexDirection, colorCard, perspective, backfaceVisibility,
            borderDim, borderType, borderColor, height, width, timeAnim, buttonFontSize,
            buttonMargin, buttonBorder, buttonBorderRadius, buttonBackColor,
            colorCard2, marginCard, colorCardTrans1, colorCardTrans2, fontSizeLCentral, fontSizePointsCenter,
            duration, timing, delay,iterations, direction, fillMode, playState
        )
            // NON DOVREBBE SERVIRE
        //setAnimationCSS(id, cssStylesKeyFrames(true,1))

        console.log("COLOR CARD", colorCard)
        //console.log("COLOR CARD REST", rest.cards.state.get(id).get('colorCard'))

        tmp_CardID = id
    } else {

        if (colorCard != rest.cards.state.get(id).get('colorCard')) {
            console.log("CI SONOOO")
            cardsActions.changeValue(id, 'colorCard', colorCard)
        }

        console.log("COLOR CARD", colorCard)
        console.log("COLOR CARD REST", rest.cards.state.get(id).get('colorCard'))
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

// CARD 1

export function getCardContainer (Card) {

    console.log(Card)
    //let CardContainer
    console.log('fuori')

        console.log('dentro')
        const CardContainer = styled.div`
            text-align: center;
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

    const tmp = keyframes`
                      
                      from, to {
                        text-align: ${Card.textAlign};
                        display: ${Card.display};
                        flex-direction: ${Card.flexDirection};
                        transition: z-index 500ms, transform 500ms;
                        z-index: 0;
                        -webkit-perspective: 1000px;
                        transform-style: preserve-3d;
                       
                      }
                  `;

    const CardContainerFinal = styled.div`
          animation: ${Card.timeAnim} ${tmp} both;
       `;


    return CardContainerFinal
}

export function getCardFront(Card) {
    //let CardFront

    console.log(Card.colorCard)

    const CardSide = css`
        width: ${Card.width};
        height: ${Card.height};
        min-width: 100%;
        display: ${Card.display};
        flex-direction: ${Card.flexDirection};
        justify-content: center;
        -webkit-backface-visibility: ${Card.backfaceVisibility};
        border: ${Card.borderDim} ${Card.borderType} ${Card.borderColor};
    `;

    const CardFront = styled.div`
        
        ${CardSide}
        
        z-index: 1;
        background: ${Card.colorCard};
    `;

   const tmp = keyframes`
                      
                      from, to {
                            width: ${Card.width};
                            height: ${Card.height};
                            min-width: 100%;
                            min-height: 100%;
                            display: ${Card.display};
                            flex-direction: ${Card.flexDirection};
                            justify-content: space-between;
                            -webkit-backface-visibility: ${Card.backfaceVisibility};
                            border: ${Card.borderDim} ${Card.borderType} ${Card.borderColor};
                          
                            z-index: 0;
                            background: ${Card.colorCard};
                      }
                  `;

    const CardFrontFinal = styled.div`
          animation: ${Card.timeAnim} ${tmp} both;
       `;

    console.log(CardFrontFinal)
    return CardFrontFinal
}

export function getCardBack(Card) {
    //let CardBack

    console.log(Card.colorCard)

    const CardSide = css`
        width: 100%;
        min-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        -webkit-backface-visibility: hidden;
        border: 2px solid #0d0d0d;
    `;

    const CardBack = styled.div`
        
        ${CardSide}

        transform: rotateY(180deg) translate(100%, 0);
        background: #d7d7d7;
        z-index: 0;
    `;



   const tmp = keyframes`
                      
                      from,to {
                        width: ${Card.width};
                        height: ${Card.height};
                        min-width: 100%;
                        min-height: 100%;                    
                        display: ${Card.display};
                        flex-direction: ${Card.flexDirection};
                        justify-content: space-between;
                        -webkit-backface-visibility: ${Card.backfaceVisibility};
                        border: ${Card.borderDim} ${Card.borderType} ${Card.borderColor};
                      
                      
                        transform: rotateY(180deg) translate(100%, 0);
                        // transform: rotateY(180deg) translate(100%, 0) rotate(180deg);
                        background: ${Card.colorCard};
                        z-index: 0;
                      }
    `;


    const CardBackFinal = styled.div`
          animation: 1s ${tmp} both;
    `;


    return CardBackFinal
}

export function getCardInner(Card) {

    const tmp = keyframes`
                      
                      to {
                       transform: rotateY(180deg);
                      }
    `;

        const CardInner = styled.div`
            flex: 1;
            display: ${Card.display};
            transition: transform 500ms;
            transform-style: preserve-3d;
    
            &.flipped {
            transform: rotateY(180deg);
            //transform: rotateX(180deg);
            }
        `;

    return CardInner
}

export function getCardButton(Card) {

    const Button = styled.button`
              font-size: ${Card.buttonFontSize};
              margin: ${Card.buttonMargin};
              padding: 0.25em 1em;
              border: ${Card.buttonBorder}; solid palevioletred;
              border-radius: ${Card.buttonBorderRadius};
              background-color: ${Card.buttonBackColor};
        `;

    return Button
}

// CARD 2

export function getImageArea() {

    const tmp = keyframes`  
                      
                      from, to {
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        position: absolute;
                      }
                  `;

    const ImageAreaFinal = styled.div`
          animation: 1s ${tmp} both;
       `;


/*    const ImageArea = styled.div`
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          position: absolute;
          
       `;*/

    return ImageAreaFinal
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


    const tmp = keyframes`

         from {
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
    `;

    const tmp1 = keyframes`

         from, to {
               left: -180%;
         }
    `;

    // DALL'ALTO A DESTRA VERSO L BASSO A SINISTRA

/*&:before {
        // -webkit-animation: ${tmp} .5s both;

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
    }*/

    // DAL BASSO A SINISTRA VERSO L'ALTO A DESTRA

/*&:before {
        // -webkit-animation: ${tmp} .5s both;

        content: '';
        position: absolute;
        top: 0;
        left: -170%;
        height: 100%;
        width: 100%;
        background: rgba(255,255,255,.3);
        z-index: 1;
        transform: skew(45deg);
        transition: .5s;
    }*/

    // DALL ALTO A SINISTRA VERSO IL BASSO A DESTRA

/*&:before {
        // -webkit-animation: ${tmp} .5s both;

        content: '';
        position: absolute;
        top: 0;
        left: -160%;
        height: 100%;
        width: 100%;
        background: rgba(255,255,255,.3);
        z-index: 1;
        transform: skew(140deg);
        transition: .5s;
    }*/

    // DAL BASSO A DESTRA VERSO L'ALTO A SINISTRA

/*&:before {
        // -webkit-animation: ${tmp} .5s both;

        content: '';
        position: absolute;
        top: 0;
        left: 160%;
        height: 100%;
        width: 100%;
        background: rgba(255,255,255,.3);
        z-index: 1;
        transform: skew(140deg);
        transition: .5s;
    }*/

    const ImageWrapper = styled.div`
          width: 300px;
          height: 400px;
          position: relative;
          overflow: hidden;
          
          &:before {
                // -webkit-animation: ${tmp} .5s both;
        
                content: '';
                position: absolute;
                top: 0;
                left: 160%;
                height: 100%;
                width: 100%;
                background: rgba(255,255,255,.3);
                z-index: 1;
                transform: skew(140deg);
                transition: .5s;
            }          
          
          &:hover:before {
            // -webkit-animation: ${tmp1} 1s forwards;
            
            left: -160%;
          }
           
       `;

    // DALL'ALTO A DESTRA VERSO L BASSO A SINISTRA

/*&:hover:before {
        left: 180%;
    }*/

    // DAL BASSO A SINISTRA VERSO L'ALTO A DESTRA - DALL ALTO A SINISTRA VERSO IL BASSO A DESTRA

/*&:hover:before {
        left: 180%;
    }*/

    // DAL BASSO A DESTRA VERSO L'ALTO A SINISTRA

/*&:hover:before {
        // -webkit-animation: ${tmp1} 1s forwards;

        left: -160%;
    }*/

    return ImageWrapper
}

export function getHeaderImage() {


    const tmp = keyframes`

         to {
            filter: grayscale(0%);
            transform: scale(1.1);
         }
    `;


    const HeaderImg = styled.img.attrs({
        src: 'https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    })`
        height: 400px;
        width: 300px;
        filter: grayscale(100%);
        transition: 2s;
        
        &:hover {
             animation: ${tmp} 1s both; 
        }
  
     `;

    //

    return HeaderImg

}

export function getName() {

    const tmp = keyframes`

         to {
            transform: perspective(400px) rotateY(0deg);
         }
    `;

    // SINISTRA IN BASSO

/*    const Name = styled.h2`
        background: tomato;
        font-family: Poppins;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        margin: 0;
        padding: 50px 0;
        position: absolute;
        bottom: 0;
        width: 100%;
        transform: perspective(400px) rotateY(90deg);
        transform-origin: left;
        transition: 1s;
        
        &:hover {
            animation: ${tmp} 1s both; 
        }
    `;*/

    // DESTRA IN BASSO

    const Name = styled.h2`
        background: tomato;
        font-family: Poppins;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        margin: 0;
        padding: 50px 0;
        position: absolute;
        bottom: 0;
        width: 100%;
        transform: perspective(400px) rotateY(90deg);
        transform-origin: right;
        transition: 1s;
        
        &:hover {
            animation: ${tmp} 1s both; 
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

// CARD 3

export function getCardCenter(Card) {

    const CardCenter = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
       `;

    const tmp = keyframes`
                      
                      from,to {
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      -webkit-transform: translate(-50%, -50%);
                      }
    `;


    const CardCenterFinal = styled.div`
          animation: 1s ${tmp} both;
    `;

    return CardCenterFinal
}

export function getCard(Card) {

    if (Card.width === '100%') Card.width = '450px';
    if (Card.height === '100%') Card.height = '250px';

    const CardF = styled.div`
       
        width: ${Card.width};
        height: ${Card.height};
        background-color: ${Card.colorCard};
        background: linear-gradient(${Card.colorCard2}, ${Card.colorCard});
        box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
        border-radius: 6px;
        overflow: hidden;
        position: relative;
        margin: ${Card.marginCard}; 
      
       `;

    const tmp = keyframes`
                      
                      from,to {
                                    width: ${Card.width};
                                    height: ${Card.height};
                                    background-color: ${Card.colorCard};
                                    background: linear-gradient(${Card.colorCard2}, ${Card.colorCard});
                                    box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
                                    border-radius: 6px;
                                    overflow: hidden;
                                    position: relative;
                                    margin: ${Card.marginCard}; 
                      }
    `;


    const CardFinal = styled.div`
          animation: 1s ${tmp} both;
    `;


    return CardFinal
}

export function getAdditional(Card) {

    const Additional = styled.div`
       
        position: absolute;
        width: 150px;
        height: 100%;
        background: linear-gradient(${Card.colorCardTrans1}, ${Card.colorCardTrans2});
        transition: width 0.4s;
        overflow: hidden;
        z-index: 2;
        
        &:hover {
            width: 100%;
            border-radius: 0 5px 5px 0;
          }
       `;



    return Additional
}

export function getUserCard(Card) {

    const UserCard = styled.div`
       
        position: absolute;
        width: 150px;
        height: 100%;
        background: linear-gradient(${Card.colorCardTrans1}, ${Card.colorCardTrans2});
        transition: width 0.4s;
        overflow: hidden;
        z-index: 2;
       `;

    const tmp = keyframes`  
              from,to {
                    position: absolute;
                    width: 150px;
                    height: 100%;
                    background: linear-gradient(${Card.colorCardTrans1}, ${Card.colorCardTrans2});
                    transition: width 0.4s;
                    overflow: hidden;
                    z-index: 2;
              }
    `;


    const UserCardFinal = styled.div`
          animation: 1s ${tmp} both;
    `;


    return UserCardFinal
}

export function getLevelCenter(Card) {

    const LevelCenter = styled.div`
        top: 15%;
        color: ${Card.colorCard};
        text-transform: uppercase;
        font-size: ${Card.fontSizeLCentral};
        font-weight: bold;
        background: rgba(0,0,0,0.15);
        padding: 0.125rem 0.75rem;
        border-radius: 100px;
        white-space: nowrap;
       `;

    const tmp = keyframes`  
              from,to {
                    top: 15%;
                    color: ${Card.colorCard};
                    text-transform: uppercase;
                    font-size: ${Card.fontSizeLCentral};
                    font-weight: bold;
                    background: rgba(0,0,0,0.15);
                    padding: 0.125rem 0.75rem;
                    border-radius: 100px;
                    white-space: nowrap;  
              }
    `;

    const LevelCenterFinal = styled.div`
          animation: 1s ${tmp} both;
    `;

    return LevelCenterFinal
}

export function getPointsCenter(Card) {

    const PointsCenter = styled.div`
        top: 15%;
        color: #fff;
        text-transform: uppercase;
        font-size: ${Card.fontSizePointsCenter};
        font-weight: bold;
        background: rgba(0,0,0,0.15);
        padding: 0.125rem 0.75rem;
        border-radius: 100px;
        white-space: nowrap;
        
        top: 85%;
       `;

    const tmp = keyframes`  
              from,to {
                    top: 15%;
                    color: #fff;
                    text-transform: uppercase;
                    font-size: ${Card.fontSizePointsCenter};
                    font-weight: bold;
                    background: rgba(0,0,0,0.15);
                    padding: 0.125rem 0.75rem;
                    border-radius: 100px;
                    white-space: nowrap;
                    
                    top: 85%; 
              }
    `;

    const PointsCenterFinal = styled.div`
          animation: 1s ${tmp} both;
    `;

    return PointsCenterFinal
}

export function getSvg(Card) {

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

    const tmp = keyframes`  
              from,to {
                    ${cssSvg}
                
                    top: 50%;
    `;

    const SvgFinal = styled.div`
          animation: 1s ${tmp} both;
    `;

    return SvgFinal
}

export function getMoreInfo(Card) {

    const MoreInfo = styled.div`
         width: 300px;
         float: left;
         position: absolute;
         left: 150px;
         height: 100%;
       `;

    const tmp = keyframes`  
              from,to {
                 width: 300px;
                 float: left;
                 position: absolute;
                 left: 150px;
                 height: 100%;
    `;

    const MoreInfoFinal = styled.div`
          animation: 1s ${tmp} both;
    `;

    return MoreInfoFinal
}

export function getMoreInfoName(Card) {

    const Name = styled.h1`
        color: #fff;
        margin-bottom: 0;
       `;

    const tmp = keyframes`  
              from,to {
                    color: #fff;
                    margin-bottom: 0;
    `;

    const NameFinal = styled.h1`
          animation: 1s ${tmp} both;
    `;

    return NameFinal
}

export function getCoords(Card) {

    const Coords = styled.div`
        margin: 0 1rem;
        color: #fff;
        font-size: 1rem;
       `;

    const tmp = keyframes`  
              from,to {
                    margin: 0 1rem;
                    color: #fff;
                    font-size: 1rem;
    `;

    const CoordsFinal = styled.div`
          animation: 1s ${tmp} both;
    `;

    return CoordsFinal
}

export function getStats(Card) {

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

export function getStatsTitle(Card) {

    const Title = styled.div`
        font-size: 0.75rem;
        font-weight: bold;
        text-transform: uppercase;
       `;

    const tmp = keyframes`  
              from,to {
                font-size: 0.75rem;
                font-weight: bold;
                text-transform: uppercase;
    `;

    const TitleFinal = styled.div`
          animation: 1s ${tmp} both;
    `;

    return TitleFinal
}

export function getStatsValue(Card) {

    const Value = styled.div`
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.5rem;
       `;

    const tmp = keyframes`  
              from,to {
                    font-size: 1.5rem;
                    font-weight: bold;
                    line-height: 1.5rem;
    `;

    const ValueFinal = styled.div`
          animation: 1s ${tmp} both;
    `;

    return ValueFinal
}

export function getCardGeneral(Card) {

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
        background-color: black;
        
        h1 {
            front-size: 0.4rem;
        }
       `;

    return General
}

export function getCardGeneralTitle(Card) {

    const General = styled.h1`
            front-size: 4em;
       `;


    const tmp = keyframes`  
              from,to {
                    front-size: 4em;
    `;

    const GeneralFinal = styled.h1`
          animation: 1s ${tmp} both;
    `;

    return GeneralFinal
}

export function getCardGeneralText(Card) {

    const General = styled.p`
            front-size: 0.4em;
       `;

    const tmp = keyframes`  
              from,to {
                    front-size: 0.4em;
    `;

    const GeneralFinal = styled.p`
          animation: 1s ${tmp} both;
    `;


    return GeneralFinal
}

export function getCardGeneralMore(Card) {

    const GeneralMore = styled.span`
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        font-size: 0.8em;
       `;

    const tmp = keyframes`  
              from,to {
                     position: absolute;
                     bottom: 1rem;
                     right: 1rem;
                     font-size: 0.8em;
    `;

    const GeneralMoreFinal = styled.span`
          animation: 1s ${tmp} both;
    `;

    return GeneralMoreFinal
}

//

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

export function setValueVariable (id, idVar, value) {
    console.log(id, idVar, value);
    cardsActions.changeValue(id, idVar, value)
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
    textValue: PropTypes.string,
    textAlign: PropTypes.string,
    display: PropTypes.string,
    flexDirection: PropTypes.string,
    colorCard: PropTypes.string,
    perspective: PropTypes.string,
    backfaceVisibility: PropTypes.string,
    borderDim: PropTypes.string,
    borderType: PropTypes.string,
    borderColor: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    timeAnim: PropTypes.string,
    buttonFontSize: PropTypes.string,
    buttonMargin: PropTypes.string,
    buttonBorder: PropTypes.string,
    buttonBorderRadius: PropTypes.string,
    buttonBackColor: PropTypes.string,
    colorCard2: PropTypes.string,
    marginCard: PropTypes.string,
    colorCardTrans1: PropTypes.string,
    colorCardTrans2: PropTypes.string,
    fontSizeLCentral: PropTypes.string,
    fontSizePointsCenter: PropTypes.string,
}

export default cards
