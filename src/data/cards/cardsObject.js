import Immutable from 'immutable'
import PropTypes from "prop-types";

const cards = Immutable.Record({
    id: '',
    type: 'cards',
    typeInput: null,
    checkLimit: true,
    style: null,
    animationCSS: '',
    textInput: '',
    textValue: '',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    colorCard: '#d7d7d7',
    perspective: '',
    backfaceVisibility: 'hidden',
    borderDim: '2px',
    borderType: 'solid',
    borderColor: '#0d0d0d',
    height: '100%',
    width: '100%',
    timeAnim: '1s',
    buttonFontSize: '1em',
    buttonMargin: '1em',
    buttonBorder: '2px',
    buttonBorderRadius: '3px',
    buttonBackColor: 'white',
    colorCard2: '',
    marginCard: '',
    colorCardTrans1: '',
    colorCardTrans2: '',
    fontSizeLCentral: '',
    fontSizePointsCenter: '',
})

export default cards
