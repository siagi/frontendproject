import { Photo } from "../../App";
import { ActionType } from "../action-types";
import { Action } from "../actions/index"

const initialState:Photo[] = [];

const photosReducer = (state:Photo[] = initialState, action:Action) => {
    switch (action.type) {
        case ActionType.ADD_PHOTO:
            return action.payload
        default:
            return state;
    }
}

export default photosReducer;