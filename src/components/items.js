import React from 'react'
import PropTypes from 'prop-types'
import itemsActions from "../data/items/itemsActions";
import getAnimation from "../data/animation"

import styled, {keyframes, css} from "styled-components"
import checkboxesActions from "../data/checkboxes/checkboxesActions";
import cardsActions from "../data/cards/cardsActions";

function items({
                  id, checkLimit, typeInput, animationCSS, textInput, textValue, borderDim_ContItem, borderType_ContItem,
                  borderColor_ContItem, colorDivItems, width_DivItem, borderDim_DivItems, borderType_DivItems,borderColor_DivItems, color_DivItemHead, fontWeight_DivItemHead, fontSize_DivItemHead,
                  paddingX_DivItemsHeadFinal,paddingY_DivItemsHeadFinal, paddingX_DivItemsHeadFinal_p, paddingY_DivItemsHeadFinal_p,
                  margin_DivItemsHeadFinal_p, color_DivItemsHeadFinal_p, fontWeigh_DivItemsHeadFinal_p, fontSize_DivItemsHeadFinal_p,
                  width_DivItemsHead_hr, marginX_DivItemsHead_hr, marginY_DivItemsHead_hr, borderDim_DivItemsHead_hr, borderType_DivItemsHead_hr,
                  borderColor_DivItemsHead_hr, padding_ItemsBody, margin_ItemsBody, display_ItemsBody, gripGap_ItemsBody, padding_ItemsBodyContent,
                  paddingRight_ItemsBodyContent, display_ItemsBodyContent, color_ItemsBodyContent, fontSize_ItemsBodyContent, gripGap_ItemsBodyContent,
                  borderDim_ItemsBodyContent, borderType_ItemsBodyContent, borderColor_ItemsBodyContent, borderRadius_hover_ItemsBodyContent, borderDim_hover_ItemsBodyContent, borderType_hover_ItemsBodyContent,
                  borderColor_hover_ItemsBodyContent, fontSize_ItemsBodyContentIcon, color_ItemsBodyContentIcon, fontWeight_ItemsBodyContentIcon,
                  width_TilesWrapLi1, fontFamily_TilesWrapLi1,fontFamily_TilesWrapLi2,height_TilesWrapLi,
                  backgroundColor_TilesWrapLi, borderDim_TilesWrapLi, borderType_TilesWrapLi,borderColor_TilesWrapLi,fontSize_TilesWrap_h2,
                  fontSize_getTilesWrap_h3, color_getTilesWrap_h3, marginBotton_getTilesWrap_h3, fontSize_TilesWrap_p, lineHeight_TilesWrap_p, color_TilesWrap_p,
                  checkSpan, transitionYEnable, transitionYEnable1, transitionXEnable, transitionXEnable1, durationAnimationP, duration1AnimationP,
                  fillModeAnimationP, colorEndSpan, colorStartSpan, textInputSpan, toEnableAnimationSpan,
                  checkIcon, toEnableAnimationIcon, durationAnimationIcon, duration1AnimationIcon, fillModeAnimationIcon, transitionYEnableIcon,
                  transitionYEnable1Icon, transitionXEnableIcon, transitionXEnable1Icon,
                  color_ItemsBodyContentIcon_end, color_ItemsBodyContentIcon_start, textInputIcon, checkButton,

                  minWidthLi, maxWidthLi, padding1Li, padding2Li, padding3Li, positionLi, verticalAlignLi, marginLi, textAlignLi, opacityButtonLiEnter, colorEndLi,
                  opacityButtonLiEnd, colorStartLi, topLiH2Enter, opacityLiH2Enter, topLiH2End, opacityLiH2End, marginTopP, typeTransitionButton, typeTransitionButton1, typeTransitionButton2,

                  backgroundWrapButton, borderWrap1, borderWrap2, borderWrap3, paddingWrap1, paddingWrap2, colorButtonWrap, borderRadiusWrap,
                  positionWrap, transitionDurationWrap1, transitionFillModeWrap2, opacityWrap, cursorWrap, overflowWrap, marginWrap,
                  backgroundWrapButton_2, borderWrap1_2, borderWrap2_2, borderWrap3_2, paddingWrap1_2, paddingWrap2_2, colorButtonWrap_2, borderRadiusWrap_2,
                  positionWrap_2, transitionDurationWrap1_2, transitionFillModeWrap2_2, opacityWrap_2, cursorWrap_2, overflowWrap_2, marginWrap_2,

                  duration, timing, delay, iterations, direction, fillMode, playState, ...rest
               }) {

    let animation

    // NO
    let getAnimationCSS, getAnimationCSS_1

    if (!rest.items.state.has(id)) {

        animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState })
        //console.log(animation)

        itemsActions.newItems(
            id, checkLimit, typeInput, animationCSS, textInput, textValue, borderDim_ContItem, borderType_ContItem,
            borderColor_ContItem, colorDivItems, width_DivItem, borderDim_DivItems, borderType_DivItems,borderColor_DivItems, color_DivItemHead, fontWeight_DivItemHead, fontSize_DivItemHead,
            paddingX_DivItemsHeadFinal,paddingY_DivItemsHeadFinal, paddingX_DivItemsHeadFinal_p, paddingY_DivItemsHeadFinal_p,
            margin_DivItemsHeadFinal_p, color_DivItemsHeadFinal_p, fontWeigh_DivItemsHeadFinal_p, fontSize_DivItemsHeadFinal_p,
            width_DivItemsHead_hr, marginX_DivItemsHead_hr, marginY_DivItemsHead_hr, borderDim_DivItemsHead_hr, borderType_DivItemsHead_hr,
            borderColor_DivItemsHead_hr, padding_ItemsBody, margin_ItemsBody, display_ItemsBody, gripGap_ItemsBody, padding_ItemsBodyContent,
            paddingRight_ItemsBodyContent, display_ItemsBodyContent, color_ItemsBodyContent, fontSize_ItemsBodyContent, gripGap_ItemsBodyContent,
            borderDim_ItemsBodyContent, borderType_ItemsBodyContent, borderColor_ItemsBodyContent, borderRadius_hover_ItemsBodyContent, borderDim_hover_ItemsBodyContent, borderType_hover_ItemsBodyContent,
            borderColor_hover_ItemsBodyContent, fontSize_ItemsBodyContentIcon, color_ItemsBodyContentIcon, fontWeight_ItemsBodyContentIcon,
            width_TilesWrapLi1, fontFamily_TilesWrapLi1,fontFamily_TilesWrapLi2,height_TilesWrapLi,
            backgroundColor_TilesWrapLi, borderDim_TilesWrapLi, borderType_TilesWrapLi,borderColor_TilesWrapLi,fontSize_TilesWrap_h2,
            fontSize_getTilesWrap_h3, color_getTilesWrap_h3, marginBotton_getTilesWrap_h3, fontSize_TilesWrap_p, lineHeight_TilesWrap_p, color_TilesWrap_p,
            checkSpan, transitionYEnable, transitionYEnable1, transitionXEnable, transitionXEnable1, durationAnimationP, duration1AnimationP,
            fillModeAnimationP, colorEndSpan, colorStartSpan, textInputSpan, toEnableAnimationSpan,
            checkIcon, toEnableAnimationIcon, durationAnimationIcon, duration1AnimationIcon, fillModeAnimationIcon, transitionYEnableIcon,
            transitionYEnable1Icon, transitionXEnableIcon, transitionXEnable1Icon,
            color_ItemsBodyContentIcon_end, color_ItemsBodyContentIcon_start, textInputIcon, checkButton,

            minWidthLi, maxWidthLi, padding1Li, padding2Li, padding3Li, positionLi, verticalAlignLi, marginLi, textAlignLi, opacityButtonLiEnter, colorEndLi,
            opacityButtonLiEnd, colorStartLi, topLiH2Enter, opacityLiH2Enter, topLiH2End, opacityLiH2End, marginTopP, typeTransitionButton, typeTransitionButton1, typeTransitionButton2,

            backgroundWrapButton, borderWrap1, borderWrap2, borderWrap3, paddingWrap1, paddingWrap2, colorButtonWrap, borderRadiusWrap,
            positionWrap, transitionDurationWrap1, transitionFillModeWrap2, opacityWrap, cursorWrap, overflowWrap, marginWrap,
            backgroundWrapButton_2, borderWrap1_2, borderWrap2_2, borderWrap3_2, paddingWrap1_2, paddingWrap2_2, colorButtonWrap_2, borderRadiusWrap_2,
            positionWrap_2, transitionDurationWrap1_2, transitionFillModeWrap2_2, opacityWrap_2, cursorWrap_2, overflowWrap_2, marginWrap_2,

            duration, timing, delay, iterations, direction, fillMode, playState
        )

        // NO
        //setAnimationCSS(id, cssStylesKeyFrames(true,1))

    } else {

        const variableArray = [borderDim_ContItem, borderType_ContItem,
            borderColor_ContItem, colorDivItems, width_DivItem, borderDim_DivItems, borderType_DivItems,borderColor_DivItems, color_DivItemHead, fontWeight_DivItemHead, fontSize_DivItemHead,
            paddingX_DivItemsHeadFinal,paddingY_DivItemsHeadFinal, paddingX_DivItemsHeadFinal_p, paddingY_DivItemsHeadFinal_p,
            margin_DivItemsHeadFinal_p, color_DivItemsHeadFinal_p, fontWeigh_DivItemsHeadFinal_p, fontSize_DivItemsHeadFinal_p,
            width_DivItemsHead_hr, marginX_DivItemsHead_hr, marginY_DivItemsHead_hr, borderDim_DivItemsHead_hr, borderType_DivItemsHead_hr,
            borderColor_DivItemsHead_hr, padding_ItemsBody, margin_ItemsBody, display_ItemsBody, gripGap_ItemsBody, padding_ItemsBodyContent,
            paddingRight_ItemsBodyContent, display_ItemsBodyContent, color_ItemsBodyContent, fontSize_ItemsBodyContent, gripGap_ItemsBodyContent,
            borderDim_ItemsBodyContent, borderType_ItemsBodyContent, borderColor_ItemsBodyContent, borderRadius_hover_ItemsBodyContent, borderDim_hover_ItemsBodyContent, borderType_hover_ItemsBodyContent,
            borderColor_hover_ItemsBodyContent, fontSize_ItemsBodyContentIcon, color_ItemsBodyContentIcon, fontWeight_ItemsBodyContentIcon,
            width_TilesWrapLi1, fontFamily_TilesWrapLi1,fontFamily_TilesWrapLi2,height_TilesWrapLi,
            backgroundColor_TilesWrapLi, borderDim_TilesWrapLi, borderType_TilesWrapLi,borderColor_TilesWrapLi,fontSize_TilesWrap_h2,
            fontSize_getTilesWrap_h3, color_getTilesWrap_h3, marginBotton_getTilesWrap_h3, fontSize_TilesWrap_p, lineHeight_TilesWrap_p, color_TilesWrap_p,
            checkSpan, transitionYEnable, transitionYEnable1, transitionXEnable, transitionXEnable1, durationAnimationP, duration1AnimationP,
            fillModeAnimationP, colorEndSpan, colorStartSpan, textInputSpan, toEnableAnimationSpan, toEnableAnimationSpan,
            checkIcon, toEnableAnimationIcon, durationAnimationIcon, duration1AnimationIcon, fillModeAnimationIcon, transitionYEnableIcon,
            transitionYEnable1Icon, transitionXEnableIcon, transitionXEnable1Icon, color_ItemsBodyContentIcon_end, color_ItemsBodyContentIcon_start, textInputIcon,
            checkButton,
            minWidthLi, maxWidthLi, padding1Li, padding2Li, padding3Li, positionLi, verticalAlignLi, marginLi, textAlignLi, opacityButtonLiEnter, colorEndLi,
            opacityButtonLiEnd, colorStartLi, topLiH2Enter, opacityLiH2Enter, topLiH2End, opacityLiH2End, marginTopP, typeTransitionButton, typeTransitionButton1, typeTransitionButton2,
            backgroundWrapButton, borderWrap1, borderWrap2, borderWrap3, paddingWrap1, paddingWrap2, colorButtonWrap, borderRadiusWrap,
            positionWrap, transitionDurationWrap1, transitionFillModeWrap2, opacityWrap, cursorWrap, overflowWrap, marginWrap,
            backgroundWrapButton_2, borderWrap1_2, borderWrap2_2, borderWrap3_2, paddingWrap1_2, paddingWrap2_2, colorButtonWrap_2, borderRadiusWrap_2,
            positionWrap_2, transitionDurationWrap1_2, transitionFillModeWrap2_2, opacityWrap_2, cursorWrap_2, overflowWrap_2, marginWrap_2
        ]

        // checkValue( variableArray, rest.items.state.get(id))

        //console.log("Dentro else di !rest")

        const itemObj = rest.items.state.get(id)

        animation = getAnimation(id, {}, itemObj.style)
        //console.log(animation)

        // NO
        // setAnimationCSS(id, cssStylesKeyFrames(rest.checkboxes.state.get(id).get('checkLimit'), rest.checkboxes.state.get(id).get('typeInput')))
        // getAnimationCSS = rest.checkboxes.state.get(id).get('animationCSS')
        // getAnimationCSS_1 = setKeyframes2(rest.checkboxes.state.get(id).get('checkLimit'), rest.checkboxes.state.get(id).get('typeInput'))

    }

    return (
        <div id={id} style={animation} {...rest}>
            { rest.children }
        </div>
    )
}

