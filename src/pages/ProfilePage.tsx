import React from 'react'
import LeftMenu from '../components/LeftMenu/LeftMenu'
import ProfileBottomPart from '../components/Profile/ProfileBottomPart'
import ProfileMiddlePart from '../components/Profile/ProfileMiddlePart'
import ProfileTopPart from '../components/Profile/ProfileTopPart'
import { Content } from '../styledHelpers/Components'

function ProfilePage() {
    return (
        <div >
            <div className="Main-Page-Grid">
                <div>
                    <Content>
                        <LeftMenu/>
                    </Content>
                </div>
                <div>
                <ProfileTopPart/>
                <ProfileMiddlePart/>
                <ProfileBottomPart/>
             </div>
            </div>
        </div>
    )
}

export default ProfilePage
