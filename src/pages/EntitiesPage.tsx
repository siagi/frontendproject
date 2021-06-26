import React from 'react'
import Entities from '../components/Entities/Entities';
import LeftMenu from '../components/LeftMenu/LeftMenu';
import { Content } from '../styledHelpers/Components';



function EntitiesPage() {
    return (
        <div >
            <div className="Main-Page-Grid">
                <div>
                    <Content>
                        <LeftMenu/>
                    </Content>
                </div>
                    <Entities/>
                <div>
                
                </div>
            </div>
        </div>
    )
}

export default EntitiesPage
