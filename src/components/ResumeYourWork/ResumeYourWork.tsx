
import { store } from '../../state';
import { User, Post, Album, Photo, Comment } from "../../App"
import entities2 from '../../assets/icons/entities2.svg'
import { useEffect, useState } from 'react';
import { FilterFieldStyle, IconsInTopBar, SearchFieldStyle, SearchIconInFilterInput, WrapperForFilterField, WrapperForSearchField } from '../../styledHelpers/Components';
import search from '../../assets/icons/search.svg'
import arrowLeft from '../../assets/icons/arrowback.svg'
import arrowRight from '../../assets/icons/arrowforward.svg'
import SelectResumeYourWork from '../Select/SelectResumeYourWork';

// export interface CommentWithDate extends Comment{
//     date:Date
// }

function ResumeYourWork(prop:{title:string}) {

    const users = store.getState().users;
    const comments:Comment[] = store.getState().comments;
    const userComments = comments.filter(comment => comment.postId == 1);
    const albums = store.getState().albums;
    const photos = store.getState().photos;
    const userPhotos = photos.filter((item=> item.albumId == 1 ))
    const today = new Date();
    const paginationPagesArray:number[] = [];
    const commentsPerPage = 5;

    //useEffect
        useEffect(() => {
            setScopedComments(comments)
        }, [comments])
    //useState
    const [scopedComments, setScopedComments] = useState(comments)
    const [pageNumber, setPageNumber] = useState(0);
    const [selectedItemResumeYourWork, setSelectedItemResumeYourWork] = useState('Followed');

    const paginationNumbers = comments.length/5;
    const pagination = (from:number, to:number):Comment[] =>{

        return scopedComments.slice(from,to);
    }

    const sampleFunction = () => {
            for(let i = 0; i < paginationNumbers; i++){
                paginationPagesArray.push(i);
            }
    }
    sampleFunction();
    const movePaginationLeft = () =>{

        if(pageNumber > 0){
        setPageNumber(pageNumber - 1);
        }
    }

    const movePaginationRight = () =>{

        if(pageNumber < paginationNumbers-1){
        setPageNumber(pageNumber + 1);
        }

    }

    const setTheValue = (index:number) => {
        setPageNumber(index);
        

    }

    const selectedPageDiv = (item:number) => {
        return <>
            <div style={{padding:'10px', border:'1px solid #d3d3d3', backgroundColor:'#d3d3d3'}}>{item}</div>
        </>
    }

    const restPageDiv = (item:number) => {
        return <>
            <div style={{padding:'10px', border:'1px solid #d3d3d3'}}>{item}</div>
        </>
    }

    const buildSampleHtml = (item:number, index:number) =>{
        return <>
            {pageNumber == index ? selectedPageDiv(item) : restPageDiv(item)}
        </>
    }

    const testProps = (data:any) => {
        if(data == 'My'){
            setSelectedItemResumeYourWork('My')
            setScopedComments(scopedComments.filter(item=> item.postId == 1 ))
        }else{
            setScopedComments([...comments])
            setSelectedItemResumeYourWork('Follow')

        }
    }

    const ResumeYourWorkFiltering=(e:any)=>{
        if(selectedItemResumeYourWork == 'Follow'){
            setScopedComments(comments.filter(item => item.name.includes(e.target.value)))
        }else{
            // setScopedComments(comments.filter(comment => comment.postId =1))
            setScopedComments(comments.filter(item => item.name.includes(e.target.value) && item.postId == 1))
        }
    }
    


    return (
        <div style={{marginBottom:'10px', display:'flex', justifyContent:'center'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div>{prop.title}</div>
                        <div style={{display:'flex'}}>
                            <WrapperForFilterField>
                                <FilterFieldStyle type="search" placeholder="Filter by title..." onChange={(e) => ResumeYourWorkFiltering(e)}></FilterFieldStyle>
                                <SearchIconInFilterInput src={search} alt='search icon' style={{zIndex:100}}/>
                            </WrapperForFilterField>
                            <SelectResumeYourWork func={testProps}/>
                        </div>
                    </div>
                <div>
                {comments && pagination(pageNumber*commentsPerPage, pageNumber*commentsPerPage + commentsPerPage).map((item=>{

                        return <>
                            <div key={item.id} style={{margin:'10px 0px 10px 0px',padding:'10px', backgroundColor:'white', borderRadius:'5px', color:'grey', width:'830px'}}>
                                <h4 style={{fontWeight:'bolder', marginBottom:'10px'}}>{item.name}</h4>
                                <h6>{item.body}</h6>
                            <div style={{marginTop:'10px', display:'flex', alignItems:'center'}}>
                                <img src={userPhotos[0] && userPhotos[0].thumbnailUrl} alt="corporate photo" width='14px' style={{marginInline:'5px', borderRadius:'50%'}} />Subsid. corp. - <img src={entities2} width='14px' style={{marginInline:'5px'}}/> Corporation - Last update:{`${today.getFullYear()} - ${today.getMonth()+1} - ${today.getDate()}`}
                            </div>
                            </div>

                        </>

                }))}
                <div style={{display:'flex'}}>
                <button onClick={movePaginationLeft}  style={{border:'1px solid #d3d3d3'}}><img src={arrowLeft}/></button>
                <div style={{display:'flex', flexDirection:'row'}}>
                    {paginationPagesArray.map((item,index)=>{
                        return <>
                            <div onClick={() => setTheValue(index)}>
                                {index > pageNumber - 5 && index < pageNumber + 5 && buildSampleHtml(item, index)}
                            </div>
                        </>
                    })}
                </div>
                <button onClick={movePaginationRight} style={{border:'1px solid #d3d3d3'}}><img src={arrowRight}/></button>
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default ResumeYourWork
