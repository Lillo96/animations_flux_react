import React from 'react'
import imp, {getItems} from './imp'

import {getPCheck } from "./components/checkboxes";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {
    getCardBack,
    getCardContainer,
    getCardFront,
    getCardInner,
    getCardButton,
    getCard,
    getAdditional,
    getMoreInfo,
    getCoords,
    getCardGeneral,
    getCardGeneralMore,
    getCardGeneralTitle,
    getCardGeneralText,
    getImageWrapper,
    getHeaderImage,
    getName,
    getIconUL
} from "./components/cards";
import {
    getDivItems,
    getDivItemsHead,
    getDivItemsHead_hr,
    getDivItemsHead_p,
    getItemsBody,
    getItemsBodyContent,
    getItemsBodyContent_icon, getItemsBodySpan, getTilesWrap_button,
    getTilesWrap_h2,
    getTilesWrap_li,
} from "./components/items";

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

    {/* FORM CHECK 1 - CASE 4 */}

    const [TypeInput, setTypeInput] = React.useState(1);
    const handleTypeInput = (event) => {
        setTypeInput(event.target.value);
    };

    const [ToEnableAnimationP, setToEnableAnimationP] = React.useState(true);
    const handleToEnableAnimationP = (event) => {
        setToEnableAnimationP(event.target.value);
    };

    const [Anim, setAnim] = React.useState(1);
    const handleAnim = (event) => {
        setAnim(event.target.value);
    };

    const [StopAnimation, setStopAnimation] = React.useState(false);
    const handleStopAnimation = (event) => {
        setStopAnimation(event.target.value);
    };

    const [OnAnim, setOnAnim] = React.useState(true);
    const handleOnAnim = (event) => {
        setOnAnim(event.target.value);
    };

    {/* FORM CHECK 2 - CASE 4 */}

    const [TypeInput2, setTypeInput2] = React.useState(2);
    const handleTypeInput2 = (event) => {
        setTypeInput2(event.target.value);
    };

    const [ToEnableAnimationP2, setToEnableAnimationP2] = React.useState(true);
    const handleToEnableAnimationP2 = (event) => {
        setToEnableAnimationP2(event.target.value);
    };

    const [Anim2, setAnim2] = React.useState(1);
    const handleAnim2 = (event) => {
        setAnim2(event.target.value);
    };

    const [StopAnimation2, setStopAnimation2] = React.useState(false);
    const handleStopAnimation2 = (event) => {
        setStopAnimation2(event.target.value);
    };

    const [OnAnim2, setOnAnim2] = React.useState(true);
    const handleOnAnim2 = (event) => {
        setOnAnim2(event.target.value);
    };

    {/* FORM CHECK 3 - CASE 4 */}

    const [TypeInput3, setTypeInput3] = React.useState(3);
    const handleTypeInput3 = (event) => {
        setTypeInput3(event.target.value);
    };

    const [ToEnableAnimationP3, setToEnableAnimationP3] = React.useState(true);
    const handleToEnableAnimationP3 = (event) => {
        setToEnableAnimationP3(event.target.value);
    };

    const [Anim3, setAnim3] = React.useState(1);
    const handleAnim3 = (event) => {
        setAnim3(event.target.value);
    };

    const [StopAnimation3, setStopAnimation3] = React.useState(false);
    const handleStopAnimation3 = (event) => {
        setStopAnimation3(event.target.value);
    };

    const [OnAnim3, setOnAnim3] = React.useState(true);
    const handleOnAnim3 = (event) => {
        setOnAnim3(event.target.value);
    };

    {/**/}

    const [DirectionOfRotation, setDirectionOfRotation] = React.useState('toTheLeft');

    const [DirectionOfAnimation, setDirectionOfAnimation] = React.useState('topLeftBottomRight');
    const [DirectionName, setDirectionName] = React.useState('FromLeftToRight');

    const [DirectionOfRotation1, setDirectionOfRotation1] = React.useState('FromRightHandToSinister');

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

    switch (props.num) {

        case '1':

         if(props.checkboxes.state.size <= 2) return null

            let checkbox = [...props.checkboxes.state][0][1]
            let checkbox1 = [...props.checkboxes.state][1][1]
            let checkbox2 = [...props.checkboxes.state][2][1]

            const CheckBoxLabelP3 = getPCheck(checkbox)

            const CheckBoxLabelP4 = getPCheck(checkbox1)
            const CheckBoxLabelP5 = getPCheck(checkbox2)

            return (

                <div>
                    {/* FORM CHECK 1 */}

                    <h3 style={{color: 'red', fontFamily: "Times New Roman"}}>FORM CHECK 1</h3>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">TypeInput</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={TypeInput}
                            onChange={handleTypeInput}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">ToEnableAnimationP</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={ToEnableAnimationP}
                            onChange={handleToEnableAnimationP}
                        >
                            <MenuItem value={true}>true</MenuItem>
                            <MenuItem value={false}>false</MenuItem>
                        </Select>

                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">setAnim</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Anim}
                            onChange={handleAnim}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">StopAnimation</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={StopAnimation}
                            onChange={handleStopAnimation}
                        >
                            <MenuItem value={true}>true</MenuItem>
                            <MenuItem value={false}>false</MenuItem>
                        </Select>

                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">onAnim</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={OnAnim}
                            onChange={handleOnAnim}
                        >
                            <MenuItem value={true}>true</MenuItem>
                            <MenuItem value={false}>false</MenuItem>
                        </Select>

                    </FormControl>

                    {/* FORM CHECK 2 */}

                    <h3 style={{color: 'red', fontFamily: "Times New Roman"}}>FORM CHECK 2</h3>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">TypeInput</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={TypeInput2}
                            onChange={handleTypeInput2}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">ToEnableAnimationP</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={ToEnableAnimationP2}
                            onChange={handleToEnableAnimationP2}
                        >
                            <MenuItem value={true}>true</MenuItem>
                            <MenuItem value={false}>false</MenuItem>
                        </Select>

                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">setAnim</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Anim2}
                            onChange={handleAnim2}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">StopAnimation</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={StopAnimation2}
                            onChange={handleStopAnimation2}
                        >
                            <MenuItem value={true}>true</MenuItem>
                            <MenuItem value={false}>false</MenuItem>
                        </Select>

                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">onAnim</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={OnAnim2}
                            onChange={handleOnAnim2}
                        >
                            <MenuItem value={true}>true</MenuItem>
                            <MenuItem value={false}>false</MenuItem>
                        </Select>

                    </FormControl>

                    {/* FORM CHECK 3 */}

                    <h3 style={{color: 'red', fontFamily: "Times New Roman"}}>FORM CHECK 3</h3>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">TypeInput</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={TypeInput3}
                            onChange={handleTypeInput3}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">ToEnableAnimationP</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={ToEnableAnimationP3}
                            onChange={handleToEnableAnimationP3}
                        >
                            <MenuItem value={true}>true</MenuItem>
                            <MenuItem value={false}>false</MenuItem>
                        </Select>

                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">setAnim</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Anim3}
                            onChange={handleAnim3}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">StopAnimation</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={StopAnimation3}
                            onChange={handleStopAnimation3}
                        >
                            <MenuItem value={true}>true</MenuItem>
                            <MenuItem value={false}>false</MenuItem>
                        </Select>

                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">onAnim</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={OnAnim3}
                            onChange={handleOnAnim3}
                        >
                            <MenuItem value={true}>true</MenuItem>
                            <MenuItem value={false}>false</MenuItem>
                        </Select>

                    </FormControl>

                    <div style={{display: 'columns'}}>

                        {/* CHECK 1 */}

                        <imp.checkboxes id={checkbox.id} key={checkbox.id} typeInput={TypeInput} colorStart="black"
                                        colorEnd="red" opacityNotCheck='1'
                                        opacityCheck='2' duration='2s' fillMode="both"
                                        toEnableAnimationP={ToEnableAnimationP} setFlagAnimTransitionCheckLimit={Anim}
                                        setStopAnimation={StopAnimation} onAnim={OnAnim} {...props}>

                            <input type="checkbox" onClick={() => {
                                props.checkboxes.updateCheckLimitCheckbox(checkbox.id)
                            }}/>
                            <label>
                                <CheckBoxLabelP3 onMouseEnter={() => {
                                    props.checkboxes.updateCheckAnimationCheckbox(checkbox.id)
                                }} onMouseLeave={() => {
                                    props.checkboxes.updateCheckAnimationCheckbox(checkbox.id)
                                }}>MARCO</CheckBoxLabelP3>
                                {/* <CheckBoxLabelP>MARCO</CheckBoxLabelP> */}
                                {/*<CheckBoxLabelIMG style={{backgroundImage: `url(http://www.web-assistant.it/wp-content/uploads/2015/10/scaricare-immagini-gratis.jpg)`}}>
                                            </CheckBoxLabelIMG>*/}
                            </label>

                        </imp.checkboxes>

                        {/* CHECK 2 */}

                        <imp.checkboxes id={checkbox1.id} key={checkbox1.id} typeInput={TypeInput2} colorStart="black"
                                        colorEnd="red" opacityNotCheck='1'
                                        opacityCheck='2' duration='2s' fillMode="both"
                                        toEnableAnimationP={ToEnableAnimationP2} setFlagAnimTransitionCheckLimit={Anim2}
                                        setStopAnimation={StopAnimation2} onAnim={OnAnim2} {...props}>

                            <input type="checkbox" onClick={() => {
                                props.checkboxes.updateCheckLimitCheckbox(checkbox1.id)
                            }}/>
                            <label>
                                <CheckBoxLabelP4 onMouseEnter={() => {
                                    props.checkboxes.updateCheckAnimationCheckbox(checkbox1.id)
                                }} onMouseLeave={() => {
                                    props.checkboxes.updateCheckAnimationCheckbox(checkbox1.id)
                                }}>LILLO</CheckBoxLabelP4>
                            </label>

                        </imp.checkboxes>

                        {/* CHECK 3 */}

                        <imp.checkboxes id={checkbox2.id} key={checkbox2.id} typeInput={TypeInput3} colorStart="black"
                                        colorEnd="red" opacityNotCheck='1'
                                        opacityCheck='2' duration='2s' fillMode="both"
                                        toEnableAnimationP={ToEnableAnimationP3} setFlagAnimTransitionCheckLimit={Anim3}
                                        setStopAnimation={StopAnimation3} onAnim={OnAnim3} textValue1="check-false"
                                        textValue2="check-on" {...props}>

                            <input type="checkbox" onClick={() => {
                                props.checkboxes.updateCheckTextValue(checkbox2.id);
                                props.checkboxes.updateCheckLimitCheckbox(checkbox2.id)
                            }}/>
                            <label>
                                <CheckBoxLabelP5 onMouseEnter={() => {
                                    props.checkboxes.updateCheckAnimationCheckbox(checkbox2.id)
                                }} onMouseLeave={() => {
                                    {
                                        props.checkboxes.updateCheckAnimationCheckbox(checkbox2.id)
                                    }
                                }}>
                                    {checkbox2.textValueFinal}</CheckBoxLabelP5>
                            </label>

                        </imp.checkboxes>

                    </div>


                </div>

            )


        break;

        case '4':

            //CARD 1
            let card1 = [...props.cards.state][0][1]
            const CardContainer = getCardContainer(card1)
            const CardFront = getCardFront(card1)
            const CardBack = getCardBack(card1)
            const CardInner = getCardInner(card1)

            //CARD 2
            let card2 = [...props.cards.state][1][1]
            const CardContainer1 = getCardContainer(card2)
            const CardFront1 = getCardFront(card2)
            const CardBack1 = getCardBack(card2)
            const CardInner1 = getCardInner(card2)

            //CARD 3
            let card3 = [...props.cards.state][2][1]
            const CardContainer2 = getCardContainer(card3)
            const CardFront2 = getCardFront(card3)
            const CardBack2 = getCardBack(card3)
            const CardInner2 = getCardInner(card3)

            //CARD 4
            let card4 = [...props.cards.state][3][1]
            const CardContainer3 = getCardContainer(card4)
            const CardFront3 = getCardFront(card4)
            const CardBack3 = getCardBack(card4)
            const CardInner3 = getCardInner(card4)
            const CardButton = getCardButton(card4)

            let onKeyDown = (event) => {
                if(event.key === card3.textInput){
                    props.cards.updateCheckLimitCard(card3.id);
                }
            };

            return (

                <div>

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
                    <h3>CARD MOUSE ENTER / LEAVE</h3>
                    <imp.cards key={card1.id} id={card1.id} typeInput={1} height="100%" width="100%" directionOfRotation={DirectionOfRotation}
                               duration='1s' fillMode="both" {...props}>

                        <CardContainer key={card1.id}>
                            <CardInner onMouseEnter={() => {props.cards.updateCheckLimitCard(card1.id)}}
                                       onMouseLeave={() => {props.cards.updateCheckLimitCard(card1.id)}}>
                                <CardFront>
                                    <h2>Title</h2>
                                    <p>Here is some content for the front</p>
                                </CardFront>
                                <CardBack>
                                    <h2>Back the title</h2>
                                    <p>Here is the content that goes on the back</p>
                                </CardBack>

                            </CardInner>
                        </CardContainer>

                     </imp.cards>

                    <br/>


                    {/* CARD CLICK */}
                    <h3>CARD CLICK</h3>
                   <imp.cards key={card2.id} id={card2.id} typeInput={2} directionOfRotation={DirectionOfRotation}
                               duration='1s' fillMode="both" height="100%" width="100%" {...props}>

                        <CardContainer1 key={card2.id}>
                            <CardInner1 onClick={ () => {props.cards.updateCheckLimitCard(card2.id)}} Card={card2} {...props}>
                                <CardFront1 Card={card2} {...props}>
                                    <h2>Title</h2>
                                    <p>Here is some content for the front</p>
                                </CardFront1>
                                <CardBack1 Card={card2} {...props}>
                                    <h2>Back the title</h2>
                                    <p>Here is the content that goes on the back</p>
                                </CardBack1>
                            </CardInner1>
                        </CardContainer1>

                    </imp.cards>

                    <br/>

                    {/* CARD TASTO */}
                    <h3>CARD TASTO</h3>
                   <imp.cards key={card3.id} id={card3.id} typeInput={3} directionOfRotation={DirectionOfRotation} textInput="i"
                               duration='1s' fillMode="both" height="100%" width="100%" {...props}>

                        <CardContainer2 key={card3.id}>
                            <CardInner2 tabIndex="0" onKeyDown={onKeyDown}>
                                <CardFront2>
                                    <h2>Title</h2>
                                    <p>Here is some content for the front</p>
                                </CardFront2>
                                <CardBack2>
                                    <h2>Back the title</h2>
                                    <p>Here is the content that goes on the back</p>
                                </CardBack2>
                            </CardInner2>
                        </CardContainer2>

                   </imp.cards>

                    <br/>

                    {/* CARD BOTTONE */}
                    <h3>CARD BUTTON</h3>
                    <imp.cards key={card4.id} id={card4.id} typeInput={4} directionOfRotation={DirectionOfRotation}
                               duration='1s' fillMode="both" toEnableAnimationButton={true} transitionYEnable={true} height="100%" width="100%" {...props}>

                        <CardContainer3 key={card4.id}>
                            <CardInner3 >
                                <CardFront3>
                                    <h2>Title</h2>
                                    <p>Here is some content for the front</p>
                                    <CardButton onClick={ () => props.cards.updateCheckLimitCard(card4.id)}>Back</CardButton>
                                </CardFront3>
                                <CardBack3>
                                    <h2>Back the title</h2>
                                    <p>Here is the content that goes on the back</p>
                                    <CardButton onClick={ () => props.cards.updateCheckLimitCard(card4.id)}>Title</CardButton>
                                </CardBack3>

                            </CardInner3>
                        </CardContainer3>

                    </imp.cards>

                    <br/>

                </div>

                );

            break;

        case '5':

            //CARD 5
            let card5 = [...props.cards.state][4][1]

            const ImageWrapper = getImageWrapper(card5)
            const HeaderImage = getHeaderImage(card5)
            const NameCard = getName(card5)

            //CARD 6
            let card6 = [...props.cards.state][5][1]

            const ImageWrapper1 = getImageWrapper(card6)
            const HeaderImage1 = getHeaderImage(card6)
            const NameCard1 = getName(card6)

            //CARD 7
            let card7 = [...props.cards.state][6][1]

            const ImageWrapper2 = getImageWrapper(card7)
            const HeaderImage2 = getHeaderImage(card7)
            const NameCard2 = getName(card7)

            let onKeyDown1 = (event) => {
                if(event.key === card7.textInput){
                    props.cards.updateCheckLimitCard(card7.id);
                }
            }

            //CARD 8
            let card8 = [...props.cards.state][7][1]

            const ImageWrapper3 = getImageWrapper(card8)
            const HeaderImage3 = getHeaderImage(card8)
            const NameCard3 = getName(card8)
            const IconUL3 = getIconUL(card8)

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
                    <h3>CARD MOUSE ENTER / LEAVE</h3>
                    <imp.cards id={card5.id} toEnableAnimationWrapper={false} typeInput={1} directionOfAnimation={DirectionOfAnimation} directionName={DirectionName} {...props}>

                            <ImageWrapper key={card5.id} onMouseEnter={() => {props.cards.updateCheckLimitCard(card5.id)} } onMouseLeave={() => {props.cards.updateCheckLimitCard(card5.id)} }
                                style={{ backgroundImage: `url(https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`}}>
                                <HeaderImage/>
                                <NameCard>David James</NameCard>

                            </ImageWrapper>

                    </imp.cards>

                    <br/>

                    {/* CARD CLICK */}
                    <h3>CARD CLICK</h3>
                    <imp.cards id={card6.id} directionOfAnimation={DirectionOfAnimation} directionName={DirectionName} typeInput={2} {...props}>

                            <ImageWrapper1 key={card6.id} onClick={ () => {props.cards.updateCheckLimitCard(card6.id)} }
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`}}>
                                <HeaderImage1/>
                                <NameCard1>David</NameCard1>
                            </ImageWrapper1>

                    </imp.cards>

                    <br/>

                    {/* CARD TASTO */}
                    <h3>CARD TASTO</h3>
                    <imp.cards id={card7.id} directionOfAnimation={DirectionOfAnimation} directionName={DirectionName}
                               typeInput={3} textInput="i" {...props}>

                            <ImageWrapper2 key={card7.id} tabIndex="0" onKeyDown={onKeyDown1}
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`}}>
                                <HeaderImage2/>
                                <NameCard2>Marco</NameCard2>
                            </ImageWrapper2>

                    </imp.cards>

                    <br/>

                    {/* CARD BOTTONE */}
                    <h3>CARD BUTTON</h3>
                    <imp.cards id={card8.id} directionOfAnimation={DirectionOfAnimation} directionName='FromRightHandToSinister'
                               typeInput={4} toEnableAnimationButton={true} {...props}>

                            <ImageWrapper3 key={card8.id} style={{ backgroundImage: `url(https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`}}>
                                <HeaderImage3/>
                                <NameCard3>Lillo</NameCard3>

                                <IconUL3 className={"fa fa-location-arrow fa-1x"} onClick={ () => {props.cards.updateCheckLimitCard(card8.id)}}></IconUL3>

                            </ImageWrapper3>

                    </imp.cards>

                </div>
            );
            break;

        case '6':

            let card9 = [...props.cards.state][8][1]

            const Card = getCard(card9)
            const Additional = getAdditional(card9)
            const MoreInfo = getMoreInfo(card9)
            const General = getCardGeneral(card9)
            const GeneralMore = getCardGeneralMore(card9)
            const GeneralMoreTitle = getCardGeneralTitle(card9)
            const GeneralMoreText = getCardGeneralText(card9)

            let card10 = [...props.cards.state][9][1]

            const Card1 = getCard(card10)
            const Additional1 = getAdditional(card10)
            const MoreInfo1 = getMoreInfo(card10)
            const General1 = getCardGeneral(card10)
            const GeneralMore1 = getCardGeneralMore(card10)
            const GeneralMoreTitle1 = getCardGeneralTitle(card10)
            const GeneralMoreText1 = getCardGeneralText(card10)

            let card11 = [...props.cards.state][10][1]

            const Card2 = getCard(card11)
            const Additional2 = getAdditional(card11)
            const MoreInfo2 = getMoreInfo(card11)
            const General2 = getCardGeneral(card11)
            const GeneralMore2 = getCardGeneralMore(card11)
            const GeneralMoreTitle2 = getCardGeneralTitle(card11)
            const GeneralMoreText2 = getCardGeneralText(card11)

            let onKeyDown2 = (event) => {
                if(event.key === card11.textInput){
                    props.cards.updateCheckLimitCard(card11.id);
                }
            }

            let card12 = [...props.cards.state][11][1]

            const Card3 = getCard(card12)
            const Additional3 = getAdditional(card12)
            const MoreInfo3 = getMoreInfo(card12)
            const General3 = getCardGeneral(card12)
            const GeneralMore3 = getCardGeneralMore(card12)
            const GeneralMoreTitle3 = getCardGeneralTitle(card12)
            const GeneralMoreText3 = getCardGeneralText(card12)
            const Coords3 = getCoords(card12)

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
                    <h3>CARD MOUSE ENTER / LEAVE</h3>
                    <imp.cards id={card9.id} typeInput={1} directionOfRotation1={DirectionOfRotation1} {...props}>

                        <Card onMouseEnter={() => {props.cards.updateCheckLimitCard(card9.id)} } onMouseLeave={() => {props.cards.updateCheckLimitCard(card9.id)} } >
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

                    </imp.cards>

                    <br/>

                    {/* CARD CLICK */}
                    <h3>CARD CLICK</h3>
                    <imp.cards id={card10.id} typeInput={2} directionOfRotation1={DirectionOfRotation1} {...props}>

                            <Card1 key={card10.id} onClick={ () => {props.cards.updateCheckLimitCard(card10.id)} } >
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

                    </imp.cards>

                    <br/>

                    {/* CARD TASTO */}
                    <h3>CARD TASTO</h3>
                    <imp.cards id={card11.id} typeInput={3} directionOfRotation1={DirectionOfRotation1} textInput="i" {...props}>

                            <Card2 key={card11.id} tabIndex="0" onKeyDown={onKeyDown2}>
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

                    </imp.cards>

                    <br/>

                    {/* CARD BOTTONE */}
                    <h3>CARD BUTTON</h3>

                    <imp.cards id={card12.id} typeInput={4} directionOfRotation1={DirectionOfRotation1} {...props}>

                            <Card3 key={card11.id} >
                                <Additional3>
                                    <Coords3 className={"fa fa-location-arrow fa-1x"} onClick={ () => {props.cards.updateCheckLimitCard(card12.id)} }></Coords3>
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

                    </imp.cards>

                </div>
            );
            break;

        case '7':

            let item = [...props.items.state][0][1]

            const DivItems = getDivItems(item)
            const DivItemsHead = getDivItemsHead(item)
            const DivItemsHead_p = getDivItemsHead_p(item)
            const DivItemsHead_hr = getDivItemsHead_hr(item)
            const ItemsBody = getItemsBody(item)
            const ItemsBodyContentIcon = getItemsBodyContent_icon(item)
            //1
            const ItemsBodyContent1 = getItemsBodyContent(item, item.flag1)
            const ItemBodySpan1 = getItemsBodySpan(item, item.flag1)

            //2
            const ItemsBodyContent2 = getItemsBodyContent(item, item.flag2)
            const ItemBodySpan2 = getItemsBodySpan(item, item.flag2)

            //3
            const ItemsBodyContent3 = getItemsBodyContent(item, item.flag3)
            const ItemBodySpan3 = getItemsBodySpan(item, item.flag3)


            let onKeyDown4 = (event) => {
                if(event.key === item.textInputSpan){
                    props.items.updateCheckSpan(item.id);
                    props.items.updateFlag(item.id, 'flag2', item.flag.flag1);
                }
            };

            let onKeyDown5 = (event) => {
                if(event.key === item.textInput){
                    props.items.updateCheckLimit(item.id);
                    props.items.updateFlag(item.id, 'flag3', item.flag.flag3);
                }
            };

            return (
              <div>
{/*                  <FormControl className={classes.formControl}>
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

                  </FormControl>*/}
                    <imp.items id={item.id} {...props}>
                              <DivItems>
                                  <DivItemsHead>
                                      <DivItemsHead_p>UX DESIGN</DivItemsHead_p>
                                      <DivItemsHead_hr></DivItemsHead_hr>
                                  </DivItemsHead>

                                  <ItemsBody>
                                      {/* ITEM CON TRANSIZIONE MOUSE */}
                                      <ItemsBodyContent1>
                                          <ItemBodySpan1 onMouseEnter={() => {props.items.updateCheckSpan(item.id); props.items.updateFlag(item.id, 'flag1', item.flag1)} }
                                                        onMouseLeave={() => {props.items.updateCheckSpan(item.id); props.items.updateFlag(item.id, 'flag1', item.flag1)} }>
                                              Web Usabilty Testing
                                          </ItemBodySpan1>
                                          <ItemsBodyContentIcon className="fa fa-angle-right"></ItemsBodyContentIcon>
                                      </ItemsBodyContent1>

                                      {/* ITEM CON CLICK CON MOUSE */}
                                      <ItemsBodyContent2 onClick={() => {props.items.updateCheckLimit(item.id); props.items.updateFlag(item.id, 'flag2', item.flag2)} }>
                                          <ItemBodySpan2 tabIndex="0" onKeyDown={onKeyDown4}>
                                              Design of Everyday Things
                                          </ItemBodySpan2>
                                          <ItemsBodyContentIcon className="fa fa-angle-right"></ItemsBodyContentIcon>
                                      </ItemsBodyContent2>

                                      {/* ITEM CON PRESSIONE TASTO */}
                                      <ItemsBodyContent3 tabIndex="0" onKeyDown={onKeyDown5}>
                                          <ItemBodySpan3 onMouseEnter={() => {props.items.updateCheckSpan(item.id); props.items.updateFlag(item.id, 'flag3', item.flag3)} }
                                                        onMouseLeave={() => {props.items.updateCheckSpan(item.id); props.items.updateFlag(item.id, 'flag3', item.flag3)} }>
                                              Practical Empathy: For Collaboration & Creativity in Your Work
                                          </ItemBodySpan3>
                                          <ItemsBodyContentIcon className="fa fa-angle-right"></ItemsBodyContentIcon>
                                      </ItemsBodyContent3>

                                  </ItemsBody>
                              </DivItems>
                      </imp.items>
              </div>
            );
            break;

        case '8':

            let item1 = [...props.items.state][1][1]

            const TilesWrap_li = getTilesWrap_li(item1)
            const TilesWrap_h2 = getTilesWrap_h2(item1)
            const TilesWrap_button = getTilesWrap_button(item1)

            return (
              <div>

                  <imp.items id={item1.id} {...props}>

                      {/* TUTTI NELLA STESSA DIREZIONE */}
                          <TilesWrap_li onClick={() => {props.items.updateCheckLimit(item1.id)} }>
                              <TilesWrap_h2>01</TilesWrap_h2>

                              <TilesWrap_button>Read more 1</TilesWrap_button>
                              <TilesWrap_button>Read more 2</TilesWrap_button>
                              <TilesWrap_button>Read more 3</TilesWrap_button>
                              <TilesWrap_button>Read more 4</TilesWrap_button>
                              <TilesWrap_button>Read more 5</TilesWrap_button>
                          </TilesWrap_li>

                      {/* DIVERSE DIREZIONI */}

{/*                      <TilesWrap_li>
                          <TilesWrap_button1>Read more</TilesWrap_button1>
                          <TilesWrap_button2>Read more</TilesWrap_button2>
                          <TilesWrap_button1>Read more</TilesWrap_button1>
                          <TilesWrap_button2>Read more</TilesWrap_button2>
                          <TilesWrap_button1>Read more</TilesWrap_button1>
                          <TilesWrap_button2>Read more</TilesWrap_button2>
                      </TilesWrap_li>*/}

                  </imp.items>

              </div>
            );
            break;

        default:
            return

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
                    </Tabs>

                    <TabPanel2 value={value} index={0}>
                        <SimpleSelect num='1' {...props}/>
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
