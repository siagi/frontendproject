import { combineReducers } from 'redux';
import usersReducer from './usersReducer'
import accountReducer from './accountReducer'
import postsReducer from './postsReducer';
import albumsReducer from './albumsReducer';
import photosReducer from './photosReducer';
import setLoadingReducer from './setLoadingReducer';
import commentsReducer from './commentsReducer';
import defaultUserReducer from './defaultUserReducer';

const reducers = combineReducers({
    account:accountReducer,
    users:usersReducer,
    posts:postsReducer,
    albums:albumsReducer,
    photos:photosReducer,
    loading:setLoadingReducer,
    comments:commentsReducer,
    defaultUser:defaultUserReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>