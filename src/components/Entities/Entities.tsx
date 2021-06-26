import React, { useState } from 'react'
import { StyledEntities, StyledEntitiesItem } from '../../styledHelpers/Components'
import { store } from '../../state'
import mosaic from '../../assets/icons/mosaic.svg'
import list from '../../assets/icons/list.svg'


function Entities() {

    const[view, setIsMosaic] = useState('row')

    const users = store.getState().users;
    const albums = store.getState().albums;
    const photos = store.getState().photos

    const changeViewToMosaic = () => {
        setIsMosaic('row');
    }
    const changeViewToList = () => {
        setIsMosaic('column');
    }
    return (
        <div style={{marginTop:'12px'}}>

            <div style={{display:'flex'}}>
                <div>
                    adad
                </div>
                <div style={{textAlign:'right'}}>
                    <button onClick={changeViewToMosaic}>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <div style={{marginRight:'10px'}}>Mosaic</div>
                            <div><img src={mosaic}/></div>
                        </div>
                    </button>
                    <button onClick={changeViewToList} style={{marginLeft:'10px'}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{marginRight:'10px'}}>List</div>
                            <div><img src={list}/></div>
                        </div>
                        </button>
                </div>
            </div>
            <div>
                    <StyledEntities slot={view}>
                        {albums && albums.map((album,index) => {
                            return <>
                                <StyledEntitiesItem key={index} slot={view}>
                                    <div>
                                        {<img src={photos[index]?.thumbnailUrl} style={{width:'100px', borderRadius:'10px'}}/>}
                                    </div>
                                    <div>
                                        <div style={{fontWeight:'bolder', marginBottom:'10px'}}>
                                            {view == 'row' ? album.title.substring(0,30) : album.title.substring(0,100)}
                                        </div>
                                        <div>
                                            {photos && view == 'column' ? photos[index]?.title : photos[index]?.title.substring(0,50)}{view == 'column' ? '' : photos[index]?.title.length > 50 ?'...':''}
                                        </div>
                                    </div>
                                </StyledEntitiesItem>
                            </>
                        })}
                        
                    </StyledEntities>
            </div>
        </div>
    )
}

export default Entities
