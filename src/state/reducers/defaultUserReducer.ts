import { ActionType } from '../action-types'
import { Action } from '../actions/index'
import { User } from '../../App'
import { store } from '../../state';
//default user is the first one.


let initialState:User = {} as User

const defaultUserReducer = (state = initialState, action:Action ) => { 
    switch (action.type) {
        case ActionType.SET_DEFAULT_USER:
            console.log('action',action.payload)
            return state = action.payload;
    
        default:
            return state;
    }
}

export default defaultUserReducer;