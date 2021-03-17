import React from 'react'
import PropTypes from 'prop-types'
import cardsActions from "../data/cards/cardsActions"
import getAnimation from "../data/animation"
// import img from '../paper.jpg'

import styled, {keyframes, css} from "styled-components"

let tmp_CardID, tmp_CardCheckLimitFlag

function cards({
    id, checkLimit, typeInput, animationCSS, textInput, textValue,
    textAlign, display, flexDirection, colorCard, perspective, backfaceVisibility,
    borderDim, borderType, borderColor, height, width, timeAnim, buttonFontSize,
    buttonMargin, buttonBorder, buttonBorderRadius, buttonBackColor,
    colorCard2, marginCard, colorCardTrans1, colorCardTrans2, fontSizeLCentral, fontSizePointsCenter,
    directionOfRotation, directionOfAnimation, directionName, directionOfRotation1,
    backgroundCard, backgroundCard1, backgroundCard2,
    backgroundColorButton, borderButton, colorButton, paddingButtonTopBottom, paddingButtonRightLeft,
    textAlignButton, textDecorationButton, displayButton, fontSizeButton,
    widthCard2, heightCard2, positionCard2, overflowCard2, backgroundRGBACard2, transitionRGBACard2,
    backgroundNameCard2, fontFamilyNameCard2, colorNameCard2, textAlignNameCard2, textTransformNameCard2,
    marginNameCard2, paddingTopBottomNameCard2, paddingRightLeftNameCard2, positionNameCard2,
    bottomNameCard2, widthNameCard2, transitionNameCard2,
    positionCard3, topCard3, leftCard3, positionAdditionalCard3, backgroundAdditionalCard3, transitionAdditionalCard3_1,
    transitionAdditionalCard3_2, overflowAdditionalCard3, widthHoverAdditionalCard3, borderRadiusAdditionalCard3_1, textAlignMoreInfoCard3,
    widthMoreInfoCard3, heightMoreInfoCard3, floatMoreInfoCard3, justifyContentMoreInfoCard3, positionGeneralCard3, topGeneralCard3,
    rightGeneralCard3, boxSizingGeneralCard3, paddingGeneralCard3, paddingTopGeneralCard3, backgroundColorGeneralCard3, frontSizeGeneralCard3,
    frontSizeGeneralTitleCard3, frontSizeGeneralTextCard3, positionGeneralMoreCard3, rightGeneralMoreCard3, fontSizeGeneralMoreCard3,
    widthButtonCard3, heightButtonCard3, colorButtonCard3, positionButtonCard3, topButtonCard3, leftButtonCard3,
    widthButtonCard2, heightButtonCard2, colorButtonCard2, positionButtonCard2, topButtonCard2, leftButtonCard2,
    checkLimitFlag, colorCardFront, colorCardBack, toEnableAnimationButton, durationAnimationButton, duration1AnimationButton, fillModeAnimationButton,
    toEnableAnimationWrapper, imgCard2, transitionYEnable, transitionYEnable1, transitionXEnable, transitionXEnable1, count,
    duration, timing, delay, iterations, direction, fillMode, playState, ...rest
}) {

    let animation

    //console.log(rest.cards.state.)

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
            backgroundColorButton, borderButton, colorButton, paddingButtonTopBottom, paddingButtonRightLeft,
            textAlignButton, textDecorationButton, displayButton, fontSizeButton,
            widthCard2, heightCard2, positionCard2, overflowCard2, backgroundRGBACard2, transitionRGBACard2,
            backgroundNameCard2, fontFamilyNameCard2, colorNameCard2, textAlignNameCard2, textTransformNameCard2,
            marginNameCard2, paddingTopBottomNameCard2, paddingRightLeftNameCard2, positionNameCard2,
            bottomNameCard2, widthNameCard2, transitionNameCard2,
            positionCard3, topCard3, leftCard3, positionAdditionalCard3, backgroundAdditionalCard3, transitionAdditionalCard3_1,
            transitionAdditionalCard3_2, overflowAdditionalCard3, widthHoverAdditionalCard3, borderRadiusAdditionalCard3_1, textAlignMoreInfoCard3,
            widthMoreInfoCard3, heightMoreInfoCard3, floatMoreInfoCard3, justifyContentMoreInfoCard3, positionGeneralCard3, topGeneralCard3,
            rightGeneralCard3, boxSizingGeneralCard3, paddingGeneralCard3, paddingTopGeneralCard3, backgroundColorGeneralCard3, frontSizeGeneralCard3,
            frontSizeGeneralTitleCard3, frontSizeGeneralTextCard3, positionGeneralMoreCard3, rightGeneralMoreCard3, fontSizeGeneralMoreCard3,
            widthButtonCard3, heightButtonCard3, colorButtonCard3, positionButtonCard3, topButtonCard3, leftButtonCard3,
            widthButtonCard2, heightButtonCard2, colorButtonCard2, positionButtonCard2, topButtonCard2, leftButtonCard2,
            checkLimitFlag, colorCardFront, colorCardBack, toEnableAnimationButton, durationAnimationButton, duration1AnimationButton, fillModeAnimationButton,
            toEnableAnimationWrapper, imgCard2, transitionYEnable, transitionYEnable1, transitionXEnable, transitionXEnable1, count,
            duration, timing, delay, iterations, direction, fillMode, playState
        )

        tmp_CardID = id
        tmp_CardCheckLimitFlag = checkLimitFlag
    } else {

        const variableArray = [ checkLimit, typeInput, textInput, textValue,
            textAlign, display, flexDirection, colorCard, perspective, backfaceVisibility,
            borderDim, borderType, borderColor, height, width, timeAnim, buttonFontSize,
            buttonMargin, buttonBorder, buttonBorderRadius, buttonBackColor,
            colorCard2, marginCard, colorCardTrans1, colorCardTrans2, fontSizeLCentral, fontSizePointsCenter,
            directionOfRotation, directionOfAnimation, directionName, directionOfRotation1,
            backgroundCard, backgroundCard1, backgroundCard2, backgroundColorButton, borderButton, colorButton, paddingButtonTopBottom, paddingButtonRightLeft,
            textAlignButton, textDecorationButton, displayButton, fontSizeButton,
            widthCard2, heightCard2, positionCard2, overflowCard2, backgroundRGBACard2, transitionRGBACard2,
            backgroundNameCard2, fontFamilyNameCard2, colorNameCard2, textAlignNameCard2, textTransformNameCard2,
            marginNameCard2, paddingTopBottomNameCard2, paddingRightLeftNameCard2, positionNameCard2,
            bottomNameCard2, widthNameCard2, transitionNameCard2,
            positionCard3, topCard3, leftCard3, positionAdditionalCard3, backgroundAdditionalCard3, transitionAdditionalCard3_1,
            transitionAdditionalCard3_2, overflowAdditionalCard3, widthHoverAdditionalCard3, borderRadiusAdditionalCard3_1, textAlignMoreInfoCard3,
            widthMoreInfoCard3, heightMoreInfoCard3, floatMoreInfoCard3, justifyContentMoreInfoCard3, positionGeneralCard3, topGeneralCard3,
            rightGeneralCard3, boxSizingGeneralCard3, paddingGeneralCard3, paddingTopGeneralCard3, backgroundColorGeneralCard3, frontSizeGeneralCard3,
            frontSizeGeneralTitleCard3, frontSizeGeneralTextCard3, positionGeneralMoreCard3, rightGeneralMoreCard3, fontSizeGeneralMoreCard3,
            widthButtonCard3, heightButtonCard3, colorButtonCard3, positionButtonCard3, topButtonCard3, leftButtonCard3,
            widthButtonCard2, heightButtonCard2, colorButtonCard2, positionButtonCard2, topButtonCard2, leftButtonCard2,
            checkLimitFlag, colorCardFront, colorCardBack, toEnableAnimationButton, durationAnimationButton, duration1AnimationButton, fillModeAnimationButton,
            toEnableAnimationWrapper, imgCard2, transitionYEnable, transitionYEnable1, transitionXEnable, transitionXEnable1
        ]

        //checkValue(variableArray, rest.cards.state.get(id))

        const cardObj = rest.cards.state.get(id)

        animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState }, cardObj.style)

        tmp_CardID = rest.cards.state.get(id).get('id')
        tmp_CardCheckLimitFlag = rest.cards.state.get(id).get('checkLimitFlag')


    }

    /*    if (tmp_CardCheckLimitFlag === true) {
        cardsActions.changeValue(tmp_CardID, 'checkLimitFlag', false)
        console.log('wee')
    }*/

    return (
        <div id={id} style={animation} {...rest}>
            {rest.children }
        </div>
    )
}

