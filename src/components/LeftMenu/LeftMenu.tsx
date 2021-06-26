import React, { useEffect, useState } from 'react'
import { Photo, User } from '../../App';
import { store } from '../../state';
import usersReducer from '../../state/reducers/usersReducer';
import { MainPageLeftSideUserInfo } from '../../styledHelpers/Components'
import network from '../../assets/icons/network.png'
import userplus from '../../assets/icons/userplus.svg'
import publications from '../../assets/icons/publications.svg'
import plus from '../../assets/icons/plus.svg'
import entities2 from '../../assets/icons/entities2.svg'
import ecosystem from '../../assets/icons/ecosystem.svg'
// import { State } from '../../state/reducers/index'
// import { useSelector, useDispatch } from 'react-redux';

// const state = useSelector((state:State)=> state);

function LeftMenu() {

    const users:User[] = store.getState().users;
    //@ts-ignore
    const photos:Photo[] = store.getState().photos

    useEffect(() => {
        console.log(store.getState().loading)
        // console.log('users:',store.getState().users)
        // console.log('albums:',store.getState().albums)
        // console.log('photos:',store.getState().photos)
        // console.log(photos)
        
    }, [])


    return (
        <div>
            
            <div>
                <MainPageLeftSideUserInfo>
                    <div>
                        {photos[0] && <img src={photos[0].url} alt={photos[0].title} width="75" style={{borderRadius:'50%', marginTop:'20px'}}></img>}
                    </div>
                    <div>
                        <div style={{fontSize:'16px'}}>{users[0] ? users[0].name : ' '}</div>
                        <div style={{fontSize:'12px'}}>Company name: {users[0] ? users[0].company.name : ' '}</div>
                        <hr style={{borderTop:"1px", borderColor:"#e8e8e8"}}/>
                    </div>
                    <div className="Left-Menu-Bottom-Items">
                        <img src={network} style={{marginRight:'10px'}}/> Your network <span style={{marginLeft:'auto', paddingRight:'10px'}}><img src={userplus} className="left-menu-left-side-icons"/></span>
                    </div>
                    <div className="Left-Menu-Bottom-Items">
                        <img src={publications} style={{marginRight:'10px'}}/> Your Publications <span style={{marginLeft:'auto', paddingRight:'10px'}}><img src={plus} className="left-menu-left-side-icons"/></span>
                    </div>
                </MainPageLeftSideUserInfo>
                    <ul className="Left-Menu-Bottom-Items-Outside-Box">
                        <li><img src={publications} style={{marginRight:'10px'}}/> Publications</li>
                        <li><img src={ecosystem} style={{marginRight:'10px'}}/> Ecosystem</li>
                        <li><img src={entities2} style={{marginRight:'10px'}}/> Entities</li>
                    </ul>
            </div>
        </div>
    )
}

export default LeftMenu
