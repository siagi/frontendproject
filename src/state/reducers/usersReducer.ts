import { ActionType } from '../action-types'
import { Action } from '../actions/index'
import { User } from '../../App'

let initialState: User[] = [];

// const getUsers = async () => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users`,{
//       method:'GET',
//     });
//     const resUsers = await response.json();
//     initialState = resUsers;
//   }


const usersReducer = (state = initialState, action:Action ) => { 
    switch (action.type) {
        case ActionType.ADD_USER:

            return action.payload;
    
        default:
            return state;
    }
}

export default usersReducer;