// CARD 1

export function getCardContainer(Card) {


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
                            width: ${Card.width} ;
                            height: ${Card.height};
                            min-width: 100%;
                            min-height: 100%;
                            display: ${Card.display};
                            flex-direction: ${Card.flexDirection};
                            justify-content: space-between;
                            -webkit-backface-visibility: ${Card.backfaceVisibility};
                            border: ${Card.borderDim} ${Card.borderType} ${Card.borderColor};
                          
                            z-index: 0;
                            background: ${Card.colorCardFront};
                            // background-image: ${Card.backgroundCard1};
                            // background-color: ${Card.colorCard};
                          
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
                        background: ${Card.colorCardBack};
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
                        background: ${Card.colorCardBack};
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
            
                    ${Card.checkLimit && Card.checkLimitFlag ?
                        css`animation: ${tmp} ${duration} ${fillMode};` :
                        Card.checkLimit === false && Card.checkLimitFlag ? css`animation: ${tmp1} ${duration} ${fillMode};` : ''
                    }  
                         
                `;

                    } else {

                        CardInner = styled.div`
                            flex: 1;
                            display: ${Card.display};
                            transition: ${duration};
                            transform-style: preserve-3d;
                            
                            ${Card.checkLimit && Card.checkLimitFlag ?
                                css`animation: ${tmp_1} ${duration} ${fillMode};` :
                                Card.checkLimit === false && Card.checkLimitFlag ? css`animation: ${tmp1_1} ${duration} ${fillMode};` : ''
                            }
                        `;

                    }

            break;

        case 2:

            //console.log('inner 2', Card.checkLimit )

            if(Card.directionOfRotation === 'toTheLeft') {
                CardInner = styled.div`
                    flex: 1;
                    display: ${Card.display};
                    text-align: ${Card.textAlign};
                    transition: ${duration};
                    transform-style: preserve-3d;
            
                   ${Card.checkLimit ?
                         css`animation: ${tmp1} ${duration} ${fillMode};` :
                         Card.checkLimit === null ? '' :  css`animation: ${tmp} ${duration} ${fillMode};`
                   }
                  
                `;

                // setFlagCheckLimit(Card)

            } else {
                CardInner = styled.div`
                            flex: 1;
                            display: ${Card.display};
                            transition: ${duration};
                            transform-style: preserve-3d;
                    
                            ${Card.checkLimit ?
                                css`animation: ${tmp1_1} ${duration} ${fillMode};` :
                                 Card.checkLimit === null ? '' :  css`animation: ${tmp_1} ${duration} ${fillMode};`
                            }            
                `;

               // setFlagCheckLimit(Card)
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
                    css`animation: ${tmp1} ${duration} ${fillMode};` :
                    Card.checkLimit === null ? '' :  css`animation: ${tmp} ${duration} ${fillMode};`}
                
                `;

            } else {
                CardInner = styled.div`
                            flex: 1;
                            display: ${Card.display};
                            transition: transform ${duration};
                            transform-style: preserve-3d;
                    
                            ${Card.checkLimit ?
                                css`animation: ${tmp1_1} ${duration} ${fillMode};` :
                                Card.checkLimit === null ? '' :  css`animation: ${tmp_1} ${duration} ${fillMode};`}
                            
                `;
            }

            break;

        case 4:

            //console.log('inner 4', Card.checkLimit)

            if (Card.directionOfRotation === 'toTheLeft') {
                CardInner = styled.div`
                    flex: 1;
                    display: ${Card.display};
                    text-align: ${Card.textAlign};
                    transition: ${duration};
                    transform-style: preserve-3d;
            
                   ${Card.checkLimit ?
                    css`animation: ${tmp1} ${duration} ${fillMode};` :
                    Card.checkLimit === null ? '' :  css`animation: ${tmp} ${duration} ${fillMode};`}
                
                `;

            } else {
                CardInner = styled.div`
                            flex: 1;
                            display: ${Card.display};
                            transition: transform ${duration};
                            transform-style: preserve-3d;
                    
                            ${Card.checkLimit ?
                    css`animation: ${tmp1_1} ${duration} ${fillMode};` :
                    Card.checkLimit === null ? '' :  css`animation: ${tmp_1} ${duration} ${fillMode};`}
                            
                `;
            }

            break;

        default:
            return
    }

    return CardInner
}

export function getCardButton(Card) {

    let tmp = ( (!Card.transitionYEnable && !Card.transitionYEnable1) && (!Card.transitionXEnable && !Card.transitionXEnable1)) ? true : false

    const ItemsBodyContentIcon = styled.button`

          background-color: ${Card.backgroundColorButton};
          border: ${Card.borderButton};
          color: ${Card.colorButton};
          padding: ${Card.paddingButtonTopBottom} ${Card.paddingButtonRightLeft};
          text-align: ${Card.textAlignButton};
          text-decoration: ${Card.textDecorationButton};
          display: ${Card.displayButton};
          font-size: ${Card.fontSizeButton};

          ${Card.toEnableAnimationButton ? css`animation: icon ${Card.durationAnimationButton} ${Card.duration1AnimationButton} ${Card.fillModeAnimationButton};` : null}
     
          @keyframes icon {
              0%,100%{
                    transform: ${tmp ? 'translateY(0px)' : Card.transitionYEnable ? 'translateY(0px)' : ''};
                    transform: ${Card.transitionYEnable1 ? 'translateY(0px)' : ''};
                    transform: ${Card.transitionXEnable ? 'translateX(0px)' : ''};
                    transform: ${Card.transitionXEnable1 ? 'translateX(0px)' : ''};
              }
              50% {
                    transform: ${tmp ? 'translateY(3px)' : Card.transitionYEnable ? 'translateY(3px)' : ''};
                    transform: ${Card.transitionYEnable1 ? 'translateY(-3px)' : ''};
                    transform: ${Card.transitionXEnable ? 'translateX(3px)' : ''};
                    transform: ${Card.transitionXEnable1 ? 'translateX(-3px)' : ''};
              }
          }

      `;



    return ItemsBodyContentIcon
}

// CARD 2

export function getImageArea(Card) {

    let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode
    let duration = (Card.style === null) ? '1s' : Card.style.duration

    const tmp = keyframes`  
                      
                      from, to {
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        position: absolute;
                      }
                  `;

    const ImageAreaFinal = styled.div`
          animation: ${duration} ${tmp} ${fillMode};
       `;

    return ImageAreaFinal
}

export function getImageWrapper(Card) {

    let ImageWrapper

        // DALL ALTO A SINISTRA VERSO IL BASSO A DESTRA
    if (Card.directionOfAnimation === "topLeftBottomRight") {

            ImageWrapper = styled.div`
                          width: ${Card.widthCard2};
                          height: ${Card.heightCard2};
                          position: ${Card.positionCard2};
                          overflow: ${Card.overflowCard2};
                          
                          ${Card.toEnableAnimationWrapper ? `
                              
                              &:before {
                                    content: '';
                                    position: absolute;
                                    top: 0;
                                    left: -160%;
                                    height: 100%;
                                    width: 100%;
                                    background: ${Card.backgroundRGBACard2};
                                    z-index: 1;
                                    transform: skew(140deg);
                                    transition: ${Card.transitionRGBACard2};
                              }
                             
                              &:hover:before {
                                    left: 180%;
                              }
                              
                          ` : '' 
                        }
                           
        `;

            return ImageWrapper

    }


        // DALL'ALTO A DESTRA VERSO L BASSO A SINISTRA
    if (Card.directionOfAnimation === "topRightBottomLeft") {


            const ImageWrapper1 = styled.div`
                          width: ${Card.widthCard2};
                          height: ${Card.heightCard2};
                          position: ${Card.positionCard2};
                          overflow: ${Card.overflowCard2};
                          
                          ${Card.toEnableAnimationWrapper ? `
                                  
                                  &:before {
                                    content: '';
                                    position: absolute;
                                    top: 0;
                                    left: 180%;
                                    height: 100%;
                                    width: 100%;
                                    background: ${Card.backgroundRGBACard2};
                                    z-index: 1;
                                    transform: skew(45deg);
                                    transition: ${Card.transitionRGBACard2};
                                  }
                                  
                                  &:hover:before {
                                    left: -160%;
                                  }
                                  
                                   ` : '' 
                        }
                           
        `;

            return ImageWrapper1
        }


        // DAL BASSO A DESTRA VERSO L'ALTO A SINISTRA
    if (Card.directionOfAnimation === "lowRightToHighLeft") {
            const ImageWrapper2 = styled.div`
                          width: ${Card.widthCard2};
                          height: ${Card.heightCard2};
                          position: ${Card.positionCard2};
                          overflow: ${Card.overflowCard2};
                          
                          ${Card.toEnableAnimationWrapper ? `
                                  
                                  &:before {
                                        content: '';
                                        position: absolute;
                                        top: 0;
                                        left: 160%;
                                        height: 100%;
                                        width: 100%;
                                        background: ${Card.backgroundRGBACard2};
                                        z-index: 1;
                                        transform: skew(140deg);
                                        transition: ${Card.transitionRGBACard2};
                                    }
                                  
                                  &:hover:before { 
                                    left: -160%;
                                  }
                           
                           ` : '' 
                          }
                        
                       `;

            return ImageWrapper2
        }


        // DAL BASSO A SINISTRA VERSO L'ALTO A DESTRA
    if (Card.directionOfAnimation === "lowLeftToHighRight") {
            const ImageWrapper3 = styled.div`
                          width: ${Card.widthCard2};
                          height: ${Card.heightCard2};
                          position: ${Card.positionCard2};
                          overflow: ${Card.overflowCard2};
                          
                          ${Card.toEnableAnimationWrapper ? `
                                  
                                  &:before {
                                        content: '';
                                        position: absolute;
                                        top: 0;
                                        left: -170%;
                                        height: 100%;
                                        width: 100%;
                                        background: ${Card.backgroundRGBACard2};
                                        z-index: 1;
                                        transform: skew(45deg);
                                        transition: ${Card.transitionRGBACard2};
                                    }
                                  
                                  &:hover:before {
                                    left: 180%;
                                  }
                          
                           ` : '' 
                          } 
                       `;

            return ImageWrapper3
        }

}

