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
    getCardGeneralText
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
} from "./components/tabs";
import styled, {css} from "styled-components";


function App (props) {

  const checkbox1 = getCheckboxes('checkboxprova')
  const checkbox2 = getCheckboxes('checkboxprova2')
  //const checkbox3 = getCheckboxes('checkboxprova3')

  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(true);
  //const [checked2, setChecked2] = React.useState(true);

  const card1 = getCards('cardsprova')

  const [flipped, setFlipped ] = React.useState(false);

  //const CardContainer = getCardContainer('cardsprova')
  //const CardFront = getCardFront('cardsprova')
  //const CardBack = getCardBack('cardsprova')
  //const CardInner = getCardInner('cardsprova')

  console.log(flipped);

  const demoHeaderConst = {
    width: '240px',
    height: '200px',
    margin: '10px',
    float: 'left',
  }

  return (
    <div className="App" {...props}>
      <header className="App-header" {...props}>
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

                {/*CHECKBOX*/}

        {/*<imp.checkboxes id='checkboxprova' typeInput={1} checkLimit={ true } {...props}>

          <label>
            <input type="checkbox"
                   checked={!checked}
                   onChange={() => setChecked(!checked)}
                   onClick={() => { checkbox1.setCheckLimit(!checked) }}
            />
              Checkbox
          </label>


        </imp.checkboxes>*/}

        {/*<imp.checkboxes id='checkboxprova2' typeInput={2} checkLimit={ true } {...props}>

          <label>
            <input type="checkbox"
                   checked={!checked1}
                   onChange={() => setChecked1(!checked1)}
                   onClick={() => { checkbox2.setCheckLimit(!checked1) }}
            />
            Checkbox
          </label>

        </imp.checkboxes>*/}

        {/*<button
            flipped={!flipped}
            onChange={() => setFlipped(!flipped)}
            onClick={() => { card1.setCheckLimitCards() }}
        >
          Flip
        </button>*/}

        {/*CARD*/}

                {/*    CARD 1     */}

        {/*<imp.cards id='cardsprova' {...props}>

          <CardContainer>
            <CardInner className={flipped ? "flipped" : ""}>
              <CardFront>
                <h2>Title</h2>
                <p>Here is some content for the front</p>
                <button onClick={() => {setFlipped(true); card1.setCheckLimitCards(flipped);}}>Flip</button>
              </CardFront>
              <CardBack>
                <h2>Back the title</h2>
                <p>Here is the content that goes on the back</p>
                <button onClick={() => {setFlipped(false); card1.setCheckLimitCards(flipped);}}>Flip</button>
              </CardBack>

            </CardInner>

          </CardContainer>

        </imp.cards>*/}

       {/*<imp.cards id='cardsprova01' {...props}>

          <div class="image-area">
            <div class="img-wrapper">
              <img src="https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Atul Prajapati"/>
              <h2>David James</h2>
              <ul>
                <li><a href={""}><i className={"fab-fa-instagram"}/></a></li>
                <li><a href={""}><i className={"fab-fa-instagram"}/></a></li>
                <li><a href={""}><i className={"fab-fa-instagram"}/></a></li>
                <li><a href={""}><i className={"fab-fa-instagram"}/></a></li>
              </ul>
            </div>
          </div>

        </imp.cards>*/}

{/*       <imp.cards id='cardsprova02' {...props}>

          <ImageArea>
            <ImageWrapper>
              <HeaderImage alt="Atul Prajapati"/>
                   <NameCard>David James</NameCard>
                <IconUL>
                  <IconLI><a href={""}><i className={"fab-fa-instagram"}/></a></IconLI>
                  <li><a href={""}><i className={"fab-fa-instagram"}/></a></li>
                  <li><a href={""}><i className={"fab-fa-instagram"}/></a></li>
                  <li><a href={""}><i className={"fab-fa-instagram"}/></a></li>
                </IconUL>
              </ImageWrapper>
          </ImageArea>

       </imp.cards>*/}

       {/*<imp.cards id='cardsprova03' {...props}>

           <CardCenter>

               <Card>
                   <Additional>
                       <UserCard>
                           <LevelCenter>
                               Level 13
                           </LevelCenter>
                           <PointsCenter>
                               5,312 Points
                           </PointsCenter>
                           <Svg>
                               <title id="title">Teacher</title>
                               <desc id="desc">Cartoon of a Caucasian woman smiling, and wearing black glasses and a
                                   purple shirt with white collar drawn by Alvaro Montoro.
                               </desc>
                           </Svg>

                       </UserCard>
                       <MoreInfo>
                           <MoreInfoName>Jane Doe</MoreInfoName>
                           <Coords>
                               <span>Group Name</span>
                               <span>Joined January 2019</span>
                           </Coords>
                           <Coords>
                               <span>Position/Role</span>
                               <span>City, Country</span>
                           </Coords>
                           <Stats>
                               <div>
                                   <StatsTitle>Awards</StatsTitle>
                                   <i className="fa fa-trophy"></i>
                                   <StatsValue>2</StatsValue>
                               </div>
                               <div>
                                   <StatsTitle>Matches</StatsTitle>
                                   <i className="fa fa-gamepad"></i>
                                   <StatsValue>27</StatsValue>
                               </div>
                               <div>
                                   <StatsTitle>Pals</StatsTitle>
                                   <i className="fa fa-group"></i>
                                   <StatsValue>123</StatsValue>
                               </div>
                               <div>
                                   <StatsTitle>Coffee</StatsTitle>
                                   <i className="fa fa-coffee"></i>
                                   <StatsValue>∞</StatsValue>
                               </div>
                           </Stats>
                       </MoreInfo>
                   </Additional>
                   <General>
                       <GeneralMoreTitle>Jane Doe</GeneralMoreTitle>
                       <GeneralMoreText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie
                           lacus. Nam vestibulum sodales odio ut pulvinar.</GeneralMoreText>
                       <GeneralMore>Mouse over the card for more info</GeneralMore>
                   </General>
               </Card>

           </CardCenter>

       </imp.cards>*/}

          {/*ITEMS*/}

          {/*<imp.tabs id='tabsprova' {...props}>
              <ContainerItems>
                  <DivItems>
                      <DivItemsHead>
                          <DivItemsHead_p>UX DESIGN</DivItemsHead_p>
                          <DivItemsHead_hr></DivItemsHead_hr>
                      </DivItemsHead>

                      <ItemsBody>
                          <ItemsBodyContent>
                              <span>Web Usabilty Testing</span>
                              <ItemsBodyContentIcon className="fa fa-angle-right"></ItemsBodyContentIcon>
                          </ItemsBodyContent>
                          <ItemsBodyContent>
                              <span>Design of Everyday Things</span>
                              <ItemsBodyContentIcon className="fa fa-angle-right"></ItemsBodyContentIcon>
                          </ItemsBodyContent>
                          <ItemsBodyContent>
                              <span>Practical Empathy: For Collaboration & Creativity in Your Work</span>
                              <ItemsBodyContentIcon className="fa fa-angle-right"></ItemsBodyContentIcon>
                          </ItemsBodyContent>
                          <ItemsBodyContent>
                              <span>About Face: The Essentials of Interaction Design</span>
                              <ItemsBodyContentIcon className="fa fa-angle-right"></ItemsBodyContentIcon>
                          </ItemsBodyContent>
                      </ItemsBody>
                  </DivItems>
              </ContainerItems>

          </imp.tabs>*/}

          {/*<imp.tabs id='tabsprova01' {...props}>

              <TilesWrap>
                  <TilesWrap_li>
                      <TilesWrap_h2>01</TilesWrap_h2>
                      <TilesWrap_h3>Title 1</TilesWrap_h3>
                      <TilesWrap_p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy text ever
                          since the 1500s.
                      </TilesWrap_p>
                      <TilesWrap_button>Read more</TilesWrap_button>
                  </TilesWrap_li>
                  <li>
                      <h2>02</h2>
                      <h3>Title 2</h3>
                      <p>
                          When an unknown printer took a galley of type and scrambled it to make
                          a type specimen book. It has survived not only five centuries.
                      </p>
                      <button>Read more</button>
                  </li>
                  <li>
                      <h2>03</h2>
                      <h3>Title 3</h3>
                      <p>
                          But also the leap into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s.
                      </p>
                      <button>Read more</button>
                  </li>
                  <li>
                      <h2>04</h2>
                      <h3>Title 4</h3>
                      <p>
                          With the release of Letraset sheets containing Lorem Ipsum passages,
                          and more recently with desktop publishing software like Aldus PageMaker
                          including versions of Lorem Ipsum.
                      </p>
                      <button>Read more</button>
                  </li>
              </TilesWrap>

          </imp.tabs>*/}

        {/*<imp.items id='itemsprova' {...props}>
          <p>Ciaooooo</p>
        </imp.items>*/}

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
// CARD

/*
const CardCenter = getCardCenter()
const Card = getCard()
const Additional = getAdditional()
const UserCard = getUserCard()
const LevelCenter = getLevelCenter()
const PointsCenter = getPointsCenter()
const Svg = getSvg()
const MoreInfo = getMoreInfo()
const MoreInfoName = getMoreInfoName()
const Coords = getCoords()
const Stats = getStats()
const StatsTitle = getStatsTitle()
const StatsValue = getStatsValue()
const General = getCardGeneral()
const GeneralMore = getCardGeneralMore()
const GeneralMoreTitle = getCardGeneralTitle()
const GeneralMoreText = getCardGeneralText()
*/

        // CARD 1 -- START

const CardContainer = getCardContainer('cardsprova')
const CardFront = getCardFront('cardsprova')
const CardBack = getCardBack('cardsprova')
const CardInner = getCardInner('cardsprova')

        // CARD 1 -- END

        // CARD 2 -- START

const ImageArea = getImageArea()
const ImageWrapper = getImageWrapper()
const HeaderImage = getHeaderImage()
const NameCard = getName()
const IconUL = getIconUL()
const IconLI = getIconLi()

        // CARD 2 -- END

// ITEMS
/*const ContainerItems = getContainerItems()
const DivItems = getDivItems()
const DivItemsHead = getDivItemsHead()
const DivItemsHead_p = getDivItemsHead_p()
const DivItemsHead_hr = getDivItemsHead_hr()
const ItemsBody = getItemsBody()
const ItemsBodyContent = getItemsBodyContent()
const ItemsBodyContentIcon = getItemsBodyContent_icon()*/

const TilesWrap = getTilesWrap()
const TilesWrap_li = getTilesWrap_li()
const TilesWrap_h2 = getTilesWrap_h2()
const TilesWrap_h3 = getTilesWrap_h3()
const TilesWrap_p = getTilesWrap_p()
const TilesWrap_button = getTilesWrap_button()

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
        transform: rotateY(180deg) translate(100%, 0);
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

