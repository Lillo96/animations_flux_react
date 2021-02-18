import React from 'react'
import imp, {getCards, getCheckboxes, getItems} from './imp'

import checkboxes, {} from "./components/checkboxes";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import {
    getCardBack,
    getCardContainer,
    getCardFront,
    getCardInner,
    getCardButton,
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
    getStatsTitle,
    getStatsValue,
    getCardGeneral,
    getCardGeneralMore,
    getCardGeneralTitle,
    getCardGeneralText,
    getImageArea,
    getImageWrapper,
    getHeaderImage,
    getName,
    getIconUL,
    getIconLi,
    setValueVariable,
    provaFunction_CheckValue
} from "./components/cards";
import {
    getContainerItems,
    getDivItems,
    getDivItemsHead,
    getDivItemsHead_hr,
    getDivItemsHead_p,
    getItemsBody,
    getItemsBodyContent,
    getItemsBodyContent_icon,
    getTilesWrap, getTilesWrap_button,
    getTilesWrap_h2, getTilesWrap_h3,
    getTilesWrap_li, getTilesWrap_p
} from "./components/items";

let num

// FORM

const useStyles1 = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function SimpleSelect(props) {
    const classes = useStyles1();

    const [CheckLimit, setCheckLimit] = React.useState(true);
    const [ColorStart, setColorStart] = React.useState('red');
    const [ColorEnd, setColorEnd] = React.useState('red');

    const [ColorStart1, setColorStart1] = React.useState('red');
    const [ColorEnd1, setColorEnd1] = React.useState('red');

    const [ColorStart2, setColorStart2] = React.useState('red');
    const [ColorEnd2, setColorEnd2] = React.useState('red');

    const [ColorLine, setColorLine] = React.useState('black');

    const [BackfaceColor, setBackfaceColor] = React.useState('#D9D9D9');
    const [DirectionOfRotation, setDirectionOfRotation] = React.useState('toTheLeft');

    const [DirectionOfAnimation, setDirectionOfAnimation] = React.useState('topLeftBottomRight');
    const [DirectionName, setDirectionName] = React.useState('FromLeftToRight');

    const [DirectionOfRotation1, setDirectionOfRotation1] = React.useState('FromRightHandToSinister');

    const handleChangeCheckLimit = (event) => {
        setCheckLimit(event.target.value);
    };
    const handleColorStart = (event) => {
        setColorStart(event.target.value);
    };
    const handleColorEnd = (event) => {
        setColorEnd(event.target.value);
    };

    const handleColorStart1 = (event) => {
        setColorStart1(event.target.value);
    };
    const handleColorEnd1 = (event) => {
        setColorEnd1(event.target.value);
    };

    const handleColorStart2 = (event) => {
        setColorStart2(event.target.value);
    };
    const handleColorEnd2 = (event) => {
        setColorEnd2(event.target.value);
    };

    const handleColorLine = (event) => {
        setColorLine(event.target.value);
    }

    const handleBackfaceColor = (event) => {
        setBackfaceColor(event.target.value);
    }
    const handleDirectionOfRotation = (event) => {
        setDirectionOfRotation(event.target.value);
    }

    const handleDirectionOfAnimation = (event) => {
        setDirectionOfAnimation(event.target.value);
    }

    const handleDirectionName = (event) => {
        setDirectionName(event.target.value);
    }

    const handleDirectionOfRotation1 = (event) => {
        setDirectionOfRotation1(event.target.value);
    }

/*    const handleColor = (event) => {
        setDirectionOfAnimation(event.target.value);
    }*/

    const checkbox1 = getCheckboxes('checkboxprova')
    const checkbox2 = getCheckboxes('checkboxprova2')
    const checkbox3 = getCheckboxes('checkboxprova3')

    const [checked, setChecked] = React.useState(true);
    const [checked1, setChecked1] = React.useState(true);
    const [checked2, setChecked2] = React.useState(true);

    const [flipped, setFlipped ] = React.useState(false);

    const card1 = getCards('cardsprova')
    const card2 = getCards('cardsprova1')
    const card3 = getCards('cardsprova2')
    const card4 = getCards('cardsprova3')

    const handlePress = (event) => {
        console.log('ok')
        console.log(event.key)

    }

    const handleKeyDown = (event) => {
        console.log('handling a key press')
    }

    //console.log(getCheckboxes('checkboxprova3'))

    const onKeyPressed = (e) => {
        console.log(e.key);
        setPressed(e.key)
    }

    const [pressed, setPressed] = React.useState(null);


    switch (props.num) {

        case '1':
                    return (
                        <div>

                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">ColorStart</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ColorStart}
                                    onChange={handleColorStart}
                                >
                                    <MenuItem value={'red'}>red</MenuItem>
                                    <MenuItem value={'yellow'}>yellow</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">ColorEnd</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ColorEnd}
                                    onChange={handleColorEnd}
                                >
                                    <MenuItem value={'red'}>red</MenuItem>
                                    <MenuItem value={'yellow'}>yellow</MenuItem>
                                </Select>

                            </FormControl>

                            <imp.checkboxes id='checkboxprova' typeInput={1} colorStart={ColorStart} colorEnd={ColorEnd} opacityNotCheck='1'
                                            opacityCheck='2' timeAnimation='0s' typeAnimFillMode='both'{...props}>
                                <label>
                                    <input type="checkbox"
                                           checked={!checked}
                                           onChange={() => setChecked(!checked)}
                                           onClick={() => { checkbox1.setCheckLimit(!checked) }}
                                    />
                                    Checkbox
                                </label>

                            </imp.checkboxes>

                        </div>
                    );
        break;

        case '2':
                return (
                        <div>

                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">ColorStart</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ColorStart1}
                                    onChange={handleColorStart1}
                                >
                                    <MenuItem value={'red'}>red</MenuItem>
                                    <MenuItem value={'yellow'}>yellow</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">ColorEnd</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ColorEnd1}
                                    onChange={handleColorEnd1}
                                >
                                    <MenuItem value={'red'}>red</MenuItem>
                                    <MenuItem value={'black'}>black</MenuItem>
                                </Select>

                            </FormControl>

                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">ColorLine</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ColorLine}
                                    onChange={handleColorLine}
                                >
                                    <MenuItem value={'red'}>red</MenuItem>
                                    <MenuItem value={'black'}>black</MenuItem>
                                    <MenuItem value={'white'}>white</MenuItem>

                                </Select>

                            </FormControl>

                            <imp.checkboxes id='checkboxprova2' typeInput={2} checkLimit={ true }
                                            colorStart={ColorStart1} colorEnd={ColorEnd1} colorLine={ColorLine} {...props}>

                                <label>
                                    <input type="checkbox"
                                           checked={!checked1}
                                           onChange={() => setChecked1(!checked1)}
                                           onClick={() => { checkbox2.setCheckLimit(!checked1) }}
                                    />
                                    Checkbox
                                </label>

                            </imp.checkboxes>

                        </div>
                    );
        break;

        case '3':
            return (
                <div>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">ColorStart</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={ColorStart2}
                            onChange={handleColorStart2}
                        >
                            <MenuItem value={'red'}>red</MenuItem>
                            <MenuItem value={'yellow'}>yellow</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">ColorEnd</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={ColorEnd2}
                            onChange={handleColorEnd2}
                        >
                            <MenuItem value={'red'}>red</MenuItem>
                            <MenuItem value={'yellow'}>yellow</MenuItem>
                        </Select>

                    </FormControl>

                    <imp.checkboxes id='checkboxprova3' typeInput={3} checkLimit={ true } textInput='Checkbox off'
                                    colorStart={ColorStart2} colorEnd={ColorEnd2} opacityNotCheck='1'
                                    opacityCheck='2' timeAnimation='0s' typeAnimFillMode='both' {...props}>

                        <label>
                            <input type="checkbox"
                                   checked={!checked2}
                                   onChange={() => setChecked2(!checked2)}
                                   onClick={() => { checkbox3.setTextValue(!checked2, 'Checkbox on'); checkbox3.setCheckLimit(!checked2);}}
                            />
                            {getCheckboxes('checkboxprova3').textValue}
                        </label>

                    </imp.checkboxes>

                </div>
            );
            break;

        case '4':

            const CardContainer = getCardContainer(getCards('cardsprova'))
            const CardFront = getCardFront(getCards('cardsprova'))
            const CardBack = getCardBack(getCards('cardsprova'))
            const CardInner = getCardInner(getCards('cardsprova'))
            //const CardButton = getCardButton(getCards('cardsprova'))

            const CardContainer1 = getCardContainer(getCards('cardsprova1'))
            const CardFront1 = getCardFront(getCards('cardsprova1'))
            const CardBack1 = getCardBack(getCards('cardsprova1'))
            const CardInner1 = getCardInner(getCards('cardsprova1'))

            const CardContainer2 = getCardContainer(getCards('cardsprova2'))
            const CardFront2 = getCardFront(getCards('cardsprova2'))
            const CardBack2 = getCardBack(getCards('cardsprova2'))
            const CardInner2 = getCardInner(getCards('cardsprova2'))


            const CardContainer3 = getCardContainer(getCards('cardsprova3'))
            const CardFront3 = getCardFront(getCards('cardsprova3'))
            const CardBack3 = getCardBack(getCards('cardsprova3'))
            const CardInner3 = getCardInner(getCards('cardsprova3'))
            const CardButton = getCardButton(getCards('cardsprova3'))


            return (

                <div>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Background-color</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={BackfaceColor}
                            onChange={handleBackfaceColor}
                        >
                            <MenuItem value={'white'}>white</MenuItem>
                            <MenuItem value={'#D9D9D9'}>light gray</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Direction of rotation</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={DirectionOfRotation}
                            onChange={handleDirectionOfRotation}
                        >
                            <MenuItem value={'toTheRight'}>To the X</MenuItem>
                            <MenuItem value={'toTheLeft'}>To the Y</MenuItem>
                        </Select>

                    </FormControl>

                    {/* CARD HOVER */}

                    <imp.cards id='cardsprova' typeInput={1} colorCard={BackfaceColor} directionOfRotation={DirectionOfRotation}
                               duration='1s' fillMode="both" {...props}>

                        <CardContainer>
                            <CardInner>
                            {/*<CardInner onClick={ () => {card1.provaFunction_CheckValue(false)}}>*/}
                            {/*<CardInner tabIndex="0" onKeyDown={(e) => {card1.provaFunction_CheckValue(e)}}>*/}
                                <CardFront>
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

                    {/* CARD CLICK */}

                    <imp.cards id='cardsprova1' typeInput={2} colorCard={BackfaceColor} directionOfRotation={DirectionOfRotation}
                               duration='1s' fillMode="both" {...props}>

                        <CardContainer1>
                            <CardInner1 onClick={ () => {card2.provaFunction_CheckValue(false)}}>
                                {/*<CardInner tabIndex="0" onKeyDown={(e) => {card1.provaFunction_CheckValue(e)}}>*/}
                                <CardFront1>
                                    <h2>Title</h2>
                                    <p>Here is some content for the front</p>
                                    {/* <CardButton onClick={() => {setFlipped(true); card1.setCheckLimitCards(flipped);}}>Flip</CardButton> */}
                                </CardFront1>
                                <CardBack1>
                                    <h2>Back the title</h2>
                                    <p>Here is the content that goes on the back</p>
                                    {/* <CardButton onClick={() => {setFlipped(false); card1.setCheckLimitCards(flipped);}}>Flip</CardButton> */}
                                </CardBack1>

                            </CardInner1>
                        </CardContainer1>

                    </imp.cards>

                    <br/>

                    {/* CARD TASTO */}

                    <imp.cards id='cardsprova2' typeInput={3} colorCard={BackfaceColor} directionOfRotation={DirectionOfRotation} textInput="i"
                               duration='1s' fillMode="both" {...props}>

                        <CardContainer2>
                            <CardInner2 tabIndex="0" onKeyDown={(e) => {card3.provaFunction_CheckValue(e)}}>
                                <CardFront2>
                                    <h2>Title</h2>
                                    <p>Here is some content for the front</p>
                                    {/* <CardButton onClick={() => {setFlipped(true); card1.setCheckLimitCards(flipped);}}>Flip</CardButton> */}
                                </CardFront2>
                                <CardBack2>
                                    <h2>Back the title</h2>
                                    <p>Here is the content that goes on the back</p>
                                    {/* <CardButton onClick={() => {setFlipped(false); card1.setCheckLimitCards(flipped);}}>Flip</CardButton> */}
                                </CardBack2>

                            </CardInner2>
                        </CardContainer2>

                    </imp.cards>

                    <br/>

                    {/* CARD BOTTONE */}

                    <imp.cards id='cardsprova3' typeInput={4} colorCard={BackfaceColor} directionOfRotation={DirectionOfRotation}
                               duration='1s' fillMode="both" {...props}>

                        <CardContainer3>
                            <CardInner3 >
                                <CardFront3>
                                    <h2>Title</h2>
                                    <p>Here is some content for the front</p>
                                    {/* <CardButton onClick={() => {setFlipped(true); card1.setCheckLimitCards(flipped);}}>Flip</CardButton> */}
                                    <CardButton onClick={ () => card4.provaFunction_CheckValue(false)}>Back</CardButton>
                                </CardFront3>
                                <CardBack3>
                                    <h2>Back the title</h2>
                                    <p>Here is the content that goes on the back</p>
                                    {/* <CardButton onClick={() => {setFlipped(false); card1.setCheckLimitCards(flipped);}}>Flip</CardButton> */}
                                    <CardButton onClick={ () => card4.provaFunction_CheckValue(false)}>Title</CardButton>
                                </CardBack3>

                            </CardInner3>
                        </CardContainer3>

                    </imp.cards>

                    <br/>

                </div>
                );

            break;

        case '5':

            const ImageArea = getImageArea(getCards('cardsprova02'))
            const ImageWrapper = getImageWrapper(getCards('cardsprova02'))
            const HeaderImage = getHeaderImage(getCards('cardsprova02'))
            const NameCard = getName(getCards('cardsprova02'))
            const IconUL = getIconUL(getCards('cardsprova02'))
            const IconLI = getIconLi(getCards('cardsprova02'))

            return (
                <div>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Direction of animation</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={DirectionOfAnimation}
                            onChange={handleDirectionOfAnimation}
                        >
                            <MenuItem value={'topLeftBottomRight'}>top left bottom right</MenuItem>
                            <MenuItem value={'topRightBottomLeft'}>top right bottom left</MenuItem>
                            <MenuItem value={'lowRightToHighLeft'}>low right to high left</MenuItem>
                            <MenuItem value={'lowLeftToHighRight'}>low left to high right</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Direction Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={DirectionName}
                            onChange={handleDirectionName}
                        >
                            <MenuItem value={'FromRightHandToSinister'}>From right hand to sinister</MenuItem>
                            <MenuItem value={'FromLeftToRight'}>From left to right</MenuItem>
                        </Select>

                    </FormControl>

                    <imp.cards id='cardsprova02' directionOfAnimation={DirectionOfAnimation}  {...props}>

                        <ImageArea>
                            <ImageWrapper>
                                <HeaderImage alt="Atul Prajapati"/>
                                <NameCard>David James</NameCard>
                                {/* <IconUL> */}

{/*                                    <IconLI><a href={""}><i className={"fab-fa-instagram"}/></a></IconLI>
                                    <li><a href={""}><i className={"fab-fa-instagram"}/></a></li>
                                    <li><a href={""}><i className={"fab-fa-instagram"}/></a></li>
                                    <li><a href={""}><i className={"fab-fa-instagram"}/></a></li>*/}
                                {/* </IconUL> */}
                            </ImageWrapper>
                        </ImageArea>

                    </imp.cards>

                </div>
            );
            break;

        case '6':

            const CardCenter = getCardCenter(getCards('cardsprova03'))
            const Card = getCard(getCards('cardsprova03'))
            const Additional = getAdditional(getCards('cardsprova03'))
            const UserCard = getUserCard(getCards('cardsprova03'))
            const LevelCenter = getLevelCenter(getCards('cardsprova03'))
            const PointsCenter = getPointsCenter(getCards('cardsprova03'))
            const Svg = getSvg(getCards('cardsprova03'))
            const MoreInfo = getMoreInfo(getCards('cardsprova03'))
            const MoreInfoName = getMoreInfoName(getCards('cardsprova03'))
            const Coords = getCoords(getCards('cardsprova03'))
            const Stats = getStats(getCards('cardsprova03'))
            const StatsTitle = getStatsTitle(getCards('cardsprova03'))
            const StatsValue = getStatsValue(getCards('cardsprova03'))
            const General = getCardGeneral(getCards('cardsprova03'))
            const GeneralMore = getCardGeneralMore(getCards('cardsprova03'))
            const GeneralMoreTitle = getCardGeneralTitle(getCards('cardsprova03'))
            const GeneralMoreText = getCardGeneralText(getCards('cardsprova03'))

            return (
                <div>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Transition direction</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={DirectionOfRotation1}
                            onChange={handleDirectionOfRotation1}
                        >
                            <MenuItem value={'FromRightHandToSinister'}>From right hand to sinister</MenuItem>
                            <MenuItem value={'FromLeftToRight'}>From left to right</MenuItem>
                            <MenuItem value={'FromTopToBottom'}>From top to bottom</MenuItem>
                            <MenuItem value={'FromBottomToTop'}>From bottom to top</MenuItem>
                        </Select>
                    </FormControl>

                    <imp.cards id='cardsprova03' directionOfRotation1={DirectionOfRotation1} {...props}>

                        <CardCenter>

                            <Card>
                                <Additional>
                                    <MoreInfo>

                                        <a href={""} ><i className={"fa fa-link fa-1x"}></i></a>
                                        {/*  <MoreInfoName>Jane Doe</MoreInfoName>
                                        <Coords>
                                            <span>Group Name</span>
                                            <span>Joined January 2019</span>
                                        </Coords>
                                        <Coords>
                                            <span>Position/Role</span>
                                            <span>City, Country</span>
                                        </Coords>*/}
                                    </MoreInfo>
                                </Additional>
                                <General>
                                    <GeneralMoreTitle>Jane Doe</GeneralMoreTitle>
                                    <GeneralMoreText>Lorem ipsum dolor sit amet</GeneralMoreText>
                                    <GeneralMore>Mouse over the card for more info</GeneralMore>
                                </General>
                            </Card>

                        </CardCenter>

                    </imp.cards>

                </div>
            );
            break;

        case '7':

            const ContainerItems = getContainerItems(getItems('tabsprova'))
            const DivItems = getDivItems(getItems('tabsprova'))
            const DivItemsHead = getDivItemsHead(getItems('tabsprova'))
            const DivItemsHead_p = getDivItemsHead_p(getItems('tabsprova'))
            const DivItemsHead_hr = getDivItemsHead_hr(getItems('tabsprova'))
            const ItemsBody = getItemsBody(getItems('tabsprova'))
            const ItemsBodyContent = getItemsBodyContent(getItems('tabsprova'))
            const ItemsBodyContentIcon = getItemsBodyContent_icon(getItems('tabsprova'))

            return (
              <div>
                  <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label"></InputLabel>
                      <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={ColorStart2}
                          onChange={handleColorStart2}
                      >
                          <MenuItem value={'red'}>red</MenuItem>
                          <MenuItem value={'yellow'}>yellow</MenuItem>
                      </Select>
                  </FormControl>

                  <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">ColorEnd</InputLabel>
                      <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={ColorEnd2}
                          onChange={handleColorEnd2}
                      >
                          <MenuItem value={'red'}>red</MenuItem>
                          <MenuItem value={'yellow'}>yellow</MenuItem>
                      </Select>

                  </FormControl>

                <imp.items id='tabsprova' {...props}>
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
                  </imp.items>
              </div>
            );
            break;

        case '8':

            const TilesWrap = getTilesWrap(getItems('tabsprova'))
            const TilesWrap_li = getTilesWrap_li(getItems('tabsprova'))
            const TilesWrap_h2 = getTilesWrap_h2(getItems('tabsprova'))
            const TilesWrap_h3 = getTilesWrap_h3(getItems('tabsprova'))
            const TilesWrap_p = getTilesWrap_p(getItems('tabsprova'))
            const TilesWrap_button = getTilesWrap_button(getItems('tabsprova'))

            return (
              <div>
                  <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label"></InputLabel>
                      <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={ColorStart2}
                          onChange={handleColorStart2}
                      >
                          <MenuItem value={'red'}>red</MenuItem>
                          <MenuItem value={'yellow'}>yellow</MenuItem>
                      </Select>
                  </FormControl>

                  <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">ColorEnd</InputLabel>
                      <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={ColorEnd2}
                          onChange={handleColorEnd2}
                      >
                          <MenuItem value={'red'}>red</MenuItem>
                          <MenuItem value={'yellow'}>yellow</MenuItem>
                      </Select>

                  </FormControl>

                  <imp.items id='tabsprova01' {...props}>

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
                          <TilesWrap_li>
                              <TilesWrap_h2>02</TilesWrap_h2>
                              <TilesWrap_h3>Title 2</TilesWrap_h3>
                              <TilesWrap_p>
                                  When an unknown printer took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only five centuries.
                              </TilesWrap_p>
                              <TilesWrap_button>Read more</TilesWrap_button>
                          </TilesWrap_li>

                      </TilesWrap>

                  </imp.items>

              </div>
            );
            break;

    }

}

