import Immutable from 'immutable'
import PropTypes from "prop-types";

const cards = Immutable.Record({
    id: '',
    type: 'cards',
    typeInput: 1,
    checkLimit: null,
    style: null,
    animationCSS: '',
    textInput: null,
    textValue: '',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    colorCard: '#white',
    perspective: '',
    backfaceVisibility: 'hidden',
    borderDim: '2px',
    borderType: 'solid',
    borderColor: '#0d0d0d',
    height: '100%',
    width: '100%',
    timeAnim: '1s', // ANIM
    buttonFontSize: '1em',
    buttonMargin: '1em',
    buttonBorder: '2px',
    buttonBorderRadius: '3px',
    buttonBackColor: 'white',
    colorCard2: '#f8f8f8',
    marginCard: '',
    colorCardTrans1: 'red',
    colorCardTrans2: 'red',
    fontSizeLCentral: '',
    fontSizePointsCenter: '',
    directionOfRotation: 'toTheRight',

    directionOfAnimation: 'topLeftBottomRight', // NEW FOR CARD 2
    directionName: 'FromLeftToRight', // NEW FOR CARD 2

    directionOfRotation1: 'FromRightHandToSinister', // NEW FOR CARD 3

    backgroundCard: null,
    backgroundCard1: null,
    backgroundCard2: null,

    backgroundColorButton: '#4CAF50',
    borderButton: 'none',
    colorButton: 'white',
    paddingButtonTopBottom: '15px',
    paddingButtonRightLeft: '32px',
    textAlignButton: 'center',
    textDecorationButton: 'none',
    displayButton: 'inline-block',
    fontSizeButton: '10px',

    widthCard2: '300px',
    heightCard2: '400px',
    positionCard2: 'relative',
    overflowCard2: 'hidden',
    backgroundRGBACard2: 'rgba(255,255,255,.3)',
    transitionRGBACard2: '.5s',
    backgroundNameCard2: 'tomato',
    fontFamilyNameCard2: 'Poppins',
    colorNameCard2: '#fff',
    textAlignNameCard2: 'center',
    textTransformNameCard2: 'uppercase',
    marginNameCard2: '0',
    paddingTopBottomNameCard2: '50px',
    paddingRightLeftNameCard2: '0',
    positionNameCard2: 'absolute',
    bottomNameCard2: '0',
    widthNameCard2: '100%',
    transitionNameCard2: '1s',

    positionCard3: 'absolute',
    topCard3: '50%',
    leftCard3: '50%',
    positionAdditionalCard3: 'absolute',
    backgroundAdditionalCard3: 'linear-gradient(#dE685E, #EE786E)',
    transitionAdditionalCard3_1: null,
    transitionAdditionalCard3_2: '0.4s',
    overflowAdditionalCard3: 'hidden',
    widthHoverAdditionalCard3: '100%',
    borderRadiusAdditionalCard3_1: '0 5px 5px 0',
    textAlignMoreInfoCard3: 'center',
    widthMoreInfoCard3: '300px',
    heightMoreInfoCard3: '50%',
    floatMoreInfoCard3: 'central',
    justifyContentMoreInfoCard3: 'center',
    positionGeneralCard3: 'absolute',
    topGeneralCard3: '0',
    rightGeneralCard3: '0',
    boxSizingGeneralCard3: 'border-box',
    paddingGeneralCard3: '1rem',
    paddingTopGeneralCard3: '0',
    backgroundColorGeneralCard3: 'white',
    frontSizeGeneralCard3: '0.4rem',
    frontSizeGeneralTitleCard3: '4em',
    frontSizeGeneralTextCard3: '0.4em',
    positionGeneralMoreCard3: 'absolute',
    rightGeneralMoreCard3: '1rem',
    fontSizeGeneralMoreCard3: '0.8em',

    widthButtonCard3: null,
    heightButtonCard3: null,
    colorButtonCard3: null,
    positionButtonCard3: null,
    topButtonCard3: null,
    leftButtonCard3: null
})

export default cards
