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
    directionOfRotation, directionOfAnimation, directionName, directionOfRotation1,
    backgroundCard, backgroundCard1, backgroundCard2,
    duration, timing, delay, iterations, direction, fillMode, playState, ...rest
}) {

    let animation

    if (!rest.cards.state.has(id)) {

        animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState })

        cardsActions.newCards(
            id, checkLimit, typeInput, animationCSS, textInput, textValue,
            textAlign, display, flexDirection, colorCard, perspective, backfaceVisibility,
            borderDim, borderType, borderColor, height, width, timeAnim, buttonFontSize,
            buttonMargin, buttonBorder, buttonBorderRadius, buttonBackColor,
            colorCard2, marginCard, colorCardTrans1, colorCardTrans2, fontSizeLCentral, fontSizePointsCenter,
            directionOfRotation, directionOfAnimation, directionName, directionOfRotation1,
            backgroundCard, backgroundCard1, backgroundCard2,
            duration, timing, delay, iterations, direction, fillMode, playState
        )

        tmp_CardID = id
    } else {

        const variableArray = [checkLimit, typeInput, textInput, textValue,
            textAlign, display, flexDirection, colorCard, perspective, backfaceVisibility,
            borderDim, borderType, borderColor, height, width, timeAnim, buttonFontSize,
            buttonMargin, buttonBorder, buttonBorderRadius, buttonBackColor,
            colorCard2, marginCard, colorCardTrans1, colorCardTrans2, fontSizeLCentral, fontSizePointsCenter,
            directionOfRotation, directionOfAnimation, directionName, directionOfRotation1,
            backgroundCard, backgroundCard1, backgroundCard2]

        checkValue(variableArray, rest.cards.state.get(id))

        const cardObj = rest.cards.state.get(id)

        animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState }, cardObj.style)

        tmp_CardID = rest.cards.state.get(id).get('id')

    }

    return (
        <div id={id} style={animation} {...rest}>
            {rest.children }
        </div>
    )
}

// CARD 1

export function getCardContainer (Card) {

    let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode
    let duration = (Card.style === null) ? '1s' : Card.style.duration

    const tmp = keyframes`
                      
                      from, to {
                        text-align: ${Card.textAlign};
                        display: ${Card.display};
                        flex-direction: ${Card.flexDirection};
                        transition: z-index ${duration}, transform ${duration};
                        z-index: 0;
                        -webkit-perspective: 1000px;
                        transform-style: preserve-3d;
                       
                      }
                  `;

    const CardContainerFinal = styled.div`
          animation: ${duration} ${tmp} ${fillMode};
       `;

    return CardContainerFinal
}

export function getCardFront(Card) {

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

   let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode
   let duration = (Card.style === null) ? '1s' : Card.style.duration

   const CardFrontFinal = styled.div`
          animation: ${duration} ${tmp} ${fillMode};
       `;

   return CardFrontFinal
}

export function getCardBack(Card) {

    let tmp

    if(Card.directionOfRotation === 'toTheLeft') {

             tmp = keyframes`
                      
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
                       
                        transform: rotateY(180deg) translate(100%, 0) rotate(180deg);
                        background: ${Card.colorCard};
                        z-index: 0;
                      }
                `;
    } else {
        tmp = keyframes`
                      
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
                        background: ${Card.colorCard};
                        z-index: 0;
                      }
                `;
    }

    let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode
    let duration = (Card.style === null) ? '1s' : Card.style.duration

    const CardBackFinal = styled.div`
          animation: ${duration} ${tmp} ${fillMode};
    `;

    return CardBackFinal
}