export function getHeaderImage(Card) {

    let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode
    let duration = (Card.style === null) ? '1s' : Card.style.duration

    const tmp = keyframes`

         to {
            filter: grayscale(0%);
            transform: scale(1.1);
         }
    `;

    const HeaderImg = styled.img`
        width: ${Card.widthCard2};
        height: ${Card.heightCard2};
        filter: grayscale(100%);
        transition: ${Card.transitionRGBACard2};
        
        ${Card.toEnableAnimationWrapper ? `       
            &:hover {
                 animation: ${tmp} ${duration} ${fillMode}; 
            }
        ` : null
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

         from {
            transform: perspective(400px) rotateY(0deg);
         }
         
    `;

    let name

    let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode
    let duration = (Card.style === null) ? '1s' : Card.style.duration

            switch (Card.typeInput) {
                case 1:

                    // SINISTRA IN BASSO
                    if (Card.directionName === "FromLeftToRight") {

                        name = styled.h2`
                        background: ${Card.backgroundNameCard2};
                        font-family: ${Card.fontFamilyNameCard2};
                        color: ${Card.colorNameCard2};
                        text-align: ${Card.textAlignNameCard2};
                        text-transform: ${Card.textTransformNameCard2};
                        margin: ${Card.marginNameCard2};
                        padding: ${Card.paddingTopBottomNameCard2} ${Card.paddingRightLeftNameCard2};
                        position: ${Card.positionNameCard2};
                        bottom: ${Card.bottomNameCard2};
                        width: ${Card.widthNameCard2};
                        transform: perspective(400px) rotateY(90deg);
                        transform-origin: left; 
                        transition: ${Card.transitionNameCard2};
                        
                        ${Card.checkLimit ?
                            `animation: ${tmp} ${duration} ${fillMode};` :
                            Card.checkLimit === null ? '' :  `animation: ${tmp1} ${duration} ${fillMode};`
                        }  
                                              
                    `;

                    }


                    // DESTRA IN BASSO
                    if(Card.directionName === "FromRightHandToSinister") {

                        // console.log("hvhvhvsfvk")

                        name = styled.h2`
                            background: ${Card.backgroundNameCard2};
                            font-family: ${Card.fontFamilyNameCard2};
                            color: ${Card.colorNameCard2};
                            text-align: ${Card.textAlignNameCard2};
                            text-transform:${Card.textTransformNameCard2};
                            margin: ${Card.marginNameCard2};
                            padding: ${Card.paddingTopBottomNameCard2} ${Card.paddingRightLeftNameCard2};
                            position: ${Card.positionNameCard2};
                            bottom: ${Card.bottomNameCard2};
                            width: ${Card.widthNameCard2};
                            transform: perspective(400px) rotateY(90deg);
                            transform-origin: right;
                            transition: ${Card.transitionNameCard2};
                            
                            ${Card.checkLimit ?
                                `animation: ${tmp} ${duration} ${fillMode};` :
                                Card.checkLimit === null ? '' :  `animation: ${tmp1} ${duration} ${fillMode};`
                            }  
              
                        `;
                    }

                    break;

                case 2:

                    // SINISTRA IN BASSO
                    if (Card.directionName === "FromLeftToRight") {

                        name = styled.h2`
                            background: ${Card.backgroundNameCard2};
                            font-family: ${Card.fontFamilyNameCard2};
                            color: ${Card.colorNameCard2};
                            text-align: ${Card.textAlignNameCard2};
                            text-transform: ${Card.textTransformNameCard2};
                            margin: ${Card.marginNameCard2};
                            padding: ${Card.paddingTopBottomNameCard2} ${Card.paddingRightLeftNameCard2};
                            position: ${Card.positionNameCard2};
                            bottom: ${Card.bottomNameCard2};
                            width: ${Card.widthNameCard2};
                            transform: perspective(400px) rotateY(90deg);
                            transform-origin: left; 
                            transition: ${Card.transitionNameCard2};
                            
                            ${Card.checkLimit ?
                                `animation: ${tmp1} ${duration} ${fillMode};` :
                                Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                            }
                            
                        `;

                    }


                    // DESTRA IN BASSO
                    if(Card.directionName === "FromRightHandToSinister") {

                        // console.log("hvhvhvsfvk")

                        name = styled.h2`
                            background: ${Card.backgroundNameCard2};
                            font-family: ${Card.fontFamilyNameCard2};
                            color: ${Card.colorNameCard2};
                            text-align: ${Card.textAlignNameCard2};
                            text-transform:${Card.textTransformNameCard2};
                            margin: ${Card.marginNameCard2};
                            padding: ${Card.paddingTopBottomNameCard2} ${Card.paddingRightLeftNameCard2};
                            position: ${Card.positionNameCard2};
                            bottom: ${Card.bottomNameCard2};
                            width: ${Card.widthNameCard2};
                            transform: perspective(400px) rotateY(90deg);
                            transform-origin: right;
                            transition: ${Card.transitionNameCard2};
                            
                            
                            ${Card.checkLimit ?
                                `animation: ${tmp1} ${duration} ${fillMode};` :
                                Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                            }
                            
                        `;
                    }


                    break;

                case 3:

                    // SINISTRA IN BASSO
                    if (Card.directionName === "FromLeftToRight") {

                        name = styled.h2`
                            background: ${Card.backgroundNameCard2};
                            font-family: ${Card.fontFamilyNameCard2};
                            color: ${Card.colorNameCard2};
                            text-align: ${Card.textAlignNameCard2};
                            text-transform: ${Card.textTransformNameCard2};
                            margin: ${Card.marginNameCard2};
                            padding: ${Card.paddingTopBottomNameCard2} ${Card.paddingRightLeftNameCard2};
                            position: ${Card.positionNameCard2};
                            bottom: ${Card.bottomNameCard2};
                            width: ${Card.widthNameCard2};
                            transform: perspective(400px) rotateY(90deg);
                            transform-origin: left; 
                            transition: ${Card.transitionNameCard2};
                            
                            ${Card.checkLimit ?
                                `animation: ${tmp1} ${duration} ${fillMode};` :
                                Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                            }

                        `;

                    }


                    // DESTRA IN BASSO
                    if(Card.directionName === "FromRightHandToSinister") {

                        name = styled.h2`
                            background: ${Card.backgroundNameCard2};
                            font-family: ${Card.fontFamilyNameCard2};
                            color: ${Card.colorNameCard2};
                            text-align: ${Card.textAlignNameCard2};
                            text-transform:${Card.textTransformNameCard2};
                            margin: ${Card.marginNameCard2};
                            padding: ${Card.paddingTopBottomNameCard2} ${Card.paddingRightLeftNameCard2};
                            position: ${Card.positionNameCard2};
                            bottom: ${Card.bottomNameCard2};
                            width: ${Card.widthNameCard2};
                            transform: perspective(400px) rotateY(90deg);
                            transform-origin: right;
                            transition: ${Card.transitionNameCard2};
                            
                           ${Card.checkLimit ?
                                `animation: ${tmp1} ${duration} ${fillMode};` :
                                Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                            }

                        `;
                    }


                    break;

                case 4:

                    // SINISTRA IN BASSO
                    if (Card.directionName === "FromLeftToRight") {

                        name = styled.h2`
                            background: ${Card.backgroundNameCard2};
                            font-family: ${Card.fontFamilyNameCard2};
                            color: ${Card.colorNameCard2};
                            text-align: ${Card.textAlignNameCard2};
                            text-transform: ${Card.textTransformNameCard2};
                            margin: ${Card.marginNameCard2};
                            padding: ${Card.paddingTopBottomNameCard2} ${Card.paddingRightLeftNameCard2};
                            position: ${Card.positionNameCard2};
                            bottom: ${Card.bottomNameCard2};
                            width: ${Card.widthNameCard2};
                            transform: perspective(400px) rotateY(90deg);
                            transform-origin: left; 
                            transition: ${Card.transitionNameCard2};
                            
                           ${Card.checkLimit ?
                                    `animation: ${tmp1} ${duration} ${fillMode};` :
                                    Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                           }
                           
                        `;

                    }


                    // DESTRA IN BASSO
                    if(Card.directionName === "FromRightHandToSinister") {

                        name = styled.h2`
                            background: ${Card.backgroundNameCard2};
                            font-family: ${Card.fontFamilyNameCard2};
                            color: ${Card.colorNameCard2};
                            text-align: ${Card.textAlignNameCard2};
                            text-transform:${Card.textTransformNameCard2};
                            margin: ${Card.marginNameCard2};
                            padding: ${Card.paddingTopBottomNameCard2} ${Card.paddingRightLeftNameCard2};
                            position: ${Card.positionNameCard2};
                            bottom: ${Card.bottomNameCard2};
                            width: ${Card.widthNameCard2};
                            transform: perspective(400px) rotateY(90deg);
                            transform-origin: right;
                            transition: ${Card.transitionNameCard2};
                            
                             ${Card.checkLimit ?
                                     `animation: ${tmp1} ${duration} ${fillMode};` :
                                      Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                             }
                        `;
                    }


                    break;

                default:
                    return
            }


    return name

}