//  ITEM 1

// NO
export function getContainerItems(Item) {

    const ContainerItem = styled.div`
        border: 1px solid black;
    
        top: 0; right: 0; bottom: 0; left: 0;
        margin: auto;
    
        display: grid;
        place-items: center;
        
       `;

    const tmpCss = css`
             border: 3px solid black;
       `;

    const tmp = keyframes`
                      
                      from, to {
                            top: 0; right: 0; bottom: 0; left: 0;
                            margin: auto;
                        
                            display: grid;
                            place-items: center;
                      }
                  `;

    const ContainerItemFinal = styled.div`
          border: ${Item.borderDim_ContItem} ${Item.borderType_ContItem} ${Item.borderColor_ContItem};
          // animation: $1s ${tmp} both;
       `;

    return ContainerItemFinal
}

export function getDivItems(Item) {

    const DivItems = styled.div`
         width: 300px;
         background: #fffffe;
         box-shadow: 0 3px 6px rgba(black,0.16), 0 3px 6px rgba(black,0.23);
         border-top: 10px solid #0B5AA2;
       `;

    const tmp = keyframes`
                      
                      from, to {
                         background: ${Item.colorDivItems};
                         box-shadow: 0 3px 6px rgba(black,0.16), 0 3px 6px rgba(black,0.23);
                      }
                  `;

    const DivItemsFinal = styled.div`
          border: ${Item.borderDim_ContItem} ${Item.borderType_ContItem} ${Item.borderColor_ContItem};
          width: ${Item.width_DivItem};
          border-top: ${Item.borderDim_DivItems} ${Item.borderType_DivItems} ${Item.borderColor_DivItems};
          animation: $1s ${tmp} both;
       `;

    return DivItemsFinal
}

