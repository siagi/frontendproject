import { ActionType } from "../action-types"
import {Dispatch } from "redux"
import { User, Post, Album, Photo, Comment } from "../../App"
import { Action } from "../actions/index"
import axios from 'axios'

export const depositMoney = (amount:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.DEPOSIT,
            payload:amount,
        })
    }
}

export const withdrawMoney = (amount:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.WITHDRAW,
            payload:amount
        })
    }
}

export const bankrupt = (amount:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.BANKRUPT,
        })
    }
}

export const addUser = (user:User[]) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.ADD_USER,
            payload:user
        })
    }
}

export const updateUser = (user:User[]) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.ADD_USER,
            payload:user
        })
    }
}

export const addPost = (post:Post[]) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.ADD_POST,
            payload:post
        })
    }
}
//fetch 
export const getUsers = () => {
    return (dispatch:any) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(addUser(users))

        })
        .catch(err => console.log(err))
    }
}

export const getPosts = () => {
    return (dispatch:any) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data
            dispatch(addPost(posts))

        })
        .catch(err => console.log(err))
    }
}

export const getAlbums = () => {
    return (dispatch:any) => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
            const posts = response.data
            dispatch(addAlbum(posts))

        })
        .catch(err => console.log(err))
    }
}

export const addAlbum = (album:Album[]) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.ADD_ALBUM,
            payload:album
        })
    }
}

export const getPhotos = () => {
    console.log('ustawienie loading na true')

    return (dispatch:any) => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            const photo = response.data
            dispatch(addPhoto(photo))
            setLoading(false);
            console.log('ustawienie loading na false')
        
        })
        .catch(err => console.log(err))
    }
}

export const addPhoto = (photo:Photo[]) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.ADD_PHOTO,
            payload:photo
        })
    }
}

export const setLoading = (flag:Boolean) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.SET_LOADING,
            payload:flag,
        })
    }
}

export const getComments = () => {
    return (dispatch:any) => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            const comments = response.data
            dispatch(addComment(comments))
        
        })
        .catch(err => console.log(err))
    }
}

export const addComment = (comment:Comment[]) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.ADD_COMMENTS,
            payload:comment,
        })
    }
}

export const setDefaultUser = (user:User) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.SET_DEFAULT_USER,
            payload:user,
        })
    }
}
