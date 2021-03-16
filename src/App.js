import logo from './logo.svg';
import './App.css';
import React from 'react'
import imp, { getCheckboxes, getCards, getTabs } from './imp'
import checkboxes from "./components/checkboxes";
import cards, {
    setCheckLimitCards,
    getCardContainer,
    getCardBack,
    getCardInner,
    getCardFront,
    getImageArea,
    getImageWrapper,
    getHeaderImage,
    getName,
    getIconUL,
    getIconLi,
    getCardCenter,
    getCard,
    getAdditional,
    getUserCard,
    getLevelCenter,
    getPointsCenter,
    getSvg,
    getMoreInfo,
    getMoreInfoName,
    getCoords,
    getStats,
    getStatsValue,
    getStatsTitle,
    getCardGeneral,
    getCardGeneralMore,
    getCardGeneralTitle,
    getCardGeneralText, getCardButton
} from "./components/cards";
import tabs, {
    getContainerItems,
    getDivItems,
    getDivItemsHead,
    getDivItemsHead_p,
    getDivItemsHead_hr,
    getItemsBody,
    getItemsBodyContent,
    getItemsBodyContent_icon,
    getTilesWrap,
    getTilesWrap_li,
    getTilesWrap_h2,
    getTilesWrap_h3,
    getTilesWrap_p,
    getTilesWrap_button
} from "./components/items";
import styled, {css} from "styled-components";
import img from "./paper.jpg";


function App (props) {

  const checkbox1 = getCheckboxes('checkboxprova')
  const checkbox2 = getCheckboxes('checkboxprova2')

  const card1 = getCards('cardsprova')
  const card3 = getCards('cardsprova2')

  const [flipped, setFlipped ] = React.useState(false);

  const CardContainer = getCardContainer(card1)
  const CardFront = getCardFront(card1)
  const CardBack = getCardBack(card1)
  const CardInner = getCardInner(card1)

  const CardContainer2 = getCardContainer(getCards('cardsprova2'))
  const CardFront2 = getCardFront(getCards('cardsprova2'))
  const CardBack2 = getCardBack(getCards('cardsprova2'))
  const CardInner2 = getCardInner(getCards('cardsprova2'))
  const CardButton = getCardButton(getCards('cardsprova3'))


        return (
            <div className="App">
                <header className="App-header">

                    <imp.cards id='cardsprova' typeInput={2} duration='1s' fillMode="both" {...props}>

                        <CardContainer>
                            <CardInner onClick={() => {
                                card1.provaFunction_CheckValue(false)
                            }}>
                                {/*<CardInner onClick={ () => {card1.provaFunction_CheckValue(false)}}>*/}
                                {/*<CardInner tabIndex="0" onKeyDown={(e) => {card1.provaFunction_CheckValue(e)}}>*/}
                                <CardFront style={{backgroundImage: `url(${img})`}}>
                                    <h2>Title</h2>
                                    <p>Here is some content for the front</p>
                                    {/* <CardButton onClick={() => {setFlipped(true); card1.setCheckLimitCards(flipped);}}>Flip</CardButton> */}
                                </CardFront>
                                <CardBack>
                                    <h2>Back the title</h2>
                                    <p>Here is the content that goes on the back</p>
                                    {/* <CardButton onClick={() => {setFlipped(false); card1.setCheckLimitCards(flipped);}}>Flip</CardButton> */}
                                </CardBack>

                            </CardInner>
                        </CardContainer>

                    </imp.cards>

                    <br/>

                    <imp.cards id='cardsprova2' typeInput={3} textInput="i" duration='1s' fillMode="both" {...props}>

                        <CardContainer2>
                            <CardInner2 tabIndex="0" onKeyDown={(e) => {
                                card3.provaFunction_CheckValue(e)
                            }}>
                                <CardFront2>
                                    <h2>Title</h2>
                                    <p>Here is some content for the front</p>
                                    <CardButton onClick={() => {
                                        setFlipped(true);
                                        card3.setCheckLimitCards(flipped);
                                    }}>Flip</CardButton>
                                </CardFront2>
                                <CardBack2>
                                    <h2>Back the title</h2>
                                    <p>Here is the content that goes on the back</p>
                                    <CardButton onClick={() => {
                                        setFlipped(false);
                                        card3.setCheckLimitCards(flipped);
                                    }}>Flip</CardButton>
                                </CardBack2>

                            </CardInner2>
                        </CardContainer2>

                    </imp.cards>


                    {/*<img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>*/}

                    {/* <label>
          <input type="checkbox"
                 checked={checked}
                 onChange={() => setChecked(!checked)}
          />
          Check Me!
        </label>*/}


                    {/*<a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React

        </a>*/}
                </header>
            </div>
        )

}

export default App
