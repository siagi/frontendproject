import React, { useEffect, useState } from 'react'
import { StyledEntities, StyledEntitiesItem } from '../../styledHelpers/Components'
import { store } from '../../state'
import mosaic from '../../assets/icons/mosaic.svg'
import list from '../../assets/icons/list.svg'
import sort from '../../assets/icons/sort.svg'
import filter from '../../assets/icons/filter.svg'
import { Album } from '../../App'


function Entities() {

    const[view, setIsMosaic] = useState('row')
    
    const users = store.getState().users;
    const albums = store.getState().albums;
    const photos = store.getState().photos
    
    const[entities, setEntities] = useState(albums);
    const[entPhotos, setEntPhotos] = useState(photos)
    
    const changeViewToMosaic = () => {
        setIsMosaic('row');
    }
    const changeViewToList = () => {
        setIsMosaic('column');
    }
    
    useEffect(() => {
       setEntities(albums)
       setEntPhotos(photos)
    }, [albums,photos])


//przy sortowaniu zmieniaja sie rowniez zdjecia na innych podstronach - do sprawedzenia.
    const sortAlbum = () =>{
        switch (entities[0].id < entities[1].id) {
            case true:
                setEntities([...entities.sort((a,b)=>{ return b.id-a.id})])
                setEntPhotos([...entPhotos.sort((a,b)=>{return b.id-a.id})])
                console.log(photos);
                break;
            case false:
                setEntities([...entities.sort((a,b)=>{ return a.id-b.id})])
                setEntPhotos([...entPhotos.sort((a,b)=>{return a.id-b.id})])
                console.log(photos);
                break;
        
            default:
                break;
        }
        console.log(entities);
        // setEntities(entities.filter(item => item.id ==1))
        
    }
    return (
        <div style={{marginTop:'12px'}}>
            <div style={{fontSize:'20px'}}>
                Entities
            </div>
            <div style={{display:'flex', justifyContent:'space-between', paddingRight:'20px'}}>
                <div style={{display:'flex'}}>
                    <div style={{padding:'10px',alignItems:'center', display:'flex'}} onClick={sortAlbum}>
                        <button>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div><img src={sort}/></div>
                            <div>Sort</div>
                        </div>
                        </button>
                    </div>
                    <div style={{padding:'10px', alignItems:'center', display:'flex'}}>
                        <button>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <div><img src={filter}/></div>
                                <div>Filters</div>
                            </div>
                        </button>
                    </div>
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
                        {entities && entities.map((album,index) => {
                            return <>
                                <StyledEntitiesItem key={index} slot={view}>
                                    <div>
                                        {<img src={entPhotos[index]?.thumbnailUrl} style={{width:'100px', borderRadius:'10px'}}/>}
                                    </div>
                                    <div>
                                        <div style={{fontWeight:'bolder', marginBottom:'10px'}}>
                                            {view == 'row' ? album.title.substring(0,30) : album.title.substring(0,100)}
                                        </div>
                                        <div>
                                            {entPhotos && view == 'column' ? entPhotos[index]?.title : entPhotos[index]?.title.substring(0,50)}{view == 'column' ? '' : entPhotos[index]?.title.length > 50 ?'...':''}
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
