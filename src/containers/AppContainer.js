import React from 'react'
import { Container } from 'flux/utils'

import checkboxesStore from "../data/checkboxes/checkboxesStore"
import cardsStore from "../data/cards/cardsStore"
import tabsStore from "../data/tabs/tabsStore";

//import '../impAnimation.css'

function getStores () {
    return [
        checkboxesStore,
        cardsStore,
        tabsStore
    ]
}

function getState() {
    return {
        checkboxes: {
            state: checkboxesStore.getState()
        },
        cards: {
            state: cardsStore.getState()
        },
        tabs: {
            state: tabsStore.getState()
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
