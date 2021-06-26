import React from 'react'
import LeftMenu from '../components/LeftMenu/LeftMenu'
import ResumeYourWork from '../components/ResumeYourWork/ResumeYourWork'
import WorkspacesCorporateMatters from '../components/Workspaces/WorkspacesCorporateMatters'
import WorkspacesHeader from '../components/Workspaces/WorkspacesHeader'

function Workspaces() {
    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', marginTop:'10px'}}>
            <div>
                <LeftMenu/>
            </div>
            <div >
                <WorkspacesHeader/>
                <WorkspacesCorporateMatters/>
                <ResumeYourWork title='Latest updates'/>
            </div>
        </div>
    )
}

export default Workspaces
