import React from 'react'
import imp, {getCards, getCheckboxes, getItems} from './imp'

import checkboxes, {getPCheck, getIMGCheck, getInputCheck} from "./components/checkboxes";

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
    getItemsBodyContent_icon, getItemsBodySpan,
    getTilesWrap, getTilesWrap_button,
    getTilesWrap_h2, getTilesWrap_h3,
    getTilesWrap_li, getTilesWrap_p,
    setCheckItems
} from "./components/items";
import img from '../src/paper.jpg'

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

    const checkbox1 = getCheckboxes('checkbox1')
    const checkbox1_1 = getCheckboxes('checkbox1_1')
    const checkbox1_2 = getCheckboxes('checkbox1_2')
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

    const card1_0 = getCards('cardsprova02')
    const card1_1 = getCards('cardsprova02_1')
    const card1_2 = getCards('cardsprova02_2')
    const card1_3 = getCards('cardsprova02_3')

    const card5_0 = getCards('cardsprova03')
    const card5 = getCards('cardsprova03_01')
    const card5_1 = getCards('cardsprova03_02')
    const card5_2 = getCards('cardsprova03_03')

    const item1 = getItems('tabsprova')

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

            const CheckBoxLabelP = getPCheck(getCheckboxes('checkbox1'))
           // const CheckBoxLabelIMG = getIMGCheck(getCheckboxes('checkbox1'))
           // const CheckBoxInput = getInputCheck(getCheckboxes('checkbox1'))
           // const CheckBoxLabelP1 = getPCheck(getCheckboxes('checkbox1_1'))
           // const CheckBoxLabelP2 = getPCheck(getCheckboxes('checkbox1_2'))

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

{/*                            <imp.checkboxes id='checkbox1' typeInput={1} colorStart={ColorStart} colorEnd={ColorEnd} opacityNotCheck='1'
                                            opacityCheck='2' duration='2s' fillMode="both" {...props}>

                                <input type="checkbox" onClick={() => { checkbox1.setCheckLimit(false, null) }}/>
                                <label>

                                    <CheckBoxLabelP onMouseEnter={() => checkbox1.setCheckLimit(null, true)} onMouseLeave={() => checkbox1.setCheckLimit(null, false)}>MARCO</CheckBoxLabelP>
                                    <CheckBoxLabelIMG style={{backgroundImage: `url(https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`}}>
                                    </CheckBoxLabelIMG>
                                </label>

                            </imp.checkboxes>*/}
                            <div style={{display: 'columns'}}>

                                {/* CHECK 1 */}

                                <imp.checkboxes id='checkbox1' typeInput={1} colorStart="black" colorEnd="red" opacityNotCheck='1'
                                                opacityCheck='2' duration='2s' fillMode="both" {...props}>

                                    <input type="checkbox" onClick={() => { checkbox1.setCheckLimit(true, null) }}/>
                                    <label>
                                        <CheckBoxLabelP onMouseEnter={() => checkbox1.setCheckLimit(null, true)} onMouseLeave={() => checkbox1.setCheckLimit(null, false)}>MARCO</CheckBoxLabelP>
                                        {/* <CheckBoxLabelP>MARCO</CheckBoxLabelP> */}
                                    </label>

                                </imp.checkboxes>

