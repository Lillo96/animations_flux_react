import React from 'react'
import { Container } from 'flux/utils'
import '../impAnimation.css'
import checkboxesStore from "../data/checkboxes/checkboxesStore"


function getStores() {
    return [
        checkboxesStore,
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
