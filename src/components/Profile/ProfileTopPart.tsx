import React, { useState,useEffect} from 'react'
import { store } from '../../state';
import { DropdownMenuIcons, EditButton, IconSize75 } from '../../styledHelpers/Components';
import navyHouse from '../../assets/icons/house2.svg'
import edit from '../../assets/icons/edit.svg'
import { addUser, setDefaultUser,setLoading } from '../../state/action-creators';
import { Stream } from 'node:stream';
import { useDispatch } from 'react-redux';
import { User } from '../../App';

function ProfileTopPart() {

    
    const dispatch = useDispatch()
    let users = store.getState().users
    let albums = store.getState().albums;
    let photo = store.getState().photos;
    const [defaultUser, setDefaultUser] = useState(users[0])
    const [isEditable, setIsEditable] = useState(true);

    useEffect(() => {
        setDefaultUser(users[0])
        
    }, [users])
    


    //
    let setInput = (type:string,e:any)=>{
        switch (type) {
            case 'name':
                setDefaultUser({...defaultUser,name:e.target.value})
                break;
            case 'email':
                setDefaultUser({...defaultUser,email:e.target.value})
                break;
            case 'city':
                setDefaultUser({...defaultUser,address:{...defaultUser.address,city:e.target.value}})
                break;
            case 'zip':
                setDefaultUser({...defaultUser,address:{...defaultUser.address,zipcode:e.target.value}})
                break;
            case 'phone':
                setDefaultUser({...defaultUser,phone:e.target.value})
                break;
            case 'www':
                setDefaultUser({...defaultUser,website:e.target.value})
                break;
        
            default:
                break;
        }
    }

    
    


    
    return (
        <div style={{marginTop:'10px', width:'850px'}}>
            <div style={{display:'flex',}}>
                <div style={{marginLeft:'auto', flexDirection:'row', display:'flex'}}>
                    <div style={{marginInline:'10px'}}><DropdownMenuIcons src={navyHouse}/>Message</div>
                    <div style={{marginInline:'10px'}}><DropdownMenuIcons src={navyHouse}/>Create a request</div>
                    <div style={{marginInline:'10px'}}><DropdownMenuIcons src={navyHouse}/>Add to a cluster</div>
                    <div style={{marginInline:'10px'}}>X</div>
                </div>
            </div>
            <div style={{display:'flex', marginTop:'20px', justifyContent:'space-between'}}>
                <div>
                    <IconSize75 src={photo[0] && photo[0].thumbnailUrl}/>
                    <div style={{marginTop:'10px'}}>
                        Edit Photo
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', marginInline:'10px', textAlign:'right'}}>
                    <span style={{marginBottom:'10px'}}><label>Name :</label><input className='inputDisabled' disabled={isEditable} value={defaultUser && defaultUser.name} onChange={(e)=>setInput('name', e)}/></span>
                    <span style={{marginBottom:'10px'}}><label>E-mail :</label><input className='inputDisabled' disabled={isEditable} value={defaultUser && defaultUser.email} onChange={(e)=>setInput('email', e)}/></span>
                    <span style={{marginBottom:'10px'}}><label>City :</label><input  className='inputDisabled' disabled={isEditable} value={defaultUser && defaultUser.address.city} onChange={(e)=>setInput('city', e)}/></span>
                </div>
                <div style={{display:'flex', flexDirection:'column', marginInline:'10px', textAlign:'right'}}>
                    <div style={{marginBottom:'10px'}}><label>Zip-code :</label><input className='inputDisabled' disabled={isEditable} value={defaultUser && defaultUser.address.zipcode} onChange={(e)=>setInput('zip', e)}/></div>
                    <div style={{marginBottom:'10px'}}><label>Phone :</label><input className='inputDisabled' disabled={isEditable} value={defaultUser && defaultUser.phone} onChange={(e)=>setInput('phone', e)}/></div>
                    <div style={{marginBottom:'10px'}}><label>WWW :</label><input className='inputDisabled' disabled={isEditable} value={defaultUser && defaultUser.website} onChange={(e)=>setInput('www', e)}/></div>
                </div>
                <div style={{display:'flex', flexDirection:'column', marginInline:'10px'}}>
                    <span style={{marginBottom:'10px'}}><EditButton onClick={()=>setIsEditable(!isEditable)}><img src={edit} width='20'/></EditButton></span>
                </div>
            </div>
            <hr/>
            
        </div>
    )
}

export default ProfileTopPart
