import React from 'react'
import { Container } from 'flux/utils'

import checkboxesStore from "../data/checkboxes/checkboxesStore"
import cardsStore from "../data/cards/cardsStore"
import itemsStore from "../data/items/itemsStore";
import cardsActions from "../data/cards/cardsActions";
import checkboxesActions from "../data/checkboxes/checkboxesActions";
import itemsActions from "../data/items/itemsActions";

function getStores () {
    return [
        checkboxesStore,
        cardsStore,
        itemsStore
    ]
}

function getState() {

    return {
        checkboxes: {
            state: checkboxesStore.getState(),

            updateCheckLimitCheckbox: checkboxesActions.updateCheck,
            updateCheckAnimationCheckbox: checkboxesActions.updateCheckAnimation,
            updateCheckTextValue: checkboxesActions.updateTextValue
        },
        cards: {
            state: cardsStore.getState(),

            updateCheckLimitCard: cardsActions.updateCard,
            updateValueCard: cardsActions.updateCardValue,
            updateTextValue: cardsActions.changeValueTextValue
        },
        items: {
            state: itemsStore.getState(),

            updateCheckLimit: itemsActions.updateCheckLimit,
            updateCheckIcon: itemsActions.updateCheckIcon,
            updateCheckSpan: itemsActions.updateCheckSpan,

            updateFlag: itemsActions.updateFlagValue

        }
    }
}

let View

export default function animationEnv (view) {

    const Env = Container.createFunctional(EnvView, getStores, getState)
    View = view
    return <Env/>
}

function EnvView (props) {
    return (
        <View {...props}/>
    )
}
