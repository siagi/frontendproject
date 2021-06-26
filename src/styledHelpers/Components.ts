import styled,{css} from 'styled-components';


export const Wrapper = styled.div`
    background: grey;
    display: flex;
    justify-content: center;
    padding: 5px;
`;

export const Bar = styled.div`
    width:100%;
    background-color: #fff;
    height: 40px;
    display: flex;
    flex-direction: row;
    box-shadow: 0px 5px 15px #c6cbd2 ;

`;

export const SearchFieldStyle = styled.input`

    border: 0px;
    height: 28px;
    width: 100%;

    &:focus{
        outline: none;
    }

    &::-webkit-search-cancel-button{
        display:none
    }

`;

export const FilterFieldStyle = styled.input`

    border: 0px;
    height: 20px;
    width: 100%;

    &:focus{
        outline: none;
    }

    &::-webkit-search-cancel-button{
        display:none
    }

`;

export const IconsOnTheRigthInTopBar = styled.div`
    display:flex;
    flex-direction: row;
    margin-left: auto;
    align-items: center;

    &>div{
        margin-right:5px;
        margin-inline: 10px;
    }

    &>img{
        margin-right:5px;
        margin-inline: 10px;
    }

`

export const WrapperForSearchField = styled.div`
    border: 1px solid #e8e8e8;
    height: 30px;
    background-color: white;
    width:50rem;
    text-align: left;
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin:0 auto;

`

export const WrapperForFilterField = styled.div`
    border: 1px solid #e8e8e8;
    height: 20px;
    background-color: white;
    width:200px;
    text-align: left;
    display: flex;
    align-items: center;
    border-radius: 5px;

`

export const IconsInTopBar = styled.img`
    height: 20px;

`
export const SearchIconInFilterInput = styled.img`
    height: 16px;

`

export const Content = styled.div`
    margin-top: 10px;
    color:blue;
    max-width: 100%;
    display: flex;
    justify-content: left;

`;

export const MainPageLeftSideUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    text-align: center;
    width: 250px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    background-color: #ffffff;
    color:black;
    line-height: 30px;
    justify-content:space-between;
`
export const DropdownMenuWrapper = styled.div`
    z-index: 1000;
    background-color: #ffffff;
    border-radius: 5px;
    padding:10px;
    border-radius: 10px;
    width: 177px;
`
export const DropDownMenuOpenButton = styled.button`
    width: 180px;
    margin:10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0px;
    background-color: #fff;

    &>div{
        margin-right: 10px;
    }
`
export const TitlesInDropdownMenu = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
    color: #808080;

`
export const UlInDropdownMenu = styled.div`

    &>ul{

    }

    &>ul>li{
        padding-bottom: 4px;
        padding-top: 4px;
    }
    &>ul>li:hover{
        color:#808080;
        cursor: pointer;
    }

    &>ul>li:active{
        color:#274294;
    }

`

export const SmallProfileIcon = styled.img`
    width:22px;
    border-radius: 50%;
    margin-right:5px;
`

export const DropdownMenuIcons = styled.img`

    width: 14px;
    margin-right: 11px;

`

export const IconSize75 = styled.img`

    width:75px;
    border-radius: 50%;

`
export const ProfilePanelInformationsHeaders = styled.div`
    font-size: 14px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
`

export const WorkspacesHeaders = styled.div`
    font-size: 14px;
    padding-top: 10px;
    margin-bottom: 5px;
    margin-left: 10px;
`


export const ProfilePanelInformationsInput = styled.input`
    color:#565e78;
    font-size: 14px;
    border: 1px solid #767676;
    background-color: white;
    color:black;
    text-align: left;
    margin-right: 3px;
    border-radius: 5px;
    margin-top:5px;
    margin-bottom: 5px;
    letter-spacing: 0.75pt;
    margin-left: 20px;

    &:disabled{
        border: 0;
        background-color: transparent;
    }
    
`
export const ProfilePanelInformationsFills = styled.div`
    color:#3b4463;
    font-size: 12px;
`
export const InternalCorrespondants = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

`

export const WorkspacesHeaderImage = styled.img`
border-radius: 10px;
margin-bottom: 10px;
    width:850px;
`
export const WorkspacesCorporateMattersWrapper = styled.div`

    background-color: #f3f3f3;
    width: 850px;
    &>div>div{
        margin:10px;
    }

`

export const WorkingOnCorporateSubheader = styled.div`

    background-color: #fff;
    margin:5px;
    &>div{
        margin:5px;
        padding:5px
    }

`

export const customSelect = styled.select`
    border: 0;
    background-color: transparent;

`
export const StyledEntities = styled.div `

    width:850px;
    display: flex;
    flex-direction:${props => props.slot};
    flex-wrap: wrap;
    margin-top: 5px;


`



export const StyledEntitiesItem = styled.div`
    display: flex !important;
    width:${props => props.slot == 'column' ? '100%' :'270px'};
    flex-direction:'row';
    background-color: white;
    margin: 5px;
    border-radius: 10px;

    &>div{
        padding:10px;
    }

`

export const Cirlce = styled.div `
    position: absolute;
    font-size: 10px;
    background-color: #0060df;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    color:white;
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: center;
    top:2px;
    margin-left:10px;
    border:2px white solid;
    
`
export const EditButton = styled.button`

    border:0px solid #d3d3d3 ;
    width:40px;
    background-color: transparent;
    border-radius: 5px;;

    &:hover{
        background-color: #d3d3d3;
    }

`