export function getCardInner(Card) {

    let CardInner

    const tmp = keyframes`
        
         to {
                transform: rotateX(180deg);
         }
         
    `;

    const tmp1 = keyframes`
        
         from {
                transform: rotateX(180deg);
         }
         
    `;

    const tmp_1 = keyframes`
        
         to {
                transform: rotateY(180deg);
         }
         
    `;

    const tmp1_1 = keyframes`
        
         from {
                transform: rotateY(180deg);
         }
         
    `;

    let duration = (Card.style === null) ? '1s' : Card.style.duration
    let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode

    switch (Card.typeInput) {
        case 1:

            if(Card.directionOfRotation === 'toTheLeft') {
                CardInner = styled.div`
                    flex: 1;
                    display: ${Card.display};
                    text-align: ${Card.textAlign};
                    transition: ${duration};
                    transform-style: preserve-3d;
            
                    &:hover {
                       transform: rotateX(180deg);  
                    }     
                `;

                    } else {
                        CardInner = styled.div`
                            flex: 1;
                            display: ${Card.display};
                            transition: ${duration};
                            transform-style: preserve-3d;
                    
                            &:hover {
                               transform: rotateY(180deg);                        
                            }
                        `;
            }
            break;

        case 2:

            if(Card.directionOfRotation === 'toTheLeft') {
                CardInner = styled.div`
                    flex: 1;
                    display: ${Card.display};
                    text-align: ${Card.textAlign};
                    transition: ${duration};
                    transform-style: preserve-3d;
            
                   ${Card.checkLimit ?
                         `animation: ${tmp1} ${duration} ${fillMode};` :
                         Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                   }
   
                `;

            } else {
                CardInner = styled.div`
                            flex: 1;
                            display: ${Card.display};
                            transition: ${duration};
                            transform-style: preserve-3d;
                    
                            ${Card.checkLimit ?
                                `animation: ${tmp1_1} ${duration} ${fillMode};` :
                                 Card.checkLimit === null ? '' :  `animation: ${tmp_1} ${duration} ${fillMode};`
                            }            
                `;
            }
            break;

        case 3:

            if(Card.directionOfRotation === 'toTheLeft') {
                CardInner = styled.div`
                    flex: 1;
                    display: ${Card.display};
                    text-align: ${Card.textAlign};
                    transition: ${duration};
                    transform-style: preserve-3d;
            
                   ${Card.checkLimit ?
                    `animation: ${tmp1} ${duration} ${fillMode};` :
                    Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`}
                
                `;

            } else {
                CardInner = styled.div`
                            flex: 1;
                            display: ${Card.display};
                            transition: transform ${duration};
                            transform-style: preserve-3d;
                    
                            ${Card.checkLimit ?
                                `animation: ${tmp1_1} ${duration} ${fillMode};` :
                                Card.checkLimit === null ? '' :  `animation: ${tmp_1} ${duration} ${fillMode};`}
                            
                `;
            }

            break;

        case 4:

            if (Card.directionOfRotation === 'toTheLeft') {
                CardInner = styled.div`
                    flex: 1;
                    display: ${Card.display};
                    text-align: ${Card.textAlign};
                    transition: ${duration};
                    transform-style: preserve-3d;
            
                   ${Card.checkLimit ?
                    `animation: ${tmp1} ${duration} ${fillMode};` :
                    Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`}
                
                `;

            } else {
                CardInner = styled.div`
                            flex: 1;
                            display: ${Card.display};
                            transition: transform ${duration};
                            transform-style: preserve-3d;
                    
                            ${Card.checkLimit ?
                    `animation: ${tmp1_1} ${duration} ${fillMode};` :
                    Card.checkLimit === null ? '' :  `animation: ${tmp_1} ${duration} ${fillMode};`}
                            
                `;
            }

            break;

        default:
            return
    }

    return CardInner
}

export function getCardButton(Card) {

    const ItemsBodyContentIcon = styled.button`
      align-self: center;
      font-size: 15px;
      color: #0B5AA2;
      font-weight: bold;
      
      background-color: #4CAF50; /* Green */
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 10px;
      
      // animation: icon 1.5s infinite forwards;
      
      @keyframes icon {
          0%,100%{
            transform: translate(0px);
          }
          50% {
            transform: translate(3px);
          }
        }

      `;

    return ItemsBodyContentIcon
}

// CARD 2

