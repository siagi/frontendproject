
import { store } from '../../state';
import { User} from "../../App"
import {useEffect} from 'react'

function LatestPublications() {

    const today = new Date();

    const publications = store.getState().posts;
    console.log(publications)
    const userPublications = publications.filter( item => item.userId == 1);
    const firstTopUserPublication = userPublications[0];
    const restTopUserPublication = userPublications.splice(1,3);
    const users = store.getState().users;
    const user:User | undefined = users.find(user => user.id == 1);
    const albums = store.getState().albums;
    const photos = store.getState().photos;
    const userAlbum = albums.find(album => album.userId == user?.id)
    const userPhoto = photos.filter(photo => photo.albumId == userAlbum?.id)

    

    console.log('user photo', userPhoto,'user album', userAlbum)
    

    console.log(userPublications)

    return (
        <div>
            <div className="Latest-Publication">
                <div className="Latest-Publication-First" style={{position:'relative'}}>
                    <div style={{zIndex:2, position:'absolute'}}>
                        <div style={{display:'table-cell', flexDirection:'column', height:'328px', verticalAlign:'bottom', padding:'10px'}}>
                            <div style={{zIndex:1}}>
                                {firstTopUserPublication && firstTopUserPublication.title}
                                {firstTopUserPublication && firstTopUserPublication.body}
                            </div>
                            <div style={{margin:'10px 0px 0px 0px'}}>
                                {`${today.getFullYear()} - ${today.getMonth()+1} - ${today.getDate()}`}
                                <img src={userPhoto[0] && userPhoto[0].thumbnailUrl} alt="" width='14' style={{borderRadius:'50%', margin:'0px 4px 0px 3px'}}/>{user && user.name}
                            </div>
                        </div>
                    </div>
                        <img src={userPhoto[1] && userPhoto[1].url} width="350px" style={{position:'absolute', borderRadius:'5px', top:0, left:0, zIndex:0}}/>
                </div>
                <div className="Latest-Publication-Rest">
                    <div style={{marginLeft:'10px', marginBottom:'10px'}}>Latest publications</div>
                <ul>
                    {restTopUserPublication && restTopUserPublication.map((items => {
                        return<>
                            <li key={items.id}>
                            <div className="Latest-Publication-Deeper">
                                <div className="Latest-Publication-Left">
                                    <div>
                                        <img src={userPhoto[2] && userPhoto[2].thumbnailUrl} width="75px" style={{borderRadius:'5px'}}/>
                                    </div>
                                </div>
                                <div className="Latest-Publication-Right">
                                    <div>
                                        {items.body}
                                    </div>
                                    <div style={{marginTop:'10px'}}>
                                    {`${today.getFullYear()} - ${today.getMonth()+1} - ${today.getDate()}`}
                                    <img src={userPhoto[0] && userPhoto[0].thumbnailUrl} alt="" width='14'style={{borderRadius:'50%', margin:'0px 4px 0px 3px'}}/>{user && user.name}
                                    </div>
                                </div>
                            </div>
                            <hr style={{width:'90%'}}/>
                            </li>
                    </>
                     }))}
                </ul>
                <span style={{marginLeft:'10px'}}>See more publications</span>
                
            </div>
            </div>
            
        </div>
    )
}

export default LatestPublications