export function getIconUL(Card) {

    let tmp

    let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode
    let duration = (Card.style === null) ? '1s' : Card.style.duration

    if (Card.directionName === "FromLeftToRight") {

        let width = (Card.widthButtonCard2 === null) ? '30px' : Card.widthButtonCard2
        let height = (Card.heightButtonCard2 === null) ? '80px' : Card.heightButtonCard2
        let color = (Card.colorButtonCard2 === null) ? '#fff' : Card.colorButtonCard2
        let position = (Card.positionButtonCard2 === null) ? 'relative' : Card.positionButtonCard2
        let bottom = (Card.topButtonCard2 === null) ? '20%' : Card.topButtonCard2

            tmp = keyframes`  
                      from,to {
                            width: ${width};
                            height: ${height};
                            color: ${color};
                            
                            position: ${position};
                            bottom: ${bottom};
                      }
                `;
    }

    if (Card.directionName === "FromRightHandToSinister") {

        let width1 = (Card.widthButtonCard2 === null) ? '30px' : Card.widthButtonCard2
        let height1 = (Card.heightButtonCard2 === null) ? '80px' : Card.heightButtonCard2
        let color1 = (Card.colorButtonCard2 === null) ? '#fff' : Card.colorButtonCard2
        let position1 = (Card.positionButtonCard2 === null) ? 'relative' : Card.positionButtonCard2
        let bottom1 = (Card.topButtonCard2 === null) ? '20%' : Card.topButtonCard2
        let left1 = (Card.leftButtonCard2 === null) ? '85%' : Card.leftButtonCard2

        tmp = keyframes`  
                  from,to {
                        width: ${width1};
                        height: ${height1};
                        color: ${color1};
                            
                        position: ${position1};
                        bottom: ${bottom1};
                        left: ${left1}; 
                  }
        `;

    }

/*    const ItemsBodyContentIcon = styled.button`

          background-color: ${Card.backgroundColorButton};
          border: ${Card.borderButton};
          color: ${Card.colorButton};
          padding: ${Card.paddingButtonTopBottom} ${Card.paddingButtonRightLeft};
          text-align: ${Card.textAlignButton};
          text-decoration: ${Card.textDecorationButton};
          display: ${Card.displayButton};
          font-size: ${Card.fontSizeButton};

          // animation: icon 1.5s infinite forwards;

          @keyframes icon {
              0%,100%{
                transform: translate(0px);
              }
              50% {
                transform: translate(3px);
              }
            }

      `;*/

    let width = (Card.widthButtonCard2 === null) ? '30px' : Card.widthButtonCard2
    let height = (Card.heightButtonCard2 === null) ? '80px' : Card.heightButtonCard2
    let color = (Card.colorButtonCard2 === null) ? '#fff' : Card.colorButtonCard2
    let position = (Card.positionButtonCard2 === null) ? 'relative' : Card.positionButtonCard2
    let bottom = (Card.topButtonCard2 === null) ? '20%' : Card.topButtonCard2
    let left = (Card.leftButtonCard2 === null) ? (Card.directionName === "FromRightHandToSinister") ? '85%' : '0%' : Card.leftButtonCard2


    let tmp1 = ( (!Card.transitionYEnable && !Card.transitionYEnable1) && (!Card.transitionXEnable && !Card.transitionXEnable1)) ? true : false


    const ItemsBodyContentIcon = styled.button`
 
          animation: ${duration} ${tmp} ${fillMode};
          
          width: ${Card.toEnableAnimationButton ? width : null}
          height: ${Card.toEnableAnimationButton ? height : null}
          color: ${Card.toEnableAnimationButton ? color : null}
          position: ${Card.toEnableAnimationButton ? position : null} 
          bottom: ${Card.toEnableAnimationButton ? bottom : null}
          left: ${Card.toEnableAnimationButton ? left : null}
          
          background: rgba(255, 255, 255,0); 
          border: none;
                
          ${Card.toEnableAnimationButton ? `animation: icon ${Card.durationAnimationButton} ${Card.duration1AnimationButton} ${Card.fillModeAnimationButton};` : null}
     
          @keyframes icon {
              0%,100%{
                    transform: ${tmp1 ? 'translateY(0px)' : Card.transitionYEnable ? 'translateY(0px)' : ''};
                    transform: ${Card.transitionYEnable1 ? 'translateY(0px)' : ''};
                    transform: ${Card.transitionXEnable ? 'translateX(0px)' : ''};
                    transform: ${Card.transitionXEnable1 ? 'translateX(0px)' : ''};
              }
              50% {
                    transform: ${tmp1 ? 'translateY(3px)' : Card.transitionYEnable ? 'translateY(3px)' : ''};
                    transform: ${Card.transitionYEnable1 ? 'translateY(-3px)' : ''};
                    transform: ${Card.transitionXEnable ? 'translateX(3px)' : ''};
                    transform: ${Card.transitionXEnable1 ? 'translateX(-3px)' : ''};
              }
          }
  
    `;

    return ItemsBodyContentIcon
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

    let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode
    let duration = (Card.style === null) ? '1s' : Card.style.duration

    const tmp = keyframes`
                      
                      from,to {
                          position: ${Card.positionCard3};
                          top: ${Card.topCard3};
                          left: ${Card.leftCard3};
                          -webkit-transform: translate(-50%, -50%);
                      }
    `;


    const CardCenterFinal = styled.div`
          animation: ${duration} ${tmp} ${fillMode};
    `;

    return CardCenterFinal
}