export function getImageArea(Card) {

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

export function getImageWrapper(Card) {

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

    let ImageWrapper

    //console.log(Card.directionOfAnimation)


            // DALL ALTO A SINISTRA VERSO IL BASSO A DESTRA
    if (Card.directionOfAnimation === "topLeftBottomRight") {

         ImageWrapper = styled.div`
                          width: 300px;
                          height: 400px;
                          position: relative;
                          overflow: hidden;
                          
                          &:before {
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
                            }
                          
                          &:hover:before {
                            // -webkit-animation: ${tmp1} 1s forwards;
                            
                            left: 180%;
                          }
                           
        `;

        return ImageWrapper

    }


            // DALL'ALTO A DESTRA VERSO L BASSO A SINISTRA
    if (Card.directionOfAnimation === "topRightBottomLeft") {


        const ImageWrapper1 = styled.div`
                          width: 300px;
                          height: 400px;
                          position: relative;
                          overflow: hidden;
                          
                          &:before {
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
                          }
                          
                          &:hover:before {
                            // -webkit-animation: ${tmp1} 1s forwards;
                            
                            left: -160%;
                          }
                           
                       `;

        return ImageWrapper1
    }


            // DAL BASSO A DESTRA VERSO L'ALTO A SINISTRA
    if (Card.directionOfAnimation === "lowRightToHighLeft") {
        const ImageWrapper2 = styled.div`
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

        return ImageWrapper2
    }


            // DAL BASSO A SINISTRA VERSO L'ALTO A DESTRA
    if (Card.directionOfAnimation === "lowLeftToHighRight") {
        const ImageWrapper3 = styled.div`
                          width: 300px;
                          height: 400px;
                          position: relative;
                          overflow: hidden;
                          
                          &:before {
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
                            }
                          
                          &:hover:before {
                            // -webkit-animation: ${tmp1} 1s forwards;
                            
                            left: 180%;
                          }
                           
                       `;
        return ImageWrapper3
    }



/*
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

    */

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

    //return ImageWrapper
}

export function getHeaderImage(Card) {

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

    return HeaderImg

}

export function getName(Card) {

    const tmp = keyframes`

         to {
            transform: perspective(400px) rotateY(0deg);
         }
         
    `;

    const tmp1 = keyframes`

         to {
            transform: perspective(400px) rotateY(0deg);
         }
         
    `;

    let name


        // SINISTRA IN BASSO
   if (Card.directionName === "FromLeftToRight") {

        console.log('AHVSFHJVAKJHASZ')

        name = styled.h2`
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
                
/*                &:hover:before {
                    animation: ${tmp1} 1s both;
                }*/
                
            `;

    }


        // DESTRA IN BASSO
    if(Card.directionName === "FromRightHandToSinister") {

        console.log("hvhvhvsfvk")

        name = styled.h2`
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
    }



/*       const Name = styled.h2`
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

    return Name*/


    return name

}

export function getIconUL(Card) {

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

export function getIconLi(Card) {

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
                                    box-shadow: 0 16px 16px -8px rgba(0,0,0,0.4);
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

        // DA DESTRA VERSO SINITRA

    if (Card.directionOfRotation1 === "FromRightHandToSinister") {

        const Additional = styled.div`
       
                position: absolute;
                width: 150px;
                height: 100%;
                background: linear-gradient(#dE685E, #EE786E);
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

        // DALL ALTO VERSO IL BASSO

    if (Card.directionOfRotation1 === "FromTopToBottom") {

        const Additional1 = styled.div`
       
                position: absolute;
                width: 100%;
                height: 10%;
                background: linear-gradient(#dE685E, #EE786E);
                transition: height 0.4s;
                overflow: hidden;
                z-index: 2;
                
                &:hover {
                    width: 100%;
                    height: 100%;
                    border-radius: 0 5px 5px 0;
                  }
       `;

        return Additional1

    }

        // DAL BASSO VERSO L ALTO

    if (Card.directionOfRotation1 === "FromBottomToTop") {
        const Additional2 = styled.div`
       
            position: absolute;
            width: 100%;
            top: 90%
            height: 100%;
            background: linear-gradient(#dE685E, #EE786E);
            transition: top 0.4s;
            overflow: hidden;
            z-index: 2;
            
            &:hover {
                width: 100%;
                height: 100%
                top: 0%;
                border-radius: 0 5px 5px 0;
              }
           `;

        return Additional2
    }

        // DA DESTRA VERSO SINISTRA

    if (Card.directionOfRotation1 === "FromLeftToRight") {

        const Additional3 = styled.div`
           
            position: absolute;
            width: 100%;
            height: 100%;
            left: 75%;
            background: linear-gradient(#dE685E, #EE786E);
            transition: left 0.4s;
            overflow: hidden;
            z-index: 2;
            
            &:hover {
                width: 100%;
                height: 100%;
                left: 0%;
                border-radius: 0 5px 5px 0;
              }
           `;

        return Additional3

    }
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

    let tmp
    const MoreInfo = styled.div`
         width: 300px;
         float: left;
         position: absolute;
         left: 150px;
         height: 100%;
       `;

    // DA SINISTRA VERSO DESTRA
    // DAL ALTO VERSO IL BASSO
    // DAL BASSO VERSO L ALTO

    if(Card.directionOfRotation1 != "FromLeftToRight") {

         tmp = keyframes`
              from,to {
                 text-align: center;
                 width: 300px;
                 height: 50%;
                 float: central;
                 justify-content: center;

                 position: absolute;
                 left: 150px;
                 height: 50%;
                 bottom: 2rem;
                 right: 1rem;
        `;

    } else {
        // DA DESTRA VERSO SINISTRA

         tmp = keyframes`
              from,to {
                 text-align: center;
                 width: 300px;
                 height: 50%;
                 float: central;
                 justify-content: center;

                 position: absolute;
                 left: 40px;
                 height: 50%;
                 bottom: 2rem;
                 right: 1rem;
         `;
    }





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

    let General

    // DA SINISTRA VERSO DESTRA
    // DAL ALTO VERSO IL BASSO
    // DAL BASSO VERSO L ALTO
    if(Card.directionOfRotation1 != "FromLeftToRight") {

         General = styled.div`
            width: 300px;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
            box-sizing: border-box;
            padding: 1rem;
            padding-top: 0;
            background-color: white;
            
            h1 {
                front-size: 0.4rem;
            }
       `;

    } else {

        // DA DESTRA VERSO SINISTRA

         General = styled.div`
            width: 450px;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
            box-sizing: border-box;
            padding: 1rem;
            padding-top: 0;
            background-color: white;
            
            h1 {
                front-size: 0.4rem;
            }
       `;

    }

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

    let tmp, tmpBotton

    const GeneralMore = styled.span`
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        font-size: 0.8em;
       `;

    // DA SINISTRA VERSO DESTRA
    // DAL BASSO VERSO L ALTO
    // DAL ALTO VERSO IL BASSO

    if(Card.directionOfRotation1 != "FromLeftToRight") {

        tmpBotton =  ( (Card.directionOfRotation1 === "FromBottomToTop") ? 2 : 1 )

         tmp = keyframes`
              from,to {
                     position: absolute;
                     bottom: ${tmpBotton}rem;
                     right: 1rem;
                     font-size: 0.8em;
              }
        `;

    } else {

        // DA DESTRA VERSO SINISTRA

         tmp = keyframes`  
              from,to {
                     position: absolute;
                     bottom: 1rem;
                     right: 8rem;
                     font-size: 0.8em;
              }
        `;

    }




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

function checkValueRest (cardRest, card) {
    console.log(cardRest, card)
}

function checkValue (variableArray, rest) {

    //console.log(variableArray, rest)
    //console.log(colorEnd, restcolorEnd)

    const tmp = ["checkLimit", "typeInput", "textInput", "textValue",
        "textAlign", "display", "flexDirection", "colorCard", "perspective", "backfaceVisibility",
        "borderDim", "borderType", "borderColor", "height", "width", "timeAnim", "buttonFontSize",
        "buttonMargin", "buttonBorder", "buttonBorderRadius", "buttonBackColor",
        "colorCard2", "marginCard", "colorCardTrans1", "colorCardTrans2", "fontSizeLCentral", "fontSizePointsCenter",
        "directionOfRotation", "directionOfAnimation", "directionName", "directionOfRotation1",
        "backgroundCard", "backgroundCard1", "backgroundCard2"]

    /*
        0: checkLimit,
        1: typeInput,
        2: textInput,
        3: textValue,
        4: textAlign,
        5: display,
        6: flexDirection,
        7: colorCard,
        8: perspective,
        9: backfaceVisibility,
        10: "borderDim",
        11: "borderType",
        12: "borderColor",
        13: "height",
        14: "width",
        15: "timeAnim",
        16: "buttonFontSize",
        17: "buttonMargin",
        18: "buttonBorder",
        19: "buttonBorderRadius",
        20: "buttonBackColor",
        21: "colorCard2",
        22: "marginCard",
        23: "colorCardTrans1",
        24: "colorCardTrans2",
        25: "fontSizeLCentral",
        26: "fontSizePointsCenter",
        27: "directionOfRotation",
        28: "directionOfAnimation",
        29: "directionName",
        30: "directionOfRotation1",
        31: "backgroundCard",
        32: "backgroundCard1",
        33: "backgroundCard2",
    */


/*    if(variableArray[7] != rest.get(tmp[7])){
        cardsActions.changeValue(rest.get('id'), tmp[7], variableArray[7])
    }*/

    for (let i = 0; i < tmp.length; i++) {

        if (variableArray[i] != rest.get(tmp[i])) {
            if (i != 0) {
                cardsActions.changeValue(rest.get('id'), tmp[i], variableArray[i])
            }
        }

    }

}

// FUNZIONI DI PROVA

export function provaFunction_CheckValue(value) {
    let result

    switch (this.typeInput) {
        case 2:
            result = (value === this.checkLimit) ? !value : value
            cardsActions.changeValue(this.id, 'checkLimit', result)
            break;
        case 3:
        case 4:
            if (this.textInput === null) cardsActions.changeValue(this.id, 'checkLimit', !this.checkLimit)

            if (value.key === this.textInput) {
                if (this.checkLimit === null)
                    cardsActions.changeValue(this.id, 'checkLimit', false)
                    else
                         cardsActions.changeValue(this.id, 'checkLimit', !this.checkLimit)
            }

            break;

        default:
            return;
    }

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
    timeAnim: PropTypes.string, // ANIM
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
    directionOfRotation: PropTypes.string,

    directionOfAnimation: PropTypes.string, // NEW FOR CARD 2
    directionName: PropTypes.string, // NEW FOR CARD 2

    directionOfRotation1: PropTypes.string, // NEW FOR CARD 3

    backgroundCard: PropTypes.string,
    backgroundCard1: PropTypes.string,
    backgroundCard2: PropTypes.string
}

export default cards
