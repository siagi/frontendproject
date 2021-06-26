import { useRef, useEffect } from 'react'
import { store } from '../../state';
import people from '../../assets/icons/people.svg'

// const carousel = document.querySelector("[data-target='carousel']")
// //@ts-ignore
// const card = carousel.querySelector("[data-target='card']");
// const leftButton = document.querySelector("[data-action='slideLeft']");
// const rightButton = document.querySelector("[data-action='slideRight']");


function WorkspacesCarousel() {

    const photos = store.getState().photos;
    const users = store.getState().users;
    const workspaces = users.map( (user,index)=>{
        return {company:user.company.name, name:user.company.catchPhrase, users:Math.floor(Math.random()*(120-1))+1, image:photos.filter(image=>image.albumId == user.id)[0] && photos.filter(image=>image.albumId == user.id)[index].url, thumbnail:photos.filter(image=>image.albumId == user.id)[0] && photos.filter(image=>image.albumId == user.id)[index+1].thumbnailUrl}
    })

    console.log('workspaces',workspaces);

    const carousel:any= useRef(null);
    const card:any = useRef(null);
    const slideLeft:any= useRef(null);
    const slideRight:any = useRef(null);
    
    let carouselWidth:number = 0;
    let cardStyle:any;
    let cardMarginRight:any; 
    let cardCount:any;
    let offset:number = 0;
    let maxX = 0;
    
    useEffect(() => {
        carouselWidth = 847
        console.log(carouselWidth)
        //@ts-ignore
        // cardStyle = window.getComputedStyle(card.current as Element)
        cardMarginRight = 16// regular expresion
        cardCount = workspaces.length
        console.log(cardCount)
        maxX = -1296

        slideLeft.current.addEventListener('click', () => {
            if(offset !== 0) {
                offset += carouselWidth + cardMarginRight;
                carousel.current.style.transform = `translateX(${offset}px)`;
            }
        })

        slideRight.current.addEventListener('click', () => {
            if(offset >= maxX) {
                offset -= carouselWidth + cardMarginRight;
                carousel.current.style.transform = `translateX(${offset}px)`;
            }
        })

    },[])


    
    // const cardStyle = card.current.style.marginRight;
    
    return (
        <div onDrag={()=>console.log('adasd')} draggable="true" style={{ marginBottom:'10px'}}>
            <div className="wrapper">
                <ul className="carousel" ref={carousel}>
                   {workspaces && workspaces.map((item =>{
                       return <li className="card" ref={card} key={item.name}>
                            <img src={item.thumbnail} width="60px" style={{borderRadius:'5px' ,position:'absolute', border:'1px solid black', margin:'60px 0 0 20px'}}></img>
                            <img src={item.image} width="200px" height="100px" style={{borderTopRightRadius:'5px', borderTopLeftRadius:'5px'}}/>
                            <div style={{marginTop:'22px', textAlign:'left', marginLeft:'10px'}}>
                                {item.company}
                            </div>
                            <div style={{fontSize:'10px', margin:"10px", textAlign:'left'}}>
                                {item.name}
                            </div>
                            <div style={{textAlign:'left', marginLeft:'10px'}}>
                                <span>Corporate | <img src={people}/> {item.users}</span>
                            </div>
                        </li>
                   }))}
                </ul>
                <div className="button-wrapper">
                    <button ref={slideRight}>L</button>
                    <button ref={slideLeft}>R</button>
                </div>

            </div>


        </div>
    )
}

export default WorkspacesCarousel
