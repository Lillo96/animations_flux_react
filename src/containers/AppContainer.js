import React from 'react'
import { Container } from 'flux/utils'

import checkboxesStore from "../data/checkboxes/checkboxesStore"

import '../impAnimation.css'

function getStores() {
    return [
        checkboxesStore
    ]
}

function getState() {
    return {
        checkboxes: {
            state: checkboxesStore.getState()
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
