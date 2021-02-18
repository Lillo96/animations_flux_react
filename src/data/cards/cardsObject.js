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
})

export default cards
