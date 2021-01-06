import React from 'react'
import PropTypes from 'prop-types'
import tabsActions from "../data/tabs/tabsActions";
import getAnimation from "../data/animation"

import styled, {keyframes} from "styled-components"

function tabs({
                   id, checkLimit, typeInput, animationCSS, textInput, textValue, duration, timing, delay, iterations,
                   direction, fillMode, playState, ...rest
               }) {

    let animation
    let getAnimationCSS, getAnimationCSS_1

    if (!rest.tabs.state.has(id)) {

        animation = getAnimation(id, {duration, timing, delay, iterations, direction, fillMode, playState })
        //console.log(animation)

        tabsActions.newTabs(
            id, checkLimit, typeInput, animationCSS, textInput, textValue, duration, timing, delay,
            iterations, direction, fillMode, playState
        )

        //setAnimationCSS(id, cssStylesKeyFrames(true,1))

    } else {

        //console.log("Dentro else di !rest")

        const itemObj = rest.tabs.state.get(id)

        animation = getAnimation(id, {}, itemObj.style)
        //console.log(animation)

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

export function getContainerItems() {

    const ContainerItem = styled.div`
        border: 1px solid black;
    
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        margin: auto;
    
        display: grid;
        place-items: center;
        background-color: #128CFC;
       `;

    return ContainerItem
}

export function getDivItems() {

    const DivItems = styled.div`
         width: 300px;
         background: #fffffe;
         box-shadow: 0 3px 6px rgba(black,0.16), 0 3px 6px rgba(black,0.23);
         border-top: 10px solid #0B5AA2;
       `;

    return DivItems
}

export function getDivItemsHead() {

    const DivItemsHead = styled.div`     
          padding: 5px 20px;
          margin: 10px;
          color: #0B5AA2;
          font-weight: bold;
          font-size: 20px;
       `;

    return DivItemsHead
}

export function getDivItemsHead_p() {

    const DivItemsHead_p = styled.p`
          padding: 5px 20px;
          margin: 10px;
          color: #0B5AA2;
          font-weight: bold;
          font-size: 20px;
       `;

    return DivItemsHead_p
}

export function getDivItemsHead_hr() {

    const DivItemsHead_hr = styled.hr`      
      width: 20%;
      margin: 0px 30px;
      border: 1px solid #0B5AA2;
    `;
    return DivItemsHead_hr
}

export function getItemsBody() {

    const ItemsBody = styled.div`
      padding: 10px;
      margin: 10px;
      display: grid;
      grid-gap: 10px;
    `;

    return ItemsBody
}

export function getItemsBodyContent() {

    const ItemsBodyContent = styled.div`
      padding: 10px;
      padding-right: 0px;
      display: grid;
      grid-template-columns: 10fr 1fr;
      background-color: lightblue;
      font-size: 13px;
      grid-gap: 10px;
      border: 1px solid transparent;
      cursor: pointer;
      
      &:hover {
        border-radius: 15px;
        border: 1px solid #0B5AA2;
      }
      `;

    return ItemsBodyContent
}

export function getItemsBodyContent_icon() {

    const ItemsBodyContentIcon = styled.span`
      align-self: center;
      font-size: 15px;
      color: #0B5AA2;
      font-weight: bold;
      animation: icon 1.5s infinite forwards;
      
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

tabs.propType = {
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

export default tabs
