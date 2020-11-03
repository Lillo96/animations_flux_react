import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import menuActionTypes from "./menuActionTypes";
import animationDispatcher from "../animationDispatcher";

class menuStore extends ReduceStore {
    constructor() {
        super(animationDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action){
        switch (action.type) {
            case menuActionTypes.ADD_MENU:
                return state;

            default:
                return state;
        }
    }
}

export default new menuStore();
