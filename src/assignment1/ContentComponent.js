import React from 'react';
import connect from "react-redux/es/connect/connect";
import SearchDirectoryComponent from "./SearchDirectoryComponent";


const ContentComponent = (props) =>{

    const {selectedMenu} = props;

    if(selectedMenu == 'Directory')
    {
        return <SearchDirectoryComponent/>
    }
    else{
        return false
    }
};
const mapStateToProps = state => {
    return {
        selectedMenu: state.appReducer.selectedMenu
    }
};
const connectTheComponent = connect(
    mapStateToProps
)(ContentComponent);


export default connectTheComponent;