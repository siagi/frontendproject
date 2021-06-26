import React from 'react'
import { ProfilePanelInformationsHeaders, WorkingOnCorporateSubheader, WorkspacesCorporateMattersWrapper, WorkspacesHeaders } from '../../styledHelpers/Components'
import house from '../../assets/icons/house.svg'
import ecosystem from '../../assets/icons/ecosystem.svg'
import entities2 from '../../assets/icons/entities2.svg'

function WorkspacesCorporateMatters() {
    return (
        <div style={{width:'850px', margin:'0 auto'}}>
            <WorkspacesCorporateMattersWrapper>
                <div >
                    <WorkspacesHeaders>Start working on corporate matters</WorkspacesHeaders>
                        <div style={{display:'flex'}}>
                            <WorkingOnCorporateSubheader>
                                <div><img src={house} width='40px'/></div>
                                <div>Explore your entites</div>
                                <div>Tak a few minutes to look at the most important elements and specifities of your entities.</div>
                            </WorkingOnCorporateSubheader>
                            <WorkingOnCorporateSubheader>
                                <div><img src={ecosystem} width='40px'/></div>
                                <div>Explore your entites</div>
                                <div>Tak a few minutes to look at the most important elements and specifities of your entities.</div>
                            </WorkingOnCorporateSubheader>
                            <WorkingOnCorporateSubheader>
                                <div><img src={entities2} width='40px'/></div>
                                <div>Explore your entites</div>
                                <div>Tak a few minutes to look at the most important elements and specifities of your entities.</div>
                            </WorkingOnCorporateSubheader>

                        </div>
                </div>
            </WorkspacesCorporateMattersWrapper>
        </div>
    )
}

export default WorkspacesCorporateMatters