//TAB VERTICALE

TabPanel2.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps2(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles2 = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

function VerticalTabs(props) {

    const demoHeaderConst = {
        width: '240px',
        height: '200px',
        margin: '10px',
        float: 'left',
    }



    const classes = useStyles2();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    switch (props.type) {
        // CHECKBOX
        case '1':
            return (
                <div className={classes.root} {...props}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        <Tab label="1" {...a11yProps2(0)} />
                        <Tab label="2" {...a11yProps2(1)} />
                        <Tab label="3" {...a11yProps2(2)} />
                    </Tabs>

                    <TabPanel2 value={value} index={0}>
                        <SimpleSelect num='1' {...props}/>
                    </TabPanel2>
                    <TabPanel2 value={value} index={1}>
                        <SimpleSelect num='2' {...props}/>
                    </TabPanel2>
                    <TabPanel2 value={value} index={2}>
                        <SimpleSelect num='3' {...props}/>
                    </TabPanel2>
                </div>
            );
            break;

        // CARD
        case '2':
            return (
                <div className={classes.root} {...props}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        <Tab label="1" {...a11yProps2(0)} />
                        <Tab label="2" {...a11yProps2(1)} />
                        <Tab label="3" {...a11yProps2(2)} />
                    </Tabs>
                    <TabPanel2 value={value} index={0}>
                        <SimpleSelect num='4' {...props}/>
                    </TabPanel2>
                    <TabPanel2 value={value} index={1}>
                        <SimpleSelect num='5' {...props}/>
                    </TabPanel2>
                    <TabPanel2 value={value} index={2}>
                        <SimpleSelect num='6' {...props}/>
                    </TabPanel2>
                </div>
            );
            break;

        // ITEM
        case '3':
            return (
                <div className={classes.root} {...props}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        <Tab label="1" {...a11yProps2(0)} />
                        <Tab label="2" {...a11yProps2(1)} />
                    </Tabs>
                    <TabPanel2 value={value} index={0}>
                        <SimpleSelect num='7' {...props}/>
                    </TabPanel2>
                    <TabPanel2 value={value} index={1}>
                        <SimpleSelect num='8' {...props}/>
                    </TabPanel2>

                </div>
            );
            break;

        default:
            return
            break;
    }

}

function TabPanel2(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

// DEMO

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Demo(props) {

    const tmp = {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)'
    }

    const demoHeaderConst = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)'
    }

    const demoTabPanel = {
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        /*        <div className="Demo" style={{textAlign: 'center'}}>
                <header className="Demo-header" style={ tmp }>

                    <div className="Checkboxes">

{/!*                        <imp.checkboxes id='checkboxprova' typeInput={1} checkLimit={ true }
                                        colorStart='yellow' colorEnd='white' opacityNotCheck='1'
                                        opacityCheck='2' timeAnimation='0s' typeAnimFillMode='both' {...props}>

                            <label>
                                <input type="checkbox"
                                       checked={!checked}
                                       onChange={() => setChecked(!checked)}
                                       onClick={() => { checkbox1.setCheckLimit(!checked) }}
                                />
                                Checkbox
                            </label>

                        </imp.checkboxes>*!/}

{/!*
                       <imp.checkboxes id='checkboxprova2' typeInput={2} checkLimit={ true }
                                       colorStart='yellow' colorEnd='white' opacityNotCheck='1'
                                       opacityCheck='2' timeAnimation='4s' typeAnimFillMode='both' transition='' {...props}>

                            <label>
                                <input type="checkbox"
                                       checked={!checked1}
                                       onChange={() => setChecked1(!checked1)}
                                       onClick={() => { checkbox2.setCheckLimit(!checked1) }}
                                />
                                Checkbox
                            </label>

                        </imp.checkboxes>*!/}

{/!*                       <imp.checkboxes id='checkboxprova3' typeInput={3} checkLimit={ true } textInput='Checkbox off'
                                       colorStart='yellow' colorEnd='white' opacityNotCheck='1'
                                       opacityCheck='2' timeAnimation='0s' typeAnimFillMode='both' {...props}>

                            <label>
                                <input type="checkbox"
                                       checked={!checked2}
                                       onChange={() => setChecked2(!checked2)}
                                       onClick={() => { checkbox3.setTextValue(!checked2, 'Checkbox on'); checkbox3.setCheckLimit(!checked2);}}
                                />
                                { getCheckboxes('checkboxprova3').textValue }
                            </label>

                        </imp.checkboxes>*!/}

                    </div>
                </header>
        </div>*/


        <div className={classes.root} {...props}>
            <AppBar position="static" style={ demoHeaderConst } {...props}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Checkbox" {...a11yProps(0)}/>
                    <Tab label="Card" {...a11yProps(1)}/>
                    <Tab label="Item" {...a11yProps(2)}/>
                </Tabs>
            </AppBar>

            <TabPanel index={0} value={value} style={ demoTabPanel } {...props}>
                <VerticalTabs type='1' {...props}/>
            </TabPanel>
            <TabPanel index={1} value={value} style={ demoTabPanel } {...props}>
                <VerticalTabs type='2' {...props}/>
            </TabPanel>
            <TabPanel index={2} value={value} style={ demoTabPanel } {...props}>
                <VerticalTabs type='3' {...props}/>
            </TabPanel>
        </div>

    )

}

