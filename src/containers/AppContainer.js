import menu from "../components/menu";
import {Container} from 'flux/utils';
import menuStore from "../data/menu/menuStore";

function getStores() {
    return [
        menuStore,
    ];
}

function getState() {
    return {
        menus: menuStore.getState(),
    };
}

export default Container.createFunctional(menu, getStores, getState);
