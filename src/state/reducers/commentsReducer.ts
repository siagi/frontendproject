import { ActionType } from "../action-types";
import { Action } from "../actions/index"

const initialState:Comment[] = [];

const commentsReducer = (state:Comment[] = initialState, action:Action) => {
    switch (action.type) {
        case ActionType.ADD_COMMENTS:
            return action.payload
        default:
            return state;
    }
}

export default commentsReducer;