{/*                                 CHECK 2

                                <imp.checkboxes id='checkbox1_1' typeInput={1} colorStart={ColorStart} colorEnd={ColorEnd} opacityNotCheck='1'
                                                opacityCheck='2' duration='2s' fillMode="both" {...props}>

                                     CHECK 1
                                    <input type="checkbox" onClick={() => { checkbox1_1.setCheckLimit(false, null) }}/>
                                    <label>
                                        <CheckBoxLabelP1 onMouseEnter={() => checkbox1_1.setCheckLimit(null, true)} onMouseLeave={() => checkbox1_1.setCheckLimit(null, false)}>MARCO</CheckBoxLabelP1>
                                    </label>

                                </imp.checkboxes>

                                 CHECK 3

                                <imp.checkboxes id='checkbox1_2' typeInput={1} colorStart={ColorStart} colorEnd={ColorEnd} opacityNotCheck='1'
                                                opacityCheck='2' duration='2s' fillMode="both" {...props}>

                                     CHECK 1
                                    <input type="checkbox" onClick={() => { checkbox1_2.setCheckLimit(false, null) }}/>
                                    <label>
                                        <CheckBoxLabelP2 onMouseEnter={() => checkbox1_2.setCheckLimit(null, true)} onMouseLeave={() => checkbox1_2.setCheckLimit(null, false)}>MARCO</CheckBoxLabelP2>
                                    </label>

                                </imp.checkboxes>*/}
                            </div>

                        </div>
                    );
        break;

        case '2':

            const CheckBoxLabel2P = getPCheck(getCheckboxes('checkboxprova2'))

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

                            <imp.checkboxes id='checkboxprova2' typeInput={2} {...props}>

                                <input type="checkbox" onClick={() => { checkbox2.setCheckLimit(true, null) }}/>
                                <label >
                                    <CheckBoxLabel2P onMouseEnter={() => checkbox2.setCheckLimit(null, true)} onMouseLeave={() => checkbox2.setCheckLimit(null, false)}>Lillo</CheckBoxLabel2P>
                                </label>

                            </imp.checkboxes>

                        </div>
                );
        break;

        case '3':

            const CheckBoxLabel3P = getPCheck(getCheckboxes('checkboxprova3'))

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

                    <imp.checkboxes id='checkboxprova3' typeInput={3} textInput='Checkbox off' toEnableAnimationP={false} setFlagAnimTransitionCheckLimit={2} {...props}>

                        <input type="checkbox" onClick={() => { checkbox3.setTextValue(true, 'Checkbox on'); checkbox3.setCheckLimit(true, null); }} />
                        <label>
                            <CheckBoxLabel3P onMouseEnter={() => checkbox3.setCheckLimit(null, true)} onMouseLeave={() => checkbox3.setCheckLimit(null, false)}>
                                {getCheckboxes('checkboxprova3').textValue}
                            </CheckBoxLabel3P>
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

                    {/* CARD MOUSE ENTER / LEAVE */}

                    <imp.cards id='cardsprova' typeInput={1} directionOfRotation={DirectionOfRotation}
                               duration='1s' fillMode="both" {...props}>

                        <CardContainer>
                            <CardInner onMouseEnter={() => card1.provaFunction_CheckValue(true)} onMouseLeave={() => card1.provaFunction_CheckValue(false)}>
                            {/*<CardInner onClick={ () => {card1.provaFunction_CheckValue(false)}}>*/}
                            {/*<CardInner tabIndex="0" onKeyDown={(e) => {card1.provaFunction_CheckValue(e)}}>*/}
                                <CardFront style={{backgroundImage: `url(${img})` }} >
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
                               duration='1s' fillMode="both" toEnableAnimationButton={true} {...props}>

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


            const ImageArea1 = getImageArea(getCards('cardsprova02_1'))
            const ImageWrapper1 = getImageWrapper(getCards('cardsprova02_1'))
            const HeaderImage1 = getHeaderImage(getCards('cardsprova02_1'))
            const NameCard1 = getName(getCards('cardsprova02_1'))
            const IconUL1 = getIconUL(getCards('cardsprova02_1'))
            const IconLI1 = getIconLi(getCards('cardsprova02_1'))

            const ImageArea2 = getImageArea(getCards('cardsprova02_2'))
            const ImageWrapper2 = getImageWrapper(getCards('cardsprova02_2'))
            const HeaderImage2 = getHeaderImage(getCards('cardsprova02_2'))
            const NameCard2 = getName(getCards('cardsprova02_2'))
            const IconUL2 = getIconUL(getCards('cardsprova02_2'))
            const IconLI2 = getIconLi(getCards('cardsprova02_2'))

            const ImageArea3 = getImageArea(getCards('cardsprova02_3'))
            const ImageWrapper3 = getImageWrapper(getCards('cardsprova02_3'))
            const HeaderImage3 = getHeaderImage(getCards('cardsprova02_3'))
            const NameCard3 = getName(getCards('cardsprova02_3'))
            const IconUL3 = getIconUL(getCards('cardsprova02_3'))
            const IconLI3 = getIconLi(getCards('cardsprova02_3'))

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

                    {/* CARD MOUSE ENTER / LEAVE */}

                    <imp.cards id='cardsprova02' toEnableAnimationWrapper={false} typeInput={1} directionOfAnimation={DirectionOfAnimation} directionName={DirectionName} {...props}>

                        {/* <ImageArea> */}
                            <ImageWrapper onMouseEnter={() => card1_0.provaFunction_CheckValue(true)} onMouseLeave={() => card1_0.provaFunction_CheckValue(false)}
                                style={{ backgroundImage: `url(https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`}}>
                                <HeaderImage/>
                                <NameCard>David James</NameCard>

                            </ImageWrapper>
                        {/* </ImageArea> */}

                    </imp.cards>

                    <br/>

                    {/* CARD CLICK */}

                    <imp.cards id='cardsprova02_1' directionOfAnimation={DirectionOfAnimation} directionName={DirectionName}
                               typeInput={2} {...props}>

                        {/* <ImageArea1> */}
                            <ImageWrapper1 onClick={ () => {card1_1.provaFunction_CheckValue(false)}}
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`}}>
                                <HeaderImage1/>
                                <NameCard1>David</NameCard1>
                            </ImageWrapper1>
                        {/* </ImageArea1> */}

                    </imp.cards>

                    <br/>

                    {/* CARD TASTO */}

                    <imp.cards id='cardsprova02_2' directionOfAnimation={DirectionOfAnimation} directionName={DirectionName}
                               typeInput={3} textInput="i" {...props}>

                        {/* <ImageArea2> */}
                            <ImageWrapper2 tabIndex="0" onKeyDown={(e) => {card1_2.provaFunction_CheckValue(e)}}
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`}}>
                                <HeaderImage2/>
                                <NameCard2>Marco</NameCard2>
                            </ImageWrapper2>
                        {/* </ImageArea2> */}

                    </imp.cards>

                    <br/>

                    {/* CARD BOTTONE */}

                    <imp.cards id='cardsprova02_3' directionOfAnimation={DirectionOfAnimation} directionName={DirectionName}
                               typeInput={4} toEnableAnimationButton={true} {...props}>

                        {/* <ImageArea3> */}
                            <ImageWrapper3 style={{ backgroundImage: `url(https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`}}>
                                <HeaderImage3/>
                                <NameCard3>Lillo</NameCard3>
                                <IconUL3 className={"fa fa-location-arrow fa-1x"} onClick={ () => {card1_3.provaFunction_CheckValue(false)}}></IconUL3>
                                {/*<IconUL3 onClick={() => {card1_3.provaFunction_CheckValue(false)}}>On</IconUL3>*/}
                            </ImageWrapper3>
                        {/* </ImageArea3> */}

                    </imp.cards>

                </div>
            );
            break;

        case '6':

            const CardCenter = getCardCenter(getCards('cardsprova03'))
            const Card = getCard(getCards('cardsprova03'))
            const Additional = getAdditional(getCards('cardsprova03'))
            const MoreInfo = getMoreInfo(getCards('cardsprova03'))
            const General = getCardGeneral(getCards('cardsprova03'))
            const GeneralMore = getCardGeneralMore(getCards('cardsprova03'))
            const GeneralMoreTitle = getCardGeneralTitle(getCards('cardsprova03'))
            const GeneralMoreText = getCardGeneralText(getCards('cardsprova03'))

            const CardCenter1 = getCardCenter(getCards('cardsprova03_01'))
            const Card1 = getCard(getCards('cardsprova03_01'))
            const Additional1 = getAdditional(getCards('cardsprova03_01'))
            const MoreInfo1 = getMoreInfo(getCards('cardsprova03_01'))
            const General1 = getCardGeneral(getCards('cardsprova03_01'))
            const GeneralMore1 = getCardGeneralMore(getCards('cardsprova03_01'))
            const GeneralMoreTitle1 = getCardGeneralTitle(getCards('cardsprova03_01'))
            const GeneralMoreText1 = getCardGeneralText(getCards('cardsprova03_01'))

            const CardCenter2 = getCardCenter(getCards('cardsprova03_02'))
            const Card2 = getCard(getCards('cardsprova03_02'))
            const Additional2 = getAdditional(getCards('cardsprova03_02'))
            const MoreInfo2 = getMoreInfo(getCards('cardsprova03_02'))
            const General2 = getCardGeneral(getCards('cardsprova03_02'))
            const GeneralMore2 = getCardGeneralMore(getCards('cardsprova03_02'))
            const GeneralMoreTitle2 = getCardGeneralTitle(getCards('cardsprova03_02'))
            const GeneralMoreText2 = getCardGeneralText(getCards('cardsprova03_02'))

            const CardCenter3 = getCardCenter(getCards('cardsprova03_03'))
            const Card3 = getCard(getCards('cardsprova03_03'))
            const Additional3 = getAdditional(getCards('cardsprova03_03'))
            const MoreInfo3 = getMoreInfo(getCards('cardsprova03_03'))
            const General3 = getCardGeneral(getCards('cardsprova03_03'))
            const GeneralMore3 = getCardGeneralMore(getCards('cardsprova03_03'))
            const GeneralMoreTitle3 = getCardGeneralTitle(getCards('cardsprova03_03'))
            const GeneralMoreText3 = getCardGeneralText(getCards('cardsprova03_03'))
            const Coords3 = getCoords(getCards('cardsprova03_03'))

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

                    {/* CARD MOUSE ENTER / LEAVE */}

                    <imp.cards id='cardsprova03' typeInput={1} directionOfRotation1={DirectionOfRotation1} {...props}>

                        {/* <CardCenter> */}

                            <Card onMouseEnter={() => card5_0.provaFunction_CheckValue(true)} onMouseLeave={() => card5_0.provaFunction_CheckValue(false)} >
                                <Additional>
                                    <MoreInfo>
                                        <a href={""} ><i className={"fa fa-link fa-1x"}></i></a>
                                    </MoreInfo>
                                </Additional>
                                <General>
                                    <GeneralMoreTitle>Jane Doe</GeneralMoreTitle>
                                    <GeneralMoreText>Lorem ipsum dolor sit amet</GeneralMoreText>
                                    <GeneralMore>Mouse over the card for more info</GeneralMore>
                                </General>
                            </Card>

                        {/* </CardCenter> */}

                    </imp.cards>

                    <br/>

                    {/* CARD CLICK */}

                    <imp.cards id='cardsprova03_01' typeInput={2} directionOfRotation1={DirectionOfRotation1} {...props}>

                        {/* <CardCenter1 > */}

                            <Card1 onClick={ () => {card5.provaFunction_CheckValue(false)}} >
                                <Additional1>
                                    <MoreInfo1>
                                        <a href={""}><i className={"fa fa-link fa-1x"}></i></a>
                                    </MoreInfo1>
                                </Additional1>
                                <General1>
                                    <GeneralMoreTitle1>Jane Doe</GeneralMoreTitle1>
                                    <GeneralMoreText1>Lorem ipsum dolor sit amet</GeneralMoreText1>
                                    <GeneralMore1>Mouse over the card for more info</GeneralMore1>
                                </General1>
                            </Card1>

                            {/* </CardCenter1> */}

                    </imp.cards>

                    <br/>

                    {/* CARD TASTO */}

                    <imp.cards id='cardsprova03_02' typeInput={3} directionOfRotation1={DirectionOfRotation1} textInput="i" {...props}>

                        {/* <CardCenter2> */}

                            <Card2 tabIndex="0" onKeyDown={ (e) => {card5_1.provaFunction_CheckValue(e)}}>
                                <Additional2>
                                    <MoreInfo2>
                                        <a href={""}><i className={"fa fa-link fa-1x"}></i></a>
                                    </MoreInfo2>
                                </Additional2>
                                <General2>
                                    <GeneralMoreTitle2>Jane Doe</GeneralMoreTitle2>
                                    <GeneralMoreText2>Lorem ipsum dolor sit amet</GeneralMoreText2>
                                    <GeneralMore2>Mouse over the card for more info</GeneralMore2>
                                </General2>
                            </Card2>

                            {/* </CardCenter2> */}

                    </imp.cards>

                    <br/>

                    {/* CARD BOTTONE */}

                    <imp.cards id='cardsprova03_03' typeInput={4} directionOfRotation1={DirectionOfRotation1} {...props}>

                        {/* <CardCenter3> */}

                            <Card3>
                                <Additional3>
                                    <Coords3 className={"fa fa-location-arrow fa-1x"} onClick={ () => {card5_2.provaFunction_CheckValue(false)}}></Coords3>
                                    <MoreInfo3>
                                        <a href={""}><i className={"fa fa-link fa-1x"}></i></a>
                                    </MoreInfo3>
                                </Additional3>

                                <General3>
                                    <GeneralMoreTitle3>Jane Doe</GeneralMoreTitle3>
                                    <GeneralMoreText3>Lorem ipsum dolor sit amet</GeneralMoreText3>
                                    <GeneralMore3>Mouse over the card for more info</GeneralMore3>
                                </General3>
                            </Card3>

                        {/* </CardCenter3> */}

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
            const ItemBodySpan = getItemsBodySpan(getItems('tabsprova'))

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

                          {/*<ContainerItems>*/}
                              <DivItems>
                                  <DivItemsHead>
                                      <DivItemsHead_p>UX DESIGN</DivItemsHead_p>
                                      <DivItemsHead_hr></DivItemsHead_hr>
                                  </DivItemsHead>

                                  <ItemsBody>
                                      {/* ITEM CON TRANSIZIONE MOUSE */}
{/*                                      <ItemsBodyContent>
                                          <ItemBodySpan onMouseEnter={() => item1.setCheckLimitItems(true, 'transitionMouse')} onMouseLeave={() => item1.setCheckLimitItems(false, 'transitionMouse')}>
                                              Web Usabilty Testing
                                          </ItemBodySpan>
                                          <ItemsBodyContentIcon className="fa fa-angle-right"></ItemsBodyContentIcon>
                                      </ItemsBodyContent>*/}

                                      {/* ITEM CON CLICK CON MOUSE */}
{/*                                      <ItemsBodyContent>
                                          <ItemBodySpan onClick={() => item1.setCheckLimitItems(true, 'clickMouse')}>
                                              Design of Everyday Things
                                          </ItemBodySpan>
                                          <ItemsBodyContentIcon className="fa fa-angle-right"></ItemsBodyContentIcon>
                                      </ItemsBodyContent>*/}

                                      {/* ITEM CON PRESSIONE TASTO */}
                                      <ItemsBodyContent tabIndex="0" onKeyDown={(e) => {item1.setCheckItems(e, 'ItemsBodyContent', 'keyDown')}}>
                                          <ItemBodySpan onMouseEnter={() => item1.setCheckItems(true, 'ItemBodySpan', 'transitionMouse')} onMouseLeave={() => item1.setCheckItems(false, 'ItemBodySpan', 'transitionMouse')}>
                                              Practical Empathy: For Collaboration & Creativity in Your Work
                                          </ItemBodySpan>
                                          <ItemsBodyContentIcon className="fa fa-angle-right"></ItemsBodyContentIcon>
                                      </ItemsBodyContent>

                                  </ItemsBody>
                              </DivItems>
                          {/*</ContainerItems>*/}

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