export function getDivItemsHead(Item) {

    const DivItemsHead = styled.div`     
          padding: 5px 20px;
          margin: 10px;
          color: #0B5AA2;
          font-weight: bold;
          font-size: 20px;
       `;

    const tmp = keyframes`
                      
                      from, to {
                          margin: 10px;
                          color: ${Item.color_DivItemHead};
                          font-weight: ${Item.fontWeight_DivItemHead};
                          font-size: ${Item.fontSize_DivItemHead};
                      }
                  `;

    const DivItemsHeadFinal = styled.div`
          padding: ${Item.paddingX_DivItemsHeadFinal} ${Item.paddingY_DivItemsHeadFinal};
          animation: $1s ${tmp} both;
       `;

    return DivItemsHeadFinal
}

export function getDivItemsHead_p(Item) {

    const DivItemsHead_p = styled.p`
          padding: ${Item.paddingX_DivItemsHeadFinal_p} ${Item.paddingY_DivItemsHeadFinal_p};
          margin: ${Item.margin_DivItemsHeadFinal_p};
          color: ${Item.color_DivItemsHeadFinal_p};
          font-weight: ${Item.fontWeigh_DivItemsHeadFinal_p};
          font-size: ${Item.fontSize_DivItemsHeadFinal_p};
       `;


    return DivItemsHead_p
}

export function getDivItemsHead_hr(Item) {

    const DivItemsHead_hr = styled.hr`      
      width: ${Item.width_DivItemsHead_hr};
      margin: ${Item.marginX_DivItemsHead_hr} ${Item.marginY_DivItemsHead_hr};
      border: ${Item.borderDim_DivItemsHead_hr} ${Item.borderType_DivItemsHead_hr} ${Item.borderColor_DivItemsHead_hr};
    `;
    return DivItemsHead_hr
}

export function getItemsBody(Item) {

    const ItemsBody = styled.div`
          padding: ${Item.padding_ItemsBody};
          margin: ${Item.margin_ItemsBody};
          display: ${Item.display_ItemsBody};
          grid-gap: ${Item.gripGap_ItemsBody};
    `;

    return ItemsBody
}

export function getItemsBodyContent(Item) {

    const tmp = keyframes`
        
         to {
                border-radius: 15px 50px 30px; 
                border: ${Item.borderDim_hover_ItemsBodyContent} ${Item.borderType_hover_ItemsBodyContent} ${Item.borderColor_hover_ItemsBodyContent};
                            
         }
         
    `;

    const tmp1 = keyframes`
        
         from {
                border-radius: 15px 50px 30px; 
                border: ${Item.borderDim_hover_ItemsBodyContent} ${Item.borderType_hover_ItemsBodyContent} ${Item.borderColor_hover_ItemsBodyContent};
                            
         }
         
    `;

    const ItemsBodyContent = styled.div`
          padding: ${Item.padding_ItemsBodyContent};
          padding-right: ${Item.paddingRight_ItemsBodyContent};
          display: ${Item.display_ItemsBodyContent};
          grid-template-columns: 10fr 1fr;
          background-color: ${Item.color_ItemsBodyContent};
          font-size: ${Item.fontSize_ItemsBodyContent};
          grid-gap: ${Item.gripGap_ItemsBodyContent};
          border: ${Item.borderDim_ItemsBodyContent} ${Item.borderType_ItemsBodyContent} ${Item.borderColor_ItemsBodyContent};
          cursor: pointer;
          
          ${Item.checkLimit ? `animation: ${tmp} 1s both;` : `animation: ${tmp1} 1s both;`}
          
      `;

    return ItemsBodyContent
}

export function getItemsBodySpan(Item) {

    let tmp = ( (!Item.transitionYEnable && !Item.transitionYEnable1) && (!Item.transitionXEnable && !Item.transitionXEnable1)) ? true : false

    const ItemBodySpan = styled.span`
        
          color: ${Item.checkSpan ? Item.colorEndSpan : Item.colorStartSpan};
          animation: ${(Item.checkSpan && Item.toEnableAnimationSpan) ? `icon ${Item.durationAnimationP} ${Item.duration1AnimationP} ${Item.fillModeAnimationP};` : '' };
              
          @keyframes icon {
                0%,100%{
                    transform: ${tmp ? 'translateY(0px)' : Item.transitionYEnable ? 'translateY(0px)' : ''};
                    transform: ${Item.transitionYEnable1 ? 'translateY(0px)' : ''};
                    transform: ${Item.transitionXEnable ? 'translateX(0px)' : ''};
                    transform: ${Item.transitionXEnable1 ? 'translateX(0px)' : ''};
                }
                50% {
                    transform: ${tmp ? 'translateY(3px)' : Item.transitionYEnable ? 'translateY(3px)' : ''};
                    transform: ${Item.transitionYEnable1 ? 'translateY(-3px)' : ''};
                    transform: ${Item.transitionXEnable ? 'translateX(3px)' : ''};
                    transform: ${Item.transitionXEnable1 ? 'translateX(-3px)' : ''};
                }
          } 
          
        /*            &:hover {
                border-radius: 15px 50px 30px;
                // border-radius: ${Item.borderRadius_hover_ItemsBodyContent};
                border: ${Item.borderDim_hover_ItemsBodyContent} ${Item.borderType_hover_ItemsBodyContent} ${Item.borderColor_hover_ItemsBodyContent};
                // background-color: yellow;
               
            }*/

        
    `;

    return ItemBodySpan

}

export function getItemsBodyContent_icon(Item) {

    let tmp = ( (!Item.transitionYEnable && !Item.transitionYEnable1) && (!Item.transitionXEnable && !Item.transitionXEnable1)) ? true : false

    const ItemsBodyContentIcon = styled.span`
      align-self: center;
      font-size: ${Item.fontSize_ItemsBodyContentIcon};
      color: ${Item.checkSpan ? Item.color_ItemsBodyContentIcon_end : Item.color_ItemsBodyContentIcon_start};
      font-weight: ${Item.fontWeight_ItemsBodyContentIcon};
      animation: ${(Item.checkIcon && Item.toEnableAnimationIcon) ? `icon ${Item.durationAnimationIcon} ${Item.duration1AnimationIcon} ${Item.fillModeAnimationIcon};` : ''}
         
      @keyframes icon {
                0%,100%{
                    transform: ${tmp ? 'translateY(0px)' : Item.transitionYEnableIcon ? 'translateY(0px)' : ''};
                    transform: ${Item.transitionYEnable1Icon ? 'translateY(0px)' : ''};
                    transform: ${Item.transitionXEnableIcon ? 'translateX(0px)' : ''};
                    transform: ${Item.transitionXEnable1Icon ? 'translateX(0px)' : ''};
                }
                50% {
                    transform: ${tmp ? 'translateY(3px)' : Item.transitionYEnableIcon ? 'translateY(3px)' : ''};
                    transform: ${Item.transitionYEnable1Icon ? 'translateY(-3px)' : ''};
                    transform:${Item.transitionXEnableIcon ? 'translateX(3px)' : ''};
                    transform: ${Item.transitionXEnable1Icon ? 'translateX(-3px)' : ''};
                }
        }

      `;

    return ItemsBodyContentIcon
}

//  ITEM 2


// NO
export function getTilesWrap(Item) {

    const TilesWrap = styled.ul`
      padding: 0;
      margin: 50px auto;
      list-style: none;
      text-align: center;
      `;


    const tmp = keyframes`
                      
                      from, to {
                          padding: 0;
                          margin: 50px auto;
                          list-style: none;
                          text-align: center;
                      }
                  `;

    const TilesWrapFinal = styled.ul`
          animation: $1s ${tmp} both;
       `;

    return TilesWrapFinal
}

