import React from 'react'
import {Container} from 'flux/utils';

import menuStore from "../data/menu/menuStore";
import checkboxesStore from "../data/checkboxes/checkboxesStore";

function getStores() {
    return [
        menuStore,
        checkboxesStore
    ];
}

function getState() {
    return {
        menus: {
          state: menuStore.getState()
        },
        checkboxes: {
          state: checkboxesStore.getState()
        }
    }
}

let View

export default function EnvAnimation (view) {
    const Env = Container.createFunctional(ViewEnv, getStores, getState)
    View = view
    return <Env/>
}

function ViewEnv(props) {
    return (
        <View {...props}/>
    )
}
