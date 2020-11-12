import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import menuActionTypes from "./menuActionTypes";
import animationDispatcher from "../animationDispatcher";
import menu from "./menuObject";

class menuStore extends ReduceStore {
    constructor() {
        super(animationDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action){
        switch (action.type) {
            case menuActionTypes.ADD_MENU: {
                return state.set(
                    action.id,
                    menu({
                        id: action.id
                    }))
            }
            break;
            case menuActionTypes.CHANGE_MENU_VALUE: {
                console.log("CHANGE_MENU_VALUE");
            }
            break;

            default:
                return state;
        }
    }
}

export default new menuStore();