export function getTilesWrap_li(Item) {

    let fillMode = (Item.style === null) ? 'both' : Item.style.fillMode
    let duration = (Item.style === null) ? '1s' : Item.style.duration

    const TilesWrap_li = styled.li`
      display: inline-block;
      width: ${Item.width_TilesWrapLi1};
      min-width: ${Item.minWidthLi};
      max-width: ${Item.maxWidthLi};
      padding: ${Item.padding1Li} ${Item.padding2Li} ${Item.padding3Li};
      position: ${Item.positionLi};
      vertical-align: ${Item.verticalAlignLi};
      margin: ${Item.marginLi};
      font-family: ${Item.fontFamily_TilesWrapLi1}, ${Item.fontFamily_TilesWrapLi2};
      min-height:  ${Item.height_TilesWrapLi};
      background: ${Item.backgroundColor_TilesWrapLi};
      border: ${Item.borderDim_TilesWrapLi} ${Item.borderType_TilesWrapLi} ${Item.borderColor_TilesWrapLi};
      text-align: ${Item.textAlignLi};
      
      ${(Item.checkLimit == true) ? 
              ` 
              button {
                  animation: buttonEnter ${duration} ${fillMode}; 
              }
              
              h2 {
                  animation: h2Enter ${duration} ${fillMode};
              }
               
              `
                : 
                    `
                    button {
                        animation: buttonEnd ${duration} ${fillMode};
                    }
                    
                    h2 {
                        animation: h2End ${duration} ${fillMode};
                    }
                    
                    `
      }
      
      @keyframes buttonEnter {
                to {
                    transform: translateX(5px);
                    opacity: ${Item.opacityButtonLiEnter};
                    color: ${Item.colorEndLi};
                }  
      }
      
      @keyframes buttonEnd {
                from {
                    transform: translateX(5px); 
                    opacity: ${Item.opacityButtonLiEnd};
                    color: ${Item.colorStartLi};
                }  
      }
      
      @keyframes h2Enter {
                to {
                    top: ${Item.topLiH2Enter};
                    opacity: ${Item.opacityLiH2Enter};
                }  
      }
      
      @keyframes h2End {
                from {
                    top: ${Item.topLiH2End};
                    opacity: ${Item.opacityLiH2End};
                }  
      }
     
    `;

    return TilesWrap_li
}

// NO
export function getTilesWrap_h2(Item) {

    // NUMERI IN ALTO A SINISTRA

/*    const TilesWrap_h2 = styled.h2`
      font-size: ${Item.fontSize_TilesWrap_h2};
      margin: 0;
      position: absolute;
      opacity: 0.2;
      top: 50px;
      right: 30%;
      transition: all 0.3s ease-in-out; 
      `;*/

    // NUMERI IN ALTO A DESTRA

/*    const TilesWrap_h2 = styled.h2`
      font-size: ${Item.fontSize_TilesWrap_h2};
      margin: 0;
      position: absolute;
      opacity: 0.2;
      top: 30px;
      right: 10%;
      transition: all 0.3s ease-in-out;

      &:hover button {
           transform: translateY(5px);
           opacity: 1;
           color: white;
      }
      &:hover h2 {
            top: 0px;
            opacity: 0.6;
      }

      &:before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          z-index: -1;
          background: #fff;
          transform: skew(2deg, 2deg);
      }

      `;*/


    const TilesWrap_h2 = styled.h2`
      font-size: ${Item.fontSize_TilesWrap_h2};
      margin: 0;
      position: absolute;
      opacity: 0.2;
      top: 30px;
      right: 10%;
      transition: all 0.3s ease-in-out;
            
    `;

    return TilesWrap_h2
}


// NO
export function getTilesWrap_h3(Item) {

    const TilesWrap_h3 = styled.h3`
          font-size: ${Item.fontSize_getTilesWrap_h3};
          color: ${Item.color_getTilesWrap_h3};
          margin-bottom: ${Item.marginBotton_getTilesWrap_h3};
      `;

    return TilesWrap_h3
}

export function getTilesWrap_p(Item) {

    const TilesWrap_p = styled.p`
          font-size: ${Item.fontSize_TilesWrap_p};
          line-height: ${Item.lineHeight_TilesWrap_p};
          color: ${Item.color_TilesWrap_p};
          margin-top: ${Item.marginTopP};
      `;

    return TilesWrap_p
}

export function getTilesWrap_button(Item) {

    let TilesWrap_button

    switch (Item.typeTransitionButton) {

        // ENTRA DALL ALTO VERSO IL BASSO
        case 'topToBottom':

            TilesWrap_button = styled.button`
                  background: ${Item.backgroundWrapButton};
                  border: ${Item.borderWrap1} ${Item.borderWrap2} ${Item.borderWrap3};
                  padding: ${Item.paddingWrap1} ${Item.paddingWrap2};
                  color: ${Item.colorButtonWrap};
                  border-radius: ${Item.borderRadiusWrap};
                  position: ${Item.positionWrap};
                  transition: all ${Item.transitionDurationWrap1} ${Item.transitionFillModeWrap2};
                  transform: translateY(-40px);
                  opacity: ${Item.opacityWrap};
                  cursor: ${Item.cursorWrap};
                  overflow: ${Item.overflowWrap};
                  margin: ${Item.marginWrap};
                  
                  &:before {
                      content: '';
                      position: absolute;
                      height: 100%;
                      width: 120%;
                      background: #b7b7b7;
                      top: 0;
                      opacity: 0;
                      left: -140px;
                      border-radius: 0 20px 20px 0;
                      z-index: -1;
                      transition: all 0.3s ease-in-out;
                  }
                  
                  &:hover {
                        color: #262a2b;
                  }
                  
                  &:hover:before {
                       left: 0;
                       opacity: 1;
                  }
              `;

            break;

        // ENTRA DAL BASSO VERSO L ALTO
        case 'bottonToTop':

             TilesWrap_button = styled.button`
                  background: ${Item.backgroundWrapButton};
                  border: ${Item.borderWrap1} ${Item.borderWrap2} ${Item.borderWrap3};
                  padding: ${Item.paddingWrap1} ${Item.paddingWrap2};
                  color: ${Item.colorButtonWrap};
                  border-radius: ${Item.borderRadiusWrap};
                  position: ${Item.positionWrap};
                  transition: all ${Item.transitionDurationWrap1} ${Item.transitionFillModeWrap2};
                  transform: translateY(40px);
                  opacity: ${Item.opacityWrap};
                  cursor: ${Item.cursorWrap};
                  overflow: ${Item.overflowWrap};
                  margin: ${Item.marginWrap};
                           
                  
                  &:before {
                      content: '';
                      position: absolute;
                      height: 100%;
                      width: 120%;
                      background: #b7b7b7;
                      top: 0;
                      opacity: 0;
                      left: -140px;
                      border-radius: 0 20px 20px 0;
                      z-index: -1;
                      transition: all 0.3s ease-in-out;
                  }
                  
                  &:hover {
                        color: #262a2b;
                  }
                  
                  &:hover:before {
                       left: 0;
                       opacity: 1;
                  }
              `;

            break;

        // ENTRA DA DESTRA VERSO SINISTRA
        case 'rightToLeft':

            TilesWrap_button = styled.button`
                  background: ${Item.backgroundWrapButton};
                  border: ${Item.borderWrap1} ${Item.borderWrap2} ${Item.borderWrap3};
                  padding: ${Item.paddingWrap1} ${Item.paddingWrap2};
                  color: ${Item.colorButtonWrap};
                  border-radius: ${Item.borderRadiusWrap};
                  position: ${Item.positionWrap};
                  transition: all ${Item.transitionDurationWrap1} ${Item.transitionFillModeWrap2};
                  transform: translateX(40px);
                  opacity: ${Item.opacityWrap};
                  cursor: ${Item.cursorWrap};
                  overflow: ${Item.overflowWrap};
                  margin: ${Item.marginWrap};
                  
                  &:before {
                      content: '';
                      position: absolute;
                      height: 100%;
                      width: 120%;
                      background: #b7b7b7;
                      top: 0;
                      opacity: 0;
                      left: -140px;
                      border-radius: 0 20px 20px 0;
                      z-index: -1;
                      transition: all 0.3s ease-in-out;
                  }
                  
                  &:hover {
                        color: #262a2b;
                  }
                  
                  &:hover:before {
                       left: 0;
                       opacity: 1;
                  }
              `;

            break;

        // ENTRA DA SINISTRA VERSO DESTRA
        case 'leftToRight':

             TilesWrap_button = styled.button`
                  background: ${Item.backgroundWrapButton};
                  border: ${Item.borderWrap1} ${Item.borderWrap2} ${Item.borderWrap3};
                  padding: ${Item.paddingWrap1} ${Item.paddingWrap2};
                  color: ${Item.colorButtonWrap};
                  border-radius: ${Item.borderRadiusWrap};
                  position: ${Item.positionWrap};
                  transition: all ${Item.transitionDurationWrap1} ${Item.transitionFillModeWrap2};
                  transform: translateX(-40px);
                  opacity: ${Item.opacityWrap};
                  cursor: ${Item.cursorWrap};
                  overflow: ${Item.overflowWrap};
                  margin: ${Item.marginWrap};
                           
              `;

            break;

        default:
            return;
    }

    return TilesWrap_button
}

