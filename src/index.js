import ReactDOM from 'react-dom';
import './index.css';
import AppView2 from './App';
import reportWebVitals from './reportWebVitals'
import Demo from "./Demo";
import animationEnv from "./containers/AppContainer"
import '../node_modules/font-awesome/css/font-awesome.min.css';
import React from "react";
import cardsActions from "./data/cards/cardsActions";
import checkboxesActions from "./data/checkboxes/checkboxesActions";
import itemsActions from "./data/items/itemsActions";

ReactDOM.render(animationEnv(Demo), document.getElementById('root'))

checkboxesActions.newCheckboxes('checkprova');
checkboxesActions.newCheckboxes('checkprova1');
checkboxesActions.newCheckboxes('checkprova2');
checkboxesActions.newCheckboxes('checkprova3');

checkboxesActions.newCheckboxes('checkprova4');
checkboxesActions.newCheckboxes('checkprova5');
checkboxesActions.newCheckboxes('checkprova6');
checkboxesActions.newCheckboxes('checkprova7');

checkboxesActions.newCheckboxes('checkprova8');
checkboxesActions.newCheckboxes('checkprova9');
checkboxesActions.newCheckboxes('checkprova10');
checkboxesActions.newCheckboxes('checkprova11');

cardsActions.newCards('cardsprova');
cardsActions.newCards('cardsprova1');
cardsActions.newCards('cardsprova2');
cardsActions.newCards('cardsprova3');

cardsActions.newCards('cardsprova4');
cardsActions.newCards('cardsprova5');
cardsActions.newCards('cardsprova6');
cardsActions.newCards('cardsprova7');

cardsActions.newCards('cardsprova8');
cardsActions.newCards('cardsprova9');
cardsActions.newCards('cardsprova10');
cardsActions.newCards('cardsprova11');

itemsActions.newItems('itemprova');
itemsActions.newItems('itemprova1');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
