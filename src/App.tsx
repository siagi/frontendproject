import {Reset} from 'styled-reset';
import MainPage from './components/MainPage/MainPage';
import axios from 'axios'
import './App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators} from 'redux'
import { actionCreators, store } from './state/index'
import { State } from './state/reducers/index' 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EntitiesPage from './pages/EntitiesPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import TopBar from './components/TopBar/TopBar';
import Workspaces from './pages/Workspaces';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export interface Geo{
  lat: string,
  lng: string
}

export interface Address{
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo:Geo
}

export interface User{
  id: number,
  name: string,
  username: string,
  email: string,
  address:Address,
  phone:string,
  website:string,
  company:Company
}

export interface Post{
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface Comment{
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export interface Album{
  userId: number,
  id: number,
  title: string
}

export interface Photo{
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export interface Todo{
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface Company{
  name:string,
  catchPhrase:string,
  bs:string
}

export interface DropdownMenuIcon{
  src:string,
  name:string,
}


function App() {

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState( [] as User[]);
  const [posts, setPosts] = useState([] as Post[]);
  const [albums, setAlbums] = useState([] as Album[]);

  const state = useSelector((state:State)=> state);
  const dispatch = useDispatch()
  const {depositMoney, withdrawMoney, getUsers,getPosts,getAlbums, getPhotos, getComments} = bindActionCreators(actionCreators, dispatch);
  
  const getListUsers = () => {
      dispatch(getUsers);
  
  }

  const getListPosts = () => {
      dispatch(getPosts);
  }

  const getListAlbums = () => {
    dispatch(getAlbums);
  }

  const getListPhotos = () => {
    dispatch(getPhotos);
  }

  const getListComments = () => {
    dispatch(getComments);
  }


  useEffect(()=>{
    getListUsers();
    getListPosts();
    getListAlbums();
    getListPhotos();
    getListComments();
  
    // store.getState().loading == true ? console.log('...LOADING') : getListPhotos();
    // console.log(store.getState().photos)
    
    
  },[]);


  return (
    <Router>
      <div className="App">
        <TopBar/>
        <Switch>
          <Route exact path="/"><MainPage/></Route>
          <Route path="/entities"><EntitiesPage/></Route>
          <Route path="/profile"><ProfilePage/></Route>
          <Route path="/Corporate"><Workspaces/></Route>
          <Route path="*"><NotFoundPage/></Route>
        </Switch>
        <Reset/>


        {/* {loading && "LOADING ..."}
        <ul>
        {state.users ? state.users.map((user => {
          return <li key={user.id}> 
          <h3>{user.name} - {user.email}</h3> 
          </li>
          })) : 'null'}

        </ul>

        <ul>
        {state.posts? state.posts.map((post => {
          return <li key={post.id}> 
          <h3>{post.title} by {post.userId}</h3>
          <br/>
          {post.body} 
          </li>
          })) : 'null'}

        </ul> */}
        {/* {users ? console.log(data) : []} */}
        {/* <ul>

        {posts ? posts.map((element) =>{
          return <li key={element.id}>
            <p><img src={element.image} alt="" style={{width:'100px', height:'100px' , borderRadius:'50%'}}/>{element.owner.firstName}{element.text}</p>
          </li>
        }) : ''}

        {data ? data.map((element) =>{
          return <li key={element.id}>
            <p><img src={element.picture} alt="" style={{borderRadius:'50%'}}/>{element.firstName}{element.lastName}</p>
          </li>
        }) : ''}

        {posts ? getCommentsByPostId() : ''}

        </ul> */}


      </div>
    </Router>
  );
}

export default App;