export function getTilesWrap_button_1(Item) {

    let TilesWrap_button

    switch (Item.typeTransitionButton1) {

        // ENTRA DALL ALTO VERSO IL BASSO
        case 'topToBottom':

            TilesWrap_button = styled.button`
                  background: ${Item.backgroundWrapButton};
                  border: ${Item.borderWrap1} ${Item.borderWrap2} ${Item.borderWrap3};
                  padding: ${Item.paddingWrap1} ${Item.paddingWrap2};
                  color: ${Item.colorButtonWrap};
                  border-radius: ${Item.borderRadiusWrap};
                  position: ${Item.positionWrap};
                  transition: all ${Item.transitionDurationWrap1} ${Item.transitionFillModeWrap2};
                  transform: translateY(-40px);
                  opacity: ${Item.opacityWrap};
                  cursor: ${Item.cursorWrap};
                  overflow: ${Item.overflowWrap};
                  margin: ${Item.marginWrap};
                  
                  &:before {
                      content: '';
                      position: absolute;
                      height: 100%;
                      width: 120%;
                      background: #b7b7b7;
                      top: 0;
                      opacity: 0;
                      left: -140px;
                      border-radius: 0 20px 20px 0;
                      z-index: -1;
                      transition: all 0.3s ease-in-out;
                  }
                  
                  &:hover {
                        color: #262a2b;
                  }
                  
                  &:hover:before {
                       left: 0;
                       opacity: 1;
                  }
              `;

            break;

        // ENTRA DAL BASSO VERSO L ALTO
        case 'bottonToTop':

            TilesWrap_button = styled.button`
                  background: ${Item.backgroundWrapButton};
                  border: ${Item.borderWrap1} ${Item.borderWrap2} ${Item.borderWrap3};
                  padding: ${Item.paddingWrap1} ${Item.paddingWrap2};
                  color: ${Item.colorButtonWrap};
                  border-radius: ${Item.borderRadiusWrap};
                  position: ${Item.positionWrap};
                  transition: all ${Item.transitionDurationWrap1} ${Item.transitionFillModeWrap2};
                  transform: translateY(40px);
                  opacity: ${Item.opacityWrap};
                  cursor: ${Item.cursorWrap};
                  overflow: ${Item.overflowWrap};
                  margin: ${Item.marginWrap};
                  
                  &:before {
                      content: '';
                      position: absolute;
                      height: 100%;
                      width: 120%;
                      background: #b7b7b7;
                      top: 0;
                      opacity: 0;
                      left: -140px;
                      border-radius: 0 20px 20px 0;
                      z-index: -1;
                      transition: all 0.3s ease-in-out;
                  }
                  
                  &:hover {
                        color: #262a2b;
                  }
                  
                  &:hover:before {
                       left: 0;
                       opacity: 1;
                  }
              `;

            break;

        // ENTRA DA DESTRA VERSO SINISTRA
        case 'rightToLeft':

            TilesWrap_button = styled.button`
                  background: ${Item.backgroundWrapButton};
                  border: ${Item.borderWrap1} ${Item.borderWrap2} ${Item.borderWrap3};
                  padding: ${Item.paddingWrap1} ${Item.paddingWrap2};
                  color: ${Item.colorButtonWrap};
                  border-radius: ${Item.borderRadiusWrap};
                  position: ${Item.positionWrap};
                  transition: all ${Item.transitionDurationWrap1} ${Item.transitionFillModeWrap2};
                  transform: translateX(40px);
                  opacity: ${Item.opacityWrap};
                  cursor: ${Item.cursorWrap};
                  overflow: ${Item.overflowWrap};
                  margin: ${Item.marginWrap};
                  
                  &:before {
                      content: '';
                      position: absolute;
                      height: 100%;
                      width: 120%;
                      background: #b7b7b7;
                      top: 0;
                      opacity: 0;
                      left: -140px;
                      border-radius: 0 20px 20px 0;
                      z-index: -1;
                      transition: all 0.3s ease-in-out;
                  }
                  
                  &:hover {
                        color: #262a2b;
                  }
                  
                  &:hover:before {
                       left: 0;
                       opacity: 1;
                  }
              `;

            break;

        // ENTRA DA SINISTRA VERSO DESTRA
        case 'leftToRight':

            TilesWrap_button = styled.button`
                  background: ${Item.backgroundWrapButton};
                  border: ${Item.borderWrap1} ${Item.borderWrap2} ${Item.borderWrap3};
                  padding: ${Item.paddingWrap1} ${Item.paddingWrap2};
                  color: ${Item.colorButtonWrap};
                  border-radius: ${Item.borderRadiusWrap};
                  position: ${Item.positionWrap};
                  transition: all ${Item.transitionDurationWrap1} ${Item.transitionFillModeWrap2};
                  transform: translateX(-40px);
                  opacity: ${Item.opacityWrap};
                  cursor: ${Item.cursorWrap};
                  overflow: ${Item.overflowWrap};
                  margin: ${Item.marginWrap};
                           
                  &:before {
                      content: '';
                      position: absolute;
                      height: 100%;
                      width: 120%;
                      background: #b7b7b7;
                      top: 0;
                      opacity: 0;
                      // DA DESTRA A SINISTRA
                      // left: 140px;
                      // SINISTRA A DESTRA
                      left: -140px;
                       
                      border-radius: 0 20px 20px 0;
                      z-index: -1;
                      transition: all 0.3s ease-in-out;
        
                  }
                  
                 &:hover {
                        color: #262a2b;
        
                  }
                  
                 &:hover:before {
                       left: 0;
                       opacity: 1;
                  }
              `;

            break;

        default:
            return;
    }

    return TilesWrap_button
}

