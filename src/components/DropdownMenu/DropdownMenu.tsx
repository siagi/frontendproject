import React, { useState, useEffect, useRef } from 'react'
import arrowdown from '../../assets/icons/arrowdown.svg'
import { TitlesInDropdownMenu, DropdownMenuWrapper, SmallProfileIcon, UlInDropdownMenu, DropDownMenuOpenButton, DropdownMenuIcons} from '../../styledHelpers/Components'
import { store } from '../../state'
import navyHouse from '../../assets/icons/house2.svg'
import publications from '../../assets/icons/publications.svg'
import people from '../../assets/icons/people.svg'
import entities from '../../assets/icons/entities2.svg'
import administration from '../../assets/icons/administration.svg'
import privacy from '../../assets/icons/privacy.svg'
import settings from '../../assets/icons/settings.svg'
import contracts from '../../assets/icons/contracts.png'
import groupnames from '../../assets/icons/groupnames.png'
import {DropdownMenuIcon} from '../../App';
import { Link } from 'react-router-dom'

// const dropdownMenuItems:DropdownMenuIcon[] = [
//     {src:navyHouse,name:'Home'},
//     {src:navyHouse,name:'Publications'},
//     {src:navyHouse,name:'People'},
//     {src:navyHouse,name:'Entities'},
//     {src:navyHouse,name:'Administration'},
//     {src:navyHouse,name:'Home'},
//     {src:navyHouse,name:'Home'},
//     {src:navyHouse,name:'Home'},
//     {src:navyHouse,name:'Home'},
// ]


function DropdownMenu() {

    const refDropdownMenu = useRef(null)
    const refButtonDropdownMeny = useRef(null)
    
    const users = store.getState().users;
    const photos = store.getState().photos;
    const userPhoto = photos.filter(photo => photo.albumId == 1);
    const [selectedIcon, setSelectedIcon] = useState(navyHouse)
    const [selectedItem, setSelectedItemu] = useState('Home');
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);
    const checkMousedown = (e:any)=>{
        if(refDropdownMenu.current !== null){
            //@ts-ignore
            if(refDropdownMenu.current.contains(e.target) == false && refButtonDropdownMeny.current.contains(e.target) == false){
                setShowDropdownMenu(false);
                document.removeEventListener('mousedown',checkMousedown);
            }
        }
    }

    const removeEventListener = (e:any) =>{
        console.log(e)
        document.removeEventListener('mousedown',checkMousedown);
        setSelectedItemu(e.target.innerText)
        setShowDropdownMenu(false);

        switch (e.target.innerText) {
            case 'Home':
                setSelectedIcon(navyHouse)
                break;
            case 'Publications':
                setSelectedIcon(publications)
                break;
            case 'People':
                setSelectedIcon(people)
                break;
            case 'Entities':
                setSelectedIcon(entities)
                break;
            case 'Administration':
                setSelectedIcon(administration)
                break;
            case 'Client contract':
                setSelectedIcon(contracts)
                break;
            case 'Supplier contract':
                setSelectedIcon(contracts)
                break;
            case 'Corporate':
                setSelectedIcon(entities)
                break;            
            case 'Group Norms':
                setSelectedIcon(contracts)
                break;
            case 'Real estate cntracts':
                setSelectedIcon(navyHouse)
                break;
            case 'Privacy':
                setSelectedIcon(privacy)
                break;
            case 'Settings':
                setSelectedIcon(settings)
                break;
        
            default:
                break;
        }
    }

    
    let dropdownLi = [];
    useEffect(() => {
        if(showDropdownMenu == true){
            //@ts-ignore
            dropdownLi = [...refDropdownMenu.current.querySelectorAll('div>ul>li')];
            document.addEventListener('mousedown', checkMousedown);
            // dropdownLi.forEach((element)=> element.addEventListener('click', console.log('cliked li', element) ))
        }
        if(showDropdownMenu == false){
            dropdownLi = [];
            setShowDropdownMenu(false);
            document.removeEventListener('mousedown',checkMousedown);
        }
    }, [showDropdownMenu])
    

    const showDropdownMenuFunc =() =>{
        if(showDropdownMenu){
            return(
                <DropdownMenuWrapper ref={refDropdownMenu}>
                    <div>
                        <input></input>
                    </div>
                    <TitlesInDropdownMenu>
                        Platform
                    </TitlesInDropdownMenu>
                    <UlInDropdownMenu>
                        <ul>
                            <li onClick={removeEventListener}><Link to="/"><DropdownMenuIcons src={navyHouse}/>Home</Link></li>
                            <li onClick={removeEventListener}><Link to="/Publications"><DropdownMenuIcons src={publications}/>Publications</Link></li>
                            <li onClick={removeEventListener}><Link to="/People"><DropdownMenuIcons src={people}/>People</Link></li>
                            <li onClick={removeEventListener}><Link to="/Entities"><DropdownMenuIcons src={entities}/>Entities</Link></li>
                            <li onClick={removeEventListener}><Link to="/Administration"><DropdownMenuIcons src={administration}/>Administration</Link></li>
                        </ul>
                        <hr/>
                    </UlInDropdownMenu>
                    <TitlesInDropdownMenu>
                        Workspaces
                    </TitlesInDropdownMenu>
                    <UlInDropdownMenu>
                        <ul>
                            <li onClick={removeEventListener}><Link to="/Client_contract"><DropdownMenuIcons src={contracts}/>Client contract</Link></li>
                            <li onClick={removeEventListener}><Link to="/Supplier_contract"><DropdownMenuIcons src={contracts}/>Supplier contract</Link></li>
                            <li onClick={removeEventListener}><Link to="/Corporate"><DropdownMenuIcons src={entities}/>Corporate</Link></li>
                            <li onClick={removeEventListener}><Link to="/Group_norms"><DropdownMenuIcons src={groupnames}/>Group Norms</Link></li>
                            <li onClick={removeEventListener}><Link to="/Real_estate_cntracts"><DropdownMenuIcons src={contracts}/>Real estate cntracts</Link></li>
                        </ul>
                        <hr/>
                    </UlInDropdownMenu>
                    <TitlesInDropdownMenu>
                        Account
                    </TitlesInDropdownMenu>
                    <UlInDropdownMenu>
                        <ul>
                            <li onClick={removeEventListener}>
                            <Link to="/Profile">
                                <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                    <div onClick={removeEventListener}>
                                        <SmallProfileIcon src={userPhoto[0] && userPhoto[0].thumbnailUrl}/>    
                                    </div>
                                    <div>
                                        {users[0] && users[0].name}
                                        <div>
                                            See profile
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </li>
                            <li onClick={removeEventListener}><Link to="/Privacy"><DropdownMenuIcons src={privacy}/>Privacy</Link></li>
                            <li onClick={removeEventListener}><Link to="/Settings"><DropdownMenuIcons src={settings}/>Settings</Link></li>
                        </ul>
                    </UlInDropdownMenu>
                </DropdownMenuWrapper>
    
            );
        }
    
    }


    return (
        <div>
            <div>
                <DropDownMenuOpenButton onClick={() => setShowDropdownMenu(!showDropdownMenu)} ref={refButtonDropdownMeny}>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <div><img src={selectedIcon} alt='home logo' width="14px" style={{marginRight:'5px'}}/></div> 
                            <div>
                                {selectedItem}
                            </div>
                        </div>
                    <div><img src={arrowdown}/></div>
                </DropDownMenuOpenButton>
                {showDropdownMenuFunc()}
            </div>
        </div>
    )
}

export default DropdownMenu
