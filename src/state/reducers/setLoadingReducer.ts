import { ActionType } from "../action-types";
import { Action } from "../actions/index"

const initialState:Boolean = false;

const setLoadingReducer = (state:Boolean = initialState, action:Action) => {
    switch (action.type) {
        case ActionType.SET_LOADING:
            return state =  action.payload;
        default:
            return state;
    }
}

export default setLoadingReducer;