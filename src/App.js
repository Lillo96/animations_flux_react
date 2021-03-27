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


const checkbox1 = getCheckboxes('checkboxprova')
const checkbox2 = getCheckboxes('checkboxprova2')

const card1 = getCards('cardsprova')
const card3 = getCards('cardsprova2')

//const [flipped, setFlipped ] = React.useState(false);

/*const MyExampleBack = () =>{
    return
}

const MyExampleFront = () =>{
    return
}

const MyExampleInner = () =>{
    return
}

const MyExampleContainer = () =>{
    return
}*/

const CardContainer2 = getCardContainer(getCards('cardsprova2'))
const CardFront2 = getCardFront(getCards('cardsprova2'))
const CardBack2 = getCardBack(getCards('cardsprova2'))
const CardInner2 = getCardInner(getCards('cardsprova2'))
const CardButton = getCardButton(getCards('cardsprova3'))

const MyExampleBack2 = () => {
    return <CardBack2 style={{backgroundImage: `url(${img})`}}>
        <h2>Back the title</h2>
        <p>Here is the content that goes on the back</p>
    </CardBack2>
}

const MyExampleFront2 = () =>{
    return <CardFront2 style={{backgroundImage: `url(${img})`}}>
        <h2>Title</h2>
        <p>Here is some content for the front</p>
    </CardFront2>
}

const MyExampleInner2 = () =>{
    return <CardInner2 onClick={() => { card3.provaFunction_CheckValue(false)}}><MyExampleFront2/><MyExampleBack2/></CardInner2>
}

const MyExampleContainer2 = () =>{
    return <CardContainer2><MyExampleInner2/></CardContainer2>
}

function App (props) {

    const card1 = getCards('cardsprova')
    let CardContainer = getCardContainer(card1)
    let CardFront = getCardFront(card1)
    let CardBack = getCardBack(card1)
    let CardInner = getCardInner(card1)

        return (
            <div className="App">
                <header className="App-header">

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

/*class App extends Component {

    render() {
        return(
            <div>
                Caio
            </div>

        );
    }
}*/

export default App
