import { ActionType } from '../action-types'
import { User, Post, Album, Photo, Comment } from '../../App'

interface DepositAction{
    type:ActionType.DEPOSIT,
    payload:number
}

interface WithdrawAction{
    type:ActionType.WITHDRAW,
    payload:number
}

interface BankruptAction{
    type:ActionType.BANKRUPT,
}

interface AddUser{
    type:ActionType.ADD_USER,
    payload:User[],
}

interface UpdateUser{
    type:ActionType.UPDATE_USER,
    payload:User,
}

interface AddPost{
    type:ActionType.ADD_POST,
    payload:Post[],
}

interface GetUsers{
    type:ActionType.GET_USERS,
}
interface GetAlbums{
    type:ActionType.GET_ALBUMS,
}
interface AddAlbum{
    type:ActionType.ADD_ALBUM,
    payload:Album[],
}

interface GetPhotos{
    type:ActionType.GET_PHOTOS,
}
interface AddPhoto{
    type:ActionType.ADD_PHOTO,
    payload:Photo[],
}

interface SetLoading{
    type:ActionType.SET_LOADING,
    payload:Boolean
}

interface GetComments{
    type:ActionType.GET_COMMENTS,
}

interface AddComments{
    type:ActionType.ADD_COMMENTS,
    payload:Comment[]
}

interface DefaultUser{
    type:ActionType.SET_DEFAULT_USER,
    payload:User
}

export type Action = UpdateUser | DefaultUser | DepositAction | WithdrawAction | BankruptAction | AddUser | GetUsers | AddPost | GetAlbums | AddAlbum | GetPhotos | AddPhoto | SetLoading | AddComments | GetComments;