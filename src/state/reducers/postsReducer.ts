import { ActionType } from '../action-types'
import { Action } from '../actions/index'
import { Post } from '../../App'

let initialState: Post[] = [];

const postsReducer = (state = initialState, action:Action) => {

    switch (action.type) {
        case ActionType.ADD_POST:
            return action.payload
    
        default:
            return state;
    }

}

export default postsReducer;