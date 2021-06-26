import React from 'react';
import {Bar, Cirlce, IconsOnTheRigthInTopBar} from '../../styledHelpers/Components'
import navyHouse from '../../assets/icons/house2.svg'
import grayHouse from '../../assets/icons/house.svg'
import search from '../../assets/icons/search.svg'
import {SearchFieldStyle} from '../../styledHelpers/Components'
import {WrapperForSearchField} from '../../styledHelpers/Components'
import comments from '../../assets/icons/comments.svg'
import bell from '../../assets/icons/bell.svg'
import {IconsInTopBar} from '../../styledHelpers/Components'
import {useEffect} from 'react'
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { Link } from 'react-router-dom';

function TopBar() {

//    useEffect(() => {
//        console.log('use effect');
//    })

    return (
        <div>
            <Bar>
                <DropdownMenu/>
                <WrapperForSearchField>
                    <SearchFieldStyle type="search" placeholder="Search Legalcluster"></SearchFieldStyle>
                    <IconsInTopBar src={search} alt='search icon' style={{zIndex:100}}/>
                </WrapperForSearchField>
                <IconsOnTheRigthInTopBar>
                    <div>
                        <Link to="/"><img src={grayHouse} alt='home logo'/></Link>
                    </div>
                    <div>
                        <Cirlce>8</Cirlce>
                        <img src={bell} alt='bell icon' />
                    </div>
                    <div>
                        <Cirlce>2</Cirlce>
                        <img src={comments} alt='comments icon'/>
                    </div>
                </IconsOnTheRigthInTopBar>
            </Bar>
        </div>
    )
}


export default TopBar
