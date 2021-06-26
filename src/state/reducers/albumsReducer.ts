import { Album } from "../../App";
import { ActionType } from "../action-types";
import { Action } from "../actions/index"

const initialState:Album[] = [];

const albumsReducer = (state:Album[] = initialState, action:Action) => {
    switch (action.type) {
        case ActionType.ADD_ALBUM:
            return action.payload
        default:
            return state;
    }
}

export default albumsReducer;