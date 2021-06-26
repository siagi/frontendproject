import { ProfilePanelInformationsInput, ProfilePanelInformationsHeaders, ProfilePanelInformationsFills, InternalCorrespondants, EditButton } from '../../styledHelpers/Components';
import AmountOfFees from '../Table/AmountOfFees';
import InternalReviews from '../Table/InternalReviews';
import ProposalTable from '../Table/ProposalTable';
import edit from '../../assets/icons/edit.svg'
import {useState} from 'react'

function ProfileBottomPart() {
    
    const [isEditable, setIsEditable] = useState(true);
    const [termsAndConditions, setTermsAndConditions] = useState('Monthly 10K retainer - see with Jeanny Smith');
    const [hourlyFee, setHourlyFee] = useState('100');
    const [servicesAndProjects, setServicesAndProjects] = useState('Corporate M&A and international acquisitions')
    // const [isEditable, setIsEditable] = useState(true);

    return (
        <div>
            <hr/>
            <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{width:'100%'}}>
                    <div className='styledTableName'>Panel Informations</div>
                    <ProfilePanelInformationsHeaders>Hourly fee</ProfilePanelInformationsHeaders>
                    <ProfilePanelInformationsInput placeholder="100" type='text' style={{width:'30px'}} disabled={isEditable} value={hourlyFee} onChange={(e) => setHourlyFee(e.target.value)}></ProfilePanelInformationsInput><span>€/h</span>
                    <ProfilePanelInformationsHeaders>Terms and Conditions</ProfilePanelInformationsHeaders>
                    <ProfilePanelInformationsInput style={{width:'100%'}} disabled={isEditable} value={termsAndConditions} onChange={(e) => setTermsAndConditions(e.target.value)}></ProfilePanelInformationsInput>
                    <div><input type="file" id="myfile" name="myfile" style={{marginLeft:'20px'}}></input></div>
                    <div className='styledTableName'>Services and projects</div>
                    <ProfilePanelInformationsInput value={servicesAndProjects} style={{width:'100%'}} disabled={isEditable} onChange={(e) => setServicesAndProjects(e.target.value)}></ProfilePanelInformationsInput>
                    <div className='styledTableName'>Internal correspondants</div>
                    <InternalCorrespondants>
                        <div style={{display:'flex', flexDirection:'row', backgroundColor:'lightgray', borderRadius:'10px', padding:'10px', justifyContent:'space-between', alignItems:'center', paddingInline:'50px'}}>
                            <div>
                                <img src="https://www.byrdie.com/thmb/a6rK0tlBEsIV2R6XquQP-krhMH8=/1277x849/filters:no_upscale():max_bytes(150000):strip_icc()/kiera-knightley-long-bob-57bef22b3df78cc16ef95c5c.jpg" style={{width:"30px", borderRadius:'50%' }}/>
                            </div>
                            <div>Firstname Lastname</div>
                            <div>Message</div>
                            <div>Profile</div>
                        </div>
                    </InternalCorrespondants>
                    <InternalCorrespondants>
                        <div style={{display:'flex', flexDirection:'row', backgroundColor:'lightgray', borderRadius:'10px', padding:'10px', justifyContent:'space-between', alignItems:'center', paddingInline:'50px'}}>
                            <div>
                                <img src="https://i.pinimg.com/originals/5c/7e/50/5c7e50faf41413aae6a0b10c70459781.jpg" style={{width:"30px", borderRadius:'50%' }}/>
                            </div>
                            <div>Firstname Lastname</div>
                            <div>Message</div>
                            <div>Profile</div>
                        </div>
                    </InternalCorrespondants>
                    <InternalCorrespondants>
                        <div style={{display:'flex', flexDirection:'row', backgroundColor:'lightgray', borderRadius:'10px', padding:'10px', justifyContent:'space-between', alignItems:'center', paddingInline:'50px'}}>
                        <div>
                            <img src="https://i.dailymail.co.uk/i/pix/2015/12/03/15/2F04A85D00000578-3344640-image-a-74_1449158356525.jpg" style={{width:"30px", borderRadius:'50%' }}/>
                        </div>
                        <div>Firstname Lastname</div>
                        <div>Message</div>
                        <div>Profile</div>
                        </div>
                    </InternalCorrespondants>
                    <hr/>
                    <div className='styledTableName'>Proposals</div>
                    <ProposalTable></ProposalTable>
                    <div className='styledTableName'>Internal reviews</div>
                    <InternalReviews></InternalReviews>
                    <div className='styledTableName'>Amount of fees</div>
                    <AmountOfFees></AmountOfFees>
                </div>
                <div>
                    <EditButton  onClick={()=>setIsEditable(!isEditable)}><img src={edit} width='20'/></EditButton >
                </div>
            </div>
            
        </div>
    )
}

export default ProfileBottomPart