export function getCard(Card) {

    let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode
    let duration = (Card.style === null) ? '1s' : Card.style.duration

    if (Card.width === '100%') Card.width = '450px';
    if (Card.height === '100%') Card.height = '250px';

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
          animation: ${duration} ${tmp} ${fillMode};
    `;

    return CardFinal
}

export function getAdditional(Card) {

    let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode
    let duration = (Card.style === null) ? '1s' : Card.style.duration

    switch (Card.typeInput) {
        case 1:

            // DA DESTRA VERSO SINITRA

            if (Card.directionOfRotation1 === "FromRightHandToSinister") {

                const tmp = keyframes`
            
                     to {
                         width: ${Card.widthHoverAdditionalCard3};
                         border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`
            
                     from {
                         width: ${Card.widthHoverAdditionalCard3};
                         border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'width' : Card.transitionAdditionalCard3_1

                const Additional = styled.div`
       
                        position: ${Card.positionAdditionalCard3};
                        width: 150px;
                        height: 100%;
                        background: ${Card.backgroundAdditionalCard3};
                        transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                        overflow: ${Card.overflowAdditionalCard3};
                        z-index: 2; 
                        
                        ${Card.checkLimit ?
                            `animation: ${tmp} ${duration} ${fillMode};` :
                            Card.checkLimit === null ? '' :  `animation: ${tmp1} ${duration} ${fillMode};`
                        }
                        
                `;

                return Additional

            }

            // DALL ALTO VERSO IL BASSO

            if (Card.directionOfRotation1 === "FromTopToBottom") {

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'height' : Card.transitionAdditionalCard3_1

                const tmp = keyframes`

                     to {
                            width: ${Card.widthHoverAdditionalCard3};
                            height: 100%;
                            border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`

                     from {
                            width: ${Card.widthHoverAdditionalCard3};
                            height: 100%;
                            border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const Additional1 = styled.div`
       
                        position:  ${Card.positionAdditionalCard3};
                        width: 100%;
                        height: 10%;
                        background: ${Card.backgroundAdditionalCard3};
                        transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                        overflow: ${Card.overflowAdditionalCard3};
                        z-index: 2;
                        
                        ${Card.checkLimit ?
                            `animation: ${tmp} ${duration} ${fillMode};` :
                            Card.checkLimit === null ? '' :  `animation: ${tmp1} ${duration} ${fillMode};`
                        }
                        
               `;

                return Additional1

            }

            // DAL BASSO VERSO L ALTO

            if (Card.directionOfRotation1 === "FromBottomToTop") {

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'top' : Card.transitionAdditionalCard3_1

                const tmp = keyframes`

                     to {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%
                        top: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`

                     from {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%
                        top: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const Additional2 = styled.div`
       
                    position: ${Card.positionAdditionalCard3};
                    width: 100%;
                    top: 90%
                    height: 100%;
                    background: ${Card.backgroundAdditionalCard3};
                    transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                    overflow: ${Card.overflowAdditionalCard3};
                    z-index: 2;
                    
                    ${Card.checkLimit ?
                        `animation: ${tmp} ${duration} ${fillMode};` :
                        Card.checkLimit === null ? '' :  `animation: ${tmp1} ${duration} ${fillMode};`
                    }
                    
               `;

                return Additional2
            }

            // DA DESTRA VERSO SINISTRA

            if (Card.directionOfRotation1 === "FromLeftToRight") {

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'left' : Card.transitionAdditionalCard3_1

                const tmp = keyframes`

                     to {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%;
                        left: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`

                     from {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%;
                        left: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const Additional3 = styled.div`
           
                    position: ${Card.positionAdditionalCard3};
                    width: 100%;
                    height: 100%;
                    left: 75%;
                    background: ${Card.backgroundAdditionalCard3};
                    transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                    overflow: ${Card.overflowAdditionalCard3};
                    z-index: 2;
                    
                    ${Card.checkLimit ?
                        `animation: ${tmp} ${duration} ${fillMode};` :
                        Card.checkLimit === null ? '' :  `animation: ${tmp1} ${duration} ${fillMode};`
                    }
               `;

                return Additional3

            }

            break;

        case 2:

            // DA DESTRA VERSO SINITRA

            if (Card.directionOfRotation1 === "FromRightHandToSinister") {

                const tmp = keyframes`
            
                     to {
                         width: ${Card.widthHoverAdditionalCard3};
                         border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`
            
                     from {
                         width: ${Card.widthHoverAdditionalCard3};
                         border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'width' : Card.transitionAdditionalCard3_1

                const Additional = styled.div`
       
                        position: ${Card.positionAdditionalCard3};
                        width: 150px;
                        height: 100%;
                        background: ${Card.backgroundAdditionalCard3};
                        transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                        overflow: ${Card.overflowAdditionalCard3};
                        z-index: 2; 
                        
                        ${Card.checkLimit ? 
                            `animation: ${tmp1} ${duration} ${fillMode};` :
                             Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                        }

                `;

                return Additional

            }

            // DALL ALTO VERSO IL BASSO

            if (Card.directionOfRotation1 === "FromTopToBottom") {

                const tmp = keyframes`

                     to {
                            width: ${Card.widthHoverAdditionalCard3};
                            height: 100%;
                            border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`

                     from {
                            width: ${Card.widthHoverAdditionalCard3};
                            height: 100%;
                            border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'height' : Card.transitionAdditionalCard3_1

                const Additional1 = styled.div`
       
                        position:  ${Card.positionAdditionalCard3};
                        width: 100%;
                        height: 10%;
                        background: ${Card.backgroundAdditionalCard3};
                        transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                        overflow: ${Card.overflowAdditionalCard3};
                        z-index: 2;
                        
                        ${Card.checkLimit ?
                             `animation: ${tmp1} ${duration} ${fillMode};` :
                             Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                        }

               `;

                return Additional1

            }

            // DAL BASSO VERSO L ALTO

            if (Card.directionOfRotation1 === "FromBottomToTop") {

                const tmp = keyframes`

                     to {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%
                        top: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`

                     from {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%
                        top: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'top' : Card.transitionAdditionalCard3_1

                const Additional2 = styled.div`
       
                    position: ${Card.positionAdditionalCard3};
                    width: 100%;
                    top: 90%
                    height: 100%;
                    background: ${Card.backgroundAdditionalCard3};
                    transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                    overflow: ${Card.overflowAdditionalCard3};
                    z-index: 2;
                    
                    ${Card.checkLimit ?
                        `animation: ${tmp1} ${duration} ${fillMode};` :
                        Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                    }

               `;

                return Additional2
            }

            // DA DESTRA VERSO SINISTRA

            if (Card.directionOfRotation1 === "FromLeftToRight") {

                const tmp = keyframes`

                     to {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%;
                        left: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`

                     from {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%;
                        left: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'left' : Card.transitionAdditionalCard3_1

                const Additional3 = styled.div`
           
                    position: ${Card.positionAdditionalCard3};
                    width: 100%;
                    height: 100%;
                    left: 75%;
                    background: ${Card.backgroundAdditionalCard3};
                    transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                    overflow: ${Card.overflowAdditionalCard3};
                    z-index: 2;
                    
                    ${Card.checkLimit ?
                        `animation: ${tmp1} ${duration} ${fillMode};` :
                        Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                    }

               `;

                return Additional3

            }

            break;

        case 3:

            // DA DESTRA VERSO SINITRA

            if (Card.directionOfRotation1 === "FromRightHandToSinister") {

                const tmp = keyframes`
            
                     to {
                         width: ${Card.widthHoverAdditionalCard3};
                         border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`
            
                     from {
                         width: ${Card.widthHoverAdditionalCard3};
                         border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'width' : Card.transitionAdditionalCard3_1

                const Additional = styled.div`
       
                        position: ${Card.positionAdditionalCard3};
                        width: 150px;
                        height: 100%;
                        background: ${Card.backgroundAdditionalCard3};
                        transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                        overflow: ${Card.overflowAdditionalCard3};
                        z-index: 2; 
                        
                        ${Card.checkLimit ?
                            `animation: ${tmp1} ${duration} ${fillMode};` :
                            Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                        }
                        
                `;

                return Additional

            }

            // DALL ALTO VERSO IL BASSO

            if (Card.directionOfRotation1 === "FromTopToBottom") {

                const tmp = keyframes`

                     to {
                            width: ${Card.widthHoverAdditionalCard3};
                            height: 100%;
                            border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`

                     from {
                            width: ${Card.widthHoverAdditionalCard3};
                            height: 100%;
                            border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'height' : Card.transitionAdditionalCard3_1

                const Additional1 = styled.div`
       
                        position:  ${Card.positionAdditionalCard3};
                        width: 100%;
                        height: 10%;
                        background: ${Card.backgroundAdditionalCard3};
                        transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                        overflow: ${Card.overflowAdditionalCard3};
                        z-index: 2;
                        
                        ${Card.checkLimit ?
                            `animation: ${tmp1} ${duration} ${fillMode};` :
                            Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                        }

               `;

                return Additional1

            }

            // DAL BASSO VERSO L ALTO

            if (Card.directionOfRotation1 === "FromBottomToTop") {

                const tmp = keyframes`

                     to {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%
                        top: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`

                     from {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%
                        top: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'top' : Card.transitionAdditionalCard3_1

                const Additional2 = styled.div`
       
                    position: ${Card.positionAdditionalCard3};
                    width: 100%;
                    top: 90%
                    height: 100%;
                    background: ${Card.backgroundAdditionalCard3};
                    transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                    overflow: ${Card.overflowAdditionalCard3};
                    z-index: 2;
                    
                    ${Card.checkLimit ?
                      `animation: ${tmp1} ${duration} ${fillMode};` :
                      Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                    }
                    
               `;

                return Additional2
            }

            // DA DESTRA VERSO SINISTRA

            if (Card.directionOfRotation1 === "FromLeftToRight") {

                const tmp = keyframes`

                     to {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%;
                        left: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`

                     from {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%;
                        left: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'left' : Card.transitionAdditionalCard3_1

                const Additional3 = styled.div`
           
                    position: ${Card.positionAdditionalCard3};
                    width: 100%;
                    height: 100%;
                    left: 75%;
                    background: ${Card.backgroundAdditionalCard3};
                    transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                    overflow: ${Card.overflowAdditionalCard3};
                    z-index: 2;
                   
                    ${Card.checkLimit ?
                          `animation: ${tmp1} ${duration} ${fillMode};` :
                           Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                    }
                    
               `;

                return Additional3

            }

            break;

        case 4:

            // DA DESTRA VERSO SINITRA

            if (Card.directionOfRotation1 === "FromRightHandToSinister") {

                const tmp = keyframes`
            
                     to {
                         width: ${Card.widthHoverAdditionalCard3};
                         border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`
            
                     from {
                         width: ${Card.widthHoverAdditionalCard3};
                         border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'width' : Card.transitionAdditionalCard3_1

                const Additional = styled.div`
       
                        position: ${Card.positionAdditionalCard3};
                        width: 150px;
                        height: 100%;
                        background: ${Card.backgroundAdditionalCard3};
                        transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                        overflow: ${Card.overflowAdditionalCard3};
                        z-index: 2; 
                        
                        ${Card.checkLimit ?
                              `animation: ${tmp1} ${duration} ${fillMode};` :
                               Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                        }
                        
                `;

                return Additional

            }

            // DALL ALTO VERSO IL BASSO

            if (Card.directionOfRotation1 === "FromTopToBottom") {

                const tmp = keyframes`

                     to {
                            width: ${Card.widthHoverAdditionalCard3};
                            height: 100%;
                            border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`

                     from {
                            width: ${Card.widthHoverAdditionalCard3};
                            height: 100%;
                            border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'height' : Card.transitionAdditionalCard3_1

                const Additional1 = styled.div`
       
                        position:  ${Card.positionAdditionalCard3};
                        width: 100%;
                        height: 10%;
                        background: ${Card.backgroundAdditionalCard3};
                        transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                        overflow: ${Card.overflowAdditionalCard3};
                        z-index: 2;
                      
                        ${Card.checkLimit ?
                            `animation: ${tmp1} ${duration} ${fillMode};` :
                             Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                        }
                        
               `;

                return Additional1

            }

            // DAL BASSO VERSO L ALTO

            if (Card.directionOfRotation1 === "FromBottomToTop") {

                const tmp = keyframes`

                     to {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%
                        top: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`

                     from {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%
                        top: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'top' : Card.transitionAdditionalCard3_1

                const Additional2 = styled.div`
       
                    position: ${Card.positionAdditionalCard3};
                    width: 100%;
                    top: 90%
                    height: 100%;
                    background: ${Card.backgroundAdditionalCard3};
                    transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                    overflow: ${Card.overflowAdditionalCard3};
                    z-index: 2;
                    
                    
                    ${Card.checkLimit ?
                        `animation: ${tmp1} ${duration} ${fillMode};` :
                         Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                    }
                    
               `;

                return Additional2
            }

            // DA DESTRA VERSO SINISTRA

            if (Card.directionOfRotation1 === "FromLeftToRight") {

                const tmp = keyframes`

                     to {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%;
                        left: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                const tmp1 = keyframes`

                     from {
                        width: ${Card.widthHoverAdditionalCard3};
                        height: 100%;
                        left: 0%;
                        border-radius: ${Card.borderRadiusAdditionalCard3_1};
                     }
                     
                `;

                let transitionsAdditional1 = (Card.transitionAdditionalCard3_1 === null) ? 'left' : Card.transitionAdditionalCard3_1

                const Additional3 = styled.div`
           
                    position: ${Card.positionAdditionalCard3};
                    width: 100%;
                    height: 100%;
                    left: 75%;
                    background: ${Card.backgroundAdditionalCard3};
                    transition: ${transitionsAdditional1} ${Card.transitionAdditionalCard3_2};
                    overflow: ${Card.overflowAdditionalCard3};
                    z-index: 2;
                    
                    ${Card.checkLimit ?
                       `animation: ${tmp1} ${duration} ${fillMode};` :
                        Card.checkLimit === null ? '' :  `animation: ${tmp} ${duration} ${fillMode};`
                    }
               `;

                return Additional3

            }

            break;

        default:
            return

    }

}

export function getMoreInfo(Card) {

    let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode
    let duration = (Card.style === null) ? '1s' : Card.style.duration

    let tmp

    // DA SINISTRA VERSO DESTRA
    // DAL ALTO VERSO IL BASSO
    // DAL BASSO VERSO L ALTO

    if(Card.directionOfRotation1 != "FromLeftToRight") {

         tmp = keyframes`
              from,to {
                 text-align: ${Card.textAlignMoreInfoCard3};
                 width: ${Card.widthMoreInfoCard3};
                 height: ${Card.heightMoreInfoCard3};
                 float: ${Card.floatMoreInfoCard3};
                 justify-content: ${Card.justifyContentMoreInfoCard3};

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
                 text-align: ${Card.textAlignMoreInfoCard3};
                 width: ${Card.widthMoreInfoCard3};
                 height: ${Card.heightMoreInfoCard3};
                 float: ${Card.floatMoreInfoCard3};
                 justify-content: ${Card.justifyContentMoreInfoCard3};

                 position: absolute;
                 left: 40px;
                 height: 50%;
                 bottom: 2rem;
                 right: 1rem;
         `;
    }


    const MoreInfoFinal = styled.div`
          animation: ${duration} ${tmp} ${fillMode};
          
    `;

    return MoreInfoFinal
}

export function getCoords(Card) {

    let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode
    let duration = (Card.style === null) ? '1s' : Card.style.duration

    let tmp

    let width = (Card.widthButtonCard3 === null) ? '80px' : Card.widthButtonCard3
    let height = (Card.heightButtonCard3 === null) ? '20px' : Card.heightButtonCard3
    let color = (Card.colorButtonCard3 === null) ? '#fff' : Card.colorButtonCard3

    let position = (Card.positionButtonCard3 === null) ?
            (Card.directionOfRotation1 === "FromRightHandToSinister") ? 'absolute' : 'fixed' : Card.positionButtonCard3
    let bottom = (Card.topButtonCard3 === null) ? '20%' : Card.topButtonCard3
    let left = (Card.leftButtonCard3 === null) ? (Card.directionName === "FromRightHandToSinister") ? '85%' : '0%' : Card.leftButtonCard2

    let tmp1 = ( (!Card.transitionYEnable && !Card.transitionYEnable1) && (!Card.transitionXEnable && !Card.transitionXEnable1)) ? true : false

    switch (Card.directionOfRotation1) {

        case "FromRightHandToSinister":

            let position = (Card.positionButtonCard3 === null) ? 'absolute' : Card.positionButtonCard3
            let top = (Card.topButtonCard3 === null) ? '45%' : Card.topButtonCard3

            tmp = keyframes`  
                  from,to {
                        width: ${width};
                        height: ${height};
                        color: ${color};
                        
                        position: ${position};
                        top: ${top};
                  }
            `;

            break;

        case "FromTopToBottom":

            let position1 = (Card.positionButtonCard3 === null) ? 'fixed' : Card.positionButtonCard3
            let top1 = (Card.topButtonCard3 === null) ? '1%' : Card.topButtonCard3
            let left1 = (Card.leftButtonCard3 === null) ? '45%' : Card.leftButtonCard3

            tmp = keyframes`  
                  from,to {
                        width: ${width};
                        height: ${height};
                        color: ${color};
                        
                        position: ${position1}; 
                        top: ${top1};
                        left: ${left1};
                  }
            `;

            break;

        case "FromBottomToTop":

            let position2 = (Card.positionButtonCard3 === null) ? 'fixed' : Card.positionButtonCard3
            let top2 = (Card.topButtonCard3 === null) ? '90%' : Card.topButtonCard3
            let left2 = (Card.leftButtonCard3 === null) ? '45%' : Card.leftButtonCard3

            tmp = keyframes`  
                  from,to {
                        width: ${width};
                        height: ${height};
                        color: ${color};
                        
                        position: ${position2};
                        top: ${top2};
                        left: ${left2};
                  }
            `;

            break;

        case "FromLeftToRight":

            let position3 = (Card.positionButtonCard3 === null) ? 'fixed' : Card.positionButtonCard3
            let top3 = (Card.topButtonCard3 === null) ? '45%' : Card.topButtonCard3
            let left3 = (Card.leftButtonCard3 === null) ? '85%' : Card.leftButtonCard3

             tmp = keyframes`  
                  from,to {
                        width: ${width};
                        height: ${height};
                        color: ${color};
                        
                        position: ${position3};
                        top: ${top3};
                        left: ${left3};
                  }    
            `;

            break;

        default:
            return

    }

    const CoordsFinal = styled.button`
          animation: ${duration} ${tmp} ${fillMode};
          background: rgba(255, 255, 255,0);
          border: none;
          
          width: ${Card.toEnableAnimationButton ? width : null}
          height: ${Card.toEnableAnimationButton ? height : null}
          color: ${Card.toEnableAnimationButton ? color : null}
          position: ${Card.toEnableAnimationButton ? position : null}
          bottom: ${Card.toEnableAnimationButton ? bottom : null}
          left: ${Card.toEnableAnimationButton ? left : null}
          
          ${Card.toEnableAnimationButton ? `animation: icon ${Card.durationAnimationButton} ${Card.duration1AnimationButton} ${Card.fillModeAnimationButton};` : null}
     
          @keyframes icon {
              0%,100%{
                    transform: ${tmp1 ? 'translateY(0px)' : Card.transitionYEnable ? 'translateY(0px)' : ''};
                    transform: ${Card.transitionYEnable1 ? 'translateY(0px)' : ''};
                    transform: ${Card.transitionXEnable ? 'translateX(0px)' : ''};
                    transform: ${Card.transitionXEnable1 ? 'translateX(0px)' : ''};
              }
              50% {
                    transform: ${tmp1 ? 'translateY(3px)' : Card.transitionYEnable ? 'translateY(3px)' : ''};
                    transform: ${Card.transitionYEnable1 ? 'translateY(-3px)' : ''};
                    transform: ${Card.transitionXEnable ? 'translateX(3px)' : ''};
                    transform: ${Card.transitionXEnable1 ? 'translateX(-3px)' : ''};
              }
          }
    `;

    return CoordsFinal
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
            position: ${Card.positionGeneralCard3};
            top: ${Card.topGeneralCard3};
            right: ${Card.rightGeneralCard3};
            z-index: 1;
            box-sizing: ${Card.boxSizingGeneralCard3};
            padding: ${Card.paddingGeneralCard3};
            padding-top: ${Card.paddingTopGeneralCard3};
            background-color: ${Card.backgroundColorGeneralCard3};
            
            h1 {
                front-size: ${Card.frontSizeGeneralCard3};
            }
       `;

    } else {

        // DA DESTRA VERSO SINISTRA

         General = styled.div`
            width: 450px;
            height: 100%;
            position: ${Card.positionGeneralCard3};
            top: ${Card.topGeneralCard3};
            right: ${Card.rightGeneralCard3};
            z-index: 1;
            box-sizing: ${Card.boxSizingGeneralCard3};
            padding: ${Card.paddingGeneralCard3};
            padding-top: ${Card.paddingTopGeneralCard3};
            background-color: ${Card.backgroundColorGeneralCard3};
            
            h1 {
                front-size: ${Card.frontSizeGeneralCard3};
            }
       `;

    }

    return General
}

export function getCardGeneralTitle(Card) {

    let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode
    let duration = (Card.style === null) ? '1s' : Card.style.duration

    const tmp = keyframes`  
              from,to {
                    front-size: ${Card.frontSizeGeneralTitleCard3};
    `;

    const GeneralFinal = styled.h1`
          animation: ${duration} ${tmp} ${fillMode};
    `;

    return GeneralFinal
}

export function getCardGeneralText(Card) {

    let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode
    let duration = (Card.style === null) ? '1s' : Card.style.duration

    const tmp = keyframes`  
              from,to {
                    front-size: ${Card.frontSizeGeneralTextCard3};
    `;

    const GeneralFinal = styled.p`
          animation: ${duration} ${tmp} ${fillMode};
    `;


    return GeneralFinal
}

export function getCardGeneralMore(Card) {

    let tmp, tmpBotton

    let fillMode = (Card.style === null) ? 'both' : Card.style.fillMode
    let duration = (Card.style === null) ? '1s' : Card.style.duration

    tmpBotton =  ( (Card.directionOfRotation1 === "FromBottomToTop") ? 2 : 1 )

    // DA SINISTRA VERSO DESTRA
    // DAL BASSO VERSO L ALTO
    // DAL ALTO VERSO IL BASSO

    if(Card.directionOfRotation1 != "FromLeftToRight") {

         tmp = keyframes`
              from,to {
                     position: ${Card.positionGeneralMoreCard3};
                     bottom: ${tmpBotton}rem;
                     right: ${Card.rightGeneralMoreCard3};
                     font-size: ${Card.fontSizeGeneralMoreCard3};
              }
        `;

    } else {

        // DA DESTRA VERSO SINISTRA

         tmp = keyframes`  
              from,to {
                     position: ${Card.positionGeneralMoreCard3};
                     bottom: ${tmpBotton}rem;
                     right: ${Card.rightGeneralMoreCard3};
                     font-size: ${Card.fontSizeGeneralMoreCard3};
              }
        `;

    }




    const GeneralMoreFinal = styled.span`
          animation: ${duration} ${tmp} ${fillMode};
    `;

    return GeneralMoreFinal
}

//
export function setCheckLimitCards (value) {
    //console.log(value)
    cardsActions.changeValue(this.id, 'checkLimit', value)
}

export function setValueVariable (id, idVar, value) {
    console.log(id, idVar, value);
    cardsActions.changeValue(id, idVar, value)
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
        "backgroundCard", "backgroundCard1", "backgroundCard2", "backgroundColorButton", "borderButton", "colorButton", "paddingButtonTopBottom", "paddingButtonRightLeft",
        "textAlignButton", "textDecorationButton", "displayButton", "fontSizeButton",
        "widthCard2", "heightCard2", "positionCard2", "overflowCard2", "backgroundRGBACard2", "transitionRGBACard2",
        "backgroundNameCard2", "fontFamilyNameCard2", "colorNameCard2", "textAlignNameCard2", "textTransformNameCard2",
        "marginNameCard2", "paddingTopBottomNameCard2", "paddingRightLeftNameCard2", "positionNameCard2",
        "bottomNameCard2", "widthNameCard2", "transitionNameCard2",
        "positionCard3", "topCard3", "leftCard3", "positionAdditionalCard3", "backgroundAdditionalCard3", "transitionAdditionalCard3_1",
        "transitionAdditionalCard3_2", "overflowAdditionalCard3", "widthHoverAdditionalCard3", "borderRadiusAdditionalCard3_1", "textAlignMoreInfoCard3",
        "widthMoreInfoCard3", "heightMoreInfoCard3", "floatMoreInfoCard3", "justifyContentMoreInfoCard3", "positionGeneralCard3", "topGeneralCard3",
        "rightGeneralCard3", "boxSizingGeneralCard3", "paddingGeneralCard3", "paddingTopGeneralCard3", "backgroundColorGeneralCard3", "frontSizeGeneralCard3",
        "frontSizeGeneralTitleCard3", "frontSizeGeneralTextCard3", "positionGeneralMoreCard3", "rightGeneralMoreCard3", "fontSizeGeneralMoreCard3",
        "widthButtonCard3", "heightButtonCard3", "colorButtonCard3", "positionButtonCard3", "topButtonCard3", "leftButtonCard3",
        "widthButtonCard2", "heightButtonCard2", "colorButtonCard2", "positionButtonCard2", "topButtonCard2", "leftButtonCard2",
        "checkLimitFlag", "colorCardFront", "colorCardBack", "toEnableAnimationButton", "durationAnimationButton", "duration1AnimationButton", "fillModeAnimationButton",
        "toEnableAnimationWrapper", "imgCard2"
    ]

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
        34: "backgroundColorButton",
        35: "borderButton",
        36: "colorButton",
        37: "paddingButtonTopBottom",
        38: "paddingButtonRightLeft",
        39: "textAlignButton",
        40: "textDecorationButton",
        41: "displayButton",
        42: "fontSizeButton",
        43: "widthCard2",
        44: "heightCard2",
        45: "positionCard2",
        46: "overflowCard2",
        47: "backgroundRGBACard2",
        48: "transitionRGBACard2",
        49: "backgroundNameCard2",
        50: "fontFamilyNameCard2",
        51: "colorNameCard2",
        52: "textAlignNameCard2",
        53: "textTransformNameCard2",
        54: "marginNameCard2",
        55: "paddingTopBottomNameCard2",
        56: "paddingRightLeftNameCard2",
        57: "positionNameCard2",
        58: "bottomNameCard2",
        59: "widthNameCard2",
        60: "transitionNameCard2"
        61: "positionCard3",
        62: "topCard3",
        63: "leftCard3",
        64: "positionAdditionalCard3",
        65: "backgroundAdditionalCard3",
        66: "transitionAdditionalCard3_1",
        67: "transitionAdditionalCard3_2",
        68: "overflowAdditionalCard3",
        69: "widthHoverAdditionalCard3",
        70: "borderRadiusAdditionalCard3_1",
        71: "textAlignMoreInfoCard3",
        72: "widthMoreInfoCard3",
        73: "heightMoreInfoCard3",
        74: "floatMoreInfoCard3",
        75: "justifyContentMoreInfoCard3",
        76: "positionGeneralCard3",
        77: "topGeneralCard3",
        78: "rightGeneralCard3",
        79: "boxSizingGeneralCard3",
        80: "paddingGeneralCard3",
        81: "paddingTopGeneralCard3",
        82: "backgroundColorGeneralCard3",
        83: "frontSizeGeneralCard3",
        84: "frontSizeGeneralTitleCard3",
        85: "frontSizeGeneralTextCard3",
        86: "positionGeneralMoreCard3",
        87: "rightGeneralMoreCard3",
        88: "fontSizeGeneralMoreCard3",
        89: "widthButtonCard3",
        90: "heightButtonCard3",
        91: "colorButtonCard3",
        92: "positionButtonCard3",
        93: "topButtonCard3",
        94: "leftButtonCard3",
        95: "widthButtonCard2",
        96: "heightButtonCard2",
        97: "colorButtonCard2",
        98: "positionButtonCard2",
        99: "topButtonCard2",
        100: "leftButtonCard2",
        101: "checkLimitFlag",
        102: "colorCardFront",
        103: "colorCardBack",
        104: "toEnableAnimationButton",
        105: "durationAnimationButton",
        106: "duration1AnimationButton",
        107: "fillModeAnimationButton",
        108: "toEnableAnimationWrapper",
        109: "imgCard2",
        110: "transitionYEnable",
        111: "transitionYEnable1",
        112: "transitionXEnable",
        113: "transitionXEnable1"
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

        case 1:
            console.log("VALUE", value)
            cardsActions.changeValue(this.id, 'checkLimit', value)

            cardsActions.changeValue(this.id, 'checkLimitFlag', true)

            break;

        case 2:

            result = (value === this.checkLimit) ? !value : value
            cardsActions.changeValue(this.id, 'checkLimit', result)

            break;

        case 3:

            if (this.textInput === null) cardsActions.changeValue(this.id, 'checkLimit', !this.checkLimit)

            if (value.key === this.textInput) {
                if (this.checkLimit === null)
                    cardsActions.changeValue(this.id, 'checkLimit', false)
                else
                    cardsActions.changeValue(this.id, 'checkLimit', !this.checkLimit)
            }

            break;

        case 4:

             if (this.checkLimit === null)
                 cardsActions.changeValue(this.id, 'checkLimit', false)
             else
                 cardsActions.changeValue(this.id, 'checkLimit', !this.checkLimit)

            break;

        default:
            return;
    }

}

function setFlagCheckLimit(Card) {

    // SALVATAGGIO VALUE "checkLimit" IN "checkLimitFlag"
    cardsActions.changeValue(Card.id, 'checkLimitFlag', Card.checkLimit)

    //SET VALUE "checkLimit" a NULL
    cardsActions.changeValue(Card.id, 'checkLimit', null)

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
    backgroundCard2: PropTypes.string,

    backgroundColorButton: PropTypes.string,    // CARD 1
    borderButton: PropTypes.string, // CARD 1
    colorButton: PropTypes.string,  // CARD 1
    paddingButtonTopBottom: PropTypes.string,   // CARD 1
    paddingButtonRightLeft: PropTypes.string,   // CARD 1
    textAlignButton: PropTypes.string,  // CARD 1
    textDecorationButton: PropTypes.string, // CARD 1
    displayButton: PropTypes.string,    // CARD 1
    fontSizeButton: PropTypes.string, // CARD 1

    widthCard2: PropTypes.string, // CARD 2
    heightCard2: PropTypes.string, // CARD 2
    positionCard2: PropTypes.string, // CARD 2
    overflowCard2: PropTypes.string, // CARD 2
    backgroundRGBACard2: PropTypes.string, // CARD 2
    transitionRGBACard2: PropTypes.string, // CARD 2
    backgroundNameCard2: PropTypes.string, // CARD 2
    fontFamilyNameCard2: PropTypes.string, // CARD 2
    colorNameCard2: PropTypes.string, // CARD 2
    textAlignNameCard2: PropTypes.string, // CARD 2
    textTransformNameCard2: PropTypes.string,   // CARD 2
    marginNameCard2: PropTypes.string, // CARD 2
    paddingTopBottomNameCard2: PropTypes.string, // CARD 2
    paddingRightLeftNameCard2: PropTypes.string, // CARD 2
    positionNameCard2: PropTypes.string, // CARD 2
    bottomNameCard2: PropTypes.string, // CARD 2
    widthNameCard2: PropTypes.string, // CARD 2
    transitionNameCard2: PropTypes.string, // CARD 2

    positionCard3: PropTypes.string, // CARD 3
    topCard3: PropTypes.string, // CARD 3
    leftCard3: PropTypes.string, // CARD 3
    positionAdditionalCard3: PropTypes.string, // CARD 3
    backgroundAdditionalCard3: PropTypes.string, // CARD 3
    transitionAdditionalCard3_1: PropTypes.string, // CARD 3
    transitionAdditionalCard3_2: PropTypes.string, // CARD 3
    overflowAdditionalCard3: PropTypes.string, // CARD 3
    widthHoverAdditionalCard3: PropTypes.string, // CARD 3
    borderRadiusAdditionalCard3_1: PropTypes.string, // CARD 3
    textAlignMoreInfoCard3: PropTypes.string, // CARD 3
    widthMoreInfoCard3: PropTypes.string, // CARD 3
    heightMoreInfoCard3: PropTypes.string, // CARD 3
    floatMoreInfoCard3: PropTypes.string, // CARD 3
    justifyContentMoreInfoCard3: PropTypes.string, // CARD 3
    positionGeneralCard3: PropTypes.string, // CARD 3
    topGeneralCard3: PropTypes.string, // CARD 3
    rightGeneralCard3: PropTypes.string, // CARD 3
    boxSizingGeneralCard3: PropTypes.string, // CARD 3
    paddingGeneralCard3: PropTypes.string, // CARD 3
    paddingTopGeneralCard3: PropTypes.string, // CARD 3
    backgroundColorGeneralCard3: PropTypes.string, // CARD 3
    frontSizeGeneralCard3: PropTypes.string, // CARD 3
    frontSizeGeneralTitleCard3: PropTypes.string, // CARD 3
    frontSizeGeneralTextCard3: PropTypes.string, // CARD 3
    positionGeneralMoreCard3: PropTypes.string, // CARD 3
    rightGeneralMoreCard3: PropTypes.string, // CARD 3
    fontSizeGeneralMoreCard3: PropTypes.string, // CARD 3

    widthButtonCard3: PropTypes.string, // CARD 3
    heightButtonCard3: PropTypes.string, // CARD 3
    colorButtonCard3: PropTypes.string, // CARD 3
    positionButtonCard3: PropTypes.string, // CARD 3
    topButtonCard3: PropTypes.string, // CARD 3
    leftButtonCard3: PropTypes.string, // CARD 3

    widthButtonCard2: PropTypes.string, // CARD 2
    heightButtonCard2: PropTypes.string, // CARD 2
    colorButtonCard2: PropTypes.string, // CARD 2
    positionButtonCard2: PropTypes.string, // CARD 2
    topButtonCard2: PropTypes.string, // CARD 2
    leftButtonCard2: PropTypes.string, // CARD 2

    checkLimitFlag: PropTypes.bool,

    colorCardFront: PropTypes.string, // CARD 1
    colorCardBack: PropTypes.string, // CARD 1
    toEnableAnimationButton: PropTypes.bool, // CARD 1
    durationAnimationButton: PropTypes.string, // CARD 1
    duration1AnimationButton: PropTypes.string, // CARD 1
    fillModeAnimationButton: PropTypes.string, //CARD 1

    toEnableAnimationWrapper: PropTypes.bool, // CARD 2
    imgCard2: PropTypes.string, // CARD 2

    transitionYEnable: PropTypes.bool,
    transitionYEnable1: PropTypes.bool,
    transitionXEnable: PropTypes.bool,
    transitionXEnable1: PropTypes.bool,

    count: PropTypes.number

}

export default cards
