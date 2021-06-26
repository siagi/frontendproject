import React, { useState, MouseEvent } from 'react'
import { EditButton } from '../../styledHelpers/Components';
import edit from '../../assets/icons/edit.svg'

function ProfileMiddlePart() {
    // mouse events

    //states
    let id = 0;
    const [expertise, setExpertise] = useState([{id:id, text:'Dependability'}]);
    const [specialties, setSpecialties] = useState([{id:id, text:'Computer programming'},{id:id+1, text:'Machine'}]);
    const [admission, setAdmission] = useState([{id:id, text:'Croatia Bar Association'},{id:id+1, text:'Austria Bar Association'},{id:id+2, text:'Israel Bar Association'}]);
    const [counties, setCounties] = useState([{id:id, text:'United States'}]);
    const [isEditable, setIsEditable] = useState(true);

    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>,stateType:string) => {
        switch (stateType) {
            case 'expertise':
                //@ts-ignore
                setExpertise([...expertise,{id:expertise.length, text:`${event && event.target.value}`}])
                break;
            case 'specialties':
                //@ts-ignore
                setSpecialties([...specialties,{id:specialties.length, text:`${event && event.target.value}`}])
                break;
            case 'admission':
                //@ts-ignore
                setAdmission([...admission,{id:admission.length, text:`${event && event.target.value}`}])
                break;
            case 'counties':
                //@ts-ignore
                setCounties([...counties,{id:counties.length, text:`${event && event.target.value}`}])
                break;
        
            default:
                break;
        }
    }

    const deleteButon = (item:any, stateType:string) => {

        switch (stateType) {
            case 'expertise':
                const newExpertise = expertise.filter(exp => exp.id !== item.id)
                setExpertise(newExpertise);
                break;
            case 'specialties':
                const newSpecialties = specialties.filter(exp => exp.id !== item.id)
                setSpecialties(newSpecialties);
                break;
            case 'admission':
                const newAdmission = admission.filter(exp => exp.id !== item.id)
                setAdmission(newAdmission);
                break;
            case 'counties':
                const newCounties = counties.filter(exp => exp.id !== item.id)
                setCounties(newCounties);
                break;
        
            default:
                break;
        }
    
    }

    const changeToEditable =()=>{
        setIsEditable(!isEditable);
    }


    const options:any[] = [   { value: 'chocolate', label: 'Chocolate' },   { value: 'strawberry', label: 'Strawberry' },   { value: 'vanilla', label: 'Vanilla' } ];

    return (
        <div style={{display:'flex', flexWrap:'wrap', width:'850px', flexDirection:'row'}}>
            <div>
                <div>
                    <div>
                        Expertise
                    </div>
                    <select value={"Dependability"} onChange={(e) => handleChange(e ,'expertise')} disabled={isEditable} style={{display:isEditable ? 'none':'inline'}}>
                        <option value="Dependability">Dependability</option>
                        <option value="Adaptability">Adaptability</option>
                        <option value="Motivation">Motivation</option>
                        <option value="Problem-solving">Problem-solving</option>
                    </select>
                    <div>
                        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', maxWidth:'850px'}}>
                        {expertise.map((item) =>{
                            return <>
                            <div key={item.id} style={{backgroundColor:'#e6f0f3', color:'#82b6c4', margin:'10px', padding:'10px', borderRadius:'10px'}}>
                                {item.text}
                                <button onClick={() => deleteButon(item,'expertise')} disabled={isEditable} style={{display:isEditable ? 'none':'inline'}}>X</button>
                            </div>
                            </>
                        })}
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        Specialities
                    </div>
                    <select value={"Computer programming"} onChange={(e) => handleChange(e,'specialties')} disabled={isEditable} style={{display:isEditable ? 'none':'inline'}}>
                        <option value="Computer programming">Computer programming</option>
                        <option value="Machine">Machine</option>
                        <option value="Foreign language skills">Foreign language skills</option>
                        <option value="Business analyst">Business analyst</option>
                    </select>
                    <div>
                        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', maxWidth:'850px'}}>
                        {specialties.map((item) =>{
                            return <>
                            <div key={item.id} style={{backgroundColor:'#e6f0f3', color:'#82b6c4', margin:'10px', padding:'10px', borderRadius:'10px'}}>
                                {item.text}
                                <button onClick={() => deleteButon(item,'specialties')} disabled={isEditable} style={{display:isEditable ? 'none':'inline'}}>X</button>
                            </div>
                            </>
                        })}
                        </div>
                    </div>
                </div>           


                <div>
                    <div>
                        Admission to practise law
                    </div>
                    <select value={"Botswana Bar Association"} onChange={(e) => handleChange(e,'admission')} disabled={isEditable} style={{display:isEditable ? 'none':'inline'}}>
                        <option value="Botswana Bar Association">Botswana Bar Association</option>
                        <option value="Israel Bar Association"> Israel Bar Association</option>
                        <option value="Austria Bar Association">Austria Bar Association</option>
                        <option value="Croatia Bar Association">Croatia Bar Association</option>
                    </select>
                    <div>
                        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', maxWidth:'850px'}}>
                        {admission.map((item) =>{
                            return <>
                            <div key={item.id} style={{backgroundColor:'#e6f0f3', color:'#82b6c4', margin:'10px', padding:'10px', borderRadius:'10px'}}>
                                {item.text}
                                <button onClick={() => deleteButon(item,'admission')} disabled={isEditable} style={{display:isEditable ? 'none':'inline'}}>X</button>
                            </div>
                            </>
                        })}
                        </div>
                    </div>
                </div>


                <div>
                    <div>
                        Counties
                    </div>
                    <select value={"Jamaica"} onChange={(e) => handleChange(e,'counties')} disabled={isEditable} style={{display:isEditable ? 'none':'inline'}}>
                        <option value="Jamaica">Jamaica</option>
                        <option value="United States">United States</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                    </select>
                    <div>
                        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', maxWidth:'850px'}}>
                        {counties.map((item) =>{
                            return <>
                            <div key={item.id} style={{backgroundColor:'#e6f0f3', color:'#82b6c4', margin:'10px', padding:'10px', borderRadius:'10px'}}>
                                {item.text}
                                <button onClick={() => deleteButon(item,'counties')} disabled={isEditable} style={{display:isEditable ? 'none':'inline'}}>X</button>
                            </div>
                            </>
                        })}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginLeft:'auto'}}>
                <EditButton onClick={changeToEditable}><img src={edit} width='20'/></EditButton>
            </div>

        </div>
    )
}

export default ProfileMiddlePart
