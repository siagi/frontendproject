import React from 'react'
import {ProfilePanelInformationsHeaders, WorkspacesHeaderImage} from '../../styledHelpers/Components'
import entities2 from '../../assets/icons/entities2.svg'

function WorkspacesHeader() {
    return (
        <div style={{width:'850px', margin:'0 auto'}}>
            <div>
                <WorkspacesHeaderImage src="https://media-exp3.licdn.com/dms/image/C561BAQF7s3AaIV7sEg/company-background_10000/0/1576837473506?e=2159024400&v=beta&t=AGuP4D2cpRr2FUxG1Ze2g9OqF0qj8F6-BKyG38j3Sws"/>
                <div style={{display:'flex', marginLeft:'10px'}}>
                    <div>
                        <img src={entities2} width='50px'/>
                    </div>
                    <div>
                        <ProfilePanelInformationsHeaders>
                            Corporate holdings
                        </ProfilePanelInformationsHeaders>
                        <div style={{ paddingInlineEnd:'50px',marginTop:'10px', marginLeft:'10px'}}>
                            Workspace purpose a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkspacesHeader
