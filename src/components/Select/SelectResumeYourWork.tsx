import React, { useEffect, useState } from 'react'
import fallow from '../../assets/icons/fallow.png'
//nie moge uzyc select z style components
function SelectResumeYourWork(props:any) {

    const [selectedItemResumeYourWork, setSelectedItemResumeYourWork] = useState('Followed');

    useEffect(()=>{
    
        props.func(selectedItemResumeYourWork);
        console.log('props func')

    },[selectedItemResumeYourWork])

    return (
        <div style={{display:'flex'}}>
            <div><img src={fallow}/></div>
            <select onChange={(e) => setSelectedItemResumeYourWork(e.target.value)} className='selectFilterOption'>
                <option>Followed</option>
                <option>My</option>
            </select>
        </div>
    )
}

export default SelectResumeYourWork
