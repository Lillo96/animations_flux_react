import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
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
import img from "./paper.jpg";

function App (props) {

    console.log('DENTRO APP')

    return (
        <div className="App">
            <header className="App-header">

                <br/>

                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>

            </header>
        </div>
    )

}

function AppView2(props) {
    return (
        <div>
            <Header {...props} />
            <Main {...props} />
        </div>
    );
}

function Header(props) {

    let card1 = getCards('cardsprova')
    let CardContainer = getCardContainer(card1)
    let CardFront = getCardFront(card1)
    let CardBack = getCardBack(card1)
    let CardInner = getCardInner(card1)

    return (
        <imp.cards id='cardsprova' typeInput={2} {...props}>
            <CardContainer>
                <CardInner onClick={() => { card1.provaFunction_CheckValue(false)}}>
                    <CardFront>
                        <h2>Title</h2>
                        <p>Here is some content for the front</p>
                    </CardFront>
                    <CardBack style={{backgroundImage: `url(${img})`}}>
                        <h2>Back the title</h2>
                        <p>Here is the content that goes on the back</p>
                    </CardBack>
                </CardInner>
            </CardContainer>
        </imp.cards>
    );
}

function Main(props) {

    let card2 = getCards('cardsprova2')
    let CardContainer2 = getCardContainer(getCards('cardsprova2'))
    let CardFront2 = getCardFront(getCards('cardsprova2'))
    let CardBack2 = getCardBack(getCards('cardsprova2'))
    let CardInner2 = getCardInner(getCards('cardsprova2'))

    return (
        <imp.cards id='cardsprova2' typeInput={2} {...props}>
            <CardContainer2>
                <CardInner2 onClick={() => { card2.provaFunction_CheckValue(false)}}>
                    <CardFront2>
                        <h2>Title</h2>
                        <p>Here is some content for the front</p>
                    </CardFront2>
                    <CardBack2 style={{backgroundImage: `url(${img})`}}>
                        <h2>Back the title</h2>
                        <p>Here is the content that goes on the back</p>
                    </CardBack2>
                </CardInner2>
            </CardContainer2>
        </imp.cards>
    );
}

export default AppView2