export default Demo

// CARD 1 -- START
/*
const CardContainer = getCardContainer(getCards('cardsprova'))
const CardFront = getCardFront(getCards('cardsprova'))
const CardBack = getCardBack(getCards('cardsprova'))
const CardInner = getCardInner(getCards('cardsprova'))
const CardButton = getCardButton(getCards('cardsprova'))
*/

// CARD 2 - START

/*const ImageArea = getImageArea(getCards('cardsprova02'))
const ImageWrapper = getImageWrapper(getCards('cardsprova02'))
const HeaderImage = getHeaderImage(getCards('cardsprova02'))
const NameCard = getName(getCards('cardsprova02'))
const IconUL = getIconUL(getCards('cardsprova02'))
const IconLI = getIconLi(getCards('cardsprova02'))*/

// CARD 3 - START

/*const CardCenter = getCardCenter(getCards('cardsprova03'))
const Card = getCard(getCards('cardsprova03'))
const Additional = getAdditional(getCards('cardsprova03'))
const UserCard = getUserCard(getCards('cardsprova03'))
const LevelCenter = getLevelCenter(getCards('cardsprova03'))
const PointsCenter = getPointsCenter(getCards('cardsprova03'))
const Svg = getSvg(getCards('cardsprova03'))
const MoreInfo = getMoreInfo(getCards('cardsprova03'))
const MoreInfoName = getMoreInfoName(getCards('cardsprova03'))
const Coords = getCoords(getCards('cardsprova03'))
const Stats = getStats(getCards('cardsprova03'))
const StatsTitle = getStatsTitle(getCards('cardsprova03'))
const StatsValue = getStatsValue(getCards('cardsprova03'))
const General = getCardGeneral(getCards('cardsprova03'))
const GeneralMore = getCardGeneralMore(getCards('cardsprova03'))
const GeneralMoreTitle = getCardGeneralTitle(getCards('cardsprova03'))
const GeneralMoreText = getCardGeneralText(getCards('cardsprova03'))*/


// ITEM 1 - START
/*const ContainerItems = getContainerItems(getTabs('tabsprova'))
const DivItems = getDivItems(getTabs('tabsprova'))
const DivItemsHead = getDivItemsHead(getTabs('tabsprova'))
const DivItemsHead_p = getDivItemsHead_p(getTabs('tabsprova'))
const DivItemsHead_hr = getDivItemsHead_hr(getTabs('tabsprova'))
const ItemsBody = getItemsBody(getTabs('tabsprova'))
const ItemsBodyContent = getItemsBodyContent(getTabs('tabsprova'))
const ItemsBodyContentIcon = getItemsBodyContent_icon(getTabs('tabsprova'))*/

// ITEM 2 - START

const TilesWrap = getTilesWrap(getItems('tabsprova'))
const TilesWrap_li = getTilesWrap_li(getItems('tabsprova'))
const TilesWrap_h2 = getTilesWrap_h2(getItems('tabsprova'))
const TilesWrap_h3 = getTilesWrap_h3(getItems('tabsprova'))
const TilesWrap_p = getTilesWrap_p(getItems('tabsprova'))
const TilesWrap_button = getTilesWrap_button(getItems('tabsprova'))
