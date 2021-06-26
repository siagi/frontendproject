import React from 'react';

import styled from 'styled-components';
import TopBar from '../TopBar/TopBar'
import LeftMenu from '../LeftMenu/LeftMenu'
import {Content} from '../../styledHelpers/Components'
import LatestPublications from '../LatestPublications/LatestPublications';
import ResumeYourWork from '../ResumeYourWork/ResumeYourWork';
import WorkspacesCarousel from '../Workspaces/WorkspacesCarousel';


function MainPage() {
    
    return (
        <div >
            <div className="Main-Page-Grid">
                <div>
                    <Content>
                        <LeftMenu/>
                    </Content>
                </div>
                <div>
                 <LatestPublications/>
                    <WorkspacesCarousel/>
                    <ResumeYourWork title="Resume your work"/>
             </div>
            </div>
        </div>
    )

}

export default MainPage