export function getTilesWrap_button_2(Item) {

    let TilesWrap_button

    switch (Item.typeTransitionButton2) {

        // ENTRA DALL ALTO VERSO IL BASSO
        case 'topToBottom':

            TilesWrap_button = styled.button`
                  background: ${Item.backgroundWrapButton_2};
                  border: ${Item.borderWrap1_2} ${Item.borderWrap2_2} ${Item.borderWrap3_2};
                  padding: ${Item.paddingWrap1_2} ${Item.paddingWrap2_2};
                  color: ${Item.colorButtonWrap_2};
                  border-radius: ${Item.borderRadiusWrap_2};
                  position: ${Item.positionWrap_2};
                  transition: all ${Item.transitionDurationWrap1_2} ${Item.transitionFillModeWrap2_2};
                  transform: translateY(-40px);
                  opacity: ${Item.opacityWrap_2};
                  cursor: ${Item.cursorWrap_2};
                  overflow: ${Item.overflowWrap_2};
                  margin: ${Item.marginWrap_2};
                  
                  &:before {
                      content: '';
                      position: absolute;
                      height: 100%;
                      width: 120%;
                      background: #b7b7b7;
                      top: 0;
                      opacity: 0;
                      left: -140px;
                      border-radius: 0 20px 20px 0;
                      z-index: -1;
                      transition: all 0.3s ease-in-out;
                  }
                  
                  &:hover {
                        color: #262a2b;
                  }
                  
                  &:hover:before {
                       left: 0;
                       opacity: 1;
                  }
              `;

            break;

        // ENTRA DAL BASSO VERSO L ALTO
        case 'bottonToTop':

            TilesWrap_button = styled.button`
                  background: ${Item.backgroundWrapButton_2};
                  border: ${Item.borderWrap1_2} ${Item.borderWrap2_2} ${Item.borderWrap3_2};
                  padding: ${Item.paddingWrap1_2} ${Item.paddingWrap2_2};
                  color: ${Item.colorButtonWrap_2};
                  border-radius: ${Item.borderRadiusWrap_2};
                  position: ${Item.positionWrap_2};
                  transition: all ${Item.transitionDurationWrap1_2} ${Item.transitionFillModeWrap2_2};
                  transform: translateY(40px);
                  opacity: ${Item.opacityWrap_2};
                  cursor: ${Item.cursorWrap_2};
                  overflow: ${Item.overflowWrap_2};
                  margin: ${Item.marginWrap_2};
                  
                  &:before {
                      content: '';
                      position: absolute;
                      height: 100%;
                      width: 120%;
                      background: #b7b7b7;
                      top: 0;
                      opacity: 0;
                      left: -140px;
                      border-radius: 0 20px 20px 0;
                      z-index: -1;
                      transition: all 0.3s ease-in-out;
                  }
                  
                  &:hover {
                        color: #262a2b;
                  }
                  
                  &:hover:before {
                       left: 0;
                       opacity: 1;
                  }
              `;

            break;

        // ENTRA DA DESTRA VERSO SINISTRA
        case 'rightToLeft':

            TilesWrap_button = styled.button`
                  background: ${Item.backgroundWrapButton_2};
                  border: ${Item.borderWrap1_2} ${Item.borderWrap2_2} ${Item.borderWrap3_2};
                  padding: ${Item.paddingWrap1_2} ${Item.paddingWrap2_2};
                  color: ${Item.colorButtonWrap_2};
                  border-radius: ${Item.borderRadiusWrap_2};
                  position: ${Item.positionWrap_2};
                  transition: all ${Item.transitionDurationWrap1_2} ${Item.transitionFillModeWrap2_2};
                  transform: translateX(40px);
                  opacity: ${Item.opacityWrap_2};
                  cursor: ${Item.cursorWrap_2};
                  overflow: ${Item.overflowWrap_2};
                  margin: ${Item.marginWrap_2};
                  
                  &:before {
                      content: '';
                      position: absolute;
                      height: 100%;
                      width: 120%;
                      background: #b7b7b7;
                      top: 0;
                      opacity: 0;
                      left: -140px;
                      border-radius: 0 20px 20px 0;
                      z-index: -1;
                      transition: all 0.3s ease-in-out;
                  }
                  
                  &:hover {
                        color: #262a2b;
                  }
                  
                  &:hover:before {
                       left: 0;
                       opacity: 1;
                  }
              `;

            break;

        // ENTRA DA SINISTRA VERSO DESTRA
        case 'leftToRight':

            TilesWrap_button = styled.button`
                  background: ${Item.backgroundWrapButton_2};
                  border: ${Item.borderWrap1_2} ${Item.borderWrap2_2} ${Item.borderWrap3_2};
                  padding: ${Item.paddingWrap1_2} ${Item.paddingWrap2_2};
                  color: ${Item.colorButtonWrap_2};
                  border-radius: ${Item.borderRadiusWrap_2};
                  position: ${Item.positionWrap_2};
                  transition: all ${Item.transitionDurationWrap1_2} ${Item.transitionFillModeWrap2_2};
                  transform: translateX(-40px);
                  opacity: ${Item.opacityWrap_2};
                  cursor: ${Item.cursorWrap_2};
                  overflow: ${Item.overflowWrap_2};
                  margin: ${Item.marginWrap_2};
                           
                  &:before {
                      content: '';
                      position: absolute;
                      height: 100%;
                      width: 120%;
                      background: #b7b7b7;
                      top: 0;
                      opacity: 0;
                      // DA DESTRA A SINISTRA
                      // left: 140px;
                      // SINISTRA A DESTRA
                      left: -140px;
                       
                      border-radius: 0 20px 20px 0;
                      z-index: -1;
                      transition: all 0.3s ease-in-out;
        
                  }
                  
                 &:hover {
                        color: #262a2b;
        
                  }
                  
                 &:hover:before {
                       left: 0;
                       opacity: 1;
                  }
              `;

            break;

        default:
            return;
    }
}

//

function checkValue (variableArray, rest) {

    //console.log(variableArray, rest)
    //console.log(colorEnd, restcolorEnd)

    const tmp = ["borderDim_ContItem", "borderType_ContItem",
        "borderColor_ContItem", "colorDivItems", "width_DivItem", "borderDim_DivItems", "borderType_DivItems","borderColor_DivItems", "color_DivItemHead", "fontWeight_DivItemHead", "fontSize_DivItemHead",
        "paddingX_DivItemsHeadFinal","paddingY_DivItemsHeadFinal", "paddingX_DivItemsHeadFinal_p", "paddingY_DivItemsHeadFinal_p",
        "margin_DivItemsHeadFinal_p", "color_DivItemsHeadFinal_p", "fontWeigh_DivItemsHeadFinal_p", "fontSize_DivItemsHeadFinal_p",
        "width_DivItemsHead_hr", "marginX_DivItemsHead_hr", "marginY_DivItemsHead_hr", "borderDim_DivItemsHead_hr", "borderType_DivItemsHead_hr",
        "borderColor_DivItemsHead_hr", "padding_ItemsBody", "margin_ItemsBody", "display_ItemsBody", "gripGap_ItemsBody", "padding_ItemsBodyContent",
        "paddingRight_ItemsBodyContent", "display_ItemsBodyContent", "color_ItemsBodyContent", "fontSize_ItemsBodyContent", "gripGap_ItemsBodyContent",
        "borderDim_ItemsBodyContent", "borderType_ItemsBodyContent", "borderColor_ItemsBodyContent", "borderRadius_hover_ItemsBodyContent", "borderDim_hover_ItemsBodyContent", "borderType_hover_ItemsBodyContent",
        "borderColor_hover_ItemsBodyContent", "fontSize_ItemsBodyContentIcon", "color_ItemsBodyContentIcon", "fontWeight_ItemsBodyContentIcon",
        "width_TilesWrapLi1", "fontFamily_TilesWrapLi1","fontFamily_TilesWrapLi2","height_TilesWrapLi",
        "backgroundColor_TilesWrapLi", "borderDim_TilesWrapLi", "borderType_TilesWrapLi","borderColor_TilesWrapLi","fontSize_TilesWrap_h2",
        "fontSize_getTilesWrap_h3", "color_getTilesWrap_h3", "marginBotton_getTilesWrap_h3", "fontSize_TilesWrap_p", "lineHeight_TilesWrap_p", "color_TilesWrap_p", "checkSpan",
        "transitionYEnable", "transitionYEnable1", "transitionXEnable", "transitionXEnable1", "durationAnimationP", "duration1AnimationP",
        "fillModeAnimationP", "colorEndSpan", "colorStartSpan", "textInputSpan", "toEnableAnimationSpan",
        "checkIcon", "toEnableAnimationIcon", "durationAnimationIcon", "duration1AnimationIcon", "fillModeAnimationIcon", "transitionYEnableIcon",
        "transitionYEnable1Icon", "transitionXEnableIcon", "transitionXEnable1Icon", "color_ItemsBodyContentIcon_end", "color_ItemsBodyContentIcon_start",
        "textInputIcon", "checkButton",
        "minWidthLi", "maxWidthLi", "padding1Li", "padding2Li", "padding3Li", "positionLi", "verticalAlignLi", "marginLi", "textAlignLi", "opacityButtonLiEnter", "colorEndLi",
        "opacityButtonLiEnd", "colorStartLi", "topLiH2Enter", "opacityLiH2Enter", "topLiH2End", "opacityLiH2End", "marginTopP",

    ]

    /*
        0: "borderDim_ContItem",
        1: "borderType_ContItem",
        2: "borderColor_ContItem",
        3: "colorDivItems",
        4: "width_DivItem",
        5: "borderDim_DivItems",
        6: "borderType_DivItems",
        7: "borderColor_DivItems",
        8: "color_DivItemHead",
        9: "fontWeight_DivItemHead",
        10: "fontSize_DivItemHead",
        11: "paddingX_DivItemsHeadFinal",
        12: "paddingY_DivItemsHeadFinal",
        13: "paddingX_DivItemsHeadFinal_p",
        14: "paddingY_DivItemsHeadFinal_p",
        15: "margin_DivItemsHeadFinal_p",
        16: "color_DivItemsHeadFinal_p",
        17: "fontWeigh_DivItemsHeadFinal_p",
        18: "fontSize_DivItemsHeadFinal_p",
        19: "width_DivItemsHead_hr",
        20: "marginX_DivItemsHead_hr",
        21: "marginY_DivItemsHead_hr",
        22: "borderDim_DivItemsHead_hr",
        23: "borderType_DivItemsHead_hr",
        24: "borderColor_DivItemsHead_hr",
        25: "padding_ItemsBody",
        26: "margin_ItemsBody",
        27: "display_ItemsBody",
        28: "gripGap_ItemsBody",
        29: "padding_ItemsBodyContent",
        30: "paddingRight_ItemsBodyContent",
        31: "display_ItemsBodyContent",
        32: "color_ItemsBodyContent",
        33: "fontSize_ItemsBodyContent",
        35: "gripGap_ItemsBodyContent",
        36: "borderDim_ItemsBodyContent",
        37: "borderType_ItemsBodyContent",
        38: "borderColor_ItemsBodyContent",
        39: "borderRadius_hover_ItemsBodyContent",
        40: "borderDim_hover_ItemsBodyContent",
        41: "borderType_hover_ItemsBodyContent",
        42: "borderColor_hover_ItemsBodyContent",
        43: "fontSize_ItemsBodyContentIcon",
        44: "color_ItemsBodyContentIcon",
        45: "fontWeight_ItemsBodyContentIcon",
        46: "width_TilesWrapLi1",
        47: "fontFamily_TilesWrapLi1",
        48: "fontFamily_TilesWrapLi2",
        49: "height_TilesWrapLi",
        50: "backgroundColor_TilesWrapLi",
        51: "borderDim_TilesWrapLi",
        52: "borderType_TilesWrapLi",
        53: "borderColor_TilesWrapLi",
        54: "fontSize_TilesWrap_h2",
        55: "fontSize_getTilesWrap_h3",
        56: "color_getTilesWrap_h3",
        57: "marginBotton_getTilesWrap_h3",
        58: "fontSize_TilesWrap_p",
        59: "lineHeight_TilesWrap_p",
        60: "color_TilesWrap_p",
        61: "checkSpan",
        62: "transitionYEnable",
        63: "transitionYEnable1",
        64: "transitionXEnable",
        65: "transitionXEnable1",
        66: "durationAnimationP",
        67: "duration1AnimationP",
        68: "fillModeAnimationP",
        69: "colorEndSpan",
        70: "colorStartSpan",
        71: "textInputSpan",
        72: "toEnableAnimationSpan"
        73: "checkIcon",
        74: "toEnableAnimationIcon",
        75: "durationAnimationIcon",
        76: "duration1AnimationIcon",
        77: "fillModeAnimationIcon",
        78: "transitionYEnableIcon",
        79: "transitionYEnable1Icon",
        80: "transitionXEnableIcon",
        81: "transitionXEnable1Icon",
        82: "color_ItemsBodyContentIcon_end",
        83: "color_ItemsBodyContentIcon_start",
        84: "textInputIcon",
        85: "checkButton"
    */


    for (let i = 0; i < variableArray.length; i++) {

        if ((variableArray[i] != rest.get(tmp[i])) && variableArray[i] != 61) {
            itemsActions.changeValue(rest.get('id'), tmp[i], variableArray[i])
        }

    }

}

export function setCheckItems(value, typeTag, type) {

    switch (type) {

        case 'transitionMouse':

            switch (typeTag) {

                case 'ItemBodySpan':

                    itemsActions.changeValue(this.id, 'checkSpan', value)

                    break;

                case 'ItemsBodyContent':
                case 'ItemsWrap':

                    itemsActions.changeValue(this.id, 'checkLimit', value)

                    break;

                case 'ItemsBodyContentIcon':

                    itemsActions.changeValue(this.id, 'checkIcon', value)

                    break;

                default:
                    return;
            }


            break;

        case 'clickMouse':

            switch (typeTag) {

                case 'ItemBodySpan':

                    let r = (value === this.checkSpan) ? !value : value
                    itemsActions.changeValue(this.id, 'checkSpan', r)

                    break;

                case 'ItemsBodyContent':
                case 'ItemsWrap':

                    let result = (value === this.checkLimit) ? !value : value
                    itemsActions.changeValue(this.id, 'checkLimit', result)

                    break;

                case 'ItemsBodyContentIcon':

                    let re = (value === this.checkIcon) ? !value : value
                    itemsActions.changeValue(this.id, 'checkIcon', re)

                    break;

                default:
                    return;
            }


            break;

        case 'keyDown':

            switch (typeTag) {

                case 'ItemBodySpan':

                    if (this.textInputSpan === null) itemsActions.changeValue(this.id, 'checkSpan', !this.checkSpan)

                    if (value.key === this.textInputSpan) {
                        let result = (value === this.checkSpan) ? !value : value
                        itemsActions.changeValue(this.id, 'checkSpan', result)
                    }

                    break;

                case 'ItemsBodyContent':
                case 'ItemsWrap':

                    if (this.textInput === null) itemsActions.changeValue(this.id, 'checkLimit', !this.checkLimit)

                    if (value.key === this.textInput) {
                        let result = (value === this.checkLimit) ? !value : value
                        itemsActions.changeValue(this.id, 'checkLimit', result)
                    }

                    break;

                case 'ItemsBodyContentIcon':

                    if (this.textInputIcon === null) itemsActions.changeValue(this.id, 'checkIcon', !this.checkIcon)

                    if (value.key === this.textInputIcon) {
                        let result = (value === this.checkIcon) ? !value : value
                        itemsActions.changeValue(this.id, 'checkIcon', result)
                    }

                    break;

                default:
                    return;
            }


            break;

        default:
            return;
    }

}

