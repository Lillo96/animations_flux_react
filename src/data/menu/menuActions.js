import animationDispatcher from "../animationDispatcher";
import menuActionTypes from "./menuActionTypes";

const menuActions = {
    newMenu (id) {
        animationDispatcher.dispatch({
            type: menuActionTypes.ADD_MENU,
            id: id
        })
    },
    changeValue (id, key) {
        animationDispatcher.dispatch({
            type: menuActionTypes.CHANGE_MENU_VALUE,
            id: id
        })
    }
}

export default menuActions