items.propType = {
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
    borderDim_ContItem: PropTypes.string,
    borderType_ContItem: PropTypes.string,
    borderColor_ContItem: PropTypes.string,
    colorDivItems: PropTypes.string,
    width_DivItem: PropTypes.string,
    borderDim_DivItems: PropTypes.string,
    borderType_DivItems: PropTypes.string,
    borderColor_DivItems: PropTypes.string,
    color_DivItemHead: PropTypes.string,
    fontWeight_DivItemHead: PropTypes.string,
    fontSize_DivItemHead: PropTypes.string,
    paddingX_DivItemsHeadFinal: PropTypes.string,
    paddingY_DivItemsHeadFinal: PropTypes.string,
    paddingX_DivItemsHeadFinal_p: PropTypes.string,
    paddingY_DivItemsHeadFinal_p: PropTypes.string,
    margin_DivItemsHeadFinal_p: PropTypes.string,
    color_DivItemsHeadFinal_p: PropTypes.string,
    fontWeigh_DivItemsHeadFinal_p: PropTypes.string,
    fontSize_DivItemsHeadFinal_p: PropTypes.string,
    width_DivItemsHead_hr: PropTypes.string,
    marginX_DivItemsHead_hr: PropTypes.string,
    marginY_DivItemsHead_hr: PropTypes.string,
    borderDim_DivItemsHead_hr: PropTypes.string,
    borderType_DivItemsHead_hr: PropTypes.string,
    borderColor_DivItemsHead_hr: PropTypes.string,
    padding_ItemsBody: PropTypes.string,
    margin_ItemsBody: PropTypes.string,
    display_ItemsBody: PropTypes.string,
    gripGap_ItemsBody: PropTypes.string,
    padding_ItemsBodyContent: PropTypes.string,
    paddingRight_ItemsBodyContent: PropTypes.string,
    display_ItemsBodyContent: PropTypes.string,
    color_ItemsBodyContent: PropTypes.string,
    fontSize_ItemsBodyContent: PropTypes.string,
    gripGap_ItemsBodyContent: PropTypes.string,
    borderDim_ItemsBodyContent: PropTypes.string,
    borderType_ItemsBodyContent: PropTypes.string,
    borderColor_ItemsBodyContent: PropTypes.string,
    borderRadius_hover_ItemsBodyContent: PropTypes.string,
    borderDim_hover_ItemsBodyContent: PropTypes.string,
    borderType_hover_ItemsBodyContent: PropTypes.string,
    borderColor_hover_ItemsBodyContent: PropTypes.string,
    fontSize_ItemsBodyContentIcon: PropTypes.string,
    color_ItemsBodyContentIcon: PropTypes.string,
    fontWeight_ItemsBodyContentIcon: PropTypes.string,

    //

    width_TilesWrapLi1: PropTypes.string,
    fontFamily_TilesWrapLi1: PropTypes.string,
    fontFamily_TilesWrapLi2: PropTypes.string,
    height_TilesWrapLi: PropTypes.string,
    backgroundColor_TilesWrapLi: PropTypes.string,
    borderDim_TilesWrapLi: PropTypes.string,
    borderType_TilesWrapLi: PropTypes.string,
    borderColor_TilesWrapLi: PropTypes.string,
    fontSize_TilesWrap_h2: PropTypes.string,
    fontSize_getTilesWrap_h3: PropTypes.string,
    color_getTilesWrap_h3: PropTypes.string,
    marginBotton_getTilesWrap_h3: PropTypes.string,
    fontSize_TilesWrap_p: PropTypes.string,
    lineHeight_TilesWrap_p: PropTypes.string,
    color_TilesWrap_p: PropTypes.string,

    checkSpan: PropTypes.bool,

    transitionYEnable: PropTypes.bool,
    transitionYEnable1: PropTypes.bool,
    transitionXEnable: PropTypes.bool,
    transitionXEnable1: PropTypes.bool,
    durationAnimationP: PropTypes.string,
    duration1AnimationP: PropTypes.string,
    fillModeAnimationP: PropTypes.string,
    colorEndSpan: PropTypes.string,
    colorStartSpan: PropTypes.string,

    textInputSpan: PropTypes.string,
    toEnableAnimationSpan: PropTypes.bool,

    checkIcon: PropTypes.bool,
    toEnableAnimationIcon: PropTypes.bool,
    durationAnimationIcon: PropTypes.string,
    duration1AnimationIcon: PropTypes.string,
    fillModeAnimationIcon: PropTypes.string,
    transitionYEnableIcon: PropTypes.bool,
    transitionYEnable1Icon: PropTypes.bool,
    transitionXEnableIcon: PropTypes.bool,
    transitionXEnable1Icon: PropTypes.bool,

    color_ItemsBodyContentIcon_end: PropTypes.string,
    color_ItemsBodyContentIcon_start: PropTypes.string,
    textInputIcon: PropTypes.string,

    checkButton: PropTypes.bool,

    minWidthLi: PropTypes.string,
    maxWidthLi: PropTypes.string,
    padding1Li: PropTypes.string,
    padding2Li: PropTypes.string,
    padding3Li: PropTypes.string,
    positionLi: PropTypes.string,
    verticalAlignLi: PropTypes.string,
    marginLi: PropTypes.string,
    textAlignLi: PropTypes.string,
    opacityButtonLiEnter: PropTypes.string,
    colorEndLi: PropTypes.string,
    opacityButtonLiEnd: PropTypes.string,
    colorStartLi: PropTypes.string,
    topLiH2Enter: PropTypes.string,
    opacityLiH2Enter: PropTypes.string,
    topLiH2End: PropTypes.string,
    opacityLiH2End: PropTypes.string,
    marginTopP: PropTypes.string,

    typeTransitionButton: PropTypes.string,
    typeTransitionButton1: PropTypes.string,
    typeTransitionButton2: PropTypes.string,

    backgroundWrapButton: PropTypes.string,
    borderWrap1: PropTypes.string,
    borderWrap2: PropTypes.string,
    borderWrap3: PropTypes.string,
    paddingWrap1: PropTypes.string,
    paddingWrap2: PropTypes.string,
    colorButtonWrap: PropTypes.string,
    borderRadiusWrap: PropTypes.string,
    positionWrap: PropTypes.string,
    transitionDurationWrap1: PropTypes.string,
    transitionFillModeWrap2: PropTypes.string,
    opacityWrap: PropTypes.string,
    cursorWrap: PropTypes.string,
    overflowWrap: PropTypes.string,
    marginWrap: PropTypes.string,

    backgroundWrapButton_2: PropTypes.string,
    borderWrap1_2: PropTypes.string,
    borderWrap2_2: PropTypes.string,
    borderWrap3_2: PropTypes.string,
    paddingWrap1_2: PropTypes.string,
    paddingWrap2_2: PropTypes.string,
    colorButtonWrap_2: PropTypes.string,
    borderRadiusWrap_2: PropTypes.string,
    positionWrap_2: PropTypes.string,
    transitionDurationWrap1_2: PropTypes.string,
    transitionFillModeWrap2_2: PropTypes.string,
    opacityWrap_2: PropTypes.string,
    cursorWrap_2: PropTypes.string,
    overflowWrap_2: PropTypes.string,
    marginWrap_2: PropTypes.string

}

export